// src/components/ContactPage.js
import React from "react";
import ContactForm from "./ContactForm";
import "../styles/ContactPage.css";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const yourEmail = "sheshankpendli97@gmail.com";
  const yourPhone = "+1 (862) 412-8708";
  const yourLinkedIn = "https://www.linkedin.com/in/psheshank";
  const yourGitHub = "https://github.com/pendli-sheshank";
  const yourLocation = "St. Louis, Missouri, USA";

  return (
    <section id="contact" className="contactSection">
      <div className="contactLayout">

        {/* Left Column */}
        <div className="contactInfoCol">
          <h2>Get In Touch</h2>
          <p className="contactIntro">
            I'm always open to discussing new opportunities, technical challenges, or collaborations
            in Java, Spring Boot, microservices, and cloud-native development. Feel free to reach out!
          </p>

          <div className="contactDirectLinks">
            <div className="contactItem">
              <FaEnvelope className="contactIcon" />
              <a href={`mailto:${yourEmail}`} className="contactLink">
                {yourEmail}
              </a>
            </div>
            <div className="contactItem">
              <FaPhone className="contactIcon" />
              <a href={`tel:${yourPhone.replace(/\s/g, "")}`} className="contactLink">
                {yourPhone}
              </a>
            </div>
            <div className="contactItem">
              <FaLinkedin className="contactIcon" />
              <a href={yourLinkedIn} target="_blank" rel="noopener noreferrer" className="contactLink">
                linkedin.com/in/psheshank
              </a>
            </div>
            <div className="contactItem">
              <FaGithub className="contactIcon" />
              <a href={yourGitHub} target="_blank" rel="noopener noreferrer" className="contactLink">
                github.com/pendli-sheshank
              </a>
            </div>
            <div className="contactItem">
              <FaMapMarkerAlt className="contactIcon" />
              <span className="contactLink" style={{ cursor: "default" }}>
                {yourLocation}
              </span>
            </div>
          </div>

          {/* Availability badge */}
          <div style={{ marginTop: "2rem", padding: "1rem 1.25rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ width: "10px", height: "10px", background: "#22c55e", borderRadius: "50%", display: "inline-block", flexShrink: 0 }}></span>
            <span style={{ fontSize: "0.9rem", color: "#166534", fontWeight: 600 }}>
              Available for full-time roles & contract work
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="contactFormCol">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
