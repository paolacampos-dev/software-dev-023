import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

//TODO: I want react router to be available in my App
//provider --> BrowserRouter
//we are nesting app within BrowserRouter, so App has access to teh react router tools

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
