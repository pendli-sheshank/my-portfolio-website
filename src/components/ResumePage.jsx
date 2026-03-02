// src/components/ResumePage.jsx
import React, { useState } from "react";

const SKILLS_DB = {
  Java: ["Java", "Java 8", "Java 11", "Spring Boot", "Spring Cloud", "Microservices", "JPA", "Hibernate", "Multithreading", "ExecutorService"],
  Cloud: ["AWS", "AWS ECS", "AWS Lambda", "Amazon S3", "AWS Athena", "Azure", "Docker", "Kubernetes", "EC2"],
  Frontend: ["React", "Angular", "Angular 13", "TypeScript", "JavaScript", "HTML", "CSS"],
  Streaming: ["Kafka", "Apache Kafka", "Event-driven", "Streaming"],
  Databases: ["PostgreSQL", "MySQL", "Database", "SQL"],
  DevOps: ["Jenkins", "CI/CD", "Docker", "Kubernetes", "GitHub Actions", "Maven", "Git"],
  Compliance: ["FINRA", "SOX", "AML", "KYC", "Compliance", "Audit"],
};

const experienceData = [
  {
    company: "Centene Corporation",
    role: "Java Full Stack Developer",
    period: "Aug 2024 – Present",
    location: "St. Louis, MO",
    bullets: [
      { text: "Modernized legacy banking platform using Java 11, Spring Boot & Spring Cloud — converted monolith into 12 microservices on AWS ECS, reducing downtime by 19%.", skills: ["Java 11", "Spring Boot", "Spring Cloud", "AWS ECS", "Microservices"] },
      { text: "Built event-driven pipelines using Apache Kafka processing 65,000 financial events daily.", skills: ["Apache Kafka", "Kafka"] },
      { text: "Developed Angular 13 & TypeScript dashboards improving UI performance by 17% and customer engagement by 14%.", skills: ["Angular 13", "Angular", "TypeScript"] },
      { text: "Deployed serverless archival solutions using AWS Lambda, Amazon S3, and AWS Athena — reducing manual effort by 38% and storage costs by 16%.", skills: ["AWS Lambda", "Amazon S3", "AWS Athena"] },
      { text: "Ensured 100% audit readiness for FINRA and SOX compliance via Spring Boot REST APIs.", skills: ["FINRA", "SOX", "Spring Boot"] },
    ],
  },
  {
    company: "Accenture",
    role: "Java Full Stack Developer",
    period: "Jun 2019 – Jul 2023",
    location: "Hyderabad, Telangana, India",
    bullets: [
      { text: "Led AI-powered digital banking module — automated KYC workflows reducing manual verification by 18%.", skills: ["KYC"] },
      { text: "Built React frontends and Java microservices handling 200 concurrent transactions per minute.", skills: ["React", "Java", "Microservices"] },
      { text: "Applied Java 8 Streams & Lambda for AML and compliance data processing, increasing throughput by 18%.", skills: ["Java 8", "AML", "Compliance"] },
      { text: "Executed CI/CD automation with Jenkins, Docker & Kubernetes — accelerating delivery timelines by 20%.", skills: ["Jenkins", "Docker", "Kubernetes", "CI/CD"] },
      { text: "Optimized MySQL with indexing & partitioning, improving query performance by 15% for 50K financial records.", skills: ["MySQL"] },
    ],
  },
];

const ResumePage = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [matchedSkills, setMatchedSkills] = useState([]);

  const handleAnalyze = () => {
    const jdLower = jobDescription.toLowerCase();
    const matches = [];
    Object.values(SKILLS_DB).flat().forEach((skill) => {
      if (jdLower.includes(skill.toLowerCase()) && !matches.includes(skill)) {
        matches.push(skill);
      }
    });
    setMatchedSkills(matches);
  };

  const isHighlighted = (skillList) =>
    skillList.some((s) => matchedSkills.includes(s));

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Interactive Resume</h2>
          <p className="mt-4 text-lg text-gray-500">
            Paste a job description below to see how my skills match your requirements.
          </p>
        </div>

        {/* JD Input */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
          </label>
          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary resize-none"
            placeholder="Paste job description here... e.g. 'Looking for a Java developer with Spring Boot, AWS, Kafka...'"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
          <div className="mt-4 flex justify-between items-center">
            {matchedSkills.length > 0 && (
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                ✅ {matchedSkills.length} Skills Matched!
              </span>
            )}
            <button
              onClick={handleAnalyze}
              className="ml-auto px-6 py-2 bg-brand-primary text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
            >
              Analyze Match
            </button>
          </div>
        </div>

        {/* Resume */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">

          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900">Sheshank Pendli</h1>
            <p className="text-xl text-brand-primary font-semibold mt-1">
              Java Full Stack Developer | Spring Boot & Microservices Specialist | AWS & Azure
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
              <span>📍 St. Louis, Missouri, USA</span>
              <a href="mailto:sheshankpendli97@gmail.com" className="text-brand-primary hover:underline">
                ✉ sheshankpendli97@gmail.com
              </a>
              <a href="https://linkedin.com/in/psheshank" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">
                💼 linkedin.com/in/psheshank
              </a>
              <a href="https://github.com/pendli-sheshank" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">
                🐙 github.com/pendli-sheshank
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Technical Skills
            </h3>
            <div className="space-y-2">
              {Object.entries(SKILLS_DB).map(([category, skills]) => (
                <div key={category} className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-700 w-24 text-sm flex-shrink-0">{category}:</span>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block px-2 py-0.5 rounded text-sm transition-all duration-300 ${
                        matchedSkills.includes(skill)
                          ? "bg-yellow-300 text-black font-bold shadow-sm scale-105"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Experience</h3>
            {experienceData.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{exp.company}</h4>
                    <p className={`font-semibold text-sm ${isHighlighted(["Java", "Spring Boot"]) ? "text-yellow-600" : "text-brand-primary"}`}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>{exp.period}</p>
                    <p>📍 {exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>
                      <span className={b.skills.some((s) => matchedSkills.includes(s)) ? "bg-yellow-100 rounded px-1" : ""}>
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Education</h3>
            {[
              { degree: "M.S., Information Technology Management", school: "Webster University", period: "Aug 2023 – May 2025", location: "St. Louis, MO" },
              { degree: "B.E., Automobile Engineering", school: "MVSR Engineering College", period: "Jun 2017 – Dec 2020", location: "Hyderabad, India" },
              { degree: "Diploma, Mechanical Engineering", school: "SBTET, Andhra Pradesh", period: "Jun 2013 – May 2017", location: "Andhra Pradesh, India" },
            ].map((edu, i) => (
              <div key={i} className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-brand-primary text-sm font-semibold">{edu.school}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>{edu.period}</p>
                  <p>📍 {edu.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">Certifications</h3>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold text-gray-900">Career Essentials in GitHub</p>
                <p className="text-sm text-yellow-600 font-medium">GitHub Professional Certificate</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
