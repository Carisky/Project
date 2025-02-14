import React from "react";
import Header from "../components/PageModules/Header/Header";
import TwoBanerGroup from "../components/TwoBanerGroup/TwoBanerGroup";
import { Box, Typography } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from "../components/PageModules/Footer/Footer";
import ArticleList from "../components/ArticleLists/ArticleList";
import ArticlePackAdvice from "../components/ArticleLists/ArticlePackAdvice";
import ArticleListFree from "../components/ArticleLists/ArticleListFree";

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
    {
      id: 6,
      name: "dWireless Headphones",
      seller_name: "Audio World",
      price: "199.99",
      rating: 4.5,
      discount: "20%",
      reviews_count: 120,
      image: "headphones.jpg",
    },
    {
      id: 7,
      name: "dSmartphone Pro Max",
      seller_name: "Gadget Hub",
      price: "999.99",
      rating: 4.8,
      discount: "15%",
      reviews_count: 450,
      image: "smartphone.jpg",
    },
    {
      id: 8,
      name: "dGaming Laptop",
      seller_name: "Tech Store",
      price: "1299.99",
      rating: 4.6,
      discount: "10%",
      reviews_count: 230,
      image: "laptop.jpg",
    },
    {
      id: 9,
      name: "dSports Watch",
      seller_name: "Outdoor Gear",
      price: "249.99",
      rating: 4.2,
      discount: "25%",
      reviews_count: 85,
      image: "watch.jpg",
    },
    {
      id: 10,
      name: "dElectric Scooter",
      seller_name: "Eco Riders",
      price: "499.99",
      rating: 4.7,
      discount: "30%",
      reviews_count: 340,
      image: "scooter.jpg",
    },
  ];

  const ViewTimeAndDate = () => {
    const locale = "uk";
    var today = new Date();
    today.setDate(today.getDate()+1);

    const day = today.toLocaleDateString(locale, { weekday: "long" });
    const hour = today.getHours();

    const time = today.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });

    return (
      <Box>
        <span>
          {day} : {hour} : {time}
        </span>
      </Box>
    );
  };

  const renderTopBannerBigContainerContent = () => {
    return (
      <Typography
        alignItems="end"
        sx={{
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "10px",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "Montserrat",
        }}
      >
        {ViewTimeAndDate()}
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
        width: "100%",
      }}
    >
      <Box marginBottom="10px">
        <Header></Header>
        <TwoBanerGroup
          bigContainerContent={renderTopBannerBigContainerContent()}
          smallContainerTitle={"РОЗПРОДАЖ"}
          bigContainerTitle={"ОСТАННІ ЗНИЖКИ%"}
          smallContainerImage={"/images/11.jpg"}
          bigContainerImage={"/images/12.jpg"}
        />
        
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList articles={articles} Title={"ТОП ТРЕНДИ"}></ArticleList>
        </Box>
        <ArticlePackAdvice articles={articles}></ArticlePackAdvice>
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList articles={articles} Title={"ВАУ ЦІНИ"}></ArticleList>
        </Box>
        <TwoBanerGroup
          align="right"
          smallContainerTitle={"ПОПУЛЯРНІ ТОВАРИ"}
          bigContainerTitle={"НОВИНКИ"}
          smallContainerImage={"/images/22.jpg"}
          bigContainerImage={"/images/21.jpg"}
        />
        <ArticleListFree Articles={articles}></ArticleListFree>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
