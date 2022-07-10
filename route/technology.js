const express = require('express')
const techController = require('../details/technology')

const techRouter = express.Router()
techRouter.route("/tech")
.get(techController.apiController)
module.exports = techRouter