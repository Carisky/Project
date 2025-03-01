import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../../hooks/useTheme.js";
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
} from "../../../icons/icons.jsx";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1921 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1025 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 501 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 3,
  },
};

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

export default function HeaderCategories() {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");

  const renderCategory = ({ icon: Icon, label }) => (
    <Box
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer" }}
      key={label}
    >
      <Icon />
      <Typography
        alignItems="end"
        sx={{
		whiteSpace: "nowrap", // Prevent text from wrapping
		overflow: "hidden",   // Hide overflowing text
		textOverflow: "ellipsis", // Add ellipsis for overflowed text
		width:"100%",
		color: theme.secondaryText,
		fontSize: "16px",
		fontFamily: "Ubuntu",
        }}
      >
        {label}
      </Typography>
    </Box>
  );


  return (
    <>
      {isMobile && (
        <Box
          sx={{
            	width: "95%",
          	margin: "auto",
          	marginTop: "5px",
          	marginBottom: "5px",
          	justifyContent: "space-between",
          	alignItems: "center",
          }}>
<Carousel
            responsive={responsive}
            autoPlay={false} // Автоматическая прокрутка
            draggable={true} // Позволяет свайпы
            swipeable={true} // Перетаскивание пользователем
            showDots={false} // Без индикаторов
            arrows={false} // Без кнопок
            keyBoardControl={true} // Управление с клавиатуры
            customTransition="transform 0.5s ease-in-out" // Плавный переход
            containerClass="carousel-container"
            itemClass="carousel-item-padding-10-px"
            partialVisible={true} // Активация отображения частичных элементов
          >
            {categories.map((category, index) => (
              <Box key={index} sx={{ padding: "10px" }}>
                {renderCategory(category)}
              </Box>
            ))}
          </Carousel>
        </Box>
      )}
      {isDesktop && (
        <Box
          sx={{
            width: "82%",
          height: "5vh",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}>
            {categories.map((category, index) => (
              <Box key={index} sx={{ padding: "10px" }}>
                {renderCategory(category)}
              </Box>
            ))}
        </Box>
      )}
    </>
  );
}
