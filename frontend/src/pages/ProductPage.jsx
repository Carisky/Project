import React from "react";
import Header from "../components/PageModules/Header/Header";
import Footer from "../components/PageModules/Footer/Footer";
import { Box, Typography } from "@mui/material";
import useTheme from "../hooks/useTheme";
import { useMediaQuery } from "../hooks/useMediaQuery.js";
import ProductCardPage from "../components/ForProductPage/ProductCardPage";
import ArticleListFree from "../components/ArticleLists/ArticleListFree";

export default function ProductPage() {

  const theme = useTheme();

  const articles = [
    {
      id: 1,
      name: "Wireless Headphones",
      seller_name: "Audio World",
      price: "199.99",
      rating: 4.5,
      discount: "20%",
      reviews_count: 120,
      image: "headphones.jpg",
    },
    {
      id: 2,
      name: "Smartphone Pro Max",
      seller_name: "Gadget Hub",
      price: "999.99",
      rating: 4.8,
      discount: "15%",
      reviews_count: 450,
      image: "smartphone.jpg",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      seller_name: "Tech Store",
      price: "1299.99",
      rating: 4.6,
      discount: "10%",
      reviews_count: 230,
      image: "laptop.jpg",
    },
    {
      id: 4,
      name: "Sports Watch",
      seller_name: "Outdoor Gear",
      price: "249.99",
      rating: 4.2,
      discount: "25%",
      reviews_count: 85,
      image: "watch.jpg",
    },
    {
      id: 5,
      name: "Electric Scooter",
      seller_name: "Eco Riders",
      price: "499.99",
      rating: 4.7,
      discount: "30%",
      reviews_count: 340,
      image: "scooter.jpg",
    },
  ];

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        width: "100%",
      }}
    >
      <Box marginBottom="10px"><Header></Header></Box>
      <ProductCardPage />
      <Box marginTop="40px">
        <Typography sx={textOneStyles} textAlign="center">Також Вас можуть зацікавити</Typography>

      </Box>
      <Footer/>
    </Box>
  );
}
