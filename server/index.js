import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Для парсинга JSON body

connectDB();

// Подключаем все маршруты с префиксом /api
app.use('/api', routes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Запуск сервера
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
