import React from 'react';
import PasswordRecoveryCell from './PasswordRecoveryCell';
import { Box, Typography } from '@mui/material';
import useTheme from "../../../hooks/useTheme";

export default function PasswordRecoveryField() {
  const theme = useTheme();

  return (
    <>
    <Typography sx={{
        fontFamily:"Montserrat",
        fontSize:"15px",
        textAlign:"left",
        width:"380px",
        color: theme.mainText,
    }}>Для зміни пароля введіть код   <Box component="span" sx={{ display: "block" }}>
    підтвердження із SMS
  </Box></Typography>
    <Box sx={{
        height:"59px",
        width:"376px",
        display:"flex",
        justifyContent:"space-between"
    }}>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      <PasswordRecoveryCell></PasswordRecoveryCell>
      
    </Box>
    </>
  )
}
