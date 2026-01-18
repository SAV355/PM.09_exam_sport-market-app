# PM.09_exam_sport-market-app

## 1: Подготовка и проектирование

 Настройка package.json для бэкенда и фронтенда<br>
 Проектирование базовых схем для MongoDB (Mongoose)<br>
 созданы файлы.js 
 - Товары <br>
 - Категории <br>
 - Пользователи <br>
 - Заказы <br>
 - Контент (статьи/акции) <br>
 - Отзывы <br>
 - Настройки контактов. <br>

 Итог зозданы папки  Client и Server.
- Инициализирован Server  
```bash
npm init -y 
```
- установлены основные зависимости для сервера
```bash
npm install express mongoose dotenv cors
```
- устанвлен пакет nodemon для удобства в разработке
```bash
npm install -D nodemon
```

- Инициализирован Client (для быстрой сборки React использовал Vite) 
```bash
npm create vite@latest client -- --template react
```
- установлены основные зависимости для сервера
```bash
npm install
```
- устанвлен пакет nodemon для удобства в разработке
```bash
npm install react-router-dom axios
```

и немногоо доработан package.json(Сервер)
изменил
"type": "module", 
"scripts": { //добавил пару параметров start и dev
    "start": "node index.js",
    "dev": "nodemon index.js"
изменил
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.0",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
 --- 

 ## 2: Разработка Бэкенда (Node.js + Express)

### Цели:

 Настройка сервера и подключение к MongoDB.
- Подключение к БД
- "Прослойка" для авторизации <br>
- Контроллер авторизации <br>
- Контроллер товаров <br>
- Контроллер контента и настроек <br> 
- Создан файл окружения .env и т.д. <br>

 Реализация API Auth, Products (с фильтрацией), Categories, Orders, Content, Settings, Statistics 


 <br>
Итог: устанновлены доп зависимости для хеширования паролей и токенов

``` bash 
npm install jsonwebtoken bcryptjs
```


 ---


 ## 3: Разработка Фронтенда на (React)

 Базовая настройка (Router, Axios) и общие компоненты (Header, Footer, Кнопка «Позвонить»).

 Создание папок components, pages, styles, API
  Создание публичных страницы:
 - Главная <br>
 - Каталог <br>
 - Карточка товаров <br>
 - Корзина <br>
 - Инфо-страницы <br>
 - Личный кабинет пользователя (профиль, история заказов) не закончено
 ---
 Итого созданны:
- index.css
- App.jsx
- axios.js
- App.jsx
- About.jsx
- About.css
- Contacts.jsx
- Contacts.css
- Catalog.jsx
- Catalog.css
- Header.jsx
- Header.css
- ProductCard.jsx
- ProductCard.css
- ProductPage.jsx
- ProductPage.css
- ProductCard.jsx
- Sales.jsx
- Sales.css

Доделал:
Акции
Статьи

## 4: Админ панель

**Устанавил Multer (загрузка файлов)**<br>
#### Внесены изменения на **server** в:<br>
В App.jsx:<br>
server/models/User.js<br>
server/controllers/authController.js<br>
server/routes/authRoutes.js<br>

server/index.js
---
### Для Backend создал:<br>
 /server/middleware/upload.js<br>
 /server/uploads/products<br>
 /server/models/Product.js<br>
 /server/routes/products.js<br>
 /server/routes/userRoutes.js<br>
 /server/controllers/productController.js<br>
 /server/controllers/userController.js<br>

### Для Frontend создал:
 src/admin/pages/Products.jsx<br>
 src/admin/pages/AddProduct.jsx<br>
 src/admin/pages/EditProduct.jsx<br>
 src/pages/account/AccountLayout.jsx<br>
 src/pages/account/Profile.jsx===========>//ЛК<br>
 src/pages/account/Addresses.jsx===========>//ЛК<br>
 src/pages/account/Orders.jsx===========>//ЛК<br>

 src/components/Footer.jsx<br>

#### Внесены изменения на **Client**:<br>
 src/pages/Auth.jsx<br>
 src/api/axios.js<br>
 
---





