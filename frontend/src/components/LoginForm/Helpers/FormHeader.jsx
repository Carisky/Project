import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../../hooks/useTheme";
import { CloseBtn } from "../../../icons/icons.jsx";

export default function FormHeader(props) {
  const theme = useTheme();
  return (
    <Box sx={{
      margin: "5px 5px 5px 5px",
      display: "flex",
      justifyContent: "space-between",
    }}>
      <Typography sx={{
        fontFamily: "Montserrat",
        fontSize: "33px",
        color: theme.mainText,
      }}>
        {props.title}
      </Typography>
      <Box onClick={props?.onClose} sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <CloseBtn/>
      </Box>
    </Box>
  );
}
