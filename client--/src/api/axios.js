import axios from 'axios';

const instance = axios.create({
    
    baseURL: 'http://localhost:5000/api', // Адрес бэкенда servera. Порт по умолчанию.
});

export default instance;
