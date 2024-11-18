import { useEffect, useState } from 'react';


const palete = {
  light: {
    mainColor: "#9283FF",
    secondaryColor: "#FE7411",
    background: "#F5F0ED",
    plainText:"#000000",
    mainText: "#2B2B2B",
    secondaryText: "#808080",
    accentText: "#FF2A2A",
    cartNotificationFillColor:"#886FFB",
    loginForm:{
      loginFormButton:{
        mainColor:"#9283FF",
        hoverColor:"#7061EA",
        pressedColor:"#5446C6",
      },
      loginGoogleFormButton:{
        mainColor:"#F4F3F3",
      }
    }
  },
  dark: {
    mainColor: "#3A2987",
    secondaryColor: "#FE7411",
    plainText:"#000000",
    background: "#F5F0ED",
    mainText: "#2B2B2B",
    secondaryText: "#808080",
    accentText: "#FF2A2A",
    cartNotificationFillColor:"#886FFB",
    loginForm:{
      loginFormButton:{
        mainColor:"#9283FF",
        hoverColor:"#7061EA",
        pressedColor:"#5446C6",
      },
      loginGoogleFormButton:{
        mainColor:"#F4F3F3",
      }
    }
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