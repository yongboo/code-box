const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const path = require('path')
const open = require('open')

const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

app.use( async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(3001, () => {
  open('http://localhost:3001')
})

