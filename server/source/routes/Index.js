const express = require('express');
const router = express.Router();

const getDriversRoute = require('./GetDriversRoute');
const getDriverDetailRoute = require('./GetDriverDetailRoute');

router.use('/get', getDriversRoute); // http://localhost:5000/get/drivers
router.use('/get', getDriverDetailRoute);  // http://localhost:5000/get/drivers/:idDriver

module.exports = router;
