import React from "react";
import Box from "@mui/material/Box";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Typography } from "@mui/material";

const objects =[5];

export default function ArticleList({Title,articles}) {
  return (
      <Box component="section" sx={{ 
        display:"flex"
       }}>
        <Typography>
            {Title}
        </Typography>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
      </Box>
  );
}
