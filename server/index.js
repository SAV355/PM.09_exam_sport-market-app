import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import routes from './routes/index.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // Для парсинга JSON body

// Подключаем все маршруты с префиксом /api
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
