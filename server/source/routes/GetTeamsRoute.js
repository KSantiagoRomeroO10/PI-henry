const express = require('express');
const router = express.Router();
const { GetTeamsController } = require('../controllers/GetTeamsController');

router.get('/teams', GetTeamsController);

module.exports = router;
