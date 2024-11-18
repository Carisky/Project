import React from "react";
import LoginFormField from "../components/LoginForm/LoginFormField/LoginFormField";
import { Box, Typography } from "@mui/material";
import LoginFormButton from "../components/LoginForm/LoginFormButton/LoginFormButton";
import GoogleAuthButton from "../components/LoginForm/GoogleAuthButton/GoogleAuthButton";
import palete from "../palete";

export default function AuthPage() {
  return (
    <Box
      sx={{
        backgroundColor: palete.light.secondaryText,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "25px",
          width: "430px",
          height: "395px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "370px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "33px",
              fontFamily: "Montserrat",
            }}
          >
            ВХІД
          </Typography>
          <img src="/images/CloseBtn.svg"></img>
        </Box>
        <LoginFormField label={"Email"}></LoginFormField>
        <LoginFormField label={"Password"}></LoginFormField>
        <LoginFormButton></LoginFormButton>
        <Box>
          <Typography>або</Typography>
        </Box>
        <GoogleAuthButton></GoogleAuthButton>
      </Box>
    </Box>
  );
}
