import { Box, Typography } from "@mui/material";
import React from "react";

export default function Filter({ onClick, Text, icon }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: "#F1F1F5",
        height: "38px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {icon}
        <Typography
          sx={{
            marginLeft: "10px",
          }}
        >
          {Text}
        </Typography>
        <Box
          sx={{
            marginLeft: "10px",
            marginRight: "5px",
          }}
        >
          <img src="./images/DropDownArrow.svg"></img>
        </Box>
      </Box>
    </Box>
  );
}
