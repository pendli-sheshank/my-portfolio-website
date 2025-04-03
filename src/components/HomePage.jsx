// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming buttons link internally
import "../styles/HomePage.css";
// Adjust the path and filename to match your actual image file
import profilePic from "../assets/images/profilePic.jpg"; // Adjust if needed

const HomePage = () => {
  // Your actual intro text - keep it concise for this design
  const introText =
    "I'm a Software Engineer specializing in building dynamic and user-friendly web applications using React, JavaScript, and modern web technologies. Passionate about crafting clean code and engaging digital experiences.";

  return (
    // Using main tag is good practice
    <main className="heroContainer">
      {" "}
      {/* Changed class name for clarity */}
      <div className="heroContent">
        {" "}
        {/* Changed class name */}
        {/* Left Column Content */}
        <div className="heroText">
          <p className="heroGreeting">HELLO</p>
          <h1>I'm Sheshank</h1>
          <p className="heroRole">A Software Engineer</p> {/* Updated Role */}
          <p className="heroDescription">
            {introText} {/* Using a shorter version of your intro */}
          </p>
          <div className="heroButtonGroup">
            {/* Use appropriate component (Link or button) and paths */}
            <Link to="/contact" className="heroButtonPrimary">
              Hire Me
            </Link>
            <Link to="/projects" className="heroButtonSecondary">
              Portfolio
            </Link>
          </div>
        </div>
        {/* Right Column Image */}
        <div className="heroImageContainer">
          {/* The purple shape will be added via CSS pseudo-element */}
          <img
            className="heroProfilePhoto" // Changed class name
            alt="Sheshank Pendli - Software Engineer"
            src={profilePic}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
