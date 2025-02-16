import { Box, Typography } from "@mui/material";
import React from "react";
import useTheme from "../../../../hooks/useTheme.js";
import QRcode from "./QRcode.jsx";
import { useMediaQuery } from "../../../../hooks/useMediaQuery.js";

export default function SocialMedia() {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 500px)");
  const isDesktop = useMediaQuery("(min-width: 500.01px)");

  return (
    <>
    {isMobile &&
      <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.secondaryColor,
        width: "96%",
        height: "221px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Box>
          <QRcode></QRcode>
        </Box>
        <Box sx={{ height: "181px", width: "173px" }}>
          <Typography sx={{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:"12px"}}>
            Скануй QR-код, щоб <span>завантажити наш </span>мобільний додаток
          </Typography>
          <Box sx={{display:"flex",marginTop:"25px"}}>
            <Box><img src="/images/socialsInst.svg"></img></Box>
            <Box sx={{marginLeft:"14px",marginRight:"14px"}}>
              <img src="/images/socialsTg.svg"></img>
            </Box>
            <Box><img src="/images/socialsFb.svg"></img></Box>
          </Box>
          <Typography sx={{fontFamily:"Ubuntu",fontWeight:"500",color:"#FFFFFF",fontSize:"44px"}}>FLOX</Typography>
        </Box>
      </Box>
    }
    {isDesktop &&
      <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.secondaryColor,
        width: "466px",
        height: "221px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <Box>
          <QRcode></QRcode>
        </Box>
        <Box sx={{ height: "181px", width: "173px" }}>
          <Typography sx={{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:"12px"}}>
            Скануй QR-код, щоб <span>завантажити наш </span>мобільний додаток
          </Typography>
          <Box sx={{display:"flex",marginTop:"25px"}}>
            <Box><img src="/images/socialsInst.svg"></img></Box>
            <Box sx={{marginLeft:"14px",marginRight:"14px"}}>
              <img src="/images/socialsTg.svg"></img>
            </Box>
            <Box><img src="/images/socialsFb.svg"></img></Box>
          </Box>
          <Typography sx={{fontFamily:"Ubuntu",fontWeight:"500",color:"#FFFFFF",fontSize:"44px"}}>FLOX</Typography>
        </Box>
      </Box>
    }
    </>
  );
}
