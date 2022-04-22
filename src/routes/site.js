var express = require('express')
var route = express.Router()
const siteController = require('../app/controllers/SiteController')

route.use('/search',siteController.search)
route.use('/',siteController.index)

module.exports = route

