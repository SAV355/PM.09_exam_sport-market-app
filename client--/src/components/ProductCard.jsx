import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
    const imageUrl = product.image ? product.image : 'https://via.placeholder.com/300x300?text=No+Image'; // Место для картинки, но пока заглушка

    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`} className="product-image">
                <img src={imageUrl} alt={product.name} />
            </Link>
            <div className="product-info">
                <Link to={`/products/${product.id}`} className="product-title">
                    {product.name}
                </Link>
                <p className="product-category">{product.category}</p>
                <div className="product-bottom">
                    <span className="product-price">{product.price} ₽</span>
                    <button className="btn btn-primary btn-sm">В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
