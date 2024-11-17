import React from "react";
import { Box, Typography } from "@mui/material";
import palete from "../../palete";

export default function Bellowheader() {
    return (
        <Box justifyContent="space-between" alignItems="end" display="flex">
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Акції</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Одяг</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Взуття</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Косметика</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Для дому</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Електроніка</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Спорт</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Дитячі товари</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Для тварин</Typography>
            </Box>
            <Box>
                <Typography alignItems="end" sx={{
                    color:palete.light.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                }}>Продукти харчування</Typography>
            </Box>
        </Box>
    );
}