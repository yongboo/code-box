const koa = require('koa')
const open = require('open')
const app = new koa()

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
