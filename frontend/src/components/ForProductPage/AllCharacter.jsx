import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import useTheme from "../../hooks/useTheme";
import MiniCardProduct from "./MiniCardProduct.jsx";
//import { useState } from "react";

export default function AllCharacter({characteristick, product}) {

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
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
    };

    const Characteristick = ({type, value}) => (
        <>
            <Box borderBottom={1} sx={{
                alignItems: "end",
                width: "90%",
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 30px 10px 30px",
            }}>
                <Typography sx={keyStyle}>{type}</Typography>
                <Typography sx={valueStyle}>{value}</Typography>
            </Box>
        </>
    )

    return (
        <>
            {isDesktop &&
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: "850px",
                    width: "1300px",
                    borderRadius: "20px",
                    backgroundColor: "white",//theme.backgroundColor,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Box sx={{
                        height: "90%",
                        width: "58%",
                        margin: "10px",
                        borderRadius: "20px",
                        backgroundColor: theme.backgroundText,
                    }}>
                        <Typography sx={keyStyle} textAlign="center" marginTop="20px">Характеристики</Typography>
                        {characteristick.map((type, value) => (
                            <Box sx={{ marginTop: "10px" }}>
                                {Characteristick(type, value)}
                            </Box>
                        ))}
                    </Box>
                    <MiniCardProduct product={product}/>
                </Box>
            }
            {isMobile &&
                <></>
            }
        </>
  );
}