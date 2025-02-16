import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "./Button.jsx";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

const ArticleCardContent = ({ article, theme }) => {
  return (
    <>
      <Box sx={{ position: "relative", display: "flex", borderRadius: "13px", height: "250px", width: "100%", backgroundColor: theme.background }}>
        <FavoriteBorderIcon sx={{ position: "absolute", top: "16px", right: "16px", cursor: "pointer", zIndex: 2 }} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ marginLeft: "15px", marginRight: "15px", marginTop: "8px", fontFamily: "Libre Franklin" }}>
          <Typography sx={{ color: theme.mainText, fontSize: "24px" }}>{article?.name}</Typography>
          <Typography sx={{ color: theme.secondaryText, fontSize: "24px" }}>{article?.seller_name}</Typography>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", marginLeft: "15px", marginRight: "15px", marginTop: "7px", fontFamily: "Libre Franklin" }}>
        <Typography sx={{ fontSize: "21px", fontWeight: "bolder", marginRight: "7px", color: theme.mainText }}>
          {article?.price}
        </Typography>
        <Typography sx={{ fontSize: "17px", marginTop: "6px", marginRight: "7px", fontWeight: 400, color: theme.secondaryText }}>
          000$
        </Typography>
        <Typography sx={{ marginTop: "6px", fontSize: "17px", fontWeight: 400, color: theme.accentText }}>
          -34%
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", marginLeft: "15px", marginRight: "15px", marginTop: "7px" }}>
          <StarIcon sx={{ marginRight: "3.5px", color: theme.secondaryColor }} />
          <Typography sx={{ color: theme.secondaryText, fontSize: "14px" }}>{article?.rating}</Typography>
        </Box>
        <Box sx={{ display: "flex", marginTop: "7px" }}>
          <ReviewsIcon sx={{ height: "20px", width: "20px", marginRight: "3.12px", color: theme.secondaryColor }} />
          <Typography sx={{ fontSize: "14px", color: theme.secondaryText }}>23 відгуки</Typography>
        </Box>
      </Box>
    </>
  );
};

export default function ArticleCard({ article, isCarousel }) {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");

  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = (event) => {
    const endPosition = { x: event.clientX, y: event.clientY };
    const distance = Math.sqrt(
      Math.pow(endPosition.x - startPosition.x, 2) + Math.pow(endPosition.y - startPosition.y, 2)
    );

    if (distance <= 10) {
      alert("click");
    }
  };

  const cardStyles = {
    userSelect: "none",
    cursor: "pointer",
    border: "none",
    height: "470px",
    width: isCarousel ? "95%" : "232px",
    boxShadow: "none",
    borderRadius: "14px",
    backgroundColor: theme.mainColor,
  };

  const cardMobileStyles = {
    userSelect: "none",
    cursor: "pointer",
    border: "none",
    height: "470px",
    width: isCarousel ? "95%" : "200px",
    boxShadow: "none",
    borderRadius: "14px",
    backgroundColor: theme.mainColor,
  }

  return (
    <Box sx={{ margin: "10px" }}>
      <Card onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} sx={isMobile? cardMobileStyles : cardStyles }>
        <ArticleCardContent article={article} theme={theme} />
      </Card>
      <Button />
    </Box>
  );
}

ArticleCard.defaultProps = {
  isCarousel: false,
};
