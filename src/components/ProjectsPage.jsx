// src/components/ProjectsPage.jsx
import React, { useContext, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { AIContext } from "../context/AIContext";

export const myProjectsData = [
  {
    title: "Policy Management Microservices",
    period: "2023",
    description:
      "Spring Boot microservices with secure REST APIs (JWT/OAuth2) and event streaming on Kafka; deployed on AWS using Docker & Kubernetes (Helm). Improved API latency by ~40% and enabled horizontal scaling.",
    techStack: [
      "Java 8+",
      "Spring Boot",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    highlights: [
      "Defined clear service boundaries and API contracts.",
      "Kafka producers/consumers for policy & claims events.",
      "CI/CD via Jenkins & GitHub Actions.",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "CI/CD Test Automation Pipeline",
    period: "2022",
    description:
      "Unified Cypress (UI) + Katalon (regression) into GitHub Actions/Jenkins with parallel runs, artifacts, and notifications. Coverage ↑30–35%, execution time ↓~25%.",
    techStack: [
      "Cypress",
      "Katalon Studio",
      "Jenkins",
      "Docker",
      "Node.js",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Angular 18 Admin Portal",
    period: "2021–2023",
    description:
      "Admin portal using Angular 18, Reactive Forms, and role-based access. Integrated with secure Spring Boot APIs; improved UX with lazy loading and on-push change detection.",
    techStack: [
      "Angular 18",
      "TypeScript",
      "RxJS",
      "Bootstrap",
    ],
    links: { demo: "#", code: "#" },
  },
];

const myCertificationsData = [
  {
    name: "Build Your Own Static Website",
    issuer: "NxtWave",
    date: "May 2022",
    url: "https://certificates.ccbp.in/intensive/static-website?id=WLGMNPVLMT",
  },
  {
    name: "Developer Foundations",
    issuer: "NxtWave",
    date: "May 2022",
    url: "https://certificates.ccbp.in/intensive/developer-foundations?id=GSRHYZJCOZ",
  },
  {
    name: "Introduction to Databases",
    issuer: "NxtWave",
    date: "May 2022",
    url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=HFWKBQOYOQ",
  },
  {
    name: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: "May 2022",
    url: "https://certificates.ccbp.in/intensive/programming-foundations?id=JVKUENANGN",
  },
];

const ProjectsPage = () => {
  const { recommendations, generateRecommendations, visitedTags } = useContext(AIContext);

  useEffect(() => {
    // Regenerate recommendations whenever visitedTags change
    generateRecommendations(myProjectsData);
  }, [visitedTags, generateRecommendations]);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Software Engineering Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Showcasing full-stack solutions, scalable systems, and robust architectures.
          </p>
        </div>

        {/* Recommended Projects Section */}
        {recommendations.length > 0 && (
            <div className="mb-12 bg-blue-50/50 p-8 rounded-2xl border border-blue-100 animate-fade-in">
                 <div className="flex items-center mb-6">
                    <span className="bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mr-2">
                        AI Recommended
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                        Because you're interested in {Object.keys(visitedTags).sort((a,b) => visitedTags[b] - visitedTags[a])[0]}...
                    </h3>
                 </div>
                 <div className="grid gap-8 md:grid-cols-2">
                    {recommendations.map((project, index) => (
                        <ProjectCard
                        key={`rec-${index}`}
                        title={project.title}
                        period={project.period}
                        description={project.description}
                        techStack={project.techStack}
                        repoUrl={project.links.code === "#" ? null : project.links.code}
                        liveUrl={project.links.demo === "#" ? null : project.links.demo}
                        />
                    ))}
                 </div>
            </div>
        )}

        {/* All Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {myProjectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              techStack={project.techStack}
              repoUrl={project.links.code === "#" ? null : project.links.code}
              liveUrl={project.links.demo === "#" ? null : project.links.demo}
            />
          ))}
        </div>

        {/* Certifications Section */}
        {myCertificationsData.length > 0 && (
          <div className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Licenses & Certifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {myCertificationsData.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-800 mb-2 min-h-[48px] line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    {cert.date}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-primary hover:text-brand-dark"
                    >
                      Show Credential &rarr;
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
