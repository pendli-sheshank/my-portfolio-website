import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar listOfOptions={["Home", "Projects", "Contact"]} />{" "}
      <main>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
