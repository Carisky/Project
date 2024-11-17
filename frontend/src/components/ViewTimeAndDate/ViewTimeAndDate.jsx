import React from "react";
import {Box, Typography} from "@mui/material";

export const ViewTimeAndDate = () => {
    const locale = 'uk';
    const today = new Date();
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return (
        <Box>
            <span>{day} :   {hour}  : {time}</span>
        </Box>
    );
  };