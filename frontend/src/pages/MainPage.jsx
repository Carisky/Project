import React from "react";
import Header from "../components/Header/Header";
import Bellowheader from "../components/Bellowheader/Bellowheader";
import Baner from "../components/Baner/Baner";
import BanerDown from "../components/BanerDown/BanerDown";
import { Box } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from "../components/Footer/Footer";
import ArticleList from "../components/ArticleList/ArticleList";
import ArticlePackAdvice from "../components/ArticlePackAdvice/ArticlePackAdvice";
import ArticleListFree from "../components/ArticleListFree/ArticleListFree";

export default function MainPage() {
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

  
  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        width: "100%",
      }}
    >
      <Box marginBottom="10px">
        <Header></Header>
        <Bellowheader></Bellowheader>
        <Baner Title={"РОЗПРОДАЖ"} Title2={"ОСТАННІ ЗНИЖКИ%"}></Baner>
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList articles={articles} Title={"ТОП ТРЕНДИ"}></ArticleList>
        </Box>
        <ArticlePackAdvice articles={articles} Title={"РЕКОМЕНДАЦІЇ ДЛЯ ТЕБЕ"}></ArticlePackAdvice>
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList articles={articles} Title={"ВАУ ЦІНИ"}></ArticleList>
        </Box>
        <BanerDown Title={"ПОПУЛЯРНІ ТОВАРИ"} Title2={"НОВИНКИ"}></BanerDown>
        <ArticleListFree Articles={articles}></ArticleListFree>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
