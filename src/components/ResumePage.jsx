// src/components/ResumePage.jsx
import React, { useState } from "react";

const SKILLS_DB = {
  Java: ["Java", "Spring Boot", "Microservices", "JPA", "Hibernate"],
  Cloud: ["AWS", "Docker", "Kubernetes", "EC2", "S3"],
  Frontend: ["React", "Angular", "JavaScript", "HTML", "CSS"],
  Testing: ["JUnit", "Mockito", "Selenium", "Cypress"],
  Tools: ["Git", "Jenkins", "Maven", "Kafka"],
};

const ResumePage = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [matchedSkills, setMatchedSkills] = useState([]);

  const handleAnalyze = () => {
    const jdLower = jobDescription.toLowerCase();
    const matches = [];

    Object.values(SKILLS_DB).flat().forEach(skill => {
        if (jdLower.includes(skill.toLowerCase())) {
            matches.push(skill);
        }
    });

    setMatchedSkills(matches);
  };

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

        {/* Input Area */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
            <textarea
                className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                placeholder="Paste job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handleAnalyze}
                    className="px-6 py-2 bg-brand-primary text-white rounded-lg shadow hover:bg-brand-dark transition-colors"
                >
                    Analyze Match
                </button>
            </div>
        </div>

        {/* Resume Display */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 relative">
            <div className="absolute top-0 right-0 p-4">
                 {matchedSkills.length > 0 && (
                     <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                         {matchedSkills.length} Skills Matched!
                     </span>
                 )}
            </div>

            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                    <h1 className="text-4xl font-bold text-gray-900">Sheshank Pendli</h1>
                    <p className="text-xl text-brand-primary">Senior Java Developer</p>
                </div>

                {/* Skills Section */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(SKILLS_DB).map(([category, skills]) => (
                            <div key={category} className="w-full mb-2">
                                <span className="font-semibold text-gray-700 mr-2">{category}:</span>
                                {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className={`inline-block px-2 py-0.5 rounded text-sm mr-2 mb-1 transition-colors duration-500 ${
                                            matchedSkills.includes(skill)
                                                ? "bg-yellow-300 text-black font-bold shadow-sm transform scale-110"
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

                {/* Experience Placeholder */}
                <div>
                     <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">Experience</h3>
                     <div className="mb-4">
                         <div className="flex justify-between">
                            <h4 className="font-bold text-gray-900">Software Engineer</h4>
                            <span className="text-gray-500">2021 - Present</span>
                         </div>
                         <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                             <li>Developed microservices using <span className={matchedSkills.includes("Spring Boot") ? "bg-yellow-200" : ""}>Spring Boot</span>.</li>
                             <li>Deployed applications to <span className={matchedSkills.includes("AWS") ? "bg-yellow-200" : ""}>AWS</span> using <span className={matchedSkills.includes("Docker") ? "bg-yellow-200" : ""}>Docker</span>.</li>
                         </ul>
                     </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
