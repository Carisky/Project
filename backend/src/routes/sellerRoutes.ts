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
import jwtMiddleware, {authorizeRoles} from '../middlewares/jwtMiddleware';

const router = Router();

router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.get('/profile', jwtMiddleware, getSellerProfile);
router.put('/profile', jwtMiddleware, updateSellerProfile);
router.delete('/profile', jwtMiddleware, deleteSellerAccount);

// Article routes for a specific seller
router.post('/articles',jwtMiddleware, authorizeRoles(["seller"]), addArticle);
router.get('/articles',jwtMiddleware, authorizeRoles(["seller"]), getSellerArticles);

export default router;
