import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import PreferencesPage from "./domains/preferences/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferencias" element={<PreferencesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
