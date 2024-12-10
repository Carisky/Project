import React from "react";
import Header from "../components/Header/Header";
import Bellowheader from "../components/Bellowheader/Bellowheader";
import Baner from "../components/Baner/Baner";
import BanerDown from "../components/BanerDown/BanerDown";
import { Box } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from '../components/Footer/Footer';
import ArticleList from '../components/ArticleList/ArticleList';
import ArticlePackAdvice from '../components/ArticlePackAdvice/ArticlePackAdvice';
import ArticleListFree from '../components/ArticleListFree/ArticleListFree';
import { LogoBurgerСross } from '../images/LogoBurgerСross.jsx';

export default function MainPage() {
  const theme = useTheme();

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
          }}>
            <ArticleList Title={"ТОП ТРЕНДИ"}></ArticleList>
          </Box>
          <ArticlePackAdvice></ArticlePackAdvice>
          <Box sx={{
            backgroundColor: theme.mainColor,
          }}>
            <ArticleList Title={"ВАУ ЦІНИ"}></ArticleList>
          </Box>
          <BanerDown Title={"ПОПУЛЯРНІ ТОВАРИ"} Title2={"НОВИНКИ"}></BanerDown>
          <ArticleListFree></ArticleListFree>
        <ArticlePackAdvice Title={"РЕКОМЕНДАЦІЇ ДЛЯ ТЕБЕ"}></ArticlePackAdvice>
        <Box
          sx={{
            backgroundColor: theme.mainColor,
          }}
        >
          <ArticleList Title={"ВАУ ЦІНИ"}></ArticleList>
        </Box>
        <BanerDown Title={"ПОПУЛЯРНІ ТОВАРИ"} Title2={"НОВИНКИ"}></BanerDown>
        <ArticleListFree></ArticleListFree>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
