import { createContext, useContext, useState } from 'react';

const languageContext = createContext('german');

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('german');
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(languageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}