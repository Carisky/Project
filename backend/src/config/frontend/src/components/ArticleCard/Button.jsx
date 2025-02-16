import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function Button() {
    
  const theme = useTheme();

  return (
    <ButtonBase
      sx={{
        backgroundColor: theme.secondaryColor,
        width:"100%",
        borderRadius:"11px",
        height:"36px",
        marginBottom:"10px",
        marginTop:"8px",
      }}
    >
      <Typography sx={{
        color:"white",
        fontWeight:"bold"
      }}>У кошик</Typography>
    </ButtonBase>
  );
}
