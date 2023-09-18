import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./components/App";
import { Costream } from "./components";
import { Cotabelle } from "./components";
import { Impressum } from "./components";
import { Datenschutz } from "./components";
import { Navbar } from "./components";



function MainApp() {
  return (
    
    <div className="w-full relative bg-lightgrey2">
      <Navbar />
      
      <div className="w-full relative bg-lightgrey2">
        
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/costream" element={<Costream />} />
          <Route path="/co2tabelle" element={<Cotabelle />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* Weitere Routen hinzufügen, falls erforderlich */}
        </Routes>
        
      </div>
      
      <footer className="w-full bg-white text-black text-center absolute bottom-0">
        <div className="nav">
          <div className="flex justify-between p-1">
            <div className="nav">
              <Link to="/impressum" className="footer-link">
                Impressum
              </Link>
              <Link to="/datenschutz" className="footer-link">
                Datenschutz
              </Link>
            </div>
            <div className="text-right">
              {/* Hier Icons oder Links zu Social Media Plattformen einfügen */}
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default MainApp;
