const express = require('express')
const tourController = require('../details/tourism')

const tourRouter = express.Router()
tourRouter.route("/tour")
.get(tourController.apiController)
module.exports = tourRouter