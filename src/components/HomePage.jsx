// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom"; // For buttons/links
import "../styles/HomePage.css"; // Link to the new CSS file
import profilePic from "../assets/images/profile.png"; // MAKE SURE this path is correct

const HomePage = () => {
  // Using concise summary text based on your resume [cite: 7]
  const descriptionText =
    "Front-end developer with 1.5 years of experience in ReactJS, HTML, CSS, and JavaScript, skilled in developing responsive interfaces and integrating APIs. Passionate about delivering high-quality work and engaging user experiences.";

  return (
    // Use a semantic tag like section for the hero area
    <section className="heroSectionNew">
      <div className="heroLayoutNew">
        {/* --- Left Column: Text --- */}
        <div className="heroTextNew">
          {/* Removed accent line based on image */}
          <p className="heroGreetingNew">HELLO</p>
          <h1>
            im Sheshank Pendli, <br /> a Software Engineer
          </h1>
          <p className="heroDescriptionNew">{descriptionText}</p>
          <div className="heroButtonGroupNew">
            <Link to="/contact" className="heroButtonNewPrimary">
              contact me
            </Link>
            <Link to="/projects" className="heroButtonNewSecondary">
              browse portfolio
            </Link>
          </div>
        </div>

        {/* --- Right Column: Image --- */}
        <div className="heroImageContainerNew">
          {/* Outer div creates the purple border */}
          <div className="heroImageBorder">
            {/* The actual photo */}
            <img
              className="heroProfilePhotoNew"
              alt="Sheshank Pendli - Software Engineer"
              src={profilePic} // Your imported photo
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
