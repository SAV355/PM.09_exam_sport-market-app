import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { getCategories, createCategory, getContent, createContent, getSettings, updateSettings } from '../controllers/contentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Авторизация
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// Товары
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', protect, admin, createProduct);

// Категории
router.get('/categories', getCategories);
router.post('/categories', protect, admin, createCategory);

// Контент (Articles & Promotions)
router.get('/content', getContent);
router.post('/content', protect, admin, createContent);

// Настройки (Phone number for button)
router.get('/settings', getSettings);
router.put('/settings', protect, admin, updateSettings);

export default router;
