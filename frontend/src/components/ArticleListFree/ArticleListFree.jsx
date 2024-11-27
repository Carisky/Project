import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({ Title }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "650px",
        width:"82%",
        margin:"auto",
        backgroundColor: theme.backgroundColor,
        marginTop: "10px",
        marginBottom: "10px",
      }}>
        <Box display="flex" justifyContent="space-between">
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
        </Box>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <ButtonBase
                sx={{
                    backgroundColor: theme.mainColor,
                    width:"232px",
                    borderRadius:"11px",
                    height:"36px",
                    marginBottom:"10px",
                    marginTop:"8px",
                }}>
                    <Typography sx={{
                        color:"white",
                        fontWeight:"bold",
                    }}>ПОКАЗАТИ ЩЕ</Typography>
            </ButtonBase>
        </Box>
    </Box>
  );
}
