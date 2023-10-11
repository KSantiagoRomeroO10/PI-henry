const sequelize = require('./models/Index');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const router = require('./routes/Index');

// Configurar el puerto en el que deseas que el servidor escuche
const PORT = 5000;

// Definir una función asincrónica para inicializar la base de datos
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate({logging:false}); // Verifica la conexión a la base de datos
    // Sincroniza los modelos con la base de datos y crea las tablas si no existen
    await sequelize.sync({ 
      force: true,
      logging:false
    }); // Cambia a true para eliminar y recrear las tablas en cada ejecución

    console.log('Base de datos sincronizada exitosamente');
  }
  catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

// Middleware
app.use(express.json());

// Cargar rutas
app.use(router);

// Iniciar el servidor en el puerto 5000 y luego inicializar la base de datos
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  initializeDatabase();
});
