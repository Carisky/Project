import { Request, Response } from "express";
import { getCartService, addToCartService, deleteFromCartService } from "../services/cartService";

/**
 * @swagger
 * components:
 *   schemas:
 *     CartItem:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         user_id:
 *           type: number
 *           example: 1
 *         article_id:
 *           type: number
 *           example: 10
 *         amount:
 *           type: number
 *           example: 2
 *         article:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               example: 10
 *             name:
 *               type: string
 *               example: "iPhone 14"
 *             price:
 *               type: number
 *               example: 799.99
 *             description:
 *               type: string
 *               example: "Latest model of iPhone"
 *
 *     AddToCartRequest:
 *       type: object
 *       required:
 *         - article_id
 *         - amount
 *       properties:
 *         article_id:
 *           type: number
 *           example: 10
 *         amount:
 *           type: number
 *           example: 1
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Получение товаров в корзине для авторизованного пользователя
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Список товаров в корзине
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CartItem'
 *       401:
 *         description: Не авторизован
 *       500:
 *         description: Ошибка получения корзины
 */
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

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Добавление товара в корзину для авторизованного пользователя
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCartRequest'
 *     responses:
 *       200:
 *         description: Обновлённая запись корзины после добавления товара
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CartItem'
 *       400:
 *         description: Ошибка валидации (не передан article_id или amount)
 *       401:
 *         description: Не авторизован
 *       500:
 *         description: Ошибка добавления товара в корзину
 */
export const addToCart = async (req: Request, res: Response) => {
  try {
    const user_id = req.user?.id;
    const { article_id, amount } = req.body;

    if (!user_id) return res.status(401).json({ message: "Не авторизован" });
    if (!article_id || !amount)
      return res.status(400).json({ message: "article_id и amount обязательны" });

    const updatedCart = await addToCartService(Number(user_id), Number(article_id), Number(amount));
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Ошибка добавления в корзину", error });
  }
};

/**
 * @swagger
 * /api/cart/{article_id}:
 *   delete:
 *     summary: Удаление товара из корзины для авторизованного пользователя
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: article_id
 *         required: true
 *         schema:
 *           type: number
 *         description: Идентификатор товара, который необходимо удалить из корзины
 *     responses:
 *       200:
 *         description: Товар успешно удалён из корзины (возвращается пустой массив)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example: []
 *       400:
 *         description: Ошибка валидации (не передан article_id)
 *       401:
 *         description: Не авторизован
 *       500:
 *         description: Ошибка удаления товара из корзины
 */
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
