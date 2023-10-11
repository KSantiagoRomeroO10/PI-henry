const { DataTypes } = require('sequelize');
const sequelize = require('./Connection');
const { v4 } = require('uuid'); // Importa la función UUIDv4 de la librería uuid
//const { v4: uuidv4 } = require('uuid'); 

const Driver = sequelize.define('Driver', {
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
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Driver;
