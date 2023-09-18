import React, { useEffect, useState } from "react";
import { Contact, Experience, Feedbacks, Hero, Gaia, Navbar } from ".";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import backgroundImg from '../assets/herobg.png'; 

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="d-flex w-100 relative z-0 bg-lightgrey2 justify-center" style={appStyle}>
      <div style={{ position: "relative", zIndex: -1, width: '100%', alignItems: 'center', left: 0 }}>
        <Gaia  />
        <Hero scrollY={scrollY} />
        <Experience />
        <Feedbacks />
        <Contact />
      </div>
    </div>
  );
}
