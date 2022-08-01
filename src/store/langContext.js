import React, { useState } from "react";

export const languageContext = React.createContext({
  language: Boolean,
  switchLang: () => {},
});

export const LanguageContextProvider = (props) => {
  const [lang, setlang] = useState(false);

  const switchLanguage = () => {
    setlang(!lang);
  };

  const contextValue = {
    language: lang,
    switchLang: switchLanguage,
  };

  return (
    <languageContext.Provider value={contextValue}>
      {props.children}
    </languageContext.Provider>
  );
};

export default languageContext;
