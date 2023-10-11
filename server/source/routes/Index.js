const express = require('express');
const router = express.Router();

const getDriversRoute = require('./GetDriversRoute');

router.use('/get', getDriversRoute);

module.exports = router;
