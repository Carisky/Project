import React from "react";
import { Box, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function ArticleCardOrder({ article }) {
  const theme = useTheme();
  
  return (
    <Box display="flex" marginTop="5px">
      <img
      src={article.image}
      alt={article.image}
      style={{
        width: '80px',
        height: '80px',
        borderRadius: "10px",
        border: '2px solid',
      }}/>
      <Box sx={{ margin: "5px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ marginLeft: "5px", marginRight: "5px", marginTop: "4px", fontFamily: "Libre Franklin" }}>
            <Typography sx={{ color: theme.mainText, fontSize: "14px" }}>{article?.name}</Typography>
            <Typography sx={{ color: theme.secondaryText, fontSize: "12px" }}>{article?.seller_name}</Typography>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "5px", marginRight: "5px", marginTop: "3px", fontFamily: "Libre Franklin" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bolder", marginRight: "3px", color: theme.mainText }}>
            {article?.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
