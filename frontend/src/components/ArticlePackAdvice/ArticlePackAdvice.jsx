import React from "react";
import { Box, Typography } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";
import { LogoAdvice } from "../../images/LogoAdvice";
import { LogoAdvice2 } from "../../images/LogoAdvice2";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticlePackAdvice({ Title, articles }) {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  return (
    <>
    {isMobile &&
      <Box
      sx={{
        marginTop: "10px",
        marginBottom: "10px",
        width:"95%",
        margin:"auto",
      }}
    >
      <Box
        sx={{
          height: "177px",
          width: "90%",
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
            width: "70%",
            margin:"auto",
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
              fontSize: "32px",
              fontWeight: "700",
              marginTop: "5px",
              marginLeft: "15px",
            }}
          >РЕКОМЕНДАЦІЇ</Typography>
          <Typography
            sx={{
              color: theme.secondaryColor,
              fontFamily: "Ubuntu",
              fontSize: "32px",
              fontWeight: "700",
              marginTop: "-15px",
              marginLeft: "15px",
            }}
          >ДЛЯ ТЕБЕ</Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Box>
    </Box>}
    {isDesktop &&
      <Box
      sx={{
        marginTop: "10px",
        marginBottom: "10px",
        width: "82%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          height: "177px",
          width: "882px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "5px",
            top: "-5px",
            opacity: 1,
          }}
        >
          <LogoAdvice></LogoAdvice>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "-10px",
            bottom: "-15px",
            opacity: 1,
          }}
        >
          <LogoAdvice2></LogoAdvice2>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            height: "94px",
            width: "746px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.7)",
            zIndex: 1,
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "685",
            }}
          >РЕКОМЕНДАЦІЇ</Typography>
          <Typography
            sx={{
              color: theme.secondaryColor,
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "685",
            }}
          >ДЛЯ ТЕБЕ</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </Box>
    </Box>}
    </>
  );
}
