// src/components/ProjectCard.js
import React from "react";
import "../styles/ProjectCard.css"; // We'll create this CSS file

// Add icons if you like (install react-icons: npm install react-icons)
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  techStack = [],
  repoUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <div className="projectCard">
      {imageUrl && ( // Conditionally render image if URL is provided
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="projectImage"
        />
      )}
      <div className="projectInfo">
        <h3>{title}</h3>
        <p className="projectDescription">{description}</p>
        <div className="projectTechStack">
          <strong>Tech Stack:</strong>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="projectLinks">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLinkButton"
            >
              <FaGithub />
              GitHub Repo
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLinkButton"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
