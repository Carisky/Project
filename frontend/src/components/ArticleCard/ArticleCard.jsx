import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from "../Button/Button";
import useTheme from "../../hooks/useTheme";

export default function ArticleCard() {

  const theme = useTheme();

  return (
    <Box sx={{
      margin:"10px"
    }}>
    <Card
      sx={{
        border:"none",
        height: "470px",
        width: "232px",
        boxShadow:"none",
        borderRadius:"14px",
        backgroundColor: theme.mainColor,
      }}>
      <Box
        sx={{
          position:"relative",
          display:"flex",
          borderRadius: "13px",
          height: "250px",
          width: "100%",
          backgroundColor: theme.background,
        }}>
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
        }}>
        <Typography
          sx={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "8px",
            fontFamily: "Libre Franklin",
          }}>
          <Typography
            sx={{
              color: theme.mainText,
              fontSize: "24px",
            }}>
            Назва продукту
          </Typography>
          <Typography
            sx={{
              color: theme.secondaryText,
              fontSize: "24px",
            }}>
            Назва фірми
          </Typography>
          <Typography
            sx={{
              color: theme.secondaryText,
              fontSize: "24px",
            }}></Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "7px",
          fontFamily: "Libre Franklin",
        }}>
        <Typography
          sx={{
            fontSize: "21px",
            fontWeight: "bolder",
            marginRight: "7px",
            color: theme.mainText,
          }}>
          000$
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            marginTop: "6px",
            marginRight: "7px",
            fontWeight: 400,
            color: theme.secondaryText,
          }}>
          000$
        </Typography>
        <Typography
          sx={{
            marginTop: "6px",
            fontSize: "17px",
            fontWeight: 400,
            color: theme.accentText,
          }}>
          -34%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}>
        <Box
          sx={{
            display: "flex",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}>
          <StarIcon
            sx={{
              marginRight: "3.5px",
              color: theme.secondaryColor,
            }}></StarIcon>
          <Typography
            sx={{
              color: theme.secondaryText,
              fontSize: "14px",
            }}>
            4.8
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "7px",
          }}>
          <ReviewsIcon
            sx={{
              height: "20px",
              width: "20px",
              marginRight: "3.12px",
              color: theme.secondaryColor,
            }}></ReviewsIcon>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.secondaryText,
            }}>
            23 відгуки
          </Typography>
        </Box>
      </Box>
    </Card>
    <Button></Button>
    </Box>
  );
}
