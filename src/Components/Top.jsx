import React from 'react';
import { useLanguage } from './LanguageContext';

export const Top = () => {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <div className="change">
      {translations[language].language}
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </div>
  );
};