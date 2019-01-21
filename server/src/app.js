const Koa = require('koa')
const logger = require('koa-logger')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const api = require('./api')

const app = new Koa()

app.use(logger())
app.use(morgan('combined'))
app.use(bodyParser())
app.use(api.routes())
app.use(api.allowedMethods())

app.listen(8000)
