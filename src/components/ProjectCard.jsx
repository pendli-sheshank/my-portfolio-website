// src/components/ProjectCard.jsx
import React, { useContext } from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { AIContext } from "../context/AIContext";

const ProjectCard = ({
  title,
  period,
  description,
  techStack = [],
  highlights = [],
  repoUrl,
  liveUrl,
  imageUrl, // Optional image
}) => {
  const { trackInterest } = useContext(AIContext);

  const handleInteraction = () => {
    trackInterest(techStack);
  };

  return (
    <div
        className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden hover:-translate-y-1"
        onMouseEnter={handleInteraction} // Track interest on hover for demo purposes
        onClick={handleInteraction} // Also track on click
        data-testid="project-card"
    >
      {/* Optional: Project Image Header */}
      <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-accent"></div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
            {title}
            </h3>
            <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">{period || '2023'}</span>
        </div>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-brand-primary bg-blue-50 rounded-md border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); handleInteraction(); }}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors"
            >
              <HiCode className="mr-1 h-5 w-5" /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); handleInteraction(); }}
              className="flex items-center text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors"
            >
              <HiExternalLink className="mr-1 h-5 w-5" /> Live Demo
            </a>
          )}
          {!repoUrl && !liveUrl && (
             <span className="text-sm text-gray-400 italic">Internal Project</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
