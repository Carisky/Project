import React from 'react'
import { TextField } from '@mui/material'
import useTheme from "../../../hooks/useTheme";

export default function PasswordRecoveryCell() {
  const theme = useTheme();

  return (
    <TextField sx={{ height:"56px", width:"56px", backgroundColor: theme.backgroundText, }}></TextField>
  )
}
