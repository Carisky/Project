import { Box, Typography } from "@mui/material";
import React from "react";

export default function FormHeader({ text, onClose }) {
  return (
    <Box
      sx={{
        width: "380px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "33px",
        }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClose}
      >
        <img src="./images/CloseBtn.svg" alt="Close" />
      </Box>
    </Box>
  );
}
