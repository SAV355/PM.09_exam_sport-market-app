import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { getCategories, createCategory, getContent, createContent, getSettings, updateSettings } from '../controllers/contentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
// import authRoutes from "./routes/authRoutes.js";

const router = express.Router();

// Добавлен в виде тестирования регистрации пользователя 
// app.use("/api/auth", authRoutes);   // приводит к ошибке требует уточнения и исправления 
// образец ошибки [nodemon] app crashed - waiting for file changes before starting...


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
