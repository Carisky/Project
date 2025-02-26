import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import {
  IconShares,
  IconFoods,
  IconClothing,
  IconForHome,
  IconElectronics,
  IconSportingGoods,
  IconBabyProducts,
  IconForAnimals,
  IconShoes,
  IconCosmetics,
} from "../../icons/icons.jsx";
import useTheme from "../../hooks/useTheme";

export default function FormCotegory({ error, onChange }) {
  const theme = useTheme();

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  // Начальное значение пустое или можно задать дефолтное значение
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl error={Boolean(error)}>
      <FormLabel id="radio-buttons-group-label" sx={textOneStyles}>
        Оберіть категорію товару
      </FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value={1}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconShares />
              <Typography>Одяг</Typography>
            </Box>
          }
        />
        <FormControlLabel
          value={2}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconClothing />
              <Typography>Спортивне взуття</Typography>
            </Box>
          }
        />
        <FormControlLabel
          value={3}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconShoes />
              <Typography>Кухонна техніка</Typography>
            </Box>
          }
        />
        <FormControlLabel
          value={4}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconCosmetics />
              <Typography>Техніка для кухні</Typography>
            </Box>
          }
        />
        <FormControlLabel
          value={5}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconForHome />
              <Typography>Дитячі іграшки</Typography>
            </Box>
          }
        />
        <FormControlLabel
          value={6}
          control={<Radio />}
          label={
            <Box display="flex" alignItems="center">
              <IconElectronics />
              <Typography>Аудіотехніка</Typography>
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
