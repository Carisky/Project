import { Box, ButtonBase, Modal, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LogoCart, CloseBtn } from "../../icons/icons";
import useTheme from "../../hooks/useTheme";
import CheckBox from "../Selectors/CheckBox";
import ArticleList from "./ArticleList";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { getCartItems, addItemToCart, removeItemFromCart } from "../../API/services/cartService.js";
import OrderProcessing from "../ForOrderProcessing/OrderProcessing.jsx";

export default function Cart() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 501px)");

  const [openCart, setOpenCart] = useState(false);
  const [Articles, setArticles] = useState([]); // State to hold the articles

  useEffect(() => {
    if (openCart) { // Only fetch when the cart is open
      const fetchCartItems = async () => {
        try {
          const items = await getCartItems();
          setArticles(items);
        } catch (error) {
          console.error("Ошибка при загрузке корзины", error);
        }
      };
      fetchCartItems();
    }
  }, [openCart]); // Will trigger on openCart state change

  const toggleCart = () => setOpenCart(!openCart);

  const ArticlesCount = Articles.length;

  const calculateTotalPrice = (articles) => {
    return articles.reduce((total, article) => total + article.article.price, 0).toFixed(0); 
  };

  const calculatePriceToPay = (articles) => {
    let total = calculateTotalPrice(articles);
    const totalDiscount = calculateTotalDiscounts(articles);
    return (total - totalDiscount).toFixed(0);
  };

  const calculateTotalDiscounts = (articles) => {
    return articles.reduce((total, article) => {
      const discountPercentage = 25 / 100;
      return total + (article.article.price * discountPercentage);
    }, 0).toFixed(0);
  };

  const renderTypography = (text, styles = {}) => (
    <Typography sx={{ fontFamily: "Montserrat", ...styles }}>{text}</Typography>
  );

  const renderPriceItem = (label, value) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      {renderTypography(label, { fontSize: "17px", color: "#808080" })}
      {renderTypography(value, { fontSize: "17px", color: "#808080" })}
    </Box>
  );

  return (
    <>
      {isDesktop &&
        <>
          <Box onClick={toggleCart} sx={{ cursor: "pointer", textAlign: "center" }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <LogoCart />
            </Box>
            {renderTypography("Кошик", {
              fontSize: "18px",
              color: theme.mainText,
            })}
          </Box>
          
          <Modal open={openCart} onClose={toggleCart}>
            <Box
            sx={{
              width: "86vw",
              height: "84vh",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: theme.background,
              borderRadius: "40px",
              overflow: "hidden",
            }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                sx={{
                  height: "108px",
                  padding: "25px 0 0 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                >
                  {renderTypography("КОШИК", {
                    fontSize: "30px",
                    fontWeight: "600",
                    color: theme.mainText,
                  })}
                  {renderTypography(`${ArticlesCount} товарів`, {
                    fontSize: "13px",
                    fontWeight: "400",
                    color: theme.mainText,
                  })}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckBox text="Обрати Все" />
                    {renderTypography(
                      `обрано ${ArticlesCount} з ${ArticlesCount} `,
                      { color: theme.secondaryText }
                    )}
                    {renderTypography("Видалити обране", {
                      fontWeight: "500",
                      marginLeft: "30px",
                      color: theme.accentText,
                    })}
                  </Box>
                </Box>
                <Box onClick={toggleCart} sx={{ padding: "25px 30px 0 0", cursor: "pointer", }}>
                  <CloseBtn/>
                </Box>
              </Box>
              
              <Box sx={{ display: "flex", maxHeight: "100%" }}>
                <Box
                sx={{
                  height: "75%",
                  width: "65%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
                >
                  <ArticleList setArticles={setArticles} Articles={Articles} />
                </Box>
                <Box sx={{ marginRight:"20px",height: "80%", width: "35%" }}>
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.35)",
                    padding: "25px 20px",
                  }}
                  >
                    {renderTypography("ЗАМОВЛЕННЯ", {
                      fontSize: "30px",
                      fontWeight: "600",
                      color: theme.mainText,
                    })}
                    <Box>
                      {renderPriceItem(
                        `Товари (${ArticlesCount})`,
                        `${calculateTotalPrice(Articles)}₴`
                      )}
                      {renderPriceItem("Знижка", `-${calculateTotalDiscounts(Articles)} ₴`)}
                      <Box sx={{ marginTop: "25px" }}>
                        {renderTypography("Промокод", {
                          fontSize: "17px",
                          color: "#808080",
                        })}
                        <Box sx={{ borderRadius: "10px", display: "flex", justifyContent: "space-between", backgroundColor: theme.backgroundText, }}>
                          <TextField
                          id="promo-code"
                          label="Введіть промокод"
                          variant="standard"
                          sx={{color: theme.buttonColor, margin: "0px 0px 10px 10px", }}
                          />
                          <ButtonBase
                          sx={{
                            backgroundColor: theme.buttonColor,
                            borderRadius: "10px",
                            width: "150px",
                            fontFamily: "Montserrat",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          >
                            {renderTypography("Застосувати", {
                              fontSize: "17px",
                              fontWeight: "500",
                              color: theme.mainText,
                            })}
                          </ButtonBase>
                        </Box>
                        <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "25px",
                        }}
                        >
                          {renderTypography("До оплати без доставки:", {
                            fontSize: "17px",
                            fontWeight: "500",
                            color: theme.mainText,
                          })}
                          {renderTypography(`${calculatePriceToPay(Articles)} ₴`, {
                            fontSize: "17px",
                            fontWeight: "500",
                            color: theme.mainText,
                          })}
                        </Box>
                        <OrderProcessing/>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Modal>
        </>
      }
      {isMobile &&
        <>
          <Box onClick={toggleCart} sx={{ cursor: "pointer", textAlign: "center" }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <LogoCart />
            </Box>
            {renderTypography("Кошик", {
              fontSize: "18px",
              color: theme.secondaryText,
            })}
          </Box>
          
          <Modal open={openCart} onClose={toggleCart}>
            <Box
            sx={{
              width: "100vw",
              height: "95vh",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              borderRadius: "20px",
              overflow: "scroll",
            }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                sx={{
                  height: "108px",
                  padding: "25px 0 0 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                >
                  {renderTypography("КОШИК", {
                    fontSize: "20px",
                    fontWeight: "600",
                  })}
                  {renderTypography(`${ArticlesCount} товарів`, {
                    fontSize: "13px",
                    fontWeight: "400",
                  })}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckBox text="Обрати Все" />
                    {renderTypography(
                      `обрано ${ArticlesCount} з ${ArticlesCount} `,
                      { color: "#808080" }
                    )}
                    {renderTypography("Видалити обране", {
                      fontWeight: "500",
                      marginLeft: "30px",
                      color: "#FF2A2A",
                    })}
                  </Box>
                </Box>
                <Box onClick={toggleCart} sx={{ padding: "25px 30px 0 0" }}>
                  <img src="./images/CloseBtn.svg" alt="Close" />
                </Box>
              </Box>
              
              <Box sx={{ display: "flex", maxHeight: "50%" }}>
                <Box
                sx={{
                  height: "90%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                >
                  <ArticleList setArticles={setArticles} Articles={Articles} />
                </Box>
              </Box>
              <Box sx={{ marginRight:"0px",height: "80%", width: "100%" }}>
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.35)",
                    padding: "25px 20px",
                  }}
                  >
                    {renderTypography("ЗАМОВЛЕННЯ", {
                      fontSize: "30px",
                      fontWeight: "600",
                    })}
                    <Box>
                      {renderPriceItem(
                        `Товари (${ArticlesCount})`,
                        `${calculateTotalPrice(Articles)}₴`
                      )}
                      {renderPriceItem("Знижка", `-${calculateTotalDiscounts(Articles)} ₴`)}
                      <Box sx={{ marginTop: "25px" }}>
                        {renderTypography("Промокод", {
                          fontSize: "17px",
                          color: "#808080",
                        })}
                        <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                          <TextField
                          id="promo-code"
                          label="Введіть промокод"
                          variant="standard"
                          />
                          <ButtonBase
                          sx={{
                            backgroundColor: "#F1F1F5",
                            borderRadius: "10px",
                            padding: "0 20px",
                            fontFamily: "Montserrat",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                          >
                            Застосувати
                          </ButtonBase>
                        </Box>
                        <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "25px",
                        }}
                        >
                          {renderTypography("До оплати без доставки:", {
                            fontSize: "17px",
                            fontWeight: "600",
                          })}
                          {renderTypography(`${calculatePriceToPay(Articles)} ₴`, {
                            fontSize: "17px",
                            fontWeight: "600",
                          })}
                        </Box>
                        <OrderProcessing/>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </Box>
          </Modal>
        </>
      }
    </>
  );
}
