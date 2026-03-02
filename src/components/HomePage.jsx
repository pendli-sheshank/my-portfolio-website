// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/profilePic.jpg";

const HomePage = () => {
  const descriptionText =
    "Results-driven Java Full Stack Developer with 5+ years of experience building secure, scalable applications across financial and e-commerce platforms. Specializing in Spring Boot, Microservices, AWS, and Angular/React.";

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="order-2 lg:order-1 space-y-8 animate-slide-up">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-brand-primary uppercase bg-blue-50 rounded-full">
              Java Full Stack Developer · Spring Boot & Microservices Specialist
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
              I'm <span className="text-brand-primary">Sheshank</span>{" "}
              <span className="text-brand-primary">Pendli</span>,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                AWS & Azure
              </span>{" "}
              Engineer
            </h1>
            <p className="text-lg text-brand-secondary max-w-2xl leading-relaxed">
              {descriptionText}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 bg-white text-brand-dark border border-gray-200 font-semibold rounded-lg shadow-sm hover:border-brand-primary hover:text-brand-primary transition-all transform hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link
              to="/resume"
              className="px-8 py-3 bg-white text-brand-dark border border-gray-200 font-semibold rounded-lg shadow-sm hover:border-brand-primary hover:text-brand-primary transition-all transform hover:-translate-y-1"
            >
              Resume
            </Link>
          </div>

          {/* Real Stats from LinkedIn */}
          <div className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-brand-dark">5+</p>
              <p className="text-sm text-brand-secondary">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-dark">65K</p>
              <p className="text-sm text-brand-secondary">Events/Day</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-dark">12</p>
              <p className="text-sm text-brand-secondary">Microservices</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-dark">100%</p>
              <p className="text-sm text-brand-secondary">Audit Ready</p>
            </div>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Java 11",
              "Spring Boot",
              "AWS",
              "Apache Kafka",
              "Angular 13",
              "React",
              "Docker",
              "Kubernetes",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold text-brand-primary bg-blue-50 border border-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Profile Photo Section */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative flex items-center justify-center">
            {/* Outer rotating gradient ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: "340px",
                height: "340px",
                background:
                  "conic-gradient(from 0deg, #3b82f6, #f43f5e, #3b82f6)",
                animation: "spin 8s linear infinite",
                padding: "3px",
              }}
            />

            {/* White gap ring */}
            <div
              className="absolute bg-white rounded-full"
              style={{ width: "334px", height: "334px" }}
            />

            {/* Photo circle */}
            <div
              className="relative rounded-full overflow-hidden shadow-2xl"
              style={{
                width: "320px",
                height: "320px",
                border: "4px solid white",
                zIndex: 1,
              }}
            >
              <img
                src={profilePic}
                alt="Sheshank Pendli"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: "scale(1.08)",
                }}
              />
            </div>

            {/* Available badge - bottom left */}
            <div
              className="absolute bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2"
              style={{
                bottom: "16px",
                left: "-24px",
                padding: "10px 14px",
                zIndex: 2,
              }}
            >
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-800 leading-tight">
                  Available for opportunities
                </p>
                <p className="text-xs text-gray-400 leading-tight">
                  St. Louis, MO
                </p>
              </div>
            </div>

            {/* Years badge - top right */}
            <div
              className="absolute bg-brand-primary text-white rounded-2xl shadow-xl text-center"
              style={{
                top: "16px",
                right: "-20px",
                padding: "12px 16px",
                zIndex: 2,
              }}
            >
              <p className="text-2xl font-extrabold leading-tight">5+</p>
              <p className="text-xs font-medium leading-tight">Years Exp.</p>
            </div>

            {/* Spin keyframe */}
            <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
