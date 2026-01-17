import Content from '../models/Content.js';
import Category from '../models/Category.js';
import StoreSetting from '../models/StoreSetting.js';

// --- Категории ---
export const getCategories = async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
};
export const createCategory = async (req, res) => {
    const category = await Category.create(req.body);
    res.status(201).json(category);
};

// --- Контент (Articles/Promotions) ---
export const getContent = async (req, res) => {
    const { type } = req.query; 
    const filter = type ? { type } : {};
    const content = await Content.find(filter);
    res.json(content);
};
export const createContent = async (req, res) => {
    const content = await Content.create(req.body);
    res.status(201).json(content);
};

// --- Настройки (Phone number) ---
export const getSettings = async (req, res) => {
    let settings = await StoreSetting.findOne();
    if (!settings) {
        settings = await StoreSetting.create({}); // Создаем дефолтные, если нет
    }
    res.json(settings);
};
export const updateSettings = async (req, res) => {
    const settings = await StoreSetting.findOne();
    if(settings) {
        settings.phone = req.body.phone || settings.phone;
        settings.address = req.body.address || settings.address;
        const updated = await settings.save();
        res.json(updated);
    } else {
        const newSettings = await StoreSetting.create(req.body);
        res.json(newSettings);
    }
};
