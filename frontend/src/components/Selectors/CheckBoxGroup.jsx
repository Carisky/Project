import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import useTheme from "../../hooks/useTheme";

export default function CheckBoxGroup({
  title,
  values,
  selectedValues,
  setSelectedValues,
  autoComplete,
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleOpenList = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => {
    setSelectedValues(
      (prev) =>
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
    <Box
      sx={{
        width: "378px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "15px 10px 15px 10px",
      }}
    >
      <Box></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ cursor: "pointer" }}>
          <img
            onClick={handleOpenList}
            src={
              open ? "/images/DropDownArrowUp.svg" : "/images/DropDownArrow.svg"
            }
            alt="Dropdown Arrow"
          />
        </Box>
      </Box>

      {autoComplete ? (
        <Box sx={{
          marginTop:"10px"
        }}>
          <InputBase
            placeholder={"Пошук"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            sx={{
              width: "100%",
              backgroundColor: isFocused ? "#FFFFFF" : "#F1F1F5",
              paddingLeft: "10px",
              borderRadius: "10px",
              border: isFocused ? "2px solid #FE7411" : "1px solid transparent",
            }}
          ></InputBase>
        </Box>
      ) : (
        <></>
      )}
      <FormGroup
        sx={{
          height: open ? "auto" : "0px",
          overflow: "hidden",
        }}
      >
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
