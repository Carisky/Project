import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { Box, Typography } from "@mui/material";
import {
    IconShares,
    IconFoods,
    IconClothing,
    IconForHome,
    IconElectronics,
    IconSportingGoods,
    IconBabyProducts,
    IconForAnimals,
    IconShoes,
    IconCosmetics,
} from "../../icons/icons.jsx";

export default function MenuList() {
    
    const theme = useTheme();

    const categories = [
      { icon: IconShares, label: "Акції", nodes: [] },
      { icon: IconClothing, label: "Одяг", nodes: [
        {label: "Жінкам"},
        {label: "Чоловікам"},
        {label: "Дітям"}, 
      ] },
      { icon: IconShoes, label: "Взуття", nodes: [
        {label: "Жінкам"},
        {label: "Чоловікам"},
        {label: "Дітям"}, 
      ] },
      { icon: IconCosmetics, label: "Косметика", nodes: [
        {label: "Жінкам"},
        {label: "Чоловікам"},
        {label: "Дітям"}, 
      ] },
      { icon: IconForHome, label: "Для дому", nodes: [] },
      { icon: IconElectronics, label: "Електроніка", nodes: [] },
      { icon: IconSportingGoods, label: "Спорт", nodes: [] },
      { icon: IconBabyProducts, label: "Дитячі товари", nodes: [] },
      { icon: IconForAnimals, label: "Для тварин", nodes: [] },
      { icon: IconFoods, label: "Продукти харчування", nodes: [] },
    ];

    const [openMenu2, setOpenMenu2] = useState(false);
    const handleMenu2Modal = () => setOpenMenu2(!openMenu2);

    const renderCategory = ({ icon: Icon, label, nodes }) => (
        <Box
        display="flex"
        alignItems="center"
        key={label}
        sx={{
            cursor: "pointer",
        }}>
            <Icon />
            <Typography
            alignItems="end"
            onClick={handleMenu2Modal}
            sx={{
                whiteSpace: "nowrap", // Prevent text from wrapping
                overflow: "hidden",   // Hide overflowing text
                textOverflow: "ellipsis", // Add ellipsis for overflowed text
                width:"100%",
                color: theme.secondaryText,
                fontSize: "16px",
                fontFamily: "Ubuntu",
            }}>
                {label}
            </Typography>
        </Box>
    );
    
    return (
        <>
            <Box sx={{
                marginLeft: "9%",
                marginTop: "75px",
                height: "100vh",
                width: "220px",
                backgroundColor: theme.background,
            }}>
                {categories.map((category, index) => (
                    <Box key={index} sx={{ padding: "10px" }}>
                        {renderCategory(category)}
                    </Box>
                ))}
            </Box>
        </>
    )
}