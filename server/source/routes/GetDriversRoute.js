const express = require('express');
const router = express.Router();
const { GetDriversController } = require('../controllers/GetDriversController');

router.get('/drivers', GetDriversController);

module.exports = router;
