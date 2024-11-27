import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { IconShares } from "../../images/IconShares";
import { IconClothing } from "../../images/IconClothing";
import { IconShoes } from "../../images/IconShoes";
import { IconCosmetics } from "../../images/IconCosmetics";
import { IconForHome } from "../../images/IconForHome";
import { IconElectronics } from "../../images/IconElectronics";
import { IconSportingGoods } from "../../images/IconSportingGoods";
import { IconBabyProducts } from "../../images/IconBabyProducts";
import { IconForAnimals } from "../../images/IconForAnimals";
import { IconFoods } from "../../images/IconFoods";

export default function Bellowheader() {
    
    const theme = useTheme();
    
    return (
        <Box sx={{width:"82%", height:"5vh", margin:"auto", marginTop: "10px", marginBottom: "10px",}} justifyContent="space-between" alignItems="center" display="flex">
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconShares></IconShares>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Акції</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconClothing></IconClothing>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Одяг</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconShoes></IconShoes>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Взуття</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconCosmetics></IconCosmetics>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Косметика</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconForHome></IconForHome>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Для дому</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconElectronics></IconElectronics>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Електроніка</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconSportingGoods></IconSportingGoods>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Спорт</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconBabyProducts></IconBabyProducts>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Дитячі товари</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconForAnimals></IconForAnimals>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Для тварин</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{cursor:"pointer",}}>
                <IconFoods></IconFoods>
                <Typography alignItems="end" sx={{
                    color: theme.secondaryText,
                    //fontWeight:"bold",
                    fontSize: "16px",
                    fontFamily: "Ubuntu",
                }}>Продукти харчування</Typography>
            </Box>
        </Box>
    );
}