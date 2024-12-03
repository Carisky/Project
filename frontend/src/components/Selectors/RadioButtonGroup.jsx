import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";

export default function RadioButtonGroup({ values = [] }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOpenList = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "358px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "328px",
          height: "42px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Label</Typography>
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
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginLeft: "13px",
            height: open ? "auto" : "0px",
            width: "300px",
            overflow: "hidden",
            transition: "height 0.3s ease",
          }}
        >
          <FormControl
            sx={{
              paddingLeft: "2px",
            }}
            component="fieldset"
          >
            <RadioGroup value={selectedValue} onChange={handleChange}>
              {values.map((value, index) => (
                <FormControlLabel
                  key={index}
                  value={value}
                  control={<Radio />}
                  label={value}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: "1.2em" },
                    "& .Mui-checked": { color: theme.mainColor },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
