import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticleList({ Title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");
  return (
    <>
    {isMobile &&
      <Box sx={{
        width:"100%",
        marginTop: "10px",
        marginBottom: "10px",
      }}>
        <Box display="flex" justifyContent="space-between">
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
        }}>
          <ButtonBase sx={{
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
    }
    {isDesktop &&
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
    }
    </>
  );
}
