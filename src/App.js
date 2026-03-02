import React from "react";
import { Routes, Route } from "react-router-dom";

import { AIProvider } from "./context/AIContext";
import Navbar from "./components/Navbar";
import SmartSearch from "./components/SmartSearch";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";
import AIAssistant from "./components/AIAssistant";

function App() {
  return (
    <AIProvider>
      <div className="App min-h-screen bg-gray-50 flex flex-col">
        <Navbar listOfOptions={["Home", "About", "Projects", "Resume", "Contact"]} />

        <main className="flex-grow">
          {/* Mobile Search */}
          <div className="md:hidden p-4 bg-white border-b">
            <SmartSearch />
          </div>

          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </main>

        <AIAssistant />

        <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
          <p className="font-medium text-gray-700 mb-1">Sheshank Pendli</p>
          <p>Java Full Stack Developer · Spring Boot & Microservices Specialist · AWS & Azure</p>
          <p className="mt-1">📍 St. Louis, MO ·{" "}
            <a href="mailto:sheshankpendli97@gmail.com" className="text-brand-primary hover:underline">
              sheshankpendli97@gmail.com
            </a>{" "}·{" "}
            <a href="https://linkedin.com/in/psheshank" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">
              LinkedIn
            </a>{" "}·{" "}
            <a href="https://github.com/pendli-sheshank" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">
              GitHub
            </a>
          </p>
          <p className="mt-3 text-gray-400">© {new Date().getFullYear()} Sheshank Pendli. Built with React & Tailwind.</p>
        </footer>
      </div>
    </AIProvider>
  );
}

export default App;
