import Product from '../models/Product.js';
import Category from '../models/Category.js';

// Получение всех товаров
export const getProducts = async (req, res) => {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
};

// Получение товара по ID
export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Товар не найден" });
    res.json(product);
};

// Админские функции
export const createProduct = async (req, res) => {
    try {
        const images = req.files ? req.files.map((f) => "/uploads/products/" + f.filename) : [];

        const product = await Product.create({
            ...req.body,
            images: images
        });

        res.json(product);
    } catch (err) {
        res.status(500).json({ message: "Ошибка создания" });
    }
};

// Обновление товара с возможностью добавления новых изображений
export const updateProduct = async (req, res) => {
    try {
        const images = req.files ? req.files.map((f) => "/uploads/products/" + f.filename) : [];

        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                ...(images.length > 0 && { images })
            },
            { new: true }
        );

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Ошибка обновления" });
    }
};

// Удаление товара
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Удалено" });
    } catch (err) {
        res.status(500).json({ message: "Ошибка удаления" });
    }
};



















// старый код с фильтрацией
/*
export const getProducts = async (req, res) => {
    try {
        const { keyword, category, brand, minPrice, maxPrice } = req.query;
        let query = {};
    
        if (keyword) query.title = { $regex: keyword, $options: 'i' };
        if (brand) query.brand = brand;
        if (category) {
            // Находим ID категории по слагу или ID
            const catObj = await Category.findOne({ $or: [{ slug: category }, { _id: category }] });
            if(catObj) query.category = catObj._id;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
    
        const products = await Product.find(query).populate('category', 'name slug');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (product) res.json(product);
        else res.status(404).json({ message: 'Товар не найден' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Админские функции
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
*/