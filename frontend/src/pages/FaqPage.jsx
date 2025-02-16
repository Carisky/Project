import React from "react";
import Header from "../components/PageModules/Header/Header";
import { Box, Typography } from "@mui/material";
import useTheme from "../hooks/useTheme";
import Footer from "../components/PageModules/Footer/Footer";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

export default function FaqPage() {

  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  const textFaq = [
    {
        nameBlock: "ОПЛАТА",
        tegBlock: "Ми пропонуємо зручні та безпечні способи оплати:",
        liBlock1: "Онлайн-оплата банківською карткою (Visa, Mastercard).",
        liBlock2: "Оплата при отриманні товару (накладений платіж).",
        liBlock3: "",
        descriptionBlock: "Після оформлення замовлення ви отримуєте підтвердження на електронну пошту з деталями оплати. Усі транзакції захищені сучасними системами шифрування для вашої безпеки.",
    },
    {
        nameBlock: "ДОСТАВКА",
        tegBlock: "Ми співпрацюємо з надійними службами доставки, щоб ви могли отримати замовлення швидко та зручно.",
        liBlock1: "Термін доставки: від 1 до 5 робочих днів залежно від вашого регіону.",
        liBlock2: "Способи доставки: кур'єрська доставка, самовивіз із відділення пошти.",
        liBlock3: "",
        descriptionBlock: "Після відправлення замовлення ви отримаєте номер для відстеження посилки.",
    },
    {
        nameBlock: "БЕЗПЕКА",
        tegBlock: "Ваші дані надійно захищені.",
        liBlock1: "Ми використовуємо сучасні протоколи захисту інформації.",
        liBlock2: "Особиста інформація клієнтів не передається третім особам без вашої згоди.",
        liBlock3: "Усі платіжні дані шифруються, що забезпечує безпечність ваших транзакцій.",
        descriptionBlock: "Якщо у вас виникли питання щодо безпеки, зверніться до нашої служби підтримки.",
    },
    {
        nameBlock: "ПОВЕРНЕННЯ ТОВАРУ",
        tegBlock: "Ми пропонуємо зручну процедуру повернення товарів:",
        liBlock1: "1. Зв'яжіться зі службою підтримки протягом 14 днів після отримання товару",
        liBlock2: "2. Заповніть заявку на повернення та підготуйте товар (оригінальна упаковка, товарний вигляд",
        liBlock3: "3. Надішліть товар за вказаною адресою.",
        descriptionBlock: "Повернення коштів здійснюється протягом 7 робочих днів після перевірки товару.",
    },
    {
        nameBlock: "ЯК ЗРОБИТИ ЗАМОВЛЕННЯ",
        tegBlock: "Після обрання товару (або товарів), який Вас зацікавив треба натиснути 'Додати до кошика'",
        liBlock1: "1. Заповніть відомості про себе та спосіб оплати.",
        liBlock2: "2. Вкажіть адресу та спосіб достави.",
        liBlock3: "3. Підтвердіть замовлення.",
        descriptionBlock: "Після оформлення ви отримаєте повідомлення на електронну пошту з деталями вашого замовлення.",
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
