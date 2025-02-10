import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
import { Box, Typography } from '@mui/material';
import useTheme from "../../hooks/useTheme";
import Grid from '@mui/material/Grid'
  
  const categories = [
    { icon: IconShares, label: "Акції" },
    { icon: IconClothing, label: "Одяг" },
    { icon: IconShoes, label: "Взуття" },
    { icon: IconCosmetics, label: "Косметика" },
    { icon: IconForHome, label: "Для дому" },
    { icon: IconElectronics, label: "Електроніка" },
    { icon: IconSportingGoods, label: "Спорт" },
    { icon: IconBabyProducts, label: "Дитячі товари" },
    { icon: IconForAnimals, label: "Для тварин" },
    { icon: IconFoods, label: "Продукти харчування" },
  ];

export default function FormCotegory() {

  const theme = useTheme();

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };
  
  const renderCategory = ({ icon: Icon, label }) => (
    <FormControlLabel value={label} control={<Radio />} label={<Box display="flex" alignItems="center"><Icon /><Typography>{label}</Typography></Box>} />
  );

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={textOneStyles}>Оберіть категорію товару</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6}>
              {renderCategory(category)}
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}