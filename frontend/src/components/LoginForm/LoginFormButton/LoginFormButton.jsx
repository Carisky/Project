import { Button } from "@mui/material";
import React from "react";
import useTheme from "../../../hooks/useTheme";

export default function LoginFormButton({onClick}) {
  const theme = useTheme();

  return (
    <Button onClick={onClick}
      sx={{
        fontFamily:"Montserrat",
        marginTop: "10px",
        width: "380px",
        height: "48px",
        borderRadius: "10px",
        backgroundColor: theme.loginForm.loginFormButton.mainColor,
        "&:hover": {
          backgroundColor: theme.loginForm.loginFormButton.hoverColor,
        },
        "&:active": {
          backgroundColor: theme.loginForm.loginFormButton.pressedColor,
        },
      }}
      variant="contained"
    >
      Увійти
    </Button>
  );
}
