import { Router } from 'express';
import { 
  getArticleById, 
  getAllArticles, 
  getArticlesByName 
} from '../controllers/articleController';

const router = Router();

// Article routes
router.get('/search', getArticlesByName);   // Search articles by name with fuzzy matching
router.get('/:id', getArticleById);         // Get article by ID
router.get('/', getAllArticles);            // Get all articles


export default router;
