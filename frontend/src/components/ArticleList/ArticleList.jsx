import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme";
import ArticleCarousel from "../ArticleCarousel/ArticleCarousel";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticleList({ Title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery("(min-width: 500.01px)");
  const isDesktop = useMediaQuery("(min-width: 1800px)");
  return (
    <>
      {isMobile &&
        <Box
        sx={{
          height: "630px",
          width:"95%",
          margin:"auto",
          backgroundColor: theme.mainColor,
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            width: "95%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "500",
            }}
          >
            {Title}
          </Typography>
        </Box>
        <ArticleCarousel>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
        </ArticleCarousel>
      </Box>}
      {isTablet &&
        <Box
        sx={{
          height: "550px",
          width:"82%",
          margin:"auto",
          backgroundColor: theme.mainColor,
          display: "flex",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            width: "232px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "500",
            }}
          >
            {Title}
          </Typography>
        </Box>
        <ArticleCarousel>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
        </ArticleCarousel>
      </Box>}
      {isDesktop && 
        <Box
        sx={{
          height: "550px",
          width:"82%",
          margin:"auto",
          backgroundColor: theme.mainColor,
          display: "flex",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            width: "232px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Ubuntu",
              fontSize: "52px",
              fontWeight: "500",
            }}
          >
            {Title}
          </Typography>
        </Box>
        <ArticleCarousel>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
        </ArticleCarousel>
      </Box>}
    </>
  );
}
