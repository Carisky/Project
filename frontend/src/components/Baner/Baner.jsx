import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { ViewTimeAndDate } from '../ViewTimeAndDate/ViewTimeAndDate';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function Baner({Title, Title2}) {

    const theme = useTheme();

    const isMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 501px)");
    
    return (
        <>
        {isMobile &&
            <Box height="260px" display="flex" sx={{
                marginTop: "10px",
                marginBottom: "10px",
                width:"100%",
                margin:"auto",
            }}>
                <Box height="100%" width="100%" display="flex" justifyContent="space-between" sx={{
                    borderRadius: "13px",
                    marginLeft: "10px",
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
                        }}>{Title2}</Typography>
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
                        <ViewTimeAndDate />
                    </Typography>
                </Box>
            </Box>}
        {isDesktop &&
            <Box height="260px" display="flex" sx={{
                marginTop: "10px",
                marginBottom: "10px",
                width:"82%",
                margin:"auto",
            }}>
                <Box height="100%" width="30%" sx={{
                    borderRadius: "13px",
                    backgroundColor: theme.secondaryColor
                }}>
                    <Typography alignItems="end" sx={{
                        marginLeft: "20px",
                        marginTop: "10px",
                        color:"white",
                        fontWeight:"bold",
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                    }}>{Title}</Typography>
                </Box>
                <Box height="100%" width="70%" display="flex" justifyContent="space-between" sx={{
                    borderRadius: "13px",
                    marginLeft: "10px",
                    backgroundColor: theme.secondaryColor
                }}>
                    <Box display="flex">
                        <Typography alignItems="end" sx={{
                            marginLeft: "20px",
                            marginTop: "10px",
                            color:"white",
                            fontWeight:"bold",
                            fontSize: "20px",
                            fontFamily: "Montserrat",
                        }}>{Title2}</Typography>
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
                        <ViewTimeAndDate />
                    </Typography>
                </Box>
            </Box>}
        </>
    );
}