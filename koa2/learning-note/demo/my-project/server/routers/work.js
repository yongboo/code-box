const router = require('koa-router')()
const workController = require('./../controllers/work')

const routers = router.get('/', workController.indexPage)
module.exports = routers