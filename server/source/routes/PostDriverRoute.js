const express = require('express');
const router = express.Router();
const { PostDriverController } = require('../controllers/PostDriverController');

router.post('/drivers', PostDriverController);

module.exports = router;
