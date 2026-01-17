import React from 'react';
import './Contacts.css'; 


const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1>Наши Контакты</h1>
            <p className="subtitle">Мы всегда рады помочь вам с выбором спортивного инвентаря!</p>

            <div className="contacts-grid">
                {/* Блок адреса */}
                <div className="contact-card">
                    <div className="icon">📍</div>
                    <h3>Адрес</h3>
                    <p>125009, г. Москва, ул. Тверская, д. 15, офис 101</p>
                </div>

                {/* Блок телефона */}
                <div className="contact-card">
                    <div className="icon">📞</div>
                    <h3>Телефон</h3>
                    <p>+7 (495) 123-45-67 (Москва, пн–пт 9:00–18:00)</p>
                </div>

                {/* Блок email */}
                <div className="contact-card">
                    <div className="icon">✉️</div>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:sportinfo@mail.ru" className="contact-link">sportinfo@mail.ru</a>
                    </p>
                    <span className="note">Пишите нам, мы ответим в течение 24 часов</span>
                </div>
            </div>
        </div>
    );
};


export default Contacts;    