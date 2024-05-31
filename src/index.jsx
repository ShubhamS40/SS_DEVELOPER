import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import Wheather from "pages/Wheather/Wheather";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

