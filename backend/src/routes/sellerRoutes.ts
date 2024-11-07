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
import jwtMiddleware from '../middlewares/jwtMiddleware';

const router = Router();

router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.get('/profile', jwtMiddleware, getSellerProfile);
router.put('/profile', jwtMiddleware, updateSellerProfile);
router.delete('/profile', jwtMiddleware, deleteSellerAccount);

// Article routes for a specific seller
router.post('/sellers/:sellerId/articles', addArticle);
router.get('/sellers/:sellerId/articles', getSellerArticles);

export default router;
