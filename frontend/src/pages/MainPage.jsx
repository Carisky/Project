import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import AutoplayList from '../components/AutoplayList/AutoplayList';
import Header from '../components/Header/Header';
import Bellowheader from '../components/Bellowheader/Bellowheader';
import Baner from '../components/Baner/Baner';
import { Box } from '@mui/material';
import useTheme from "../hooks/useTheme";
//import 'react-multi-carousel/lib/styles.css';

export default function MainPage() {

  const theme = useTheme();
  
  return (
    <Box
      sx={{
        backgroundColor: theme.backgroundColor,
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
      <AutoplayList></AutoplayList>
      <ArticleList Title={"ТОП ТРЕНДИ"}
      isSlider={true}
      sx={{
        backgroundColor: theme.mainColor
      }}
      ></ArticleList>
      <ArticleList Title={"Для Тебе"}></ArticleList>
      <Box sx={{
        backgroundColor: theme.mainColor
      }}>
        <ArticleList Title={"ВАУ ЦІНИ"}></ArticleList>
      </Box>
      <ArticleList Title={"ВАУ ЦІНИ"}></ArticleList>
    </Box>

    </Box>
  )
}
