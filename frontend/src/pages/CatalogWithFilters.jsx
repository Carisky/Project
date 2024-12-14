import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Header from "../components/PageModules/Header/Header";
import Footer from "../components/PageModules/Footer/Footer";
import ArticleListFree from "../components/ArticleLists/ArticleListFree";
import FilterList from "../components/FilterList/FilterList";
import { fetchData, applyFilters, dropFilters } from "../utils/filterUtils"; // Import filter functions

export default function CatalogWithFilters() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [articles, setArticles] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchData(searchQuery, setArticles, setCategories, setPriceRange); // Fetch initial data
  }, [searchQuery]);

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
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        applyFilters={() => applyFilters(searchQuery, priceRange, selectedCategories, setArticles)} // Apply filters
        dropFilters={() => dropFilters(searchQuery, setArticles, setPriceRange, setSelectedCategories)} // Drop filters
      />
      <ArticleListFree Articles={articles} />
      <Footer />
    </Box>
  );
}
