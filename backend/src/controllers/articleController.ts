import { Request, Response } from 'express';
import { getArticleByIdService, getAllArticlesService, getArticlesByNameService } from '../services/articleService'

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
  
