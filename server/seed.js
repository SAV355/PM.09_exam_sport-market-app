// seed.js
import dotenv from 'dotenv';
dotenv.config(); // Загружаем переменные из .env

import mongoose from 'mongoose';

// 1. Определяем схему
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String
});

// Создаем модель
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// 2. Массив товаров
const products = [
  {
    title: 'Кроссовки беговые',
    category: 'Спорт',
    price: 4500,
    description: 'Удобные кроссовки для бега и ходьбы.',
    image: 'sneakers.jpg'
  },
  {
    title: 'Футболка хлопок',
    category: 'Спорт',
    price: 1200,
    description: 'Дышащая футболка, 100% хлопок.',
    image: 'tshirt.jpg'
  },
  {
    title: 'Спортивный костюм',
    category: 'Спорт',
    price: 6000,
    description: 'Кофта и штаны для тренировок.',
    image: 'tracksuit.jpg'
  },
  {
    title: 'Походные брюки',
    category: 'Туризм',
    price: 3500,
    description: 'Прочные брюки с множеством карманов.',
    image: 'hiking-pants.jpg'
  }
];

// 3. Функция добавления
const seedDB = async () => {
  try {
    // Подключаемся к БД
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Очищаем коллекцию
    await Product.deleteMany({});
    console.log('🧹 Old products removed');

    // Добавляем новые
    await Product.insertMany(products);
    console.log('🚀 Products added successfully!');

    // Закрываем соединение
    mongoose.connection.close();
    console.log('🔌 Connection closed');
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedDB();
