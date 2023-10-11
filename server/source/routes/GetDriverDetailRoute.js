const express = require('express');
const router = express.Router();
const getDriverDetailController = require('../controllers/GetDriverDetailController');

// Define la ruta para obtener el detalle de un driver por su ID
router.get('/drivers/:idDriver', getDriverDetailController);

module.exports = router;
