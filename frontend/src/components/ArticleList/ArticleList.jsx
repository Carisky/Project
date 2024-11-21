import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme";
import ArticleCarousel from "../ArticleCarousel/ArticleCarousel";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({ Title }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "550px",
        backgroundColor: theme.mainColor,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "232px",
        }}
      >
        <Typography
          sx={{
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
      </ArticleCarousel>
    </Box>
  );
}
