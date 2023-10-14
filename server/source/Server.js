const express = require('express');
const app = express();

const synchronizeDB = require('./models/SynchronizeDB');

const router = require('./routes/Index');

// Configurar el puerto en el que deseas que el servidor escuche
const PORT = 3001;

// Middleware
app.use(express.json());

// Cargar rutas
app.use(router);

// Iniciar el servidor en el puerto 5000 y luego inicializar la base de datos
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  synchronizeDB();
});
