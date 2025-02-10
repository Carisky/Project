import React from 'react';
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function TopList() {

  const theme = useTheme();

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };
  
  const textTwoStyles = {
    color: theme.secondaryText,
    fontSize: "14px",
    fontFamily: "Montserrat",
  };

  const boxStyle = {
    margin: "10px 0px 10px 0px",
    borderBottom: "2px solid",
    borderColor: "divider",
    display: "flex",
    alignItems: "center",
  }
  
  return (
    <Box sx={{
      margin: "10px 30px 0px 30px",
    }}>
      <Box sx={boxStyle}>
        <Box>
          <img height={65} width={65} src="/images/qrcode.png"></img>
        </Box>
        <Box>
          <Typography sx={textOneStyles}>Назва товару</Typography>
          <Typography sx={textTwoStyles}>Кількість переглядів</Typography>
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box>
          <img height={65} width={65} src="/images/qrcode.png"></img>
        </Box>
        <Box>
          <Typography sx={textOneStyles}>Назва товару</Typography>
          <Typography sx={textTwoStyles}>Кількість переглядів</Typography>
        </Box>
      </Box>
      <Box sx={{
        borderColor: "divider",
        display: "flex",
        margin: "10px 0px 10px 0px",
        alignItems: "center",
      }}>
        <Box>
          <img height={65} width={65} src="/images/qrcode.png"></img>
        </Box>
        <Box>
          <Typography sx={textOneStyles}>Назва товару</Typography>
          <Typography sx={textTwoStyles}>Кількість переглядів</Typography>
        </Box>
      </Box>
    </Box>
    )
}