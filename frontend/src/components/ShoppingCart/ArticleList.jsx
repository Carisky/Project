import { Box } from "@mui/material";
import React from "react";
import Article from "./Article";

export default function ArticleList({ Articles,setArticles }) {
  return (
    <Box
    sx={{
        flexDirection: "column",
        overflowY: "scroll", // Вертикальная прокрутка
        padding: "10px", // Отступы, чтобы элементы не слипались с краем

        "&::-webkit-scrollbar": {
          width: "24px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1", // Track color
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          border: "8px solid #f1f1f1",
          backgroundColor: "#888", // Thumb color
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#555", // Thumb color on hover
          },
        },
      }}
    >
      {Articles.map((article) => {
        return <Article setArticles={setArticles} Article={article} />;
      })}
    </Box>
  );
}
