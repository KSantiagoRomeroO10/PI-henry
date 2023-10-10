require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos usando variables de entorno
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

module.exports = sequelize;
