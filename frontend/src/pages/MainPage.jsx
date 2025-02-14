import React, { useState, useEffect } from "react";
import Header from "../components/PageModules/Header/Header";
import TwoBanerGroup from "../components/TwoBanerGroup/TwoBanerGroup";
import { Box, Typography } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from "../components/PageModules/Footer/Footer";
import ArticleList from "../components/ArticleLists/ArticleList";
import ArticlePackAdvice from "../components/ArticleLists/ArticlePackAdvice";
import ArticleListFree from "../components/ArticleLists/ArticleListFree";
import { getAllArticles } from "../API/services/articleService";

export default function MainPage() {
  const theme = useTheme();
  const [articles, setArticles] = useState([]); // State for storing articles

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles); // Update state with fetched articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles(); // Call the function when component mounts
  }, []); // Empty dependency array to run only once

  const ViewTimeAndDate = () => {
    const locale = "uk";
    const today = new Date();

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
        <Header />
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
          <ArticleList articles={articles} Title={"ТОП ТРЕНДИ"} />
        </Box>
        <ArticlePackAdvice articles={articles} />
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList articles={articles} Title={"ВАУ ЦІНИ"} />
        </Box>
        <TwoBanerGroup
          align="right"
          smallContainerTitle={"ПОПУЛЯРНІ ТОВАРИ"}
          bigContainerTitle={"НОВИНКИ"}
          smallContainerImage={"/images/22.jpg"}
          bigContainerImage={"/images/21.jpg"}
        />
        <ArticleListFree Articles={articles} />
      </Box>
      <Footer />
    </Box>
  );
}
