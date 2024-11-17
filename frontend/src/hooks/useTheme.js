import { useEffect, useState } from 'react';


const palete = {
  light: {
    mainColor: "#886FFB",
    secondaryColor: "#FE7411",
    background: "#F5F0ED",
    mainText: "#2B2B2B",
    secondaryText: "#808080",
    accentText: "#FF2A2A",
  },
  dark: {
    mainColor: "#3A2987",
    secondaryColor: "#FE7411",
    background: "#F5F0ED",
    mainText: "#2B2B2B",
    secondaryText: "#808080",
    accentText: "#FF2A2A",
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;

        console.log(prefersDark)
    const updateTheme = () => {
      setTheme(prefersDark ? 'dark' : 'light');
    };
    

    
    updateTheme();
    
    return () => {
    };
  }, []);
  return palete[theme]; 
};

export default useTheme;