// =========================  LIBRARIES  =========================

import { createContext, useContext, useEffect, useState } from "react";


const NightContext = createContext();

export const useNightContext = () => useContext(NightContext);


const NightContextProvider = ({ children }) => {

  const [isNight, setIsNight] = useState("");


  // ==========  GET TIME  ========== //

  useEffect(() => {
    const today = new Date();
    let time = today.getHours();
    //  time = 20;
    // time = 11;

    if (time <= 6 || 19 <= time) {
      setIsNight("night");
    }
  }, []);


  // ==========  RETURN  ========== //

  return (
    <NightContext.Provider
      value={{
        isNight,
      }}
    >
      {children}
    </NightContext.Provider>
  );
};

export default NightContextProvider;
