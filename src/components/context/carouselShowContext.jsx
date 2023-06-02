import { createContext, useState } from "react";

export const CarouselShowContext = createContext();

export const CarouselShowProvider = ({ children }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  return (
    <CarouselShowContext.Provider value={{ goToSlide, setGoToSlide }}>
      {children}
    </CarouselShowContext.Provider>
  );
};
