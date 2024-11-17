import React from "react";
import { Box, Typography } from "@mui/material";
import palete from "../../palete";
import { ViewTimeAndDate } from '../ViewTimeAndDate/ViewTimeAndDate';

export default function Baner() {
    return (
        <Box height="260px" display="flex" sx={{
            marginTop: "10px",
            marginBottom: "10px",
            width:"82%",
            margin:"auto"
        }}>
            <Box height="100%" width="30%" sx={{
                borderRadius: "13px",
                backgroundColor: palete.light.secondaryColor
            }}>
                <Typography alignItems="end" sx={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    color:"white",
                    fontWeight:"bold",
                    fontSize: "20px",
                    fontFamily: "Montserrat",
                }}>РОЗПРОДАЖ</Typography>
            </Box>
            <Box height="100%" width="70%" display="flex" justifyContent="space-between" sx={{
                borderRadius: "13px",
                marginLeft: "10px",
                backgroundColor: palete.light.secondaryColor
            }}>
                <Box display="flex">
                    <Typography alignItems="end" sx={{
                        marginLeft: "20px",
                        marginTop: "10px",
                        color:"white",
                        fontWeight:"bold",
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                    }}>ОСТАННІ ЗНИЖКИ%</Typography>
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
        </Box>
    );
}