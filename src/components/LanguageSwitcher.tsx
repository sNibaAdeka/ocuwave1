import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-blue-100">
      <button
        onClick={() => handleLanguageChange('ru')}
        className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ${
          language === 'ru'
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        RU
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-full font-semibold text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
