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

