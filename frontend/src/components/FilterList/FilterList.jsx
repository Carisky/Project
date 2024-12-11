import { Box, Modal, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AllFiltersButton from "./AllFiltersButton";
import PriceRange from "../Selectors/PriceRange";
import CheckBoxGroup from "../Selectors/CheckBoxGroup";
import useTheme from "../../hooks/useTheme";

export default function FilterList({
  checkBoxAutoComplete,
  checkBoxTitle,
  priceRange,
  setPriceRange,
  amount,
  categories,
  selectedCategories,
  setSelectedCategories,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "9vw",
      }}
    >
      <AllFiltersButton onClick={handleOpen}></AllFiltersButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "432px",
            height: "600px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "37px",
            paddingRight: "37px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Box
            sx={{
              height: "63px",
              width: "358px",
              borderRadius: "20px",
              padding: "20px",
              backgroundColor: "#F1F1F5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "23px",
              }}
            >
              Фільтри
            </Typography>

            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              <img src="/images/CloseBtn.svg" alt="" />
            </Box>
          </Box>
          <PriceRange range={priceRange} setRange={setPriceRange} />
          {/* Добавление CheckBoxGroup для фильтрации по категориям */}
          <CheckBoxGroup
            autoComplete={checkBoxAutoComplete}
            title={checkBoxTitle}
            values={categories}
            selectedValues={selectedCategories}
            setSelectedValues={setSelectedCategories}
          />
          <Box
            sx={{
              marginTop: "10px",
              width: "368px",
              height: "79px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  color: theme.secondaryText,
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Знайшли {amount} товарів
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F1F1F5",
                  width: "159px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  Скинути все{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  backgroundColor: theme.mainColor,
                  width: "159px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  Готово{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
