import multer from 'multer';
import { Router } from 'express';
import {
  registerSeller,
  loginSeller,
  deleteSellerAccount,
  getSellerProfile,
  updateSellerProfile,
  addArticle,
  getSellerArticles
} from '../controllers/sellerController';
import jwtMiddleware, { authorizeRoles } from '../middlewares/jwtMiddleware';

const router = Router();

// Multer setup
const storage = multer.memoryStorage(); // Store files in memory temporarily
const upload = multer({ storage });

// Routes
router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.get('/profile', jwtMiddleware, getSellerProfile);
router.put('/profile', jwtMiddleware, updateSellerProfile);
router.delete('/profile', jwtMiddleware, deleteSellerAccount);

// Article routes for a specific seller
// В routes/sellerRoutes.js
router.post(
  '/articles',
  jwtMiddleware,
  authorizeRoles(["seller"]),
  upload.fields([{ name: 'photos' }, { name: 'photos[]' }]),
  addArticle
);
 // Use `upload.array` for multiple files

router.get('/articles', jwtMiddleware, authorizeRoles(["seller"]), getSellerArticles);

export default router;
