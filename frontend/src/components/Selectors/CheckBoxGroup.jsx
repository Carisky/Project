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
  const [searchText, setSearchText] = useState(""); // State for the search input

  const handleOpenList = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // Uncheck the value
        : [...prev, value] // Check the value
    );
  };

  const filteredValues = values.filter((value) =>
    value.toLowerCase().includes(searchText.toLowerCase())
  ); // Filter options based on the search text

  useEffect(() => {
    // Sync state with parent when `selectedValues` changes
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
              border: isFocused
                ? "2px solid #FE7411"
                : "1px solid transparent",
              transition: "border 0.3s ease, background-color 0.3s ease",
            }}
          />
        </Box>
      )}
      <FormGroup
        sx={{
          height: open ? "auto" : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        {filteredValues.map((value, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={selectedValues.includes(value)}
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
            label={value}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
