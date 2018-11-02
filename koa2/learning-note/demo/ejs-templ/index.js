const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const open = require('open')

app.use(views(path.join(__dirname, 'view'), {
  extension: 'ejs'
}))

app.use( async (ctx) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})

app.listen(3001, () => {
  open('http://localhost:3001')
})