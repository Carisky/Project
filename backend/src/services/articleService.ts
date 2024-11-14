import ArticleModel from "../models/ArticleModel";
import stringSimilarity from "string-similarity";
export const getArticleByIdService = async (id: number) => {
  return await ArticleModel.findById(id);
};

export const getAllArticlesService = async () => {
  return await ArticleModel.query().select("*");
};

export const getArticlesByNameService = async (name: string) => {
  // Fetch all articles first
  const articles = await ArticleModel.query().select("id", "name");


  // Use string similarity to filter articles by name and ensure valid numeric IDs
  const filteredArticles = articles
    .filter(article => {
      // Ensure article has a valid name and ID
      if (typeof article.id !== 'number' || !article.name) return false;

      // Calculate similarity score
      const similarityScore = stringSimilarity.compareTwoStrings(article.name.toLowerCase(), name.toLowerCase());
      return similarityScore > 0.5;
    })
    .map(article => article.id)
    .filter(id => typeof id === 'number' && !isNaN(id)); // Filter out any non-numeric or NaN IDs

  // Early return if no valid IDs are present
  if (filteredArticles.length === 0) {
    return [];
  }

  // Query database with valid filtered IDs
  return await ArticleModel.query().whereIn("id", filteredArticles);
};