import React from 'react';
import AutoplayList from '../components/AutoplayList/AutoplayList';
import Header from '../components/Header/Header';
import Bellowheader from '../components/Bellowheader/Bellowheader';
import Baner from '../components/Baner/Baner';
import { Box } from '@mui/material';
import useTheme from "../hooks/useTheme";
//import 'react-multi-carousel/lib/styles.css';
import palete from "../palete";
import Container from '@mui/material/Container';
import Footer from '../components/Footer/Footer';
import ArticleList from '../components/ArticleList/ArticleList';

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

        <ArticleList Title={"Топ Тренди"}>

        </ArticleList>

    </Box>
      <Footer></Footer>
    </Box>
  )
}
