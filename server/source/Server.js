const { sequelize } = require('./models/Index');

const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que deseas que el servidor escuche
const PORT = process.env.PORT || 5000;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

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
  finally {
    sequelize.close(); // Cierra la conexión a la base de datos al finalizar
  }
};

// Iniciar el servidor en el puerto 5000 y luego inicializar la base de datos
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  initializeDatabase();
});
