import React from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import CheckBox from "../Selectors/CheckBox";
import {
  removeItemFromCart,
  getCartItems,
} from "../../API/services/cartService";

export default function Article({ setArticles, Article }) {
  const inStockText = "В наявності";
  const outOfStockText = "Немає в наявності";
  const discountPercentage = 25 / 100;
  const discountedPrice =
    (
      Article.article.price -
      Article.article.price * discountPercentage
    ).toFixed(0) + "₴";

  return (
    <Box
      sx={{
        height: "170px",
        display: "flex",
      }}
    >
      <Box>
        <CheckBox />
      </Box>
      <img
        src={`http://localhost:5000${Article.article.photos[0].url}` || Article.article.photos[0]}
        alt={Article.article.name}
        style={{ height: "90%", width: "150px", objectFit: "cover" }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "70%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "90%",
            marginLeft: "20px",
          }}
        >
          <Box>
            <Typography>{Article.article.name}</Typography>
            <Typography
              sx={{
                color: "#808080",
              }}
            >
              {Article.article.seller_name}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: Article.amount > 0 ? "#808080" : "#FF2A2A",
            }}
          >
            {Article.amount > 0 ? inStockText : outOfStockText}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box>
              <img src="./images/icon_heart.svg" alt="" />
            </Box>
            <Box
              onClick={async () => {
                await removeItemFromCart(Article.article.id);
                const items = await getCartItems();
                setArticles(items);
              }}
              sx={{
                marginLeft: "18px",
                cursor: "pointer",
              }}
            >
              <img src="./images/icon_delete.svg" alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "35px",
              width: "107px",
            }}
          >
            <ButtonBase
              sx={{
                height: "100%",
                width: "35px",
                backgroundColor: "#F1F1F5",
                borderRadius: "10px",
              }}
            >
              -
            </ButtonBase>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              1
            </Typography>
            <ButtonBase
              sx={{
                height: "100%",
                width: "35px",
                backgroundColor: "#F1F1F5",
                borderRadius: "10px",
              }}
            >
              +
            </ButtonBase>
          </Box>
        </Box>
        <Box
          sx={{
            height: "90%",
          }}
        >
          <Typography
            sx={{
              fontSize: "21px",
              fontWeight: "600",
              fontFamily: "Montserrat",
            }}
          >
            {discountedPrice}
          </Typography>
          <Box display={"flex"}>
            <Typography
              sx={{
                marginRight: "5px",
                color: "#808080",
                textDecoration: "line-through",
              }}
            >
              {Article.article.price.toFixed(0) + "₴"}
            </Typography>
            <Typography
              sx={{
                color: "#FF2A2A",
              }}
            >{`-25%`}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
