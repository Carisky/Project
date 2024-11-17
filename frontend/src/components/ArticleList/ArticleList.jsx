import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const objects = [
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>,
  <ArticleCard></ArticleCard>
];

export default function ArticleList({Title,articles,isSlider}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = objects.length-3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box component="section" sx={{ 
        display:"flex",

        width: isSlider ? "91%" : "82%",
        marginLeft: isSlider ? "9%" : "auto",
        marginRight: isSlider ? "0px" : "auto",
      }}>
        <Typography sx={{
            color:"white",
            fontWeight:"bold",
            fontSize: "52px",
            fontFamily: "Ubuntu",
          }}>
          {Title}
        </Typography>
        {objects[activeStep]}{objects[activeStep+1]}{objects[activeStep+2]}{objects[activeStep+3]}</Box>

        {isSlider ? <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
                )}
                </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                        )}
                        Back
                        </Button>
                        }
                        /> : <></>}
      
    </Box>
  );
}
