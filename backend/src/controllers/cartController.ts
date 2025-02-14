import { Request, Response } from "express";
import { getCartService, addToCartService, deleteFromCartService } from "../services/cartService";

export const getCart = async (req: Request, res: Response) => {
  try {
    const user_id = req.user?.id;
    if (!user_id) return res.status(401).json({ message: "Не авторизован" });

    const cartItems = await getCartService(Number(user_id));
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Ошибка получения корзины", error });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const user_id = req.user?.id;
    const { article_id, amount } = req.body;

    if (!user_id) return res.status(401).json({ message: "Не авторизован" });
    if (!article_id || !amount) return res.status(400).json({ message: "article_id и amount обязательны" });

    const updatedCart = await addToCartService(Number(user_id), Number(article_id), Number(amount));
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Ошибка добавления в корзину", error });
  }
};

export const deleteFromCart = async (req: Request, res: Response) => {
  try {
    const user_id = req.user?.id;
    const { article_id } = req.params;

    if (!user_id) return res.status(401).json({ message: "Не авторизован" });
    if (!article_id) return res.status(400).json({ message: "article_id обязателен" });

    await deleteFromCartService(Number(user_id), Number(article_id));
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: "Ошибка удаления из корзины", error });
  }
};
