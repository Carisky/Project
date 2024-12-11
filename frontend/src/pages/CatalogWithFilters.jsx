import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleListFree from "../components/ArticleListFree/ArticleListFree";
import FilterList from "../components/FilterList/FilterList";
import { findArticlesByName } from "../API/services/articleService";

export default function CatalogWithFilters() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [articles, setArticles] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [categories, setCategories] = useState([]); // Состояние для категорий
  const [selectedCategories, setSelectedCategories] = useState([]); // Выбранные категории

  const fetchData = async () => {
    const data = await findArticlesByName(
      searchQuery,
      priceRange,
      selectedCategories
    );
    setArticles(data);

    const uniqueCategories = [
      ...new Set(data.map((article) => article.category_name)),
    ];
    setCategories(uniqueCategories);

    if (data.length > 0) {
      const minPrice = data.reduce(
        (min, item) => Math.min(min, item.price),
        data[0].price
      );
      const maxPrice = data.reduce(
        (max, item) => Math.max(max, item.price),
        data[0].price
      );

      const range = { min: minPrice, max: maxPrice };
      setPriceRange(range);
    } else {
      console.log("Данные отсутствуют");
    }
  };

  useEffect(() => {
    fetchData();
    console.log(selectedCategories); // Для проверки выбранных категорий
  }, [selectedCategories]); // Зависимости: при изменении категорий или ценового диапазона

  return (
    <Box>
      <Header />
      <Typography sx={{ marginLeft: "9vw" }} variant="body1">
        <strong>{searchQuery}</strong>
      </Typography>
      <FilterList
        checkBoxAutoComplete={true}
        checkBoxTitle={"Категорія"}
        amount={articles.length}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        categories={categories} // Передаем список категорий
        selectedCategories={selectedCategories} // Передаем выбранные категории
        setSelectedCategories={setSelectedCategories} // Функция для обновления выбранных категорий
      />
      <ArticleListFree Articles={articles} />
      <Footer />
    </Box>
  );
}
