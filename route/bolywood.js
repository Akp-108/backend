const express = require ('express')
const detailsControler = require('../Component/detalis');

const detalisRouter = express.Router()
detalisRouter.route("/bolly")
.get(detailsControler.apiController)
module.exports = detalisRouter