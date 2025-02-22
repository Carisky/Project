import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Alice"
 *         email:
 *           type: string
 *           example: "alice@example.com"
 *         role:
 *           type: string
 *           example: "user"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2023-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2023-01-02T12:00:00Z"
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Alice"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "alice@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Error registering user
 */
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = UserModel.fromJson({
      name,
      email,
      password: await UserModel.hashPassword(password),
      role: 'user',
    });

    const savedUser = await user.saveUser();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
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
 *                 example: "alice@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "jwt-token-string"
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Error logging in
 */
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await UserModel.authenticate(email, password);
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
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # JWT required
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error retrieving user profile
 */
export const getUserProfile = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = await UserModel.findById(+userId);
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile', error });
  }
};

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
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
 *                 example: "Alice Updated"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "alice.updated@example.com"
 *             required:
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error updating user profile
 */
export const updateUserProfile = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const updates = req.body;
    const user = await UserModel.findById(+userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await user.updateUser(updates);
    return res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
};

/**
 * @swagger
 * /api/users/profile:
 *   delete:
 *     summary: Delete user account
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: User account deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error deleting user account
 */
export const deleteUserAccount = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = await UserModel.findById(+userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteUser();
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user account', error });
  }
};
