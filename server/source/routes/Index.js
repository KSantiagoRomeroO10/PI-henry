const express = require('express')
const router = express.Router()

const GetDriversRoute = require('./GetDriversRoute')
const GetDriverIdDetailRoute = require('./GetDriverIdDetailRoute')
const GetDriversByNameRoute = require('./GetDriversByNameRoute')
const GetTeamsRoute = require('./GetTeamsRoute')

const PostDriverRoute = require('./PostDriverRoute')

router.use('/get', GetDriversRoute) // http://localhost:3001/get/drivers
router.use('/get', GetDriverIdDetailRoute)  // http://localhost:3001/get/drivers/:idDriver
router.use('/get', GetDriversByNameRoute) // http://localhost:3001/get/name?name=Heikki
router.use('/get', GetTeamsRoute) // http://localhost:3001/get/teams

router.use('/post', PostDriverRoute) // http://localhost:3001/post/drivers

module.exports = router
