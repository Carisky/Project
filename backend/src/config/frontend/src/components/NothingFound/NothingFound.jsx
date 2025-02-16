import { Box, Typography } from "@mui/material";
import React from "react";

export default function NothingFound({ quary }) {
  const text = `Вибачте, по запиту ${quary} ми нічого не знайшли`;
  return (
    <Box
      sx={{
        width: "45vw",
        height: "65vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "30px",
          fontWeight: "600",
          color: "#2B2B2B",
          textAlign: "center",
        }}
      >
        Нічого не знайшлося
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "17px",
          color: "#808080",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "17px",
          color: "#808080",
          textAlign: "center",
        }}
      >
        Спробуйте пошукати з іншими параметрами або перейти до категорій
      </Typography>

      <Box
        sx={{
          margin: "auto",
        }}
      >
        <img height={336} width={427} src="./images/NothingFound.svg"></img>
      </Box>
    </Box>
  );
}
