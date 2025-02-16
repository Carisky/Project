import apiHandler from '../src/APIhandler';

export const findArticlesByName = async (name) => {
  const response = await apiHandler.get(`/articles/search`, {
    params: { name },
  });
  return response.data;
};
export const getAllArticles = async () => {
  const response = await apiHandler.get(`/articles/`)
  return response.data;
};
export const getArticleById = async (id) => {
  try {
    const response = await apiHandler.get(`/articles/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении товара:", error);
    throw error;
  }
};
export const filterArticles = async (filters) => {
  const { searchQuery, priceRange, selectedCategories } = filters;
  const payload = {
    name: searchQuery,
    priceRange: [priceRange.min ?? 0, priceRange.max ?? Infinity], // Преобразуем объект в массив
    categories: selectedCategories || [], // Убедимся, что категории - это массив
  };

  const response = await apiHandler.post(`/articles/filter`, payload);
  return response.data;
};

