require('dotenv').config();
const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos usando variables de entorno

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'postgres'
});

module.exports = sequelize;
