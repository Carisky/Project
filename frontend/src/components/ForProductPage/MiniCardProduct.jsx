import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import useTheme from "../../hooks/useTheme";
//import { useState } from "react";

export default function MiniCardProduct({product}) {

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 500px)");  
    const isDesktop = useMediaQuery("(min-width: 500.01px)");

    const keyStyle = {
        color: theme.mainText,
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };
    
    const valueStyle = {
        marginLeft: "5px",
        color: theme.secondaryColor,
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };

    return (
        <>
            {isDesktop &&
                <Box sx={{
                    //height: "90%",
                    width: "40%",
                    margin: "10px",
                    borderRadius: "20px",
                    backgroundColor: theme.backgroundText,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <img src={product.image} alt='foto.jpg' style={{ width: '120px', height: 'auto', margin: "20px 0 20px 15px", borderRadius: "10px",}} />
                    <Box sx={{
                        marginRight: "15px",
                    }}>
                        <Typography sx={keyStyle}>{product.name}</Typography>
                        <Box display="flex" alignItems="end">
                            <Typography sx={{
                                marginRight: "5px",
                                color: theme.secondaryText,
                                fontSize: "18px",
                                //fontWeight: "bold",
                                fontFamily: "Montserrat",
                            }}>Продавець:</Typography>
                            <Typography sx={valueStyle}>{product.seller_name}</Typography>
                        </Box>
                        <Typography sx={keyStyle}>{product.price}</Typography>
                    </Box>
                </Box>
            }
            {isMobile &&
                <></>
            }
        </>
  );
}