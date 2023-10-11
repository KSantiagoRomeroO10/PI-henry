const { DataTypes } = require('sequelize');
const sequelize = require('./Connection');
const { v4 } = require('uuid'); // Importa la función UUIDv4 de la librería uuid

const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => v4(), // Genera automáticamente un UUID al insertar un registro
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Team;
