import React from 'react';
import useTheme from "../../../hooks/useTheme";
import { Button, Typography,Box } from "@mui/material";
export default function GoogleAuthButton() {
    const theme = useTheme();
  
    return (
      <Button
        sx={{
          marginTop: "10px",
          width: "380px",
          height: "39px",
          borderRadius: "10px",
          backgroundColor: theme.loginForm.loginGoogleFormButton.mainColor,
        }}
        variant="contained"
      >
        <Box sx={{
            display:"flex"
        }}>
            <img src="/images/Google.svg" alt="Google logo"></img>
            <Typography sx={{
                height:"13px",
                fontFamily:"Montserrat",
                fontSize:"13px",
                marginLeft:"8px"
            }} color={theme.plainText}>
            Продовжити з Google
            </Typography>
        </Box>
      </Button>
    );
  }
