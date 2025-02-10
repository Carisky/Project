import * as React from 'react';
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
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
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
        price: "",
        weight: "",
        size: "",
        color: "",
        material: "",
        description: "",
    });
    
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        weight: "",
        size: "",
        color: "",
        material: "",
        description: "",
    });
    
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: "" }); // Убираем ошибку
    };

    const registerUser = async (data) => {
        const response = await apiHandler.post('/users/register', data);
        return response.data;
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
    
  
    return (
        <>
            {isDesktop &&
                <>
                    <Box sx={{
                        backgroundColor: theme.secondaryText,
                        //display: "flex",
                        //justifyContent: "center",
                        //alignItems: "center",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: "75%",
                        width: "35%",
                        bgcolor: 'background.paper',
                        borderRadius: "15px",
                        border: '2px solid #000',
                        boxShadow: 24,
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px 10px 10px 10px",
                        }}>
                            <Typography sx={textOneStyles}>Новий товар</Typography>
                            <Box //onClick={onClose}
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <img src="./images/CloseBtn.svg" alt="Close" />
                            </Box>
                        </Box>
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
                                    })}
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
                                            <FormCotegory />
                                        </Box>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment></React.Fragment>
                            ) }
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
                                                <FormNewArticle
                                                label="Опишіть основні особливості товару у кількох реченнях"
                                                error={errors.description}
                                                value={formData.description}
                                                onChange={(e) => handleInputChange("description", e.target.value)}
                                                />
                                            </Box>
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment></React.Fragment>
                                )
                            }
                            { activeStep === steps.length - 1 ? (
                                    <React.Fragment>
                                        <Box sx={{
                                            height: "100%",
                                            width: "90%",
                                        }}>
                                            <Typography sx={textOneStyles}>Додайте до 10 фотографій</Typography>
                                                <FormNewArticle
                                                label="Опишіть основні особливості товару у кількох реченнях"
                                                error={errors.description}
                                                value={formData.description}
                                                onChange={(e) => handleInputChange("description", e.target.value)}
                                                />
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment></React.Fragment>
                                )
                            }
                            </Box>
                            <Box sx={{
                                width: "90%",
                            }}>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        Товар успішно додано!
                                    </Typography>
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
                                            </Button>
                                        )}
                                        {activeStep === steps.length - 1 ?
                                        ( <Button onClick={handleRegister}>Готово</Button> ) : ( <Button onClick={handleNext}>Далі</Button> )
                                        }
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </Box>
                </>
            }
            {isMobile &&
                <></>
            }
        </>
  );
}