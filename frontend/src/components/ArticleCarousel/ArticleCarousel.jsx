import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./style.module.css"
export default function ArticleCarousel({ children }) {
  const responsive = {
    normalLarge: {
      breakpoint: { max: 4000, min: 1525 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1524, min: 1281 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 781 },
      items: 2,
    },
    smallDesktop: {
      breakpoint: { max: 780, min: 501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel  partialVisible={false} containerClass={style.custom_carousel_container} showDots={false} arrows={false} responsive={responsive}>
      { children }
    </Carousel>
  );
}
