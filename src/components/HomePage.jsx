import React from "react";
// Import Link if using the button to navigate
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Import the CSS file
import profilePic from "../assets/images/profilePic.jpg";

const HomePage = () => {
  return (
    <main className="mainContainer">
      {" "}
      {/* Use main if it's the main page content */}
      <div className="fullPageContent">
        <h1>Sheshank</h1>

        <p>
          Hello! I'm Sheshank, a Software Engineer specializing in building
          dynamic and user-friendly web applications. With a strong foundation
          in JavaScript and expertise in frameworks like React, I focus on
          crafting clean, efficient code and engaging digital experiences.
          Explore my projects to see my work in action.
        </p>

        {/* Optional: Call to Action Button */}
        <Link to="/projects" className="ctaButton">
          View My Projects
        </Link>
      </div>
      <img
        className="landingProfilePhoto"
        alt="Sheshank - Software Engineer" // Descriptive alt text
        src={profilePic}
        // Replace with your actual photo URL or import
      />
    </main>
  );
};

export default HomePage;
