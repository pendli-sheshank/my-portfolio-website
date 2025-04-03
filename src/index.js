// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// --- Corrected basename calculation ---
// Directly use PUBLIC_URL provided by CRA, or default to '/' if it's empty (like in development)
const basename = process.env.PUBLIC_URL || "/";

console.log(`Using basename: ${basename}`); // Optional: check the value

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Pass the corrected basename */}
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
