import React from "react";
import "./App.css";
import SplashPage from "../src/components/splashpage/splashpage";
import Portfolio from "./components/portfolio/portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div>
      <Routes
        basename={process.env.PUBLIC_URL}
        location={location}
        key={location.pathname}
      >
        <Route path="/" element={<SplashPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
