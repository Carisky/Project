import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme";
import ArticleCarousel from "../ArticleCarousel/ArticleCarousel";

export default function ArticleList({ Title, articles }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "550px",
        width: "82%",
        margin: "auto",
        backgroundColor: theme.mainColor,
        display: "flex",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
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
      <ArticleCarousel articles={articles}></ArticleCarousel>
    </Box>
    </Box>
  );
}
