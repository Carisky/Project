import { Checkbox, FormControlLabel, FormGroup, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useTheme from "../../hooks/useTheme";

export default function CheckBoxGroup({ values, selectedValues, setSelectedValues }) {
  const theme = useTheme();

  const handleToggle = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Uncheck the value
        : [...prev, value] // Check the value
    );
  };

  useEffect(() => {
    // Для синхронизации состояния с родителем, когда `selectedValues` меняется
    console.log(selectedValues);
  }, [selectedValues]);

  return (
    <Box>
      <Typography sx={{
        fontFamily:"Montserrat",
        fontWeight:500
      }}>Select Options</Typography>
      <FormGroup>
        {values.map((value, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedValues.includes(value)} // Используем selectedValues из родителя
                onChange={() => handleToggle(value)} // Обновляем выбранные категории
                sx={{
                  borderRadius: "6px",
                  color: theme.secondaryText,
                  "&.Mui-checked": {
                    color: theme.mainColor,
                  },
                }}
              />
            }
            label={value}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
