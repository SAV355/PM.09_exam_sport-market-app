import Product from '../models/Product.js';
import Category from '../models/Category.js';

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
