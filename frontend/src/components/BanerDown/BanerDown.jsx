import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function Baner({Title, Title2}) {

    const theme = useTheme();

    const isMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 500.01px)");
    
    return (
        <>
            {isMobile &&
                <Box sx={{
                    height: "530px",
                    width: "100%",
                    margin: "auto",
                    marginTop: "10px",
                    marginBottom: "10px",
                    paddingTop: "10px",
                }}>
                    <Box sx={{
                        height: "48%",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "13px",
                        backgroundColor: theme.secondaryColor,
                    }}>
                        <Typography sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            color:"white",
                            fontWeight:"bold",
                            fontSize: "20px",
                            fontFamily: "Montserrat",
                            }}>{Title}</Typography>
                    </Box>
                    <Box sx={{
                        height: "48%",
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "13px",
                        backgroundColor: theme.mainColor,
                    }}>
                        <Typography sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            color:"white",
                            fontWeight:"bold",
                            fontSize: "20px",
                            fontFamily: "Montserrat",
                            }}>{Title2}</Typography>
                    </Box>
                </Box>
            }
            {isDesktop &&
                <Box height="260px" display="flex" sx={{
                    marginTop: "10px",
                    marginBottom: "20px",
                    width:"82%",
                    margin:"auto",
                }}>
                    <Box height="100%" width="70%" display="flex" justifyContent="space-between" sx={{
                        borderRadius: "13px",
                        marginRight: "10px",
                        backgroundColor: theme.secondaryColor,
                    }}>
                        <Box display="flex">
                            <Typography alignItems="end" sx={{
                                marginLeft: "20px",
                                marginTop: "10px",
                                color:"white",
                                fontWeight:"bold",
                                fontSize: "20px",
                                fontFamily: "Montserrat",
                            }}>{Title}</Typography>
                        </Box>
                        <Typography alignItems="end" sx={{
                                marginLeft: "20px",
                                marginRight: "20px",
                                marginTop: "10px",
                                color:"white",
                                fontWeight:"bold",
                                fontSize: "20px",
                                fontFamily: "Montserrat",
                            }}>
                        </Typography>
                    </Box>
                    <Box height="100%" width="30%" sx={{
                        borderRadius: "13px",
                        backgroundColor: theme.mainColor,
                    }}>
                        <Typography alignItems="end" sx={{
                            marginLeft: "20px",
                            marginTop: "10px",
                            color:"white",
                            fontWeight:"bold",
                            fontSize: "20px",
                            fontFamily: "Montserrat",
                        }}>{Title2}</Typography>
                    </Box>
                </Box>
            }
        </>
    );
}