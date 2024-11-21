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
import useTheme from "../../hooks/useTheme.js";
import AlignSvg from "../helpers/AlignSvg.jsx"
/**/
export default function Header() {

  const theme = useTheme();

  return (
    // Header
      <Box sx={{width:"82%", margin:"auto"}} display="flex" justifyContent="space-between" alignItems="center">

        <Typography alignItems="end" sx={{
            color: theme.mainText,
            fontWeight:"bold",
            fontSize: "48px",
            fontFamily: "Ubuntu",
          }}>FLOX</Typography>

        <AlignSvg><LogoFlox /></AlignSvg>

        <AlignSvg><LogoBurger /></AlignSvg>

        <Box sx={{
          borderRadius: "13px",
          backgroundColor: theme.background,
          height: "58%",
          width: "55%",//должно біть 75
        }}>
          <SearchIcon alignItems="bottom" sx={{ color: 'action.active', mr: 1, my: 1.5 }} />
          <TextField fullWidth="true" label="Пошук товарів" variant="standard" sx={{
            '& .MuiInput-underline:before': { borderBottom: 'none', },
            '& .MuiInput-underline:after': { borderBottom: 'none', },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none', },
            fullWidth: "true",
            width: "92%"
          }}/>
        </Box>

{/*обране*/}
        <Box>
          <Box display="flex" justifyContent="center">
            <LogoHeart></LogoHeart>
          </Box>
          <Typography sx={{
            fontSize: "18px",
            fontFamily: "Ubuntu",
            alignItems:"center",
            justifyContent: "center",
            color: theme.secondaryText,
          }}>
            Обране
          </Typography>
        </Box>

{/*вхід*/}
        <Box>
          <AlignSvg>
            <LogoProfil></LogoProfil>
          </AlignSvg>
          <Typography
          sx={{
            fontSize: "18px",
            color: theme.secondaryText,
          }}>
            Увійти
          </Typography>
        </Box>

{/*корзина*/}
        <Box
        sx={{
          width:"fit-content",
          marginRight: "3.12px",
          position:"relative",
          flexDirection: "column",
          color: theme.secondaryColor,
        }}>
          <Box sx={{
            display:"flex",
            justifyContent:"center",
            position:"absolute",
            right:"10px",
            top:"-10px",
            borderRadius:"50%",
            height:"25px",
            width:"25px",
            backgroundColor: theme.cartNotificationFillColor,
            opacity:1
          }}>
            <Typography sx={{
              color:"#FFFFFF",
              fontFamily:"Montserrat"
            }}>
              3
            </Typography>
          </Box>
          <AlignSvg>
            <LogoCart/>
          </AlignSvg>
          
          <Typography
          sx={{
            fontSize: "18px",
            color: theme.secondaryText,
          }}>
            Корзина
          </Typography>
        </Box>
      </Box>
  );
}