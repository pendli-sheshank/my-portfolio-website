import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsPage.css";

const myProjectsData = [
  {
    title: "Policy Management Microservices",
    period: "2023",
    description:
      "Spring Boot microservices with secure REST APIs (JWT/OAuth2) and event streaming on Kafka; deployed on AWS using Docker & Kubernetes (Helm). Improved API latency by ~40% and enabled horizontal scaling.",
    techStack: [
      "Java 8+",
      "Spring Boot",
      "Hibernate/JPA",
      "Spring Security",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS (EC2/S3/RDS/IAM)",
      "Swagger/OpenAPI",
    ],
    highlights: [
      "Defined clear service boundaries and API contracts; added distributed tracing/logging.",
      "Kafka producers/consumers for policy & claims events with retry/DLQ patterns.",
      "CI/CD via Jenkins & GitHub Actions; blue-green rollouts with Helm.",
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
      "JUnit/Mockito",
      "Selenium",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Node.js",
    ],
    highlights: [
      "Reusable test objects & data builders; flaky-test quarantine.",
      "Matrix builds across browsers; HTML reports/screenshots as artifacts.",
      "Quality gates before deploy; tagged smoke/regression suites.",
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
      "Reactive Forms",
      "REST",
      "JWT/OAuth2",
      "HTML5/CSS3",
      "Bootstrap",
    ],
    highlights: [
      "Accessible components library; robust validation and error states.",
      "Auth interceptors with token refresh; guard-based route protection.",
      "A11y: keyboard navigation, focus management, ARIA.",
    ],
    links: { demo: "#", code: "#" },
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
