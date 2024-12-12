import stringSimilarity from "string-similarity";
import ArticleModel from "../models/ArticleModel";

export const getArticlesByNameService = async (name: string) => {
  const articles = await ArticleModel.query().select("id", "name");

  const filteredArticles = articles
    .filter((article) => {
      if (typeof article.id !== "number" || !article.name) return false;

      const similarityScore = stringSimilarity.compareTwoStrings(
        article.name.toLowerCase(),
        name.toLowerCase()
      );
      return similarityScore > 0.5;
    })
    .map((article) => article.id)
    .filter((id) => typeof id === "number" && !isNaN(id));

  if (filteredArticles.length === 0) {
    return [];
  }

  const articlesWithDetails = await ArticleModel.query()
    .whereIn("id", filteredArticles)
    .withGraphFetched("[photos, tags, seller, category]");

  return articlesWithDetails.map((article) => ({
    id: article.id,
    seller_id: article.seller_id,
    seller_name: article.seller?.name,
    category_id: article.category_id,
    category_name: article.category?.name,
    name: article.name,
    amount: article.amount,
    price: article.price,
    rating: article.rating,
    photos: article.photos?.map((photo) => photo.url),
    tags: article.tags?.map((tag) => tag.name),
  }));
};

export const filterArticlesService = async (
  name: string,
  priceRange: [number, number],
  categories: string[]
) => {
  // Извлекаем все товары для фильтрации названий
  const articles = await ArticleModel.query().select(
    "id",
    "name",
    "price",
    "category_id"
  );

  // Фильтруем по похожести названий
  const filteredIdsByName = articles
    .filter((article) => {
      const similarityScore = stringSimilarity.compareTwoStrings(
        article.name.toLowerCase(),
        name.toLowerCase()
      );
      return similarityScore > 0.5; // Порог схожести
    })
    .map((article) => article.id);

  // Если не найдено подходящих товаров по имени, сразу возвращаем пустой результат
  if (filteredIdsByName.length === 0) {
    return [];
  }

  // Извлекаем товары с учетом всех фильтров
  const filteredArticles = await ArticleModel.query()
    .whereIn("id", filteredIdsByName)
    .withGraphFetched("[photos, tags, seller, category]")
    .modify((query) => {
      // Фильтруем по диапазону цен
      if (priceRange.length === 2) {
        query.whereBetween("price", priceRange);
      }
      // Фильтруем по категориям
      if (categories.length > 0) {
        console.log()
        query.whereIn("category_id", categories);
      }
    });

  return filteredArticles.map((article) => ({
    id: article.id,
    seller_id: article.seller_id,
    seller_name: article.seller?.name,
    category_id: article.category_id,
    category_name: article.category?.name,
    name: article.name,
    amount: article.amount,
    price: article.price,
    rating: article.rating,
    photos: article.photos?.map((photo) => photo.url),
    tags: article.tags?.map((tag) => tag.name),
  }));
};

export const getArticleByIdService = async (id: number) => {
  const article = await ArticleModel.query()
    .findById(id)
    .withGraphFetched("[photos, tags]");

  if (!article) {
    return null;
  }

  return {
    id: article.id,
    name: article.name,
    seller_id: article.seller_id,
    category_id: article.category_id,
    amount: article.amount,
    price: article.price,
    rating: article.rating,
    created_at: article.created_at,
    updated_at: article.updated_at,
    photos: article.photos?.map((photo) => photo.url),
    tags: article.tags?.map((tag) => tag.name), // Теги как массив строк
  };
};

export const getAllArticlesService = async () => {
  const articles = await ArticleModel.query().withGraphFetched(
    "[photos, tags]"
  );

  return articles.map((article) => ({
    id: article.id,
    seller_id: article.seller_id,
    category_id: article.category_id,
    name: article.name,
    amount: article.amount,
    price: article.price,
    rating: article.rating,
    created_at: article.created_at,
    updated_at: article.updated_at,
    photos: article.photos?.map((photo) => photo.url),
    tags: article.tags?.map((tag) => tag.name), // Теги как массив строк
  }));
};
