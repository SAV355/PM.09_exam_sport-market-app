import User from "../models/User.js";
import bcrypt from "bcryptjs";

// 1. Получить профиль
export const getProfile = async (req, res) => {
    res.json(req.user);
};

// 2. Обновить профиль
export const updateProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    user.fullName = req.body.fullName || user.fullName;
    user.phone = req.body.phone || user.phone;

    if (req.body.email) user.email = req.body.email;

    await user.save();
    res.json(user);
};

// 3. Добавить адрес
export const addAddress = async (req, res) => {
    const user = await User.findById(req.user._id);

    user.addresses.push(req.body);
    await user.save();

    res.json(user.addresses);
};

// 4. Обновить адрес
export const updateAddress = async (req, res) => {
    const user = await User.findById(req.user._id);
    const addr = user.addresses.id(req.params.id);

    if (!addr) return res.status(404).json({ message: "Адрес не найден" });

    Object.assign(addr, req.body);
    await user.save();

    res.json(user.addresses);
};

// 5. Удалить адрес
export const deleteAddress = async (req, res) => {
    const user = await User.findById(req.user._id);

    user.addresses = user.addresses.filter(a => a._id != req.params.id);
    await user.save();

    res.json(user.addresses);
};

// 6. Смена пароля
export const changePassword = async (req, res) => {
    const user = await User.findById(req.user._id);

    const { oldPassword, newPassword } = req.body;

    const valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid) return res.status(400).json({ message: "Неверный старый пароль" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.json({ message: "Пароль обновлён" });
};
