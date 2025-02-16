import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import FormNewArticle from "./FormNewArticle.jsx";
import FormCotegory from "./FormCotegory.jsx";
import { addSellerArticle } from "../../API/services/sellerService.js";

const steps = ["Крок 1", "Крок 2", "Крок 3"];

export default function AddArticle() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  const textTwoStyles = {
    color: theme.secondaryText,
    fontSize: "16px",
    fontFamily: "Montserrat",
  };

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("Ви не можете пропустити крок, який є обов'язковим.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prev) => {
      const newSkipped = new Set(prev.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  // Изменённые ключи формы согласно ожиданиям бекенда
  const [errors, setErrors] = useState({
    name: "",
    category_id: "",
    price: "",
    amount: "",
    description: "",
    tags: "",
    photos: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price: "",
    amount: "",
    description: "",
    tags: "",
  });

  // Состояние для файлов (фото)
  const [photos, setPhotos] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Обработчик для file input (имя поля = "photos")
  const handleFileChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  // Обработчик отправки формы с использованием сервиса addSellerArticle
  const handleRegister = async () => {
    console.log("Form Data:", formData);
    try {
      // Формируем FormData с нужными ключами
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("amount", formData.amount);
      payload.append("category_id", formData.category_id);
      payload.append("price", formData.price);
      payload.append("description", formData.description);
      payload.append("tags", formData.tags);

      photos.forEach((file) => {
        payload.append("photos", file);
      });

      const result = await addSellerArticle(
        payload,
        localStorage.getItem("authToken")
      );
      console.log("Registered:", result);
      // Дальнейшие действия: редирект или уведомление об успехе
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors({
        name: errorData.name || "Invalid name",
        category_id: formData.category_id || "Invalid category",
        price: formData.price || "Invalid price",
        amount: formData.amount || "Invalid amount",
        description: formData.description || "Invalid description",
        tags: formData.tags || "Invalid tags",
        photos: "Product photos are required",
      });
      console.error("Registration failed:", errorData);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box
            sx={{
              height: "100%",
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-around",
            }}
          >
            <Box>
              <Typography sx={textOneStyles}>Введіть назву товару</Typography>
              <FormNewArticle
                label="Назва"
                error={errors.name}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Box>
            <Box>
              <FormCotegory
                error={errors.category_id}
                onChange={(selectedCategory) => {
                  handleInputChange("category_id", selectedCategory);
                }}
              />
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box
            sx={{
              height: "100%",
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-around",
            }}
          >
            <Box>
              <Typography sx={textOneStyles}>Характеристики</Typography>
              <FormNewArticle
                label="Ціна, ₴"
                error={errors.price}
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
              />
              <FormNewArticle
                label="Кількість"
                error={errors.amount}
                value={formData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
              />
              <FormNewArticle
                label="Теги (через запяту)"
                error={errors.tags}
                value={formData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
              />
            </Box>
            <Box>
              <Typography sx={textOneStyles}>Опишіть товар</Typography>
              <TextField
                id="outlined-multiline-static"
                label="Опис товару"
                error={Boolean(errors.description)}
                value={formData.description}
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ height: "100%", width: "90%" }}>
            <Typography sx={textOneStyles}>Додайте фото товару</Typography>
            <input type="file" name="photos" multiple onChange={handleFileChange} />
          </Box>
        );
      default:
        return null;
    }
  };

  const renderNavigation = () => {
    if (activeStep === steps.length) {
      return (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleReset}>
            <Typography sx={textTwoStyles}>Повторити</Typography>
          </Button>
        </Box>
      );
    }
    return (
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          <Typography sx={textTwoStyles}>Назад</Typography>
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            <Typography sx={textTwoStyles}>Пропустити крок</Typography>
          </Button>
        )}
        {activeStep === steps.length - 1 ? (
          <Button onClick={handleRegister}>Готово</Button>
        ) : (
          <Button onClick={handleNext}>Далі</Button>
        )}
      </Box>
    );
  };

  if (isMobile) {
    return <Box>Mobile version not implemented yet</Box>;
  }

  return (
    <>
      {isDesktop && (
        <>
          <Box sx={{ width: "95%", margin: "10px" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          <Box sx={{ height: "80%", width: "90%", margin: "10px" }}>
            {renderStepContent(activeStep)}
          </Box>
          <Box sx={{ width: "90%" }}>{renderNavigation()}</Box>
        </>
      )}
    </>
  );
}
