import React from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import useTheme from "../../hooks/useTheme.js";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ArticleListFree({ showMore = true, Title, Articles }) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");
  return (
    <>
      {isMobile && (
        <Box
          sx={{
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Box marginTop="5px" marginBottom="5px" display="flex" justifyContent="space-evenly">
            <ArticleCard article={Articles[0]} />
            <ArticleCard article={Articles[1]} />
          </Box>
          <Box marginTop="5px" marginBottom="5px" display="flex" justifyContent="space-evenly">
            <ArticleCard article={Articles[2]} />
            <ArticleCard article={Articles[3]} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {showMore ? (
              <>
                <ButtonBase
                  sx={{
                    backgroundColor: theme.mainColor,
                    width: "232px",
                    borderRadius: "11px",
                    height: "36px",
                    marginBottom: "10px",
                    marginTop: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    ПОКАЗАТИ ЩЕ
                  </Typography>
                </ButtonBase>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      )}
      {isDesktop && (
        <Box
          sx={{
            height: "650px",
            width: "82%",
            margin: "auto",
            backgroundColor: theme.backgroundColor,
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            {Articles.slice(0, 4).map((article) => {
              return <ArticleCard article={article} />;
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {showMore ? (
              <ButtonBase
                sx={{
                  backgroundColor: theme.mainColor,
                  width: "232px",
                  borderRadius: "11px",
                  height: "36px",
                  marginBottom: "10px",
                  marginTop: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ПОКАЗАТИ ЩЕ
                </Typography>
              </ButtonBase>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
