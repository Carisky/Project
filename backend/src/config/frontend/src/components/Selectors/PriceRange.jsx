import { Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

export default function PriceRange({ range, setRange }) {
  const [localRange, setLocalRange] = useState({
    min: range.min,
    max: range.max,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLocalRange((prevRange) => ({
      ...prevRange,
      [name]: value === "" ? "" : parseInt(value, 10),
    }));
  };

  const handleBlur = () => {
    // Обновляем глобальный диапазон при потере фокуса
    setRange(localRange);
  };

  return (
    <Box
      sx={{
        height: "120px",
        width: "358px",
        marginTop: "7px",
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.35)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        Ціна
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "5px",
            }}
          >
            Від
          </Typography>
          <TextField
            name="min"
            value={localRange.min || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={`${range.min}`}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              backgroundColor: "#F1F1F5",
              width: "120px",
              height: "36px",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "5px",
            }}
          >
            До
          </Typography>
          <TextField
            name="max"
            value={localRange.max || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={`${range.max}`}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              border: "none",
              backgroundColor: "#F1F1F5",
              width: "120px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
