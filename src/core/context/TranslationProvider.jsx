import { useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [englishTranslation, setEnglishTranslation] = useState(false);

  const { i18n } = useTranslation();

  const handleEnglish = () => {
    i18n.changeLanguage("en");
    setEnglishTranslation(true);
  };
  const handleCroation = () => {
    i18n.changeLanguage("hr");
    setEnglishTranslation(false);
  };

  return (
    <TranslationContext.Provider
      value={{
        handleEnglish,
        handleCroation,
        englishTranslation,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationOptions = () => useContext(TranslationContext);
