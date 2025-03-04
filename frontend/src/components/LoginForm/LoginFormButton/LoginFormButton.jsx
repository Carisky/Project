import React from "react";
import { Button, Typography } from "@mui/material";
import useTheme from "../../../hooks/useTheme";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";

export default function LoginFormButton({onClick}) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 430px)");

  return (
    <Button onClick={onClick}
      sx={{
        fontFamily:"Montserrat",
        marginTop: "10px",
        marginBottom: "10px",
        width: isMobile ? "90%" : "380px",
        height: "39px",
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
      <Typography sx={{
        fontFamily: "Montserrat",
        fontSize: "22px",
        fontWeight: "500",
      }}>
        УВІЙТИ
      </Typography>
    </Button>
  );
}
