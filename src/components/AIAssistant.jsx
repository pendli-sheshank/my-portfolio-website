// src/components/AIAssistant.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiSparkles, HiX } from "react-icons/hi";

const TIPS = {
  "/": "Welcome! I'm a Java Full Stack Developer at Centene Corporation. Check out my Projects or Resume page!",
  "/projects": "These are real projects from my work at Centene & Accenture. Hover over cards to get AI-powered recommendations!",
  "/about": "Try the 'Generate Bio' button to see different versions of my professional summary.",
  "/contact": "I'm available for full-time roles and contract work. I typically respond within 24 hours!",
  "/resume": "Paste a job description to see exactly which of my skills match your requirements.",
};

const AIAssistant = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
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
        <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-2 rounded-full shadow-lg flex-shrink-0">
          <HiSparkles className="text-white h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-900 mb-1">Portfolio Assistant</h4>
          <p className="text-sm text-gray-600 leading-snug">{message}</p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
        >
          <HiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
