import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme.js";
import ArticleCarousel from "./ArticleCarousel/ArticleCarousel.jsx";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticleList({ Title, articles }) {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");

  return (
    <>
      {isMobile &&
        <Box
        sx={{
          minHeight: "600px",
          width:"100%",
          backgroundColor: theme.mainColor,
          marginTop: "10px",
          marginBottom: "10px",
          paddingTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Ubuntu",
              fontSize: "36px",
              fontWeight: "500",
              margin: "0px 10px 10px 15px",
            }}
          >
            {Title}
          </Typography>
        </Box>
        <ArticleCarousel articles={articles}></ArticleCarousel>
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
        <ArticleCarousel articles={articles}></ArticleCarousel>
      </Box>}
    </>
  );
}
