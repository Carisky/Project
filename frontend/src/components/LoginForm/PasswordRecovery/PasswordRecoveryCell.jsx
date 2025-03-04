import React from 'react'
import { TextField } from '@mui/material'
import useTheme from "../../../hooks/useTheme";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";

export default function PasswordRecoveryCell() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 430px)");

  return (
    <TextField sx={{ height:"56px", width: isMobile ? "12%" :"56px", backgroundColor: theme.backgroundText, }}></TextField>
  )
}
