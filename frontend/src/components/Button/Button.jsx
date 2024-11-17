import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import palete from "../../palete";

export default function Button() {

  return (
    <ButtonBase
      sx={{
        backgroundColor: palete.light.secondaryColor,
        width:"100%",
        borderRadius:"11px",
        height:"36px",
      }}
    >
      <Typography sx={{
        color:"white",
        fontWeight:"bold"
      }}>У кошик</Typography>
    </ButtonBase>
  );
}
