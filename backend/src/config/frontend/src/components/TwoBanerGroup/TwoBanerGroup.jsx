import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function TwoBanerGroup({
  align = "left",
  bigContainerContent,
  smallContainerContent,
  smallContainerTitle,
  bigContainerTitle,
}) {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");

  return (
    <>
      {isMobile && (
        <Box
          height="260px"
          display="flex"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box
            height="100%"
            width="100%"
            display="flex"
            justifyContent="space-between"
            sx={{
              borderRadius: "13px",
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: theme.secondaryColor,
            }}
          >
            <Box display="flex">
              <Typography
                alignItems="end"
                sx={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                }}
              >
                {bigContainerTitle}
              </Typography>
            </Box>
            {bigContainerContent}
          </Box>
        </Box>
      )}
      {isDesktop && (
        <Box
          height="260px"
          display="flex"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "82%",
            margin: "auto",
            display: "flex",
            flexDirection: align === "left" ? "row" : "row-reverse",
          }}
        >
          <Box
            height="100%"
            width="30%"
            sx={{
              borderRadius: "13px",
              backgroundColor: theme.secondaryColor,
              marginLeft: "10px",
            }}
          >
            <Typography
              alignItems="end"
              sx={{
                marginLeft: "20px",
                marginTop: "10px",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              {smallContainerTitle}
            </Typography>
            {smallContainerContent}
          </Box>
          <Box
            height="100%"
            width="70%"
            display="flex"
            justifyContent="space-between"
            sx={{
              borderRadius: "13px",
              marginLeft: "10px",
              backgroundColor: theme.secondaryColor,
            }}
          >
            
            <Box display="flex">
              <Typography
                alignItems="end"
                sx={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                }}
              >
                {bigContainerTitle}
              </Typography>
              
            </Box>
            {bigContainerContent}
          </Box>
        </Box>
      )}
    </>
  );
}
