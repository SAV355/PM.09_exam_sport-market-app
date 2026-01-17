import mongoose from 'mongoose';

const storeSettingSchema = new mongoose.Schema({
    phone: { type: String, default: '+7 (999) 000-00-00' }, // Тот самый номер для кнопки
    email: { type: String, default: 'info@sportstore.ru' },
    address: { type: String, default: 'Москва, ул. Спортивная, 1' },
    mapCoordinates: { type: String } 
});

export default mongoose.model('StoreSetting', storeSettingSchema);
