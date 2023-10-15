const express = require('express');
const router = express.Router();

const getDriversRoute = require('./GetDriversRoute');
const GetDriverIdDetailRoute = require('./GetDriverIdDetailRoute');
const getDriversByNameRoute = require('./GetDriversByNameRoute');

router.use('/get', getDriversRoute); // http://localhost:3001/get/drivers
router.use('/get', GetDriverIdDetailRoute);  // http://localhost:3001/get/drivers/:idDriver
router.use('/get', getDriversByNameRoute); // http://localhost:3001/get/name?name=Heikki

module.exports = router;
