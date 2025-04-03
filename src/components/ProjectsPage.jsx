import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsPage.css";

const myProjectsData = [
  {
    title: "BeRightHere.com (Workspace Platform)",
    description:
      "Front-end development for a digital platform offering workspace and meeting space solutions. Created user interfaces and integrated back-end APIs for seamless operations using React JS, Laravel, MySQL, and AWS.", // Summarized [cite: 23, 24, 25]
    techStack: [
      "React JS",
      "Laravel",
      "MySQL",
      "AWS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    repoUrl: null,
    liveUrl: null,
    imageUrl: null,
  },
  {
    title: "Nxt Trendz (E-commerce Clone)",
    description:
      "Clone of E-commerce platforms like Amazon/Flipkart. Implemented login, product lists with search/filters/sort, product details pages using React Router. Handled authentication/authorization using JWT, REST APIs, and local storage.", // Summarized [cite: 26, 27, 28]
    techStack: [
      "React JS",
      "JS",
      "CSS",
      "Bootstrap",
      "React Router",
      "REST API",
      "Local Storage",
      "JWT",
      "Authorization",
      "Authentication",
    ],
    repoUrl: null,
    liveUrl: "https://psrnxttrendz.ccbp.tech",
    imageUrl: null,
  },
  {
    title: "Typing Speed Test",
    description:
      "Application measuring time taken to type a given paragraph fetched via API. Implemented dynamic timer updates using JavaScript DOM operations and included form validations.", // Summarized [cite: 29, 30, 31, 32]
    techStack: ["HTML", "CSS", "JS", "REST API", "Bootstrap"],
    repoUrl: null,
    liveUrl: "http://sheshanktptest.ccbp.tech",
    imageUrl: null,
  },
];

const myCertificationsData = [
  {
    name: "Build Your Own Static Website",
    issuer: "NxtWave",
    date: "Issued May 2022",
    url: "https://certificates.ccbp.in/intensive/static-website?id=WLGMNPVLMT",
  },
  {
    name: "Developer Foundations",
    issuer: "NxtWave",
    date: "Issued May 2022",
    url: "https://certificates.ccbp.in/intensive/developer-foundations?id=GSRHYZJCOZ",
  },
  {
    name: "Introduction to Databases",
    issuer: "NxtWave",
    date: "Issued May 2022",
    url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=HFWKBQOYOQ",
  },
  {
    name: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: "Issued May 2022",
    url: "https://certificates.ccbp.in/intensive/programming-foundations?id=JVKUENANGN",
  },
];

const ProjectsPage = () => {
  const projectsData = myProjectsData;
  const certificationsData = myCertificationsData;

  return (
    <section id="projects" className="projectsSection">
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

      {certificationsData.length > 0 && ( // Only show if there are certifications
        <div className="certificationsContainer">
          <h3 className="certificationsHeading">Licenses & Certifications</h3>
          <ul className="certificationsList">
            {certificationsData.map((cert, index) => (
              <li key={cert.name || index} className="certificationItem">
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
    </section>
  );
};

export default ProjectsPage;
