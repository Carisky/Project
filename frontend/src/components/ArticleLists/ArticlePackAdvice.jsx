import React from "react";
import { Box, Typography } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import { LogoAdvice, LogoAdvice2 } from "../../icons/icons.jsx";
import useTheme from "../../hooks/useTheme.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticlePackAdvice({ Title, articles }) {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "177px",
              width: "90%",
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
                borderRadius: "16px",
                height: "84px",
                width: "70%",
                margin: "auto",
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
                  fontSize: "24px",
                  fontWeight: "700",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                РЕКОМЕНДАЦІЇ
              </Typography>
              <Typography
                sx={{
                  color: theme.secondaryColor,
                  fontFamily: "Ubuntu",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginTop: "-5px",
                  textAlign: "center",
                }}
              >
                ДЛЯ ТЕБЕ
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%" marginBottom="10px">
            {articles.slice(0, 2).map((article) => {
              return <ArticleCard article={article} key={article.id} />;
            })}
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%" marginBottom="10px">
            {articles.slice(2, 4).map((article) => {
              return <ArticleCard article={article} key={article.id} />;
            })}
          </Box>
        </Box>
      )}
      {isDesktop && (
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
              >
                РЕКОМЕНДАЦІЇ
              </Typography>
              <Typography
                sx={{
                  color: theme.secondaryColor,
                  fontFamily: "Ubuntu",
                  fontSize: "52px",
                  fontWeight: "685",
                }}
              >
                ДЛЯ ТЕБЕ
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between">
            {articles.slice(0, 4).map((article) => {
              return <ArticleCard article={article} key={article.id} />;
            })}
          </Box>
        </Box>
      )}
    </>
  );
}
