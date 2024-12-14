import React, { useState } from "react";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AuthPage from "../../../pages/AuthPage.jsx";
import {
  LogoFlox,
  LogoProfil,
  LogoCart,
  LogoHeart,
  LogoBurger,
} from "../../../icons/icons.jsx";
import useTheme from "../../../hooks/useTheme.js";
import { useMediaQuery } from "../../../hooks/useMediaQuery.js";
import { useNavigate } from "react-router-dom";
import Bellowheader from "./HeaderCategories.jsx";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 500px)");
  const isTablet = useMediaQuery(
    "(min-width: 500.01px) and (max-width: 1200px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const [openAuth, setOpenAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const AlignSvg = ({ children }) => (
      <Box display="flex" justifyContent="center" alignItems="center">
        {children}
      </Box>
  );

  const handleAuthModal = () => setOpenAuth(!openAuth);
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const renderSearchBar = () => (
    <Box
      sx={{
        borderRadius: "13px",
        backgroundColor: theme.background,
        height: "58%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 1.5 }} />
      <TextField
        fullWidth
        label="Пошук товарів"
        variant="standard"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
        sx={{
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        }}
      />
    </Box>
  );

  const renderIconWithText = (IconComponent, text) => (
    <Box sx={{ cursor: "pointer", textAlign: "center" }}>
      <AlignSvg>
        <IconComponent />
      </AlignSvg>
      <Typography sx={{ fontSize: "18px", color: theme.secondaryText }}>
        {text}
      </Typography>
    </Box>
  );

  const renderDesktopHeader = () => (
    <Box>
      <Box
        sx={{
          marginLeft: "9%",
          marginRight: "9%",
          marginTop: "10px",
          width: "82%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Логотип */}
        <Box display="flex" alignItems="center" gap="10px">
          <Typography
            sx={{
              color: theme.mainText,
              fontWeight: "bold",
              fontSize: "36px",
              fontFamily: "Ubuntu",
            }}
          >
            FLOX
          </Typography>
          <AlignSvg>
            <LogoFlox />
          </AlignSvg>
        </Box>

        {/* Бургер-меню */}
        <Box
          sx={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <AlignSvg>
            <LogoBurger />
          </AlignSvg>
        </Box>

        {/* Поисковая строка */}
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {renderSearchBar()}
        </Box>

        {/* Иконки */}
        <Box display="flex" alignItems="center" gap="20px">
          {renderIconWithText(LogoHeart, "Обране")}
          <Box onClick={handleAuthModal} sx={{ cursor: "pointer" }}>
            {renderIconWithText(LogoProfil, "Увійти")}
          </Box>
          <Modal open={openAuth} onClose={handleAuthModal}>
            <AuthPage />
          </Modal>
          <Box
            sx={{
              position: "relative",
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
              }}
            >
              <Typography sx={{ color: "#FFFFFF", fontFamily: "Montserrat" }}>
                3
              </Typography>
            </Box>
            {renderIconWithText(LogoCart, "Корзина")}
          </Box>
        </Box>
      </Box>
      <Bellowheader /> {/* Добавляем Bellowheader сюда */}
    </Box>
  );

  const renderMobileHeader = () => (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <AlignSvg>
          <LogoFlox />
        </AlignSvg>
        {renderSearchBar()}
        <AlignSvg>
          <LogoBurger />
        </AlignSvg>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {renderIconWithText(LogoHeart, "Обране")}
        <Box onClick={handleAuthModal} sx={{ cursor: "pointer" }}>
          {renderIconWithText(LogoProfil, "Увійти")}
        </Box>
        <Modal open={openAuth} onClose={handleAuthModal}>
          <AuthPage />
        </Modal>
        <Box
          sx={{
            position: "relative",
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
            }}
          >
            <Typography sx={{ color: "#FFFFFF", fontFamily: "Montserrat" }}>
              3
            </Typography>
          </Box>
          {renderIconWithText(LogoCart, "Корзина")}
        </Box>
      </Box>
      <Bellowheader></Bellowheader>
    </Box>
  );

  return (
    <>
      {isDesktop && renderDesktopHeader()}
      {(isTablet || isMobile) && renderMobileHeader()}
    </>
  );
}
