// src/components/AIAssistant.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiSparkles, HiX } from "react-icons/hi";

const TIPS = {
  "/": "Welcome! Check out the 'Projects' page to see my latest work.",
  "/projects": "Did you know? You can filter projects by technology!",
  "/about": "Use the 'Magic Edit' button to see different versions of my bio.",
  "/contact": "I usually respond within 24 hours!",
  "/resume": "Paste a job description to see how I fit the role."
};

const AIAssistant = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Show tip after 2 seconds on a new page
    const timer = setTimeout(() => {
      const tip = TIPS[location.pathname];
      if (tip) {
        setMessage(tip);
        setShow(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-white border border-brand-primary/20 shadow-2xl rounded-2xl p-4 max-w-xs flex items-start space-x-3">
        <div className="bg-gradient-to-br from-brand-primary to-brand-accent p-2 rounded-full shadow-lg">
            <HiSparkles className="text-white h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-900 mb-1">AI Assistant</h4>
          <p className="text-sm text-gray-600 leading-snug">{message}</p>
        </div>
        <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-gray-600"
        >
            <HiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
