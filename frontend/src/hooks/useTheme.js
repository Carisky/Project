import { useEffect, useState } from 'react';


const palete = {
  light: {
    mainColor: "#9283FF",
    secondaryColor: "#FE7411",
    background: "#F5F0ED",
    plainText:"#FFFFF",
    mainText: "#2B2B2B",
    secondaryText: "#808080",
    accentText: "#FF2A2A",
    backgroundText: "lightgray",
    orangeColor: "#FF8C3A",
    deepOrangeColor: "#E55F00",
    usualMainColor: "#7061EA",
    deepMainColor: "#5446C6",
    darkMainColor: "#2E2166",
    iconColor: "black",
    loginForm:{
      loginFormButton:{
        mainColor:"#9283FF",
        hoverColor:"#7061EA",
        pressedColor:"#5446C6",
      },
      loginGoogleFormButton:{
        mainColor:"#F4F3F3",
      }
    },
    cartNotificationFillColor:"#886FFB",
    buttonColor: "#F1F1F5",
  },
  dark: {
    mainColor: "#3A2987",
    secondaryColor: "#FE7411",
    background: "#050046",
    plainText:"#000000",
    mainText: "#FFFFFF",
    secondaryText: "#F5F0ED",
    accentText: "#FF2A2A",
    backgroundText: "#2E2A6E",
    orangeColor: "#FF8C3A",
    deepOrangeColor: "#E55F00",
    usualMainColor: "#7061EA",
    deepMainColor: "#5446C6",
    darkMainColor: "#2E2166",
    iconColor: "white",
    loginForm:{
      loginFormButton:{
        mainColor:"#9283FF",
        hoverColor:"#7061EA",
        pressedColor:"#5446C6",
      },
      loginGoogleFormButton:{
        mainColor:"#F4F3F3",
      }
    },
    cartNotificationFillColor:"#886FFB",
    buttonColor: "#6863A9",
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;
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