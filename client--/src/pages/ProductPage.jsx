import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/axios';
import './ProductPage.css'; 

const ProductPage = () => {
    const { id } = useParams(); // Получить Id  из URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Запрос на бэкенд: GET /products/:id
                const response = await axios.get(`/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Ошибка при загрузке товара');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center">Загрузка...</div>;
    if (error) return <div className="text-center error-text">{error}</div>;
    if (!product) return <div className="text-center">Товар не найден</div>;

    return (
        <div className="product-details-container">
            <Link to="/catalog" className="back-link">← Назад в каталог</Link>
            
            <div className="product-details-content">
                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>
                
                <div className="details-info">
                    <h1>{product.name}</h1>
                    <p className="details-category">Категория: {product.category}</p>
                    <p className="details-description">{product.description}</p>
                    
                    <div className="details-price-block">
                        <span className="price">{product.price} ₽</span>
                        <div className="stock-info">
                            {product.countInStock > 0 
                                ? <span className="in-stock">В наличии: {product.countInStock} шт.</span>
                                : <span className="out-of-stock">Нет в наличии</span>
                            }
                        </div>
                    </div>

                    <button className="btn btn-primary btn-lg">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
