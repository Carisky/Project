import { Router } from 'express';
import { registerUser, loginUser,deleteUserAccount,getUserProfile,updateUserProfile } from '../controllers/userController';
import jwtMiddleware, {authorizeRoles} from '../middlewares/jwtMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', jwtMiddleware, getUserProfile);
router.put('/profile', jwtMiddleware, updateUserProfile);
router.delete('/profile', jwtMiddleware, deleteUserAccount);

export default router;
