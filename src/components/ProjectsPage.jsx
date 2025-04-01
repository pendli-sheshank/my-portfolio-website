// src/components/ProjectsPage.js
import React from "react";
import ProjectCard from "./ProjectCard"; // Import the card component
import "../styles/ProjectsPage.css"; // We'll update this CSS file

// --- !!! REPLACE THIS WITH YOUR ACTUAL PROJECT DATA !!! ---
const myProjectsData = [
  // ... Your project objects from the previous step ...
  {
    title: "Your Project 1 Title",
    description: "Your description for project 1...",
    techStack: ["Tech A", "Tech B", "Tech C"],
    repoUrl: "Your GitHub URL or null",
    liveUrl: "Your Live Demo URL or null",
    imageUrl: null,
  },
  {
    title: "Your Project 2 Title",
    description: "Your description for project 1...",
    techStack: ["Tech A", "Tech B", "Tech C"],
    repoUrl: "Your GitHub URL or null",
    liveUrl: "Your Live Demo URL or null",
    imageUrl: null,
  },
  {
    title: "Your Project 3 Title",
    description: "Your description for project 1...",
    techStack: ["Tech A", "Tech B", "Tech C"],
    repoUrl: "Your GitHub URL or null",
    liveUrl: "Your Live Demo URL or null",
    imageUrl: null,
  },
  {
    title: "Your Project 3 Title",
    description: "Your description for project 1...",
    techStack: ["Tech A", "Tech B", "Tech C"],
    repoUrl: "Your GitHub URL or null",
    liveUrl: "Your Live Demo URL or null",
    imageUrl: null,
  },
  {
    title: "Your Project 3 Title",
    description: "Your description for project 1...",
    techStack: ["Tech A", "Tech B", "Tech C"],
    repoUrl: "Your GitHub URL or null",
    liveUrl: "Your Live Demo URL or null",
    imageUrl: null,
  },
  // ... more projects
];
// --- !!! END OF PROJECT DATA !!! ---

// --- !!! REPLACE THIS WITH YOUR ACTUAL CERTIFICATION DATA !!! ---
// --- Paste this array into your src/components/ProjectsPage.js ---
// --- replacing any previous version ---
// --- Data extracted from the provided image ---

const myCertificationsData = [
  {
    name: "Build Your Own Static Website",
    issuer: "NxtWave",
    date: "Issued May 2022",
    // URL not visible in image, replace null if you have the link from "Show credential"
    url: null,
    // Note: Skills listed (Front-End Development, HTML) omitted from this structure
  },
  {
    name: "Developer Foundations",
    issuer: "NxtWave",
    date: "Issued May 2022",
    // URL not visible in image, replace null if you have the link from "Show credential"
    url: null,
  },
  {
    name: "Introduction to Databases",
    issuer: "NxtWave",
    date: "Issued May 2022",
    // URL not visible in image, replace null if you have the link from "Show credential"
    url: null,
  },
  {
    name: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: "Issued May 2022",
    // URL not visible in image, replace null if you have the link from "Show credential"
    url: null,
  },
  {
    name: "Bootcamp of 4.0 Technologies",
    issuer: "NxtWave",
    date: "Issued Jul 2021",
    // URL not visible in image, replace null if you have the link from "Show credential"
    url: null,
  },
];
// --- End of certification data ---
// --- !!! END OF SAMPLE CERTIFICATION DATA !!! ---

const ProjectsPage = () => {
  const projectsData = myProjectsData;
  const certificationsData = myCertificationsData; // Use your actual data

  return (
    <section id="projects" className="projectsSection">
      {/* Projects Section Title and Grid remain the same */}
      <h2>My Projects</h2>
      <p className="projectsIntro">
        Here are some of the projects I've worked on, showcasing my skills in
        action. Feel free to explore the code or live demos where available.
      </p>
      <div className="projectsGrid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title || index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>

      {/* --- New Certifications Subsection --- */}
      {certificationsData.length > 0 && ( // Only show if there are certifications
        <div className="certificationsContainer">
          <h3 className="certificationsHeading">Licenses & Certifications</h3>
          <ul className="certificationsList">
            {certificationsData.map((cert, index) => (
              <li key={cert.name || index} className="certificationItem">
                {/* Optional: Add logo image here if you have imageUrl */}
                {/* {cert.imageUrl && <img src={cert.imageUrl} alt={`${cert.issuer} logo`} className="certIssuerLogo" />} */}
                <div className="certificationDetails">
                  <span className="certificationName">{cert.name}</span>
                  <span className="certificationIssuer">
                    Issued by: {cert.issuer}
                  </span>
                  {cert.date && (
                    <span className="certificationDate">{cert.date}</span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificationLink"
                    >
                      Show Credential
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* --- End of Certifications Subsection --- */}
    </section>
  );
};

export default ProjectsPage;
