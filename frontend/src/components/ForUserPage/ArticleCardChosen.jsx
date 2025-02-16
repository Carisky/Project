import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function ArticleCardChosen({ article }) {
  const theme = useTheme();

  const keyStyle = {
    color: theme.secondaryText,
    fontFamily: "Libre Franklin",
    fontSize: "16px",
  };

  const valueStyle = {
    marginLeft: "5px",
    color: theme.mainText,
    fontFamily: "Libre Franklin",
    fontWeight: "bold",
    fontSize: "16px",
  };
  
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        margin: "0px 0px 20px 0px",
    }}>
        <img
        src={article.image}
        alt={article.image}
        style={{
            maxHeight: "140px",
            maxWidth: "120px",
            minHeight: "140px",
            minWidth: "120px",
            borderRadius: "10px",
            border: '1px solid',
        }}/>
        <Box sx={{ marginLeft: "15px", }}>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Назва продукту: </Typography>
                <Typography sx={valueStyle}>{article?.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Продавець: </Typography>
                <Typography sx={valueStyle}>{article?.seller_name}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Ціна: </Typography>
                <Typography sx={valueStyle}>{article?.price}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Знижка: </Typography>
                <Typography sx={valueStyle}>{article?.discount}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Рейтинг: </Typography>
                <Typography sx={valueStyle}>{article?.rating}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <Typography sx={keyStyle}>Кількість замовлень: </Typography>
                <Typography sx={valueStyle}>{article?.reviews_count}</Typography>
            </Box>
        </Box>
    </Box>
  );
}
