import { Request, Response } from 'express';
import { createSellerService, authenticateSellerService, getSellerByIdService, updateSellerService, deleteSellerService, addArticleService, getSellerArticlesService } from '../services/sellerService';
import { uploadPhotos } from '../services/photoService';

/**
 * @swagger
 * /api/sellers/register:
 *   post:
 *     summary: Register a new seller
 *     tags: [Sellers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               billing_info:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *               - billing_info
 *     responses:
 *       201:
 *         description: Seller registered successfully
 *       500:
 *         description: Error registering seller
 */
export const registerSeller = async (req: Request, res: Response) => {
  const { name, email, password, billing_info } = req.body;

  try {
    const savedSeller = await createSellerService(name, email, password, billing_info);
    res.status(201).json(savedSeller);
  } catch (error) {
    res.status(500).json({ message: 'Error registering seller', error });
  }
};

/**
 * @swagger
 * /api/sellers/login:
 *   post:
 *     summary: Login a seller
 *     tags: [Sellers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Seller logged in successfully
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Error logging in
 */
export const loginSeller = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await authenticateSellerService(email, password);
    if (result) {
      return res.json(result);
    }
    res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

/**
 * @swagger
 * /api/sellers/profile:
 *   get:
 *     summary: Get seller profile
 *     tags: [Sellers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Seller profile retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Error retrieving seller profile
 */
export const getSellerProfile = async (req: Request, res: Response) => {
  const sellerId = req.user?.id;

  if (!sellerId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const seller = await getSellerByIdService(+sellerId);
    if (seller) {
      return res.json(seller);
    }
    res.status(404).json({ message: 'Seller not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving seller profile', error });
  }
};

/**
 * @swagger
 * /api/sellers/profile:
 *   put:
 *     summary: Update seller profile
 *     tags: [Sellers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               billing_info:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - billing_info
 *     responses:
 *       200:
 *         description: Seller profile updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Error updating seller profile
 */
export const updateSellerProfile = async (req: Request, res: Response) => {
  const sellerId = req.user?.id;

  if (!sellerId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const updates = req.body;
    const updatedSeller = await updateSellerService(+sellerId, updates);
    if (!updatedSeller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    return res.json(updatedSeller);
  } catch (error) {
    res.status(500).json({ message: 'Error updating seller profile', error });
  }
};

/**
 * @swagger
 * /api/sellers/profile:
 *   delete:
 *     summary: Delete seller account
 *     tags: [Sellers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Seller account deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Seller not found
 *       500:
 *         description: Error deleting seller account
 */
export const deleteSellerAccount = async (req: Request, res: Response) => {
  const sellerId = req.user?.id;

  if (!sellerId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const result = await deleteSellerService(+sellerId);
    if (!result) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting seller account', error });
  }
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         seller_id:
 *           type: integer
 *         name:
 *           type: string
 *         amount:
 *           type: integer
 *         price:
 *           type: number
 *           format: float
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/sellers/articles:
 *   post:
 *     summary: Add a new article for the seller
 *     description: Creates a new article associated with the authenticated seller and allows uploading photos.
 *     tags:
 *       - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:  # Changed to 'multipart/form-data' to support file uploads
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - amount
 *               - price
 *               - photos
 *             properties:
 *               name:
 *                 type: string
 *               amount:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *               price:
 *                 type: number
 *                 format: float
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Article created successfully along with photos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 article:
 *                   $ref: '#/components/schemas/Article'
 *                 photoUrls:
 *                   type: array
 *                   items:
 *                     type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error adding article
 *     security:
 *       - bearerAuth: []
 */

export const addArticle = async (req: Request, res: Response) => {
  const sellerId = req.user?.id;

  if (!sellerId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Получаем файлы из запроса
  const photos = req.files as Express.Multer.File[];

  if (!photos || photos.length === 0) {
    return res.status(400).json({ message: 'Photos are required' });
  }

  try {
    // Шаг 1: Добавляем статью в базу данных
    const article = await addArticleService(+sellerId, {
      name: req.body.name,
      amount: Number(req.body.amount),
      price: parseFloat(req.body.price),
      category_id: Number(req.body.category_id),
    });

    // Шаг 2: Отправляем фотографии в микросервис и получаем URL
    const photoUrls = await uploadPhotos(article.id, +sellerId, photos);

    // Возвращаем результат
    res.status(201).json({ article, photoUrls });
  } catch (error) {
    console.error(error);  // Логируем ошибку для отладки
    res.status(500).json({ message: 'Error adding article', error });
  }
};


  
  /**
   * @swagger
   * /api/sellers/articles:
   *   get:
   *     summary: Get all articles for the authenticated seller
   *     description: Retrieves all articles associated with the authenticated seller.
   *     tags:
   *       - Articles
   *     responses:
   *       200:
   *         description: A list of articles
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Article'
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Error fetching articles
   *     security:
   *       - bearerAuth: []
   */
  export const getSellerArticles = async (req: Request, res: Response) => {
    const sellerId = req.user?.id;
  
    if (!sellerId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const articles = await getSellerArticlesService(+sellerId);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching articles', error });
    }
  };
  


