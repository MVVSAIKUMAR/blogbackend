const express = require('express')
const foodController = require('../details/food')

const foodRouter = express.Router()
foodRouter.route("/food")
.get(foodController.apiController)
module.exports = foodRouter