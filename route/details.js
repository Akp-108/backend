const express = require ('express')
const detailsControler = require('../Component/detalis');

const detalisRouter = express.Router()
detalisRouter.route("/details")
.get(detailsControler.apiController)
module.exports = detalisRouter