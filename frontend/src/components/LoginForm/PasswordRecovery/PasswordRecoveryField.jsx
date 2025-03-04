import React from 'react';
import PasswordRecoveryCell from './PasswordRecoveryCell';
import { Box, Typography } from '@mui/material';
import useTheme from "../../../hooks/useTheme";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";

export default function PasswordRecoveryField() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 430px)");

  return (
    <>
    <Typography sx={{
        fontFamily:"Montserrat",
        fontSize:"15px",
        textAlign:"left",
        width: isMobile ? "100%" :"380px",
        color: theme.mainText,
    }}>Для зміни пароля введіть код   <Box component="span" sx={{ display: "block" }}>
    підтвердження із SMS
  </Box></Typography>
    <Box sx={{
        height:"59px",
        width: isMobile ? "100%" : "376px",
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
