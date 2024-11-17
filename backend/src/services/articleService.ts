import stringSimilarity from 'string-similarity';
import ArticleModel from '../models/ArticleModel';

export const getArticlesByNameService = async (name: string) => {
  // Fetch all articles first
  const articles = await ArticleModel.query().select('id', 'name');

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

  // Query database with valid filtered IDs and fetch photos using the relationship
  const articlesWithPhotos = await ArticleModel.query()
    .whereIn('id', filteredArticles)
    .withGraphFetched('photos');  // Fetch associated photos using the relation

  // Map the articles with their photo URLs
  const result = articlesWithPhotos.map(article => ({
    id:article.id,
    seller_id:article.seller_id,
    category_id:article.category_id,
    name:article.name,
    amount:article.amount,
    price:article.price,
    rating:article.rating,
    photos: article.photos?.map(photo => photo.url), // Extract URLs of photos
  }));

  return result;
};

export const getArticleByIdService = async (id: number) => {
  // Ensure the article exists by querying with the provided ID
  const article = await ArticleModel.query()
    .findById(id) // Finds a single article by its ID
    .withGraphFetched('photos'); // Optionally, fetch the related photos

  if (!article) {
    // If no article is found with the given ID, return null or handle the error as needed
    return null;
  }

  // Return the article with its related photos (if any)
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
    photos: article.photos?.map(photo => photo.url), // Extract the photo URLs
  };
};

export const getAllArticlesService = async () => {
  return await ArticleModel.query().select("*");
};