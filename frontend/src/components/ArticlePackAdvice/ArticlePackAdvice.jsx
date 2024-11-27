import React from "react";
import { Box, Typography } from '@mui/material';
import ArticleCard from "../ArticleCard/ArticleCard";
import { LogoAdvice } from "../../images/LogoAdvice";
import { LogoAdvice2 } from "../../images/LogoAdvice2";
import useTheme from "../../hooks/useTheme";


export default function ArticlePackAdvice({ Title }) {

  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: "10px",
        marginBottom: "10px",
        width:"82%",
        margin:"auto",
      }}
    >
      <Box
        sx={{
          height: "177px",
          width: "882px",
          margin:"auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position:"relative",
        }}
      >
        <Box sx={{
          position:"absolute",
          left:"5px",
          top:"-5px",
          opacity:1,
        }}>
          <LogoAdvice></LogoAdvice>
        </Box>
        <Box sx={{
          position:"absolute",
          right:"-10px",
          bottom:"-15px",
          opacity:1,
        }}>
          <LogoAdvice2></LogoAdvice2>
        </Box>
        
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            height: "94px",
            width: "746px",
            margin:"auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.7)",
            zIndex:1,
            opacity:1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "685",
            }}
          >
            {Title}
          </Typography>
        </Box>
      </Box>
      
      <Box display="flex" justifyContent="space-between">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Box>

    </Box>
  );
}