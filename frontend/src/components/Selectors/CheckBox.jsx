import React from "react";
import { Checkbox, FormControlLabel, Typography, } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function CheckBox({ text }) {
    const theme = useTheme()
  return (
    <FormControlLabel 
      control={
        <Checkbox
          sx={{
            borderRadius: "6px",
            color: theme.secondaryText,
            transition: "transform 0.2s ease, color 0.2s ease",
            "&:hover": {
              transform: "scale(1.1)",
              color: theme.mainColor,
            },
            "&.Mui-checked": {
              color: theme.mainColor,
            },
          }}
        />
      }
      label={<Typography color={theme.mainText} fontWeight="500">{text}</Typography>}
      sx={{
        "& .MuiFormControlLabel-label": {
            fontSize: "13px",
            fontWeight:"500",
            fontFamily: "Montserrat",
        },
    }}
    />
  );
}
