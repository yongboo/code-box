const koa = require('koa')
const open = require('open')
const logger = require('../middleware/logger-async')
const app = new koa()

app.use(logger())
app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  next()
})

app.use(async (ctx, next) => {
  console.log('koa is working')
  next()
})

app.listen(3001, () => {
  open('http://localhost:3001')
})
