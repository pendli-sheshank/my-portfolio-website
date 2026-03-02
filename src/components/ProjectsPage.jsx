// src/components/ProjectsPage.jsx
import React, { useContext, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { AIContext } from "../context/AIContext";

export const myProjectsData = [
  {
    title: "Banking Platform Microservices — Centene",
    period: "2024–Present",
    description:
      "Modernized a legacy banking platform using Java 11, Spring Boot & Spring Cloud — converted a monolithic architecture into 12 microservices on AWS ECS, reducing system downtime by 19%. Integrated Apache Kafka for event-driven pipelines processing 65,000 financial events daily.",
    techStack: [
      "Java 11",
      "Spring Boot",
      "Spring Cloud",
      "Apache Kafka",
      "AWS ECS",
      "PostgreSQL",
    ],
    highlights: [
      "12 microservices deployed on AWS ECS.",
      "65K financial events processed daily via Kafka.",
      "100% FINRA & SOX audit readiness via automated REST API validations.",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Fraud Detection Integration",
    period: "2024",
    description:
      "Collaborated with data science teams to integrate a Python-based fraud detection engine into the financial transaction pipeline, increasing detection accuracy by 11% for 105,000 weekly transactions. Also deployed serverless archival using AWS Lambda, S3 & Athena.",
    techStack: [
      "Python",
      "AWS Lambda",
      "Amazon S3",
      "AWS Athena",
      "Spring Boot",
      "REST APIs",
    ],
    highlights: [
      "11% improvement in fraud detection accuracy.",
      "38% reduction in manual effort via serverless automation.",
      "16% reduction in storage costs.",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Angular 13 Financial Dashboard",
    period: "2024",
    description:
      "Developed dynamic dashboards with Angular 13 and TypeScript for financial transaction monitoring, improving UI performance by 17% and boosting customer engagement by 14%. Integrated with Spring Boot REST APIs for real-time compliance validation.",
    techStack: ["Angular 13", "TypeScript", "RxJS", "Spring Boot", "REST APIs"],
    highlights: [
      "17% UI performance improvement.",
      "14% boost in customer engagement.",
      "Real-time FINRA/SOX compliance validation.",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "AI-Powered KYC Banking Module — Accenture",
    period: "2021–2023",
    description:
      "Led development of an AI-powered digital banking module automating KYC workflows and reducing manual verification by 18%. Built scalable React frontends and Java microservices handling 200 concurrent transactions per minute.",
    techStack: [
      "Java 8",
      "React",
      "Spring Boot",
      "Microservices",
      "MySQL",
      "Docker",
    ],
    highlights: [
      "18% reduction in manual KYC verification.",
      "200 concurrent transactions/min handled.",
      "Java 8 Streams & Lambda for AML/compliance processing (+18% throughput).",
    ],
    links: { demo: "#", code: "#" },
  },
  {
    title: "CI/CD Microservices Pipeline — Accenture",
    period: "2019–2023",
    description:
      "Executed CI/CD automation with Jenkins, Docker, and Kubernetes accelerating delivery timelines by 20%. Implemented multithreaded processing with ExecutorService for 100 simultaneous loan applications, and optimized MySQL with indexing & partitioning for 50K financial records.",
    techStack: [
      "Jenkins",
      "Docker",
      "Kubernetes",
      "MySQL",
      "Java 8",
      "ExecutorService",
    ],
    highlights: [
      "20% faster delivery with CI/CD pipelines.",
      "100 simultaneous loan applications via multithreading.",
      "15% DB query performance improvement.",
    ],
    links: { demo: "#", code: "#" },
  },
];

const myCertificationsData = [
  {
    name: "Career Essentials in GitHub",
    issuer: "GitHub Professional Certificate",
    date: "2024",
    url: "#",
  },
];

const ProjectsPage = () => {
  const { recommendations, generateRecommendations, visitedTags } =
    useContext(AIContext);

  useEffect(() => {
    generateRecommendations(myProjectsData);
  }, [visitedTags, generateRecommendations]);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Engineering Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            5+ years of scalable systems, fintech solutions, and cloud-native
            architectures.
          </p>
        </div>

        {/* AI Recommended Projects */}
        {recommendations.length > 0 && (
          <div className="mb-12 bg-blue-50/50 p-8 rounded-2xl border border-blue-100 animate-fade-in">
            <div className="flex items-center mb-6">
              <span className="bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mr-2">
                AI Recommended
              </span>
              <h3 className="text-2xl font-bold text-gray-900">
                Because you're interested in{" "}
                {
                  Object.keys(visitedTags).sort(
                    (a, b) => visitedTags[b] - visitedTags[a]
                  )[0]
                }
                ...
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
                  highlights={project.highlights}
                  repoUrl={
                    project.links.code === "#" ? null : project.links.code
                  }
                  liveUrl={
                    project.links.demo === "#" ? null : project.links.demo
                  }
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
              highlights={project.highlights}
              repoUrl={project.links.code === "#" ? null : project.links.code}
              liveUrl={project.links.demo === "#" ? null : project.links.demo}
            />
          ))}
        </div>

        {/* Certifications */}
        {myCertificationsData.length > 0 && (
          <div className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Licenses & Certifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {myCertificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 hover:shadow-md hover:border-yellow-300 transition-all"
                >
                  <div className="text-2xl mb-3">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2 min-h-[48px] line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-yellow-600 font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{cert.date}</p>
                  {cert.url && cert.url !== "#" && (
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
