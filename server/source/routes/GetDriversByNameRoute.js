const express = require('express');
const router = express.Router();
const { GetDriversByNameController } = require('../controllers/GetDriversByNameController');

router.get('/name', GetDriversByNameController);

module.exports = router;
