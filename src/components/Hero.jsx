import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const languages = [
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de',
  },
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
];



const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [centerOffsetY, setCenterOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const windowHeight = window.innerHeight;
      const contentHeight = document.body.clientHeight;
      const centerY = (contentHeight - windowHeight) / 2;
      setCenterOffsetY(centerY);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
export default function MultiLang() {
  const currentLanguageCode = cookies.get('i18next') || 'de'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  const isRTL = t('dir') === 'rtl';

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <section className={`w-full h-screen mx-auto`}>
      <div
  className={`absolute inset-0 top-[120px] w-full ${styles.paddingX} ${
    isRTL ? 'flex-row-reverse' : 'flex-row'
  } items-start gap-5`}
>
  <div className={`w-full h-screen ${isRTL ? 'ml-2' : 'mr-2'} ${
    isRTL ? 'flex-row-reverse' : 'flex-row'
  }`}>
    <h1
      className={`${styles.heroHeadText} text-secondary ${
        isRTL ? 'text-right' : 'text-left'
      } ${isRTL ? 'ml-2' : 'mr-2'}`}
    >
      {t('welcome_message')}
      <br className='sm:block hidden' /> 
      <span className='text-yellowgreen'>Planet Gaia</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-secondary ${
        isRTL ? 'text-right' : 'text-left'
      } ${isRTL ? 'ml-2' : 'mr-2'}`}>
      {t('Slogan1')} <br className='sm:block hidden' />
      {t('Slogan2')}
    </p>
  </div>
</div>
    </section>
  );
          }


