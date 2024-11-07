import React from 'react'
import ArticleList from '../components/ArticleList/ArticleList'
import { Box } from '@mui/material'

export default function MainPage() {

  return (
    <Box>
      <ArticleList Title={"Топ Тренди"}></ArticleList>
      <ArticleList Title={"Вау Ціни"}></ArticleList>
      <ArticleList Title={"Топ Тренди"}></ArticleList>
    </Box>
  )
}
