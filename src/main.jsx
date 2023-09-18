import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainApp from "./MainApp.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom"



i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
 
    supportedLngs: ['en','de','fr', 'ar'],
    fallbackLng: "de",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      chaches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    
  });

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )
    

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
  </Suspense>,
  
)