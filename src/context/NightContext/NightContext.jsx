import { createContext, useContext, useEffect, useState} from "react";

const NightContext = createContext(false);

export const useNightContext = () => useContext(NightContext);

const NightContextProvider = ({ children }) => {
 const [isNight, setIsNight] = useState(false)

 useEffect(() => {
     const today = new Date();
     const time = today.getHours();
     // time = 20;
     // time = 11;
    
     if (time <= 6 || 19 <= time) {
        setIsNight(true);
     } 
 }, [])
 

  return (
    <NightContext.Provider
      value={{
        isNight
      }}
    >
      {children}
    </NightContext.Provider>
  );
};

export default NightContextProvider;
