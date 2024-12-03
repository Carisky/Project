import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { LogoProfil } from "../../images/LogoProfil.jsx";
import { LogoFlox } from "../../images/LogoFlox.jsx";
import { LogoCart } from "../../images/LogoCart.jsx";
import { LogoHeart } from "../../images/LogoHeart.jsx";
import { LogoBurger } from "../../images/LogoBurger.jsx";
import useTheme from "../../hooks/useTheme.js";
import AlignSvg from "../helpers/AlignSvg.jsx";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AuthPage from "../../pages/AuthPage.jsx";
import { LogoBurgerСross } from "../../images/LogoBurgerСross.jsx";
import { useNavigate } from "react-router-dom";
/**/

export default function Header() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate(); // Initialize navigation
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    // Header
    <Box
      sx={{
        width: "82%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        alignItems="end"
        sx={{
          color: theme.mainText,
          fontWeight: "bold",
          fontSize: "48px",
          fontFamily: "Ubuntu",
        }}
      >
        FLOX
      </Typography>
      <Box sx={{ cursor: "pointer" }}>
        <AlignSvg>
          <LogoFlox />
        </AlignSvg>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <AlignSvg>
          <LogoBurger />
        </AlignSvg>
      </Box>
      <Box
        sx={{
          borderRadius: "13px",
          backgroundColor: theme.background,
          height: "58%",
          width: "55%", //должно біть 75
        }}
      >
        <SearchIcon
          alignItems="bottom"
          sx={{ color: "action.active", mr: 1, my: 1.5 }}
        />
        <TextField
          fullWidth="true"
          label="Пошук товарів"
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch} // Handle search on Enter key press
          sx={{
            
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            fullWidth: "true",
            width: "92%",
          }}
        />
      </Box>

      {/*обране*/}
      <Box
        sx={{
          cursor: "pointer",
        }}
      >
        <Box display="flex" justifyContent="center">
          <LogoHeart></LogoHeart>
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Ubuntu",
            alignItems: "center",
            justifyContent: "center",
            color: theme.secondaryText,
          }}
        >
          Обране
        </Typography>
      </Box>

      {/*вхід*/}
      <div>
        <Box
          onClick={handleOpen}
          sx={{
            cursor: "pointer",
          }}
        >
          <AlignSvg>
            <LogoProfil></LogoProfil>
          </AlignSvg>
          <Typography
            sx={{
              fontSize: "18px",
              color: theme.secondaryText,
            }}
          >
            Увійти
          </Typography>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <AuthPage></AuthPage>
        </Modal>
      </div>

      {/*корзина*/}
      <Box
        sx={{
          width: "fit-content",
          marginRight: "3.12px",
          position: "relative",
          flexDirection: "column",
          color: theme.secondaryColor,
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            right: "10px",
            top: "-10px",
            borderRadius: "50%",
            height: "25px",
            width: "25px",
            backgroundColor: theme.cartNotificationFillColor,
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat",
            }}
          >
            3
          </Typography>
        </Box>
        <AlignSvg>
          <LogoCart />
        </AlignSvg>

        <Typography
          sx={{
            fontSize: "18px",
            color: theme.secondaryText,
          }}
        >
          Корзина
        </Typography>
      </Box>
    </Box>
  );
}
