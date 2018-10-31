const koa = require('koa')
const open = require('open')
const app = new koa()

app.use(async (ctx, next) => {
  let url = ctx.request.url
  // let { keys, entries } = Object
  // for (let key in keys(ctx)) {
  //   console.log(key)
  // }
  // for(let [key, val] of entries(ctx)) {
  //   console.log([key, val])
  // }
  ctx.body = url

})

app.listen(3001, () => {
  open('http://localhost:3001')
})
