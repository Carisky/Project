import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import useTheme from "../../hooks/useTheme";
import MiniCardProduct from "./MiniCardProduct.jsx";

export default function AllDescription({description, product}) {

    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 500px)");  
    const isDesktop = useMediaQuery("(min-width: 500.01px)");

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
                    backgroundColor: "white",//theme.backgroundText,
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
                        <Typography sx={{
                        color: theme.mainText,
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "Montserrat",
                        marginTop: "20px",
                        textAlign: "center"
                    }}>
                        Опис
                    </Typography>
                    {description.map((text) => (
                        <Box sx={{ marginTop: "10px" }}>
                            <Typography sx={{
                                color: theme.mainText,
                                fontSize: "24px",
                                fontWeight: "medium",
                                fontFamily: "Montserrat",
                                marginTop: "10px",
                                marginLeft: "30px",
                                marginBottom: "10px",
                                marginRight: "30px",
                            }}>{text}</Typography>
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