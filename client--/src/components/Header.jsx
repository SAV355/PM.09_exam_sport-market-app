import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Сейчас создадим этот файл стилей

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    SportStore
                </Link>
        
                <nav className="nav">
                    <ul>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/promotions">Акции</Link></li>
                        <li><Link to="/articles">Статьи</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
        
                <div className="header-actions">
                   {/* Кнопка "Позвонить" (по ТЗ должна быть доступна всегда) */}
                    <a href="tel:+79990000000" className="btn btn-accent call-btn">
                        Позвонить
                    </a>
                    
                    <Link to="/cart" className="cart-icon">
                        Корзина (0)
                    </Link>
                    <Link to="/auth" className="login-link">
                        Войти
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
