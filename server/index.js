require('dotenv').config();
const express = require('express');
const models = require('./models/models')
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate(); // с помощью нее будет станавливаться подключение к базе данных 
        await sequelize.sync(); // Сверяет состоянре базы данных со схемой данных 
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}