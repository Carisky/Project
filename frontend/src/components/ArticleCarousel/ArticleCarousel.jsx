import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./style.module.css"
export default function ArticleCarousel({ children }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel  partialVisible={false} containerClass={style.custom_carousel_container} showDots={false} arrows={false} responsive={responsive}>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
    </Carousel>
  );
}
