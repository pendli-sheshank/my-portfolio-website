// src/components/ContactForm.js
import React, { useState } from "react";
import "../styles/ContactForm.css"; // We'll create this CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show sending/success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setStatus("Sending...");

    // --- Replace with YOUR Formspree endpoint ---
    // 1. Go to formspree.io, create a new form, get the endpoint URL.
    // 2. It will look like: https://formspree.io/f/YOUR_UNIQUE_FORM_ID
    const formspreeEndpoint = "https://formspree.io/f/myzenyyj"; // <--- !!! REPLACE THIS !!!

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        // Try to get error message from Formspree response
        const data = await response.json();
        if (data.errors) {
          setStatus(
            "Error: " + data.errors.map((error) => error.message).join(", ")
          );
        } else {
          setStatus("Oops! There was a problem sending your message.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Oops! There was a network error.");
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="submitButton"
        disabled={status === "Sending..."} // Disable button while sending
      >
        {status === "Sending..." ? "Sending..." : "Send Message"}
      </button>
      {status && (
        <p
          className={`formStatus ${
            status.includes("Error") || status.includes("Oops")
              ? "error"
              : "success"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
