import { Box } from "@mui/material";
import React from "react";
import useTheme from "../../hooks/useTheme";
import SocialMedia from "./SocialMedia/SocialMedia";
import FAQ from "./FAQ/FAQ";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "295px",
        backgroundColor: theme.mainColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SocialMedia></SocialMedia>
      <FAQ></FAQ>
    </Box>
  );
}
