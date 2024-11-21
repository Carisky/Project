import { Box, Typography } from "@mui/material";
import React from "react";

export default function QuestionList({ questions, Title }) {
  return (
    <Box>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontFamily: "Montserrat",
          fontSize: "15px",
          fontWeight: "800",
        }}
      >
        {Title}
      </Typography>
      {questions.map((question) => {
        return (
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "15px",
            }}
          >
            {question}
          </Typography>
        );
      })}
    </Box>
  );
}
