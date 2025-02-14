import React from "react";
import Header from "../components/PageModules/Header/Header";
import { Box, Typography } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from "../components/PageModules/Footer/Footer";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

export default function AboutUsPage() {

  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  const textFaq = [
    {
        title: "ШВИДКА ДОСТАВКА",
        descriptionBlock: "Інтуїтивний інтерфейс, швидка навігація та персонлізовані рекомендації.",
    },
    {
        title: "ЗРУЧНИЙ ОНЛАЙН-ШОПІНГ",
        descriptionBlock: "Ваші покупки будуть у вас у найкоротші терміни завдяки нашим надійним партнерам.",
    },
    {
        title: "ЛЕТИМО ЗА ПОКУПКАМИ!",
        descriptionBlock: "Обирайте найкраще вже зараз!",
    },
    {
        title: "ЯКІСТЬ ТА НАДІЙНІСТЬ",
        descriptionBlock: "Ми ретельно відбираємо товари та перевіряємо продавців, щоб ви отримували тільки найкраще.",
    },
    {
        title: "ЕКОЛОГІЧНА СВІДОМІСТЬ",
        descriptionBlock: "Наші продукти враховують принципи сталого розвитку, допомогаючи вам робити вибір на користь довкілля.",
    },
  ];

  return (
    <Box sx={{
        backgroundColor: theme.backgroundColor,
        width: "100%",
        height: "100%",
    }}>
        <Header></Header>
        <Box sx={{
            height: "80%",
        }}>
            <Typography sx={{
                color: theme.mainText,
                fontSize: "120px",
                fontWeight: "bold",
                fontFamily: "Montserrat",
            }}>FAQ</Typography>
        </Box>
        <Footer></Footer>
    </Box>
  );
}
