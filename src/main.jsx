import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home.jsx";
import FeatureSection from "./pages/Features/FeatureSection.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import TestimonialSection from "./pages/TestimonialSection.jsx";
import Help from "./pages/Help/Help";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeatureSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<TestimonialSection />} />
        <Route path="/help" element={<Help />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
