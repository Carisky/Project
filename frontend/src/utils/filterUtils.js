import { filterArticles, findArticlesByName } from "../API/services/articleService";

export const fetchData = async (searchQuery, setArticles, setCategories, setPriceRange) => {
  const data = await findArticlesByName(searchQuery);
  setArticles(data);

  const uniqueCategories = [
    ...new Set(data.map((article) => article.category_id)), // Using category_id, not name
  ];

  const categoriesWithIds = uniqueCategories.map((categoryId) => ({
    id: categoryId,
    name: data.find((article) => article.category_id === categoryId).category_name,
  }));

  setCategories(categoriesWithIds); // Set categories

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
    console.log("No data available");
  }
};

export const applyFilters = async (searchQuery, priceRange, selectedCategories, setArticles) => {
  const data = await filterArticles({
    searchQuery,
    priceRange,
    selectedCategories,
  });
  setArticles(data);
};

export const dropFilters = async (searchQuery, setArticles, setPriceRange, setSelectedCategories) => {
  const data = await findArticlesByName(searchQuery);
  setArticles(data);
  
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
    console.log("No data available");
  }
  setSelectedCategories([]);
};
