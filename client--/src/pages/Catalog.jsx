import React from 'react';
import './Catalog.css';

const categories = [
    {
        title: 'Мужская одежда',
        image: '/img/men.jpg',
        link: '/catalog/men'
    },
    {
        title: 'Женская одежда',
        image: '/img/women.jpg',
        link: '/catalog/women'
    },
    {
        title: 'Детская одежда',
        image: '/img/kids.jpg',
        link: '/catalog/kids'
    },
    {
        title: 'Обувь',
        image: '/img/shoes.jpg',
        link: '/catalog/shoes'
    },
    {
        title: 'Аксессуары',
        image: '/img/accessories.jpg',
        link: '/catalog/accessories'
    },
    {
        title: 'Экипировка для спорта',
        image: '/img/equipment.jpg',
        link: '/catalog/equipment'
    }
];

const Catalog = () => {
    return (
        <div className="catalog-container">
            <h1>Каталог</h1>
            <p className="catalog-subtitle">Выберите категорию, чтобы перейти к товарам</p>

            <div className="catalog-grid">
                {categories.map((item, index) => (
                    <a href={item.link} key={index} className="catalog-card">
                        <div 
                            className="catalog-image" 
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        <h3>{item.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
