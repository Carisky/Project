import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function ProductCharacteristic({ characteristic }) {
  const theme = useTheme();

  const keyStyle = {
    color: theme.secondaryText,
    fontFamily: "Libre Franklin",
    fontSize: "16px",
  };

  const valueStyle = {
    marginLeft: "5px",
    color: theme.mainText,
    fontFamily: "Libre Franklin",
    fontWeight: "bold",
    fontSize: "16px",
  };
  
  return (
    <Box sx={{ marginLeft: "15px", }}>
        <Box sx={{ display: "flex", alignItems: "end" }}>
            <Typography sx={keyStyle}>{characteristic.key}</Typography>
            <Typography sx={valueStyle}>{characteristic.value}</Typography>
        </Box>
    </Box>
  );
}
