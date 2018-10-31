const Koa = require('koa')
const app = new Koa()
const open = require('open')

app.use(async (ctx, next) => {
  let url = ctx.request.url
  let request = ctx.request

  let request_query = request.query
  let request_queryString = request.querystring

  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring


  ctx.body = {
    url,
    request_query,
    request_queryString,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3001, () => {
  open('http://localhost:3001')
})