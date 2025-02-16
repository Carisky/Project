import * as React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import useTheme from "../../hooks/useTheme";
import FormNewArticle from "./FormNewArticle.jsx";
import { useState } from "react";
import FormCotegory from "./FormCotegory.jsx";

const steps = ['Крок 1', 'Крок 2', 'Крок 3'];

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

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
        return step === 1;
    };
  
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
  
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("Ви не можете пропустити крок, який є обов'язковим.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };

    const [errors, setErrors] = useState({
        name: "",
        category: "",
        price: "",
        weight: "",
        size: "",
        color: "",
        material: "",
        description: "",
        foto: "",
    });
    
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        weight: "",
        size: "",
        color: "",
        material: "",
        description: "",
        foto: "",
    });
    
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: "" }); // Убираем ошибку
    };

    const registerProduct = async (data) => {
        const response = await apiHandler.post('/users/register', data);
        return response.data;
    };

    const handleRegister = async () => {
        console.log("name:", formData.name);
        console.log("category:", formData.category);
        console.log("price:", formData.price);
        console.log("weight:", formData.weight);
        console.log("size:", formData.size);
        console.log("color:", formData.color);
        console.log("material:", formData.material);
        console.log("description:", formData.description);
        console.log("foto:", formData.foto);

        try {
            const result = await registerProduct({
                name: formData.name,
                category: formData.category,
                price: formData.price,
                weight: formData.weight,
                size: formData.size,
                color: formData.color,
                material: formData.material,
                description: formData.description,
                foto: formData.foto,
            });
            console.log("Registered:", result);
            // Дальнейшие действия: редирект или уведомление об успехе
        } catch (error) {
            const errorData = error.response?.data || {};
            setErrors({
                name: errorData.name || "Invalid name",
                category: formData.category || "Invalid category",
                price: formData.price || "Invalid price",
                weight: formData.weight || "Invalid weight",
                size: formData.size || "Invalid size",
                color: formData.color || "Invalid color",
                material: formData.material || "Invalid material",
                description: formData.description || "Invalid description",
                foto: formData.foto || "Invalid foto",
            });
            console.error("Registration failed:", errorData);
        }
    };
  
    return (
        <>
            {isDesktop &&
                <>
                <Box sx={{ width: '95%', margin: "10px 10px 10px 10px", }}>
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
                            })
                        }
                    </Stepper>
                </Box>
                <Box sx={{
                    height: "80%",
                    width: "90%",
                    margin: "10px 10px 10px 10px",
                }}>
                    { activeStep === steps.length - 3 ? (
                        <React.Fragment>
                            <Box sx={{
                                height: "100%",
                                width: "90%",
                                display: "flex",
                                flexWrap: "wrap",
                                alignContent: "space-around",
                            }}>
                                <Box>
                                    <Typography sx={textOneStyles}>Введіть назву товару</Typography>
                                    <FormNewArticle
                                    label="NameProduct"
                                    error={errors.name}
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <FormCotegory error={errors.category} onChange={(e) => handleInputChange("category", e.target.value)}/>
                                </Box>
                            </Box>
                        </React.Fragment>
                        ) : (<React.Fragment></React.Fragment>)
                    }
                    { activeStep === steps.length - 2 ? (
                        <React.Fragment>
                            <Box sx={{
                                height: "100%",
                                width: "90%",
                                display: "flex",
                                flexWrap: "wrap",
                                alignContent: "space-around",
                            }}>
                                <Box>
                                    <Typography sx={textOneStyles}>Характеристики</Typography>
                                    <FormNewArticle
                                    label="Ціна, ₴"
                                    error={errors.price}
                                    value={formData.price}
                                    onChange={(e) => handleInputChange("price", e.target.value)}
                                    />
                                    <FormNewArticle
                                    label="Вага, кг"
                                    error={errors.weight}
                                    value={formData.weight}
                                    onChange={(e) => handleInputChange("weight", e.target.value)}
                                    />
                                    <FormNewArticle
                                    label="Розмір, см"
                                    error={errors.size}
                                    value={formData.size}
                                    onChange={(e) => handleInputChange("size", e.target.value)}
                                    />
                                    <FormNewArticle
                                    label="Колір"
                                    error={errors.color}
                                    value={formData.color}
                                    onChange={(e) => handleInputChange("color", e.target.value)}
                                    />
                                    <FormNewArticle
                                    label="Матеріал"
                                    error={errors.material}
                                    value={formData.material}
                                    onChange={(e) => handleInputChange("material", e.target.value)}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={textOneStyles}>Опишіть товар</Typography>
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Multiline"
                                    error={errors.description}
                                    value={formData.description}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    onChange={(e) => handleInputChange("description", e.target.value)}
                                    />
                                </Box>
                            </Box>
                        </React.Fragment>
                        ) : ( <React.Fragment></React.Fragment> )
                    }
                    { activeStep === steps.length - 1 ? (
                        <React.Fragment>
                            <Box sx={{
                                height: "100%",
                                width: "90%"
                            }}>
                                <Typography sx={textOneStyles}>Додайте фото</Typography>
                                
                                <input type='file' value={formData.foto}
                                onChange={(e) => handleInputChange("foto", e.target.value)}/>
                            </Box>
                        </React.Fragment>
                        ) : ( <React.Fragment></React.Fragment> )
                    }
                </Box>
                <Box sx={{
                    width: "90%",
                }}>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}> Товар успішно додано! </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}><Typography sx={textTwoStyles}>Повторити</Typography></Button>
                            </Box>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, }}>
                                <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                                >
                                    <Typography sx={textTwoStyles}>Назад</Typography>
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        <Typography sx={textTwoStyles}>Пропустити крок</Typography>
                                    </Button> )
                                }
                                {activeStep === steps.length - 1 ?
                                    ( <Button onClick={handleRegister}>Готово</Button> ) : ( <Button onClick={handleNext}>Далі</Button> )
                                }
                            </Box>
                        </React.Fragment> )}
                </Box>
            </>
            }
            {isMobile &&
                <></>
            }
        </>
  );
}