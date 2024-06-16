import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";  // Ensure this is the correct path to your App component
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
