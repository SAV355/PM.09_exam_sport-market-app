import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price:  Number,

    category: String,
    subcategory: String,

    sizes: [ String ], // Массив доступных размеров (S, M, L, 42, 43...)
    images: [ String ], // Массив ссылок на фото
    inStock: { type: Boolean, default: true },
    colors: [ String ], // Массив доступных цветов
}, 
{ timestamps: true });

export default mongoose.model('Product', productSchema);

// Предыдущая схема продукта:
/*
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number }, 
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    brand: { type: String, required: true }, // Для фильтрации
    sizes: [{ type: String }], // Массив доступных размеров (S, M, L, 42, 43...)
    images: [{ type: String }], // Массив ссылок на фото
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false } // Для вывода в "Популярное" или на главной
}, { timestamps: true });
*/