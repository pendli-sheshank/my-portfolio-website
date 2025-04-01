// src/components/ContactPage.js
import React from "react";
import ContactForm from "./ContactForm";
import "../styles/ContactPage.css"; // We'll update this CSS

// Optional Icons...
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  // Replace with your actual details!
  const yourEmail = "your.email@example.com";
  const yourLinkedIn = "https://www.linkedin.com/in/psheshank";
  const yourGitHub = "https://github.com/yourusername";

  return (
    // Section remains the main container
    <section id="contact" className="contactSection">
      {/* New div to handle the two-column layout */}
      <div className="contactLayout">
        {/* --- Left Column: Info & Links --- */}
        <div className="contactInfoCol">
          <h2>Get In Touch</h2>
          <p className="contactIntro">
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out using the form or connect with
            me through the links below.
          </p>
          {/* Direct Links now part of the left column */}
          <div className="contactDirectLinks">
            {" "}
            {/* Changed class name */}
            <div className="contactItem">
              <FaEnvelope className="contactIcon" />
              <a href={`mailto:${yourEmail}`} className="contactLink">
                {yourEmail}
              </a>
            </div>
            <div className="contactItem">
              <FaLinkedin className="contactIcon" />
              <a
                href={yourLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                LinkedIn
              </a>
            </div>
            <div className="contactItem">
              <FaGithub className="contactIcon" />
              <a
                href={yourGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* --- Right Column: Form --- */}
        <div className="contactFormCol">
          {/* Removed the h3 from here, form is self-explanatory in context */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
