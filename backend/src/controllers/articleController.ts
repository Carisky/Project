import { Request, Response } from "express";
import {
  getArticleByIdService,
  getAllArticlesService,
  getArticlesByNameService,
  filterArticlesService,
} from "../services/articleService";
import ArticlePhotoModel from "../models/ArticlePhotoModel";

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         seller_id:
 *           type: number
 *           example: 1
 *         seller_name:
 *           type: string
 *           example: "John's Store"
 *         category_id:
 *           type: number
 *           example: 2
 *         category_name:
 *           type: string
 *           example: "Electronics"
 *         name:
 *           type: string
 *           example: "iPhone 14"
 *         amount:
 *           type: number
 *           example: 10
 *         price:
 *           type: number
 *           example: 799.99
 *         rating:
 *           type: number
 *           example: 4.5
 *         created_at:
 *           type: string
 *           example: "2023-02-15T12:00:00Z"
 *         updated_at:
 *           type: string
 *           example: "2023-02-16T12:00:00Z"
 *         description:
 *           type: string
 *           example: "Latest model of iPhone"
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *             example: "/storage/photos/1_1/photo.jpg"
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *             example: "electronics"
 *
 *     ArticlePhoto:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         article_id:
 *           type: number
 *           example: 1
 *         seller_id:
 *           type: number
 *           example: 1
 *         url:
 *           type: string
 *           example: "/storage/photos/1_1/photo.jpg"
 *         created_at:
 *           type: string
 *           example: "2023-02-15T12:00:00Z"
 *         updated_at:
 *           type: string
 *           example: "2023-02-16T12:00:00Z"
 *
 *     Seller:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "John's Store"
 *         email:
 *           type: string
 *           example: "john@example.com"
 *         billing_info:
 *           type: string
 *           example: "123 Main St, City, Country"
 *         role:
 *           type: string
 *           example: "seller"
 *         created_at:
 *           type: string
 *           example: "2023-02-15T12:00:00Z"
 *         updated_at:
 *           type: string
 *           example: "2023-02-16T12:00:00Z"
 *
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 2
 *         name:
 *           type: string
 *           example: "Electronics"
 *         created_at:
 *           type: string
 *           example: "2023-02-15T12:00:00Z"
 *         updated_at:
 *           type: string
 *           example: "2023-02-16T12:00:00Z"
 *
 *     Tag:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "electronics"
 *         created_at:
 *           type: string
 *           example: "2023-02-15T12:00:00Z"
 *         updated_at:
 *           type: string
 *           example: "2023-02-16T12:00:00Z"
 */

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
 *           type: number
 *         description: Article ID
 *     responses:
 *       200:
 *         description: Article found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
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
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving article", error });
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Error retrieving articles
 */
export const getAllArticles = async (_req: Request, res: Response) => {
  try {
    const articles = await getAllArticlesService();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving articles", error });
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Error searching articles
 */
export const getArticlesByName = async (req: Request, res: Response) => {
  const name = String(req.query.name || ""); 

  if (!name) {
    return res
      .status(400)
      .json({ message: "Invalid or missing name parameter" });
  }

  try {
    const articles = await getArticlesByNameService(name);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error searching articles", error });
  }
};

/**
 * @swagger
 * /api/articles/filter:
 *   post:
 *     summary: Filter articles based on name, price range, and categories
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name or partial name of the article to search for.
 *                 example: "Smartphone"
 *               priceRange:
 *                 type: array
 *                 items:
 *                   type: number
 *                 minItems: 2
 *                 maxItems: 2
 *                 description: An array containing the minimum and maximum price range.
 *                 example: [100, 500]
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: An array of category IDs or names to filter the articles.
 *                 example: ["electronics", "mobile-phones"]
 *             required:
 *               - priceRange
 *               - categories
 *     responses:
 *       200:
 *         description: Successfully filtered articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       400:
 *         description: Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid price range"
 *       500:
 *         description: Server error occurred while filtering articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error filtering articles"
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
export const filterArticles = async (req: Request, res: Response) => {
  const { name = "", priceRange = [], categories = [] } = req.body;
  
  if (
    !Array.isArray(priceRange) ||
    priceRange.length !== 2 ||
    priceRange.some((v) => isNaN(Number(v)))
  ) {
    return res.status(400).json({ message: "Invalid price range" });
  }
  
  if (!Array.isArray(categories)) {
    return res.status(400).json({ message: "Categories must be an array" });
  }
  
  const validPriceRange: [number, number] = [
    Number(priceRange[0]),
    Number(priceRange[1]),
  ];

  try {
    const filteredArticles = await filterArticlesService(
      name,
      validPriceRange,
      categories
    );
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
 *           type: number
 *         description: Article ID
 *     responses:
 *       200:
 *         description: List of photo objects for the article
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ArticlePhoto'
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
      res.status(404).json({ message: "No photos found for this article" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving photos", error });
  }
};
