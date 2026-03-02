// src/components/AboutPage.jsx
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi";

const timelineData = [
  // ——— EXPERIENCE ———
  {
    type: "experience",
    title: "Java Full Stack Developer",
    subtitle: "Centene Corporation",
    date: "Aug 2024 – Present",
    location: "St. Louis, Missouri, USA",
    details: [
      "Modernized legacy banking platform using Java 11, Spring Boot & Spring Cloud — converted monolith into 12 microservices on AWS ECS, reducing downtime by 19%.",
      "Built event-driven pipelines using Apache Kafka processing 65,000 financial events daily.",
      "Developed Angular 13 & TypeScript dashboards, improving UI performance by 17% and customer engagement by 14%.",
      "Integrated Python-based fraud detection engine, increasing accuracy by 11% for 105K weekly transactions.",
      "Deployed serverless archival solutions via AWS Lambda, S3 & Athena — reducing manual effort by 38%, storage costs by 16%.",
      "Ensured 100% audit readiness for FINRA and SOX compliance via Spring Boot REST APIs.",
    ],
  },
  {
    type: "experience",
    title: "Java Full Stack Developer",
    subtitle: "Accenture",
    date: "Jun 2019 – Jul 2023",
    location: "Hyderabad, Telangana, India",
    details: [
      "Led AI-powered digital banking module — automated KYC workflows reducing manual verification by 18%.",
      "Built React frontends and Java microservices handling 200 concurrent transactions per minute.",
      "Applied Java 8 Streams & Lambda for AML and compliance data processing, increasing throughput by 18%.",
      "Executed CI/CD pipelines with Jenkins, Docker & Kubernetes — accelerating delivery timelines by 20%.",
      "Optimized MySQL with indexing & partitioning, improving query performance by 15% for 50K financial records.",
      "Implemented multithreaded processing with ExecutorService for 100 simultaneous loan applications.",
    ],
  },
  // ——— EDUCATION ———
  {
    type: "education",
    title: "M.S., Information Technology Management",
    subtitle: "Webster University",
    date: "Aug 2023 – May 2025",
    location: "St. Louis, MO",
    details: [],
  },
  {
    type: "education",
    title: "B.E., Automobile Engineering",
    subtitle: "MVSR Engineering College",
    date: "Jun 2017 – Dec 2020",
    location: "Hyderabad, India",
    details: [],
  },
  {
    type: "education",
    title: "Diploma, Mechanical Engineering",
    subtitle: "SBTET, Andhra Pradesh",
    date: "Jun 2013 – May 2017",
    location: "Andhra Pradesh, India",
    details: [],
  },
];

const BIO_VARIATIONS = [
  {
    tone: "Professional",
    text: "I'm Sheshank Pendli, a Java Full Stack Developer with 5+ years of experience building secure, scalable applications for financial and e-commerce platforms. I specialize in Spring Boot, Microservices, AWS, and Angular/React. Currently at Centene Corporation in St. Louis, where I lead backend modernization initiatives and cloud adoption projects.",
  },
  {
    tone: "Results-Focused",
    text: "Java Full Stack Developer with a track record of real impact: 12 microservices deployed on AWS ECS (19% downtime reduction), 65K financial events processed daily via Kafka, and 100% FINRA/SOX audit readiness achieved. I turn complex backend challenges into scalable, compliant, cloud-native solutions.",
  },
  {
    tone: "Concise",
    text: "5+ year Java Full Stack Developer. Spring Boot · Microservices · AWS · Angular · React. Currently at Centene Corporation. M.S. IT Management from Webster University. Expert in distributed systems, fintech compliance, and CI/CD pipelines.",
  },
];

const AboutPage = () => {
  const [bioIndex, setBioIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleBio = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setBioIndex((prev) => (prev + 1) % BIO_VARIATIONS.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* About Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-4 flex justify-center">
            <button
              onClick={toggleBio}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-brand-primary to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-sm font-medium"
            >
              <HiSparkles />
              <span>
                Generate {BIO_VARIATIONS[(bioIndex + 1) % BIO_VARIATIONS.length].tone} Bio
              </span>
            </button>
          </div>
          <div
            className={`mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {BIO_VARIATIONS[bioIndex].text}
            </p>
            <p className="mt-2 text-xs text-right text-gray-400 font-mono">
              Tone: {BIO_VARIATIONS[bioIndex].tone}
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "65K", label: "Events/Day Processed" },
            { value: "12", label: "Microservices Built" },
            { value: "100%", label: "Audit Readiness" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-brand-primary transition-colors"
            >
              <p className="text-3xl font-extrabold text-brand-primary">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brand-primary pl-4">
            My Journey
          </h3>
          <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Dot */}
                <span
                  className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white ${
                    item.type === "education" ? "bg-gray-400" : "bg-brand-primary"
                  }`}
                ></span>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                  <span className="text-sm font-mono text-gray-500">{item.date}</span>
                </div>
                <p className="text-md text-brand-primary font-semibold mb-1">{item.subtitle}</p>
                {item.location && (
                  <p className="text-sm text-gray-400 mb-3">📍 {item.location}</p>
                )}

                {item.details.length > 0 && (
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-1 text-sm">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-accent pl-4">
            Tech Stack & Skills
          </h3>

          {[
            {
              label: "Backend",
              color: "bg-blue-50 border-blue-100 text-brand-primary",
              skills: ["Java 8/11", "Spring Boot", "Spring Cloud", "Hibernate", "Apache Kafka", "REST APIs", "Multithreading", "ExecutorService"],
            },
            {
              label: "Frontend",
              color: "bg-rose-50 border-rose-100 text-brand-accent",
              skills: ["React", "Angular 13", "TypeScript", "JavaScript", "HTML5", "CSS3"],
            },
            {
              label: "Cloud & DevOps",
              color: "bg-green-50 border-green-100 text-green-700",
              skills: ["AWS ECS", "AWS Lambda", "Amazon S3", "AWS Athena", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
            },
            {
              label: "Databases & Compliance",
              color: "bg-yellow-50 border-yellow-100 text-yellow-700",
              skills: ["PostgreSQL", "MySQL", "FINRA", "SOX", "AML"],
            },
          ].map((group) => (
            <div key={group.label} className="mb-5">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 border rounded-full text-sm shadow-sm hover:shadow-md transition-shadow cursor-default ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-400 pl-4">
            Certifications
          </h3>
          <div className="bg-white rounded-xl p-6 border border-yellow-100 shadow-sm flex items-center gap-4">
            <span className="text-3xl">🏆</span>
            <div>
              <p className="font-bold text-gray-900">Career Essentials in GitHub</p>
              <p className="text-sm text-yellow-600 font-semibold">GitHub Professional Certificate</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
