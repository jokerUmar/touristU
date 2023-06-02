import { createContext , useState } from "react";

export const BarsContext = createContext()

export const BarsProvider = ({children}) =>{
    
    const [bars, setBars] = useState(true);
  
    return <BarsContext.Provider value={{bars,setBars}}>
        {children}
    </BarsContext.Provider>
}