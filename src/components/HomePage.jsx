// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
// import profilePic from "../assets/images/profile.png"; // Commented out until we verify asset

const HomePage = () => {
  const descriptionText =
    "Software Engineer with experience in full-stack development, specializing in React, Node.js, and data-driven applications. I have a demonstrated ability to build scalable, user-friendly web applications and thrive in agile environments.";

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div className="order-2 lg:order-1 space-y-8 animate-slide-up">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-brand-primary uppercase bg-blue-50 rounded-full">
              Hello, there!
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
              I’m <span className="text-brand-primary">Sheshank Pendli</span>, <br />
              a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Software Engineer
              </span>
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
          </div>

          {/* Stats or Social Proof (Mock) */}
          <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-brand-dark">4+</p>
              <p className="text-sm text-brand-secondary">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-dark">20+</p>
              <p className="text-sm text-brand-secondary">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-dark">100%</p>
              <p className="text-sm text-brand-secondary">Commitment</p>
            </div>
          </div>
        </div>

        {/* Image Section (Placeholder if image missing) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-200 flex items-center justify-center">
                {/* Fallback text or Image */}
                {/* <img src={profilePic} alt="Profile" className="object-cover w-full h-full" /> */}
                <span className="text-gray-400 text-xl font-medium">Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
