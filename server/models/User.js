import mongoose from 'mongoose';
//упращенная схема пользователя 
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
});

export default mongoose.model('User', userSchema);

/*
Предыдущая схема пользователя: (расширенная версия)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    addresses: {
        city: String,
        street: String,
        house: String,
        apartment: String,
        zip: String,
    },
});
*/
