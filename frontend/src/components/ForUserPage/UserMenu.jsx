import React from "react";
import { Box, Link, TextField, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { LogoUser, LogoObrane, LogoMyShop } from "../../icons/icons.jsx";
import ArticleListFree from "../ArticleLists/ArticleListFree";

export default function UserMenu(userData = true, favorData = false, myShop = false) {

  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  const articles = [
    {
      id: 1,
      name: "Wireless Headphones",
      seller_name: "Audio World",
      price: "199.99",
      rating: 4.5,
      discount: "20%",
      reviews_count: 120,
      image: "headphones.jpg",
    },
    {
      id: 2,
      name: "Smartphone Pro Max",
      seller_name: "Gadget Hub",
      price: "999.99",
      rating: 4.8,
      discount: "15%",
      reviews_count: 450,
      image: "smartphone.jpg",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      seller_name: "Tech Store",
      price: "1299.99",
      rating: 4.6,
      discount: "10%",
      reviews_count: 230,
      image: "laptop.jpg",
    },
    {
      id: 4,
      name: "Sports Watch",
      seller_name: "Outdoor Gear",
      price: "249.99",
      rating: 4.2,
      discount: "25%",
      reviews_count: 85,
      image: "watch.jpg",
    },
    {
      id: 5,
      name: "Electric Scooter",
      seller_name: "Eco Riders",
      price: "499.99",
      rating: 4.7,
      discount: "30%",
      reviews_count: 340,
      image: "scooter.jpg",
    },
  ];

  const nameUser = "Катерина";

  const WindowUserData = () => (
    <Box>
        <Typography sx={textOneStyles} textAlign="center">"Це сторінка зміни персональних даних"</Typography>
        <Box sx={{
            display: "flex",
            marginTop: "10px",
            marginLeft: "20px",
            alignItems: "center",
            width: "40%",
        }}>
            <Typography sx={textOneStyles} marginRight = "20px">Ім'я:</Typography>
            <TextField variant="outlined" value={nameUser}/>
        </Box>
    </Box>);
    
  const WindowFavorData = () => (
    <Box>
        <Typography sx={textOneStyles} textAlign="center">"Це сторінка обраних товарів"</Typography>
    </Box>);

  const WindowMyShop = () => (
    <Box>
        <Typography sx={textOneStyles} textAlign="center">"Це сторінка зроблених замовлень"</Typography>
    </Box>);

  
  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  const textTwoStyles = {
    color: theme.secondaryText,
    fontSize: "16px",
    fontFamily: "Montserrat",
  };

  const blockStyles = {
    borderRadius: "20px",
    padding: "10px",
    marginTop: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    display: "flex",
    justifyContent: "space-between",
  };

  const AlignSvg = ({ children }) => (
      <Box display="flex" justifyContent="center" alignItems="center">
        {children}
      </Box>
    );

  return (
    <>
        {isDesktop &&
        <>
            <Box sx={{
                height: "570px",
                width: "82%",
                marginLeft: "9%",
                marginRight: "9%",
                marginBottom: "10px",
                display: "flex",
                backgroundColor: theme.backgroundColor,
            }}>
                <Box sx={{
                    height: "100%",
                    width: "29%",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}>
                    <Box sx={{
                        marginLeft: "20px",
                        marginRight: "10px",
                        marginTop: "10px",
                        marginBottom: "20px",
                        display: "flex",
                        cursor: "pointer",
                    }}>
                        <AlignSvg><LogoUser/></AlignSvg>
                        <Box sx={{
                            alignContent: "center",
                            marginLeft: "10px",
                        }}>
                            <Typography sx={textOneStyles}>{nameUser}</Typography>
                            <Typography sx={textTwoStyles}>Змінити особисті дані</Typography>
                        </Box>
                    </Box>
                    <Box sx={blockStyles}>
                        <Box>
                            <Typography sx={textOneStyles}>Обране</Typography>
                            <Typography sx={textTwoStyles}>Кількість товарів</Typography>
                        </Box>
                        <AlignSvg><LogoObrane/></AlignSvg>
                    </Box>
                    <Box sx={blockStyles}>
                        <Box>
                            <Typography sx={textOneStyles}>Мої покупки</Typography>
                            <Typography sx={textTwoStyles}>Дивитись</Typography>
                        </Box>
                        <AlignSvg><LogoMyShop/></AlignSvg>
                    </Box>
                    <Box sx={{
                        borderRadius: "20px",
                        padding: "10px",
                        marginTop: "10px",
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginBottom: "10px",
                    }}>
                        <Typography sx={textOneStyles}>Сервіси та допомога</Typography>
                        <Typography sx={textTwoStyles}>Написати в підтримку</Typography>
                        <Typography sx={textTwoStyles}>Повернення товару</Typography>
                        <Typography sx={textTwoStyles}>Вийти з акаунту</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    height: "100%",
                    width: "71%",
                    marginLeft: "20px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}>
                    {userData ? (WindowUserData()):(favorData ? (WindowFavorData()):(myShop ? (WindowMyShop()):(<></>)))}
                </Box>
            </Box>
            <Typography sx={textOneStyles} textAlign="center">Нещодавно дивилися</Typography>
            <ArticleListFree Articles={articles}></ArticleListFree>
        </>
        }
        {isMobile &&
            <>
                <span>HELLO WORLD!!!</span>
                <span>HELLO WORLD!!!HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO</span>
            </>
        }
    </>
  );
}