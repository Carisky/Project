import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
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
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

const categories = [
  { icon: IconShares, label: "Акції" },
  { icon: IconClothing, label: "Одяг" },
  { icon: IconShoes, label: "Взуття" },
  { icon: IconCosmetics, label: "Косметика" },
  { icon: IconForHome, label: "Для дому" },
  { icon: IconElectronics, label: "Електроніка" },
  { icon: IconSportingGoods, label: "Спорт" },
  { icon: IconBabyProducts, label: "Дитячі товари" },
  { icon: IconForAnimals, label: "Для тварин" },
  { icon: IconFoods, label: "Продукти харчування" },
];

export default function Bellowheader() {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery("(min-width: 500.01px)");
  const isDesktop = useMediaQuery("(min-width: 1800px)");

  const renderCategory = ({ icon: Icon, label }) => (
    <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} key={label}>
      <Icon />
      <Typography
        alignItems="end"
        sx={{
          color: theme.secondaryText,
          fontSize: "16px",
          fontFamily: "Ubuntu",
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  const getCategoryLayout = (cols) => {
    const rows = [];
    for (let i = 0; i < categories.length; i += cols) {
      rows.push(
        <Box display="flex" justifyContent="space-between" key={`row-${i}`}>
          {categories.slice(i, i + cols).map(renderCategory)}
        </Box>
      );
    }
    return rows;
  };

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            width: "95%",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          {getCategoryLayout(4)}
        </Box>
      )}
      {(isTablet || isDesktop) && (
        <Box
          sx={{
            width: "82%",
            height: "5vh",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          {categories.map(renderCategory)}
        </Box>
      )}
    </>
  );
}
