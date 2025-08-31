// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import profilePic from "../assets/images/profile.png"; // ensure this exists

const HomePage = () => {
  const descriptionText =
    "Java Developer with 4+ years building robust Java/Spring Boot microservices, event-driven systems with Kafka, and cloud-native deployments on AWS. Front-end experience with Angular 16/18 and React. Obsessed with clean architecture, performance, strong testing, and reliable CI/CD.";

  return (
    <section className="heroSectionNew">
      <div className="heroLayoutNew">
        {/* --- Left Column: Text --- */}
        <div className="heroTextNew">
          <p className="heroGreetingNew">HELLO</p>
          <h1>
            I’m <span>Sheshank Pendli</span>,<br /> a{" "}
            <span>Java Developer</span>
          </h1>

          <p className="heroDescriptionNew">{descriptionText}</p>

          <div className="heroButtonGroupNew">
            <Link to="/contact" className="heroButtonNewPrimary">
              Contact Me
            </Link>
            <Link to="/projects" className="heroButtonNewSecondary">
              View Projects
            </Link>
            {/* Optional: direct email as a tertiary action */}
          </div>
        </div>

        {/* --- Right Column: Image --- */}
        <div className="heroImageContainerNew">
          <div className="heroImageBorder">
            <img
              className="heroProfilePhotoNew"
              alt="Sheshank Pendli — Java Developer"
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
