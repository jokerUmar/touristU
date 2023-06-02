import { createContext, useState } from "react";

export const ArrayDataContext = createContext();

export const ArrayDataProvider = ({ children }) => {
  const [arrayData, setArrayData] = useState([]);
  return (
    <ArrayDataContext.Provider value={{ arrayData, setArrayData }}>
      {children}
    </ArrayDataContext.Provider>
  );
};
