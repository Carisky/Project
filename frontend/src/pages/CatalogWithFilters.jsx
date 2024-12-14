import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Header from "../components/PageModules/Header/Header";
import Footer from "../components/PageModules/Footer/Footer";
import ArticleListFree from "../components/ArticleLists/ArticleListFree";
import FilterList from "../components/FilterList/FilterList";
import { fetchData, applyFilters, dropFilters } from "../utils/filterUtils"; // Import filter functions
import NothingFound from "../components/NothingFound/NothingFound";

export default function CatalogWithFilters() {
  const dummyArticles = [
    {
      id: 1,
      name: "Wireless Headphones",
      seller_name: "Audio World",
      price: "199.99",
      rating: 4.5,
      discount: "20%",
      reviews_count: 120,
      image: "headphones.jpg",
    },
    {
      id: 2,
      name: "Smartphone Pro Max",
      seller_name: "Gadget Hub",
      price: "999.99",
      rating: 4.8,
      discount: "15%",
      reviews_count: 450,
      image: "smartphone.jpg",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      seller_name: "Tech Store",
      price: "1299.99",
      rating: 4.6,
      discount: "10%",
      reviews_count: 230,
      image: "laptop.jpg",
    },
    {
      id: 4,
      name: "Sports Watch",
      seller_name: "Outdoor Gear",
      price: "249.99",
      rating: 4.2,
      discount: "25%",
      reviews_count: 85,
      image: "watch.jpg",
    },
    {
      id: 5,
      name: "Electric Scooter",
      seller_name: "Eco Riders",
      price: "499.99",
      rating: 4.7,
      discount: "30%",
      reviews_count: 340,
      image: "scooter.jpg",
    },
  ];

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
      <Header ShowCategories={false}/>

      {articles.length > 0 ? (
        <>
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
            applyFilters={() =>
              applyFilters(
                searchQuery,
                priceRange,
                selectedCategories,
                setArticles
              )
            } // Apply filters
            dropFilters={() =>
              dropFilters(
                searchQuery,
                setArticles,
                setPriceRange,
                setSelectedCategories
              )
            } // Drop filters
          />

          <ArticleListFree Articles={articles} />
        </>
      ) : (
        <>
          <Box sx={{
            marginTop:"30px"
          }}>
          <NothingFound quary={searchQuery} />
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "30px",
              fontWeight: "600",
              color: "#2B2B2B",
              textAlign: "left",
              marginLeft:"10%"
            }}
          >
            можливо, вам сподобається
          </Typography>
          <ArticleListFree showMore={false} Articles={dummyArticles} />
          </Box>
        </>
      )}

      <Footer />
    </Box>
  );
}
