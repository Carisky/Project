import React, { useState } from "react";
import FormHeader from "../components/LoginForm/Helpers/FormHeader";
import LoginFormField from "../components/LoginForm/LoginFormField/LoginFormField";
import { Box, Typography, Link } from "@mui/material";
import LoginFormButton from "../components/LoginForm/LoginFormButton/LoginFormButton";
import GoogleAuthButton from "../components/LoginForm/GoogleAuthButton/GoogleAuthButton";
import palete from "../palete";
import PasswordRecoveryField from "../components/LoginForm/PasswordRecovery/PasswordRecoveryField";

export default function AuthPage() {
  const [formType, setFormType] = useState("login");
  const [headerText, setHeaderText] = useState("Вхід");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    code: "",
  });

  const handleFormSwitch = (type) => {
    setFormType(type);
    if (type === "login") setHeaderText("Вхід");
    if (type === "register") setHeaderText("Реєстрація");
    if (type === "passwordRecover") setHeaderText("Відновлення пароля");
  };

  const handleLogin = () => {
    const newErrors = { email: "", password: "" };
    if (!errors.email) newErrors.email = "Email is required";
    if (!errors.password) newErrors.password = "Password is required";
    setErrors(newErrors);
  };

  const handleRegister = () => {
    const newErrors = { email: "", password: "", name: "" };
    if (!errors.email) newErrors.email = "Email is required";
    if (!errors.password) newErrors.password = "Password is required";
    if (!errors.name) newErrors.name = "Name is required";
    setErrors(newErrors);
  };

  const handlePasswordRecover = () => {
    const newErrors = { code: "" };
    if (!errors.code) newErrors.code = "Code is required";
    setErrors(newErrors);
  };

  const renderFields = () => {
    switch (formType) {
      case "login":
        return (
          <>
            <LoginFormField label="Email" error={errors.email} />
            <LoginFormField label="Password" error={errors.password} />
            <LoginFormButton onClick={handleLogin}>Login</LoginFormButton>
            <Typography>
              <Link
                href="#"
                onClick={() => handleFormSwitch("passwordRecover")}
                underline="hover"
              >
                Забули пароль?
              </Link>
            </Typography>
            <GoogleAuthButton />
            <Typography>
              <Link
                href="#"
                onClick={() => handleFormSwitch("register")}
                underline="hover"
              >
                Не маєте Акаунту? Зареєструватися
              </Link>
            </Typography>
          </>
        );
      case "register":
        return (
          <>
            <LoginFormField label="Name" error={errors.name} />
            <LoginFormField label="Email" error={errors.email} />
            <LoginFormField label="Password" error={errors.password} />
            <LoginFormButton onClick={handleRegister}>Register</LoginFormButton>
            <Typography>
              <Link
                href="#"
                onClick={() => handleFormSwitch("login")}
                underline="hover"
              >
                Вже маєте акаунт? Вхід
              </Link>
            </Typography>
            <GoogleAuthButton />
          </>
        );
      case "passwordRecover":
        return (
          <>
            <PasswordRecoveryField />
            <LoginFormButton onClick={handlePasswordRecover}>
              Recover Password
            </LoginFormButton>
            <Typography>
              <Link
                href="#"
                onClick={() => handleFormSwitch("login")}
                underline="hover"
              >
                Назад
              </Link>
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

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
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormHeader
          text={headerText}
          onClose={() => console.log("Close clicked")}
        />
        {renderFields()}
      </Box>
    </Box>
  );
}
