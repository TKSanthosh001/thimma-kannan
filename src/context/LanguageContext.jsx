import React, { createContext, useContext, useState, useEffect } from 'react';
import { ta } from '../locales/ta';
import { en } from '../locales/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language MUST BE Tamil ('ta') per prompt rules
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('tk_lang');
    return saved === 'en' ? 'en' : 'ta';
  });

  const t = lang === 'en' ? en : ta;

  useEffect(() => {
    localStorage.setItem('tk_lang', lang);
    // Update HTML lang tag for SEO & accessibility
    document.documentElement.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ta' ? 'en' : 'ta'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
