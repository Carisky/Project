import { Box } from "@mui/material";
import React from "react";
import QuestionList from "./QuestionList";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";

export default function FAQ() {
  const questions1 = ["Увійти", "Кошик", "Обране"];
  const questions2 = [
    "Про нас",
    "Контакти",
    "Слуба підтримки",
    "+380-99-126-23-20",
    "flox_ua@gmail.com",
  ];
  const questions3 = [
    "Доставка",
    "Оплата",
    "Безпека",
    "Повернення товару",
    "Як зробити замовлення",
  ];

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  return (
    <>
    {isMobile &&
      <Box sx={{
        width: "100%",
        paddingTop: "30px",
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 50px 20px 30px",
        }}>
          <QuestionList Title={"ПРОФІЛЬ"} questions={questions1} width="50%"></QuestionList>
          <QuestionList Title={"FAQ"} questions={questions2} width="50%"></QuestionList>
        </Box>
        <Box sx={{
          margin: "0px 50px 20px 30px",
        }}>
          <QuestionList Title={"КОМПАНІЯ"} questions={questions3} width="50%"></QuestionList>
        </Box>
      </Box>
    }
    {isDesktop &&
      <Box sx={{
        height: "164px",
        width: "696px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "33px",
      }}>
        <QuestionList Title={"ПРОФІЛЬ"} questions={questions1}></QuestionList>
        <QuestionList Title={"FAQ"} questions={questions2}></QuestionList>
        <QuestionList Title={"КОМПАНІЯ"} questions={questions3}></QuestionList>
      </Box>
    }
    </>
  );
}
