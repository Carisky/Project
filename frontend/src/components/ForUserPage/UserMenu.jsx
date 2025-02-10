import React, { useState } from "react";
import { Box, Button, FormControl, Typography } from "@mui/material";
import useTheme from "../../hooks/useTheme";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { LogoUser, LogoObrane, LogoMyShop } from "../../icons/icons.jsx";
import ArticleListFree from "../ArticleLists/ArticleListFree";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import FormNewDataUser from "./FormNewDataUser.jsx";
import ArticleCardOrder from "./ArticleCardOrder.jsx";
import ArticleCardChosen from "./ArticleCardChosen.jsx";

export default function UserMenu() {

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

  const userOrders = [
    {
      id: 1,
      date: "01.12.2024",
      status: "виконано",
      orderAmount: "2 190 ₴",
      delivery: "2 грудня 2024",
      articles: [articles[0], articles[1], articles[2],],
    },
    {
      id: 2,
      date: "05.12.2024",
      status: "виконано",
      orderAmount: "4 050 ₴",
      delivery: "7 грудня 2024",
      articles: [articles[2], articles[3], articles[0],],
    },
    {
      id: 3,
      date: "10.12.2024",
      status: "виконано",
      orderAmount: "3 750 ₴",
      delivery: "12 грудня 2024",
      articles: [articles[3], articles[2], articles[1],],
    },
    {
      id: 4,
      date: "20.12.2024",
      status: "очікується доставка",
      orderAmount: "5 300 ₴",
      delivery: "заплановано 24 грудня 2024",
      articles: [articles[0], articles[4], articles[3],],
    },
    {
      id: 5,
      date: "20.12.2024",
      status: "виконано",
      orderAmount: "1 910 ₴",
      delivery: "24 грудня 2024",
      articles: [articles[4], articles[3], articles[2],],
    },
  ];

  const ViewOrders = ({order}) => {
    return (
      <Box width="98%" sx={{
        borderRadius: "5px",
        margin: "5px",
        border: "1px solid",
        //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        //justifyContent: "space-between",
      }}>
        <Box width="35%">
          <Typography sx={textThreeStyles}>Замовлення від {order.date}</Typography>
          <Box display="flex" alignItems="center">
            <Typography sx={textTwoStyles}>Статус замовлення: </Typography>
            <Typography sx={textThreeStyles} marginLeft="5px">{order.status}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={textTwoStyles}>Сума замовлення: </Typography>
            <Typography sx={textThreeStyles} marginLeft="5px">{order.orderAmount}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography sx={textTwoStyles}>Дата доставки: </Typography>
            <Typography sx={textThreeStyles} marginLeft="5px">{order.delivery}</Typography>
          </Box>
        </Box>
        <Box width="65%" display="flex" justifyContent="space-between">
          {order.articles.map((article) => {
                return <><ArticleCardOrder article={article} /></>;
          })}
        </Box>
      </Box>
    )
  };

  const ViewChosens = ({articles}) => {
    return (
      <>
          {articles.map((article) => {
                return <ArticleCardChosen article={article} />;
          })}
      </>
    )
  };

  const nameUser = "Катерина";

  const [errors, setErrors] = useState({
    nameuser: "",
    tel: "",
    email: "",
  });
  
  const [formData, setFormData] = useState({
    nameuser: "",
    tel: "",
    email: "",
  });
  
  const saveNewDataUser = async (data) => {
    const response = await apiHandler.post('/users/register', data);
    return response.data;
  };
  
  const handleNewDataUser = async () => {
    try {
      const result = await saveNewDataUser({
        nameuser: formData.nameuser,
        email: formData.email,
        tel: formData.tel,
      });
      console.log("Registered:", result); // Дальнейшие действия: редирект или уведомление об успехе
    }
    catch (error) {
      const errorData = error.response?.data || {};
      setErrors({
        email: errorData.email || "Invalid email",
        tel: errorData.tel || "Invalid password",
        nameuser: errorData.nameuser || "Invalid name",
      });
      console.error("Registration failed:", errorData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Убираем ошибку
  };

  const [swap,setSwap] = useState("personalData");
  
  const changeUser = () => {
    switch(swap) {
      case "personalData":
        return (
          <>
            <Typography sx={textOneStyles}>ЗМІНА ОСОБИСТИХ ДАНИХ</Typography>
            <FormControl>
              <Typography sx={textOneStyles} marginTop="20px" marginBottom="5px">Вкажіть нове ім'я</Typography>
              <FormNewDataUser
              label={nameUser}
              error={errors.nameuser}
              value={formData.nameuser}
              onChange={(e) => handleInputChange("nameuser", e.target.value)}
              fullWidth
              margin="normal"
              />
              <Typography sx={textOneStyles} dmarginTop="20px" marginBottom="5px">Вкажіть новий номер телефону</Typography>
              <FormNewDataUser
              label="Ваш новий номер"
              error={errors.tel}
              value={formData.tel}
              onChange={(e) => handleInputChange("tel", e.target.value)}
              fullWidth
              margin="normal"
              />
              <Typography sx={textOneStyles} marginTop="20px" marginBottom="5px">Вкажіть нову адресу електронної пошти</Typography>
              <FormNewDataUser
              label="Ваша нова пошта"
              error={errors.email}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              fullWidth
              margin="normal"
              />
              <Button marginTop="20px" onClick={handleNewDataUser} sx={{
                backgroundColor: theme.mainColor,
                width: "100%",
                borderRadius: "11px",
                height: "36px",
                marginTop: "20px",
              }}>
                <Typography sx={{
                  color: "white",
                  fontWeight: "bold",
                }}>Підтвердити зміни</Typography>
              </Button>
            </FormControl>
          </>);
      break;
      case "chosen":
        return (
          <>
            <Typography sx={textOneStyles} textAlign="center">Обрані товари</Typography>
            <Box sx={{
              height: "90%",
              overflow: "auto"
            }}>
              <ViewChosens articles={articles}/>
              <ViewChosens articles={articles}/>
            </Box>
          </>);
      break;
      case "shopping":
        return (
          <>
            <Typography sx={textOneStyles} textAlign="center">Мої покупки</Typography>
            <Box sx={{
              height: "90%",
              overflow: "auto"
            }}>
              {userOrders.map((order) => {
                return <><ViewOrders order={order}></ViewOrders></>;
              })}
            </Box>
          </>);
      break;
    }
  };
  
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

  const textThreeStyles = {
    color: theme.mainText,
    fontSize: "16px",
    fontWeight: "bold",
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
                    <Box onClick={()=>{setSwap("personalData")}} sx={{
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
                    <Box onClick={()=>{setSwap("chosen")}} sx={blockStyles}>
                        <Box>
                            <Typography sx={textOneStyles}>Обране</Typography>
                            <Typography sx={textTwoStyles}>Кількість товарів</Typography>
                        </Box>
                        <AlignSvg><LogoObrane/></AlignSvg>
                    </Box>
                    <Box onClick={()=>{setSwap("shopping")}} sx={blockStyles}>
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
                    <Box sx={{
                      margin: "20px 10px 10px 10px",
                      height: "95%",
                      //overflow: "auto"
                      //height: "100%",
                      //display: "flex",
                      //flexWrap: "wrap",
                      //alignContent: "space-between",
                    }}>
                      {changeUser()}
                    </Box>
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