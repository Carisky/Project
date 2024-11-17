import React from "react";
import { Box, Typography } from "@mui/material";
import palete from "../../palete";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { LogoProfil } from "../../images/LogoProfil.jsx";
import { LogoFlox } from "../../images/LogoFlox.jsx";
import { LogoCart } from "../../images/LogoCart.jsx";
import { LogoHeart } from "../../images/LogoHeart.jsx";
import { LogoBurger } from "../../images/LogoBurger.jsx";
import { LogoEllipse } from "../../images/LogoEllipse.jsx";

//import Button from "../Button/Button";    
//    display: "flex",
//    <svg src="../../../public/images/logo_flox.svg"></svg>
//cursor="pointer"
/*

*/

export default function Header() {
  return (
    // Header
      <Box justifyContent="space-between" alignItems="end" display="flex">

        <Box>
          <Typography alignItems="end" sx={{
            color:"black",
            fontWeight:"bold",
            fontSize: "47px",
            fontFamily: "Ubuntu",
          }}>FLOX</Typography>
        </Box>

        <LogoFlox width={50} height={50} />

        <LogoBurger width={50} height={50} />

        <Box sx={{
          borderRadius: "13px",
          backgroundColor: palete.light.background,
          height: "58%",
          width: "55%",//должно біть 75
        }}>
          <SearchIcon alignItems="bottom" sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
          <TextField id="input-with-sx" label="Пошук товарів" variant="standard" sx={{
            '& .MuiInput-underline:before': { borderBottom: 'none', },
            '& .MuiInput-underline:after': { borderBottom: 'none', },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none', },
          }}/>
        </Box>

{/*обране*/}
        <Box display="block" alignItems="center">
          <LogoHeart width={28} height={26}  />
          <Typography sx={{
            fontSize: "18px",
            fontFamily: "Ubuntu",
            color: palete.light.secondaryText,
          }}
          >Обране
          </Typography>
        </Box>

{/*вхід*/}
        <Box 
        sx={{
          display: "block",
          width: "60px",
          marginRight: "3.12px",
          color: palete.light.secondaryColor,
        }}>
          <LogoProfil />
          <Typography
          sx={{
            fontSize: "18px",
            color: palete.light.secondaryText,
          }}
          >Увійти
          </Typography>
        </Box>

{/*корзина*/}
        <Box // {/*установить количество товаров в корзине*/}
        sx={{
          width: "60px",
          marginRight: "3.12px",
          color: palete.light.secondaryColor,
        }}>
          <Box width="16px" height="16px">
            <LogoCart />
            <LogoEllipse sx={{
              width: "16px",
              height: "16px",
              position:"absolute",
              top:"16px",
              right:"16px",
              //cursor:"pointer",
              zIndex:2
            }}>
              <Typography
              sx={{
                fontSize: "8px",
                color: palete.light.secondaryText,
              }}>3</Typography>
            </LogoEllipse>
          </Box>
          
          <Typography
          sx={{
            fontSize: "18px",
            color: palete.light.secondaryText,
          }}
          >Корзина
          </Typography>
        </Box>
      </Box>
  );
}