import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import style from "./style.module.css";
export default function ArticleCarousel({ articles }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      partialVisible={false}
      containerClass={style.custom_carousel_container}
      showDots={false}
      arrows={false}
      responsive={responsive}
    >
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </Carousel>
  );
}
