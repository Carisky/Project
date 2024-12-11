import { Box } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme";
import SocialMedia from "./SocialMedia/SocialMedia";
import FAQ from "./FAQ/FAQ";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function Footer() {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  return (
    <>
    {isMobile &&
    <Box sx={{
      width: "100%",
      backgroundColor: theme.mainColor,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "20px",
    }}>
      <FAQ></FAQ>
      <SocialMedia></SocialMedia>
    </Box>
    }
    {isDesktop &&
    <Box sx={{
      width: "100%",
      height: "295px",
      backgroundColor: theme.mainColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <SocialMedia></SocialMedia>
      <FAQ></FAQ>
    </Box>
    }
    </>
  );
}
