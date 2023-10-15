const express = require('express');
const router = express.Router();
const { GetDriverIdDetailController } = require('../controllers/GetDriverIdDetailController');

router.get('/drivers/:idDriver', GetDriverIdDetailController);

module.exports = router;
