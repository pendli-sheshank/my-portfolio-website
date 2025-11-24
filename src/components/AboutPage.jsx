// src/components/AboutPage.jsx
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi";

const timelineData = [
  // ——— EXPERIENCE ———
  {
    type: "experience",
    title: "Software Engineer",
    subtitle: "Specific Company (See LinkedIn)",
    date: "2023 - Present",
    details: [
      "Develop and maintain scalable web applications using React and Node.js.",
      "Collaborate with cross-functional teams to design and implement new features.",
      "Optimize application performance and ensure high-quality code through code reviews.",
    ],
  },
  {
    type: "experience",
    title: "Java Developer",
    subtitle: "Nivis Info Pvt Ltd",
    date: "01/2022 – 06/2023",
    details: [
      "Built Spring Boot microservices with Hibernate/JPA and secure REST APIs (JWT/OAuth2); reduced API latency ~40%.",
      "Implemented Kafka producers/consumers and Spark Streaming for real-time pipelines.",
      "Containerized services with Docker and deployed to Kubernetes (Helm) on AWS.",
    ],
  },
  {
    type: "experience",
    title: "Java Front-End Developer",
    subtitle: "Siril Technologies",
    date: "04/2019 – 11/2021",
    details: [
      "Delivered RESTful services (Spring, Java 8) and UI features in React/Angular.",
      "Deployed microservices to AWS EC2 using Docker/Kubernetes/OpenShift.",
      "Strengthened test automation (JUnit/Mockito, Cypress); −50% test cycle time.",
    ],
  },
  // ——— EDUCATION ———
  {
    type: "education",
    title: "M.S., Information Technology Management",
    subtitle: "Webster University",
    date: "Graduated",
    details: [],
  },
  {
    type: "education",
    title: "B.E., Automobile Engineering",
    subtitle: "MVSR College of Engineering",
    date: "Graduated",
    details: [],
  },
];

const BIO_VARIATIONS = [
  {
    tone: "Professional",
    text: "I’m Sheshank Pendli, a Software Engineer specializing in full-stack development with React, Node.js, and Java. With a strong foundation in data structures and algorithms, I build scalable, user-friendly web applications. I am adaptable, a strong communicator, and thrive in agile environments leveraging cloud computing technologies."
  },
  {
    tone: "Casual",
    text: "Hey! I'm Sheshank. I love building things with React, Node.js, and Java. I'm all about solving problems and creating great user experiences. Whether it's cloud computing or tricky algorithms, I'm always ready for a challenge and love working with a team to get things done."
  },
  {
    tone: "Concise",
    text: "Software Engineer. Full-stack expert in React, Node.js, and Java. Proven track record in building scalable apps and cloud computing. Strong problem solver and team player focused on agile delivery."
  }
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
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-sm font-medium"
                 >
                    <HiSparkles />
                    <span>Generate {BIO_VARIATIONS[(bioIndex + 1) % BIO_VARIATIONS.length].tone} Bio</span>
                 </button>
            </div>
            <div className={`mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {BIO_VARIATIONS[bioIndex].text}
                </p>
                <p className="mt-2 text-xs text-right text-gray-400 font-mono">
                    Tone: {BIO_VARIATIONS[bioIndex].tone}
                </p>
            </div>
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
                        <span className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white ${item.type === 'education' ? 'bg-gray-400' : 'bg-brand-primary'}`}></span>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                            <span className="text-sm font-mono text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-md text-brand-secondary font-medium mb-3">{item.subtitle}</p>

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

        {/* Skills (Updated from LinkedIn) */}
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-brand-accent pl-4">
                Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap gap-3">
                {[
                  "React", "Node.js", "JavaScript", "Java", "Spring Boot",
                  "Data Structures & Algorithms", "Cloud Computing", "AWS",
                  "Agile Methodologies", "Problem Solving", "Docker", "Kubernetes"
                ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:border-brand-primary transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
