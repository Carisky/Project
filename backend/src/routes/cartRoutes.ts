import { Router } from "express";
import { getCart, addToCart, deleteFromCart } from "../controllers/cartController";
import jwtMiddleware from '../middlewares/jwtMiddleware';
const router = Router();

router.get("/cart", jwtMiddleware, getCart);
router.post("/cart", jwtMiddleware, addToCart);
router.delete("/cart/:article_id", jwtMiddleware, deleteFromCart);

export default router;
