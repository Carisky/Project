import { Request, Response } from 'express';
import { getArticleByIdService, getAllArticlesService, getArticlesByNameService, filterArticlesService } from '../services/articleService'
import ArticlePhotoModel from '../models/ArticlePhotoModel';

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Article ID
 *     responses:
 *       200:
 *         description: Article found
 *       404:
 *         description: Article not found
 *       500:
 *         description: Error retrieving article
 */
export const getArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const article = await getArticleByIdService(Number(id));
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving article', error });
  }
};

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Get all articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: List of all articles
 *       500:
 *         description: Error retrieving articles
 */
export const getAllArticles = async (_req: Request, res: Response) => {
  try {
    const articles = await getAllArticlesService();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving articles', error });
  }
};

/**
 * @swagger
 * /api/articles/search:
 *   get:
 *     summary: Search articles by name with fuzzy matching
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Partial or full name of the article to search
 *     responses:
 *       200:
 *         description: Articles found
 *       500:
 *         description: Error searching articles
 */
export const getArticlesByName = async (req: Request, res: Response) => {
    const name = String(req.query.name || ''); // Safely convert name to a string
  
    if (!name) {
      return res.status(400).json({ message: 'Invalid or missing name parameter' });
    }
  
    try {
      const articles = await getArticlesByNameService(name);

      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error searching articles', error });
    }
  };
  

  export const filterArticles = async (req: Request, res: Response) => {
    const { name = "", priceRange = [], categories = [] } = req.body;
  
    // Проверка на корректность диапазона цен
    if (
      !Array.isArray(priceRange) ||
      priceRange.length !== 2 ||
      priceRange.some((v) => isNaN(Number(v)))
    ) {
      return res.status(400).json({ message: "Invalid price range" });
    }
  
    // Проверка на корректность категорий
    if (!Array.isArray(categories)) {
      return res.status(400).json({ message: "Categories must be an array" });
    }
  
    // Приведение priceRange к типу [number, number]
    const validPriceRange: [number, number] = [Number(priceRange[0]), Number(priceRange[1])];
  
    try {
      const filteredArticles = await filterArticlesService(name, validPriceRange, categories);
      res.json(filteredArticles);
    } catch (error) {
      res.status(500).json({ message: "Error filtering articles", error });
    }
  };
  
  

/**
 * @swagger
 * /api/articles/{id}/photos:
 *   get:
 *     summary: Get photo URLs for an article by its ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Article ID
 *     responses:
 *       200:
 *         description: List of photo URLs for the article
 *       404:
 *         description: No photos found for the article
 *       500:
 *         description: Error retrieving photos
 */
export const getArticlePhotos = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const photoUrls = await ArticlePhotoModel.getPhotosByArticle(Number(id));

    if (photoUrls.length > 0) {
      res.json(photoUrls);
    } else {
      res.status(404).json({ message: 'No photos found for this article' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving photos', error });
  }
};