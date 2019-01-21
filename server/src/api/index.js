const Router = require('koa-router')

const arduino = require('./arduino')

const api = new Router()

api.use('/arduino', arduino.routes(), arduino.allowedMethods())

module.exports = api
