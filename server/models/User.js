import mongoose from 'mongoose';

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

export default mongoose.model('User', userSchema);
