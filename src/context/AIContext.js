import React, { createContext, useState, useCallback } from "react";

export const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [visitedTags, setVisitedTags] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Track user interest in tags
  const trackInterest = useCallback((tags) => {
    setVisitedTags((prev) => {
      const newTags = { ...prev };
      tags.forEach((tag) => {
        newTags[tag] = (newTags[tag] || 0) + 1;
      });
      return newTags;
    });
  }, []);

  // Generate recommendations based on visited tags
  const generateRecommendations = useCallback((allProjects) => {
    if (Object.keys(visitedTags).length === 0) {
        setRecommendations([]);
        return;
    }

    // Sort tags by frequency
    const sortedTags = Object.entries(visitedTags)
      .sort(([, a], [, b]) => b - a)
      .map(([tag]) => tag);

    // Score projects
    const scoredProjects = allProjects.map(project => {
        let score = 0;
        project.techStack.forEach(tech => {
            if (sortedTags.includes(tech)) {
                score += visitedTags[tech];
            }
        });
        return { ...project, score };
    });

    // Return top 2 with score > 0
    const recs = scoredProjects
        .filter(p => p.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 2);

    setRecommendations(recs);
  }, [visitedTags]);

  return (
    <AIContext.Provider
      value={{
        visitedTags,
        trackInterest,
        recommendations,
        setRecommendations,
        generateRecommendations,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AIContext.Provider>
  );
};
