import React from 'react'
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import FormHeader from "../components/LoginForm/Helpers/FormHeader";
import LoginFormField from "../components/LoginForm/LoginFormField/LoginFormField";
import { Box, Typography, Link } from "@mui/material";
import LoginFormButton from "../components/LoginForm/LoginFormButton/LoginFormButton";
import GoogleAuthButton from "../components/LoginForm/GoogleAuthButton/GoogleAuthButton";
import palete from "../palete";
import PasswordRecoveryField from "../components/LoginForm/PasswordRecovery/PasswordRecoveryField";

import { loginUser, registerUser, recoverPassword } from "../API/services/userService";

export default function AuthPage() {

  const [formType, setFormType] = useState("login");
  const [headerText, setHeaderText] = useState("Вхід");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    code: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    code: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Убираем ошибку
  };

  const handleLogin = async () => {
    try {
      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });
  
      const token = result.token; // Получаем токен из ответа бэка
      localStorage.setItem("authToken", token); // Сохраняем в localStorage
  
      console.log("Logged in:", result);
      // Можно сделать редирект или обновление состояния
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors({
        email: errorData.email || "Invalid email",
        password: errorData.password || "Invalid password",
      });
      console.error("Login failed:", errorData);
    }
  };
  

  const handleRegister = async () => {
    try {
      const result = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log("Registered:", result);
      // Дальнейшие действия: редирект или уведомление об успехе
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors({
        email: errorData.email || "Invalid email",
        password: errorData.password || "Invalid password",
        name: errorData.name || "Invalid name",
      });
      console.error("Registration failed:", errorData);
    }
  };

  const handlePasswordRecover = async () => {
    try {
      const result = await recoverPassword({ code: formData.code });
      console.log("Recovery success:", result);
      // Дальнейшие действия: редирект или уведомление об успехе
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors({
        code: errorData.code || "Invalid recovery code",
      });
      console.error("Recovery failed:", errorData);
    }
  };

  const handleFormSwitch = (type) => {
    setFormType(type);
    setHeaderText(
      type === "login" ? "Вхід" : type === "register" ? "Реєстрація" : "Відновлення паролю"
    );
    setErrors({ email: "", password: "", name: "", code: "" });
  };

  const renderFields = () => {
    switch (formType) {
      case "login":
        return (
          <>
            <LoginFormField
              label="Email"
              error={errors.email}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <LoginFormField
              label="Password"
              error={errors.password}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
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
                Не маєте акаунту? Зареєструватися
              </Link>
            </Typography>
          </>
        );
      case "register":
        return (
          <>
            <LoginFormField
              label="Name"
              error={errors.name}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <LoginFormField
              label="Email"
              error={errors.email}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <LoginFormField
              label="Password"
              error={errors.password}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
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
            <PasswordRecoveryField
              value={formData.code}
              error={errors.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
            />
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

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
