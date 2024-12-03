import { Box, Typography } from "@mui/material";
import React from "react";

export default function AllFiltersButton({onClick}) {
  return (
    <Box
    onClick={onClick}
      sx={{
        backgroundColor: "#F1F1F5",
        height: "38px",
        borderRadius: "10px",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:"10px",
        paddingRight:"10px",
        cursor:"pointer"
      }}
    >
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
      }}>
        <img src="/images/AllFilters.svg"></img>
        <Typography sx={{
            marginLeft:"10px"
        }}>Всі Фільтри</Typography>
      </Box>
    </Box>
  );
}
