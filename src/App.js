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
        {/* Pass SmartSearch as a child or handle layout in Navbar */}
        <Navbar listOfOptions={["Home", "About", "Projects", "Resume", "Contact"]} />

        {/* We can inject SmartSearch into Navbar or place it here if Navbar accepts children.
            For now, let's assume Navbar is updated to include SmartSearch or we place it in layout.
            Actually, let's update Navbar to include SmartSearch inside it.
        */}

        <main className="flex-grow">
            {/* Search Bar Mobile Overlay could go here */}
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
            <p>© {new Date().getFullYear()} Sheshank Pendli. Built with React & Tailwind.</p>
        </footer>
      </div>
    </AIProvider>
  );
}

export default App;
