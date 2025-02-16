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

export default function FormCotegory(error, OnChange) {

  const theme = useTheme();

  const textOneStyles = {
    color: theme.mainText,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const renderCategory = ({ icon: Icon, label1 }) => (
    <FormControlLabel value={label1} control={<Radio />} label={<Box display="flex" alignItems="center"><Icon /><Typography>{label1}</Typography></Box>} />
  );

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={textOneStyles}>Оберіть категорію товару</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        value={value}
        error={Boolean(error)}
        onChange={handleChange}
      >
        <FormControlLabel value="Акції" control={<Radio />} label={<Box display="flex" alignItems="center"><IconShares /><Typography>Акції</Typography></Box>} />
        <FormControlLabel value="Одяг" control={<Radio />} label={<Box display="flex" alignItems="center"><IconClothing /><Typography>Одяг</Typography></Box>} />
        <FormControlLabel value="Взуття" control={<Radio />} label={<Box display="flex" alignItems="center"><IconShoes /><Typography>Взуття</Typography></Box>} />
        <FormControlLabel value="Косметика" control={<Radio />} label={<Box display="flex" alignItems="center"><IconCosmetics /><Typography>Косметика</Typography></Box>} />
        <FormControlLabel value="Для дому" control={<Radio />} label={<Box display="flex" alignItems="center"><IconForHome /><Typography>Для дому</Typography></Box>} />
        <FormControlLabel value="Електроніка" control={<Radio />} label={<Box display="flex" alignItems="center"><IconElectronics /><Typography>Електроніка</Typography></Box>} />
        <FormControlLabel value="Спорт" control={<Radio />} label={<Box display="flex" alignItems="center"><IconSportingGoods /><Typography>Спорт</Typography></Box>} />
        <FormControlLabel value="Дитячі товари" control={<Radio />} label={<Box display="flex" alignItems="center"><IconBabyProducts /><Typography>Дитячі товари</Typography></Box>} />
        <FormControlLabel value="Для тварин" control={<Radio />} label={<Box display="flex" alignItems="center"><IconForAnimals /><Typography>Для тварин</Typography></Box>} />
        <FormControlLabel value="Продукти харчування" control={<Radio />} label={<Box display="flex" alignItems="center"><IconFoods /><Typography>Продукти харчування</Typography></Box>} />
        
      </RadioGroup>
    </FormControl>
  );
}