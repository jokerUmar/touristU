import { createContext, useState } from "react";

export const SummaContext = createContext();

export const SummaProvider = ({ children }) => {
  const [reducer, setReducer] = useState(0);

  return (
    <SummaContext.Provider value={{ reducer, setReducer }}>
      {children}
    </SummaContext.Provider>
  );
};
