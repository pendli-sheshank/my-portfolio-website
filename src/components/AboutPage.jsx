import React from "react";
import "../styles/AboutPage.css";

const timelineData = [
  // ——— EXPERIENCE ———
  {
    type: "experience",
    title: "Java Developer",
    subtitle: "Nivis Info Pvt Ltd",
    date: "01/2022 – 06/2023",
    details: [
      "Built Spring Boot microservices with Hibernate/JPA and secure REST APIs (JWT/OAuth2); reduced API latency ~40%.",
      "Implemented Kafka producers/consumers and Spark Streaming for real-time pipelines.",
      "Containerized services with Docker and deployed to Kubernetes (Helm) on AWS (EC2, S3, RDS, Lambda, IAM, SQS).",
      "Integrated Cypress & Katalon into CI/CD (Jenkins/Bamboo/GitHub Actions/CircleCI); +30–35% coverage, −25% exec time.",
      "Developed Angular 16/18 UI (components, services, reactive forms); responsive UX with HTML/CSS/Bootstrap.",
      "Automated log analysis & load testing; ~30% faster incident resolution; refactored monolith → microservices.",
    ],
  },
  {
    type: "experience",
    title: "Java Front-End Developer",
    subtitle: "Siril Technologies",
    date: "04/2019 – 11/2021",
    details: [
      "Delivered RESTful services (Spring, Java 8) and UI features in React/Angular within 3-week sprints.",
      "Deployed microservices to AWS EC2 using Docker/Kubernetes/OpenShift; optimized SQL/PL-SQL (Oracle 10g).",
      "Strengthened test automation (JUnit/Mockito, Cypress/Jasmine/Karma, Selenium); −50% test cycle time in CI.",
      "Implemented Kafka + Zookeeper messaging; added risk analytics/fraud detection modules.",
      "Built caching layers (Redis/Memcached) and multithreaded components for concurrency.",
    ],
  },

  // ——— EDUCATION ———
  {
    type: "education",
    title: "M.S., Information Technology Management",
    subtitle: "Webster University — St. Louis, MO",
    date: "Graduated",
    details: [],
  },
  {
    type: "education",
    title: "B.E., Automobile Engineering",
    subtitle: "MVSR College of Engineering — Hyderabad, Telangana",
    date: "Graduated",
    details: [],
  },
  {
    type: "education",
    title: "Diploma, Mechanical Engineering",
    subtitle:
      "Annamacharya Institute of Technology & Sciences — Hyderabad, Telangana",
    date: "Completed",
    details: [],
  },
  {
    type: "education",
    title: "Secondary Education",
    subtitle: "Little Flowers High School — Mandamarri, Telangana",
    date: "Completed",
    details: [],
  },
];

const AboutPage = () => {
  return (
    <section id="about" className="aboutSection">
      <h2>About Me & Journey</h2>

      {/* --- Updated Summary Section --- */}
      <div className="summaryContainer">
        <p className="aboutSummary">
          I’m <strong>Sheshank Pendli</strong>, a{" "}
          <strong>Java Developer</strong> with <strong>4+ years</strong> of
          experience building scalable, secure web and enterprise applications.
          I specialize in <strong>Java/Spring Boot microservices</strong>,
          event-driven systems with <strong>Kafka</strong>, and cloud-native
          deployments on <strong>AWS</strong> with <strong>Docker</strong> and{" "}
          <strong>Kubernetes</strong>. On the front-end, I deliver responsive
          UIs with <strong>Angular&nbsp;16/18</strong> and{" "}
          <strong>React</strong>.
        </p>
        <p className="aboutSummary">
          I care about clean architecture, performance, and reliability—backed
          by solid testing and CI/CD. I’ve improved test coverage by{" "}
          <strong>30–35%</strong>, cut API response times by ~
          <strong>40%</strong>, and accelerated releases through automated
          pipelines. Always learning, always shipping.
        </p>
      </div>
      {/* --- End Summary --- */}

      {/* --- Key Skills (content only, no layout change) --- */}
      <div className="timelineContainer">
        <h3>Key Skills</h3>
        <ul className="timelineDetailsList skillsListCompact">
          <li>
            <strong>Programming:</strong> Java (Core, 8+), Data Structures, SQL
          </li>
          <li>
            <strong>Frameworks:</strong> Spring Boot, Spring MVC/Security,
            Hibernate/JPA, REST/SOAP, Kafka, JMS
          </li>
          <li>
            <strong>Front-End:</strong> Angular 16/18, React, HTML5, CSS3,
            Bootstrap, JavaScript/TypeScript
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS, Lambda, IAM,
            SQS), Docker, Kubernetes (GKE/Helm)
          </li>
          <li>
            <strong>CI/CD:</strong> Jenkins, Bamboo, GitHub Actions, CircleCI
          </li>
          <li>
            <strong>Testing:</strong> JUnit, Mockito, Cypress, Katalon,
            Jasmine/Karma, Selenium, LoadRunner
          </li>
          <li>
            <strong>Databases:</strong> Oracle, MySQL, SQL Server, MongoDB,
            DynamoDB, Redis
          </li>
        </ul>
      </div>

      {/* --- Timeline Section --- */}
      <div className="timelineContainer">
        <h3>My Journey (Experience & Education)</h3>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`timelineItem ${item.type}`}
            >
              <div className="timelineNode"></div>
              <div className="timelineContent">
                <span className="timelineDate">{item.date}</span>
                <h4 className="timelineTitle">{item.title}</h4>
                <p className="timelineSubtitle">{item.subtitle}</p>
                {item.details && item.details.length > 0 && (
                  <ul className="timelineDetailsList">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- End Timeline --- */}
    </section>
  );
};

export default AboutPage;
