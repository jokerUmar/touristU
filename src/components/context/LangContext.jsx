import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [langData, setLangData] = useState("uz");

  return (
    <LangContext.Provider value={{ langData, setLangData }}>
      {children}
    </LangContext.Provider>
  );
};
