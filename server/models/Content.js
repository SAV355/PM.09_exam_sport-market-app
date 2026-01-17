import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: String, required: true }, // Текст (статьи или условия акции)
    type: { type: String, enum: ['article', 'promotion'], required: true }, // Разделение типов
    image: { type: String },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Content', contentSchema);
