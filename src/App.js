import React from "react";
import "./App.css";

import SplashPage from "../src/components/splashpage/splashpage";
import Portfolio from "./components/portfolio/portfolio";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SplashPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
