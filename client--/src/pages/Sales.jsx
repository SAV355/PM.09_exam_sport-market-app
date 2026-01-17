import React from 'react';
import './Sales.css';

const promotions = [
    {
        title: 'Новинки со скидкой',
        description: 'Скидки до 30% на новые коллекции спортивной одежды.',
        image: '/images/sales-new.jpg',
        link: '/sales/new'
    },
    {
        title: 'Последние размеры',
        description: 'Успейте купить! Ограниченный выбор размеров по сниженным ценам.',
        image: '/images/sales-last.jpg',
        link: '/sales/last'
    }
];

const Sales = () => {
    return (
        <div className="sales-container">
            <h1>Акции</h1>
            <p className="sales-subtitle">Лучшие предложения и выгодные скидки</p>

            <div className="sales-grid">
                {promotions.map((item, index) => (
                    <a href={item.link} key={index} className="sales-card">
                        <div 
                            className="sales-image"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>

                        <div className="sales-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sales;
