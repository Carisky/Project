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
  values, // Массив объектов {id, name}
  selectedValues,
  setSelectedValues,
  autoComplete,
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState(""); 

  const handleOpenList = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => {
    setSelectedValues(
      (prev) =>
        prev.includes(value.id)
          ? prev.filter((item) => item !== value.id)
          : [...prev, value.id]
    );
  };

  const filteredValues = values.filter((value) =>
    value.name.toLowerCase().includes(searchText.toLowerCase())
  ); 

  useEffect(() => {
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
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.35)",
          transform: "translateY(-2px)",
        },
      }}
    >
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
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </Box>
      </Box>

      {autoComplete && (
        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <InputBase
            placeholder="Пошук"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            sx={{
              display: open ? "" : "none",
              width: "100%",
              backgroundColor: isFocused ? "#FFFFFF" : "#F1F1F5",
              paddingLeft: "10px",
              borderRadius: "10px",
              border: isFocused ? "2px solid #FE7411" : "1px solid transparent",
              transition: "border 0.3s ease, background-color 0.3s ease",
            }}
          />
        </Box>
      )}
      <FormGroup
        sx={{
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          height: open ? "auto" : "0px",
          overflow: open ? "auto" : "hidden", 
          transition: "height 0.3s ease",
          maxHeight: filteredValues.length > 5 ? "200px" : "auto", 
          paddingRight: filteredValues.length > 5 ? "10px" : "0", 

          "&::-webkit-scrollbar": {
            width: "8px", 
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F1F1F5", 
            borderRadius: "4px", 
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.secondaryText, 
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#FFFFFF", 
            borderRadius: "4px", 
          },
        }}
      >
        {filteredValues.map((value, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
              checked={selectedValues.includes(value.id)}
                onChange={() => handleToggle(value)}
                sx={{
                  borderRadius: "6px",
                  color: theme.secondaryText,
                  transition: "transform 0.2s ease, color 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    color: theme.mainColor,
                  },
                  "&.Mui-checked": {
                    color: theme.mainColor,
                  },
                }}
              />
            }
            label={value.name}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
