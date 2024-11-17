import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import palete from "../../palete";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from "../Button/Button";
export default function ArticleCard() {
  return (
    <Card
      sx={{
        border:"none",
        margin: "10px",
        height: "450px",
        width: "232px",
        boxShadow:"none"
      }}
    >
      <Box
        sx={{
          position:"relative",
          display:"flex",
          borderRadius: "13px",
          height: "250px",
          width: "100%",
          backgroundColor: palete.light.background,
        }}
      >
        <FavoriteBorderIcon sx={{
            position:"absolute",
            top:"16px",
            right:"16px",
            cursor:"pointer",
            zIndex:2
        }}>

        </FavoriteBorderIcon>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "8px",
            fontFamily: "Libre Franklin",
          }}
        >
          <Typography
            sx={{
              color: palete.light.mainText,
              fontSize: "24px",
            }}
          >
            Назва продукту
          </Typography>
          <Typography
            sx={{
              color: palete.light.secondaryText,
              fontSize: "24px",
            }}
          >
            Назва фірми
          </Typography>
          <Typography
            sx={{
              color: palete.light.secondaryText,
              fontSize: "24px",
            }}
          ></Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "7px",
          fontFamily: "Libre Franklin",
        }}
      >
        <Typography
          sx={{
            fontSize: "21px",
            fontWeight: "bolder",
            marginRight: "7px",
            color: palete.light.mainText,
          }}
        >
          000$
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            marginTop: "6px",
            marginRight: "7px",
            fontWeight: 400,
            color: palete.light.secondaryText,
          }}
        >
          000$
        </Typography>
        <Typography
          sx={{
            marginTop: "6px",
            fontSize: "17px",
            fontWeight: 400,
            color: palete.light.accentText,
          }}
        >
          -34%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}
        >
          <StarIcon
            sx={{
              marginRight: "3.5px",
              color: palete.light.secondaryColor,
            }}
          ></StarIcon>
          <Typography
            sx={{
              color: palete.light.secondaryText,
              fontSize: "14px",
            }}
          >
            4.8
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "7px",
          }}
        >
          <ReviewsIcon
            sx={{
              height: "20px",
              width: "20px",
              marginRight: "3.12px",
              color: palete.light.secondaryColor,
            }}
          ></ReviewsIcon>
          <Typography
            sx={{
              fontSize: "14px",
              color: palete.light.secondaryText,
            }}
          >
            23 відгуки
          </Typography>
        </Box>
      </Box>
      <Button></Button>
    </Card>
  );
}
