import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Header from '../components/Header/Header';
import Bellowheader from '../components/Bellowheader/Bellowheader';
import Baner from '../components/Baner/Baner';
import { Box } from '@mui/material';
import palete from "../palete";
import Container from '@mui/material/Container';
import Footer from '../components/Footer/Footer';

export default function MainPage() {
  
  return (
    <Box
      sx={{
        backgroundColor: "#cfe8fc",
        //height: "5vh",
        //width: "90vw",
        //marginTop: "1vh"
        width:"100%"
      }}>

    <Box sx={{

    }}>
      <Header></Header>
      <Bellowheader></Bellowheader>
      <Baner></Baner>
      <ArticleList Title={"ТОП ТРЕНДИ"}
      isSlider={true}
      sx={{
        backgroundColor: palete.light.mainColor
      }}
      ></ArticleList>
      <ArticleList Title={"Для Тебе"}></ArticleList>
      <Box sx={{
        backgroundColor: palete.light.mainColor
      }}>
        <ArticleList Title={"Вау Ціни"}></ArticleList>
      </Box>
      <ArticleList Title={"Вау Ціни"}></ArticleList>
    </Box>
      <Footer></Footer>
    </Box>
  )
}
