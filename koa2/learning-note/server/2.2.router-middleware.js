const koa = require('koa')
const open = require('open')
const app = new koa()
const Router = require('koa-router')

// 子路由1
const home = new Router()
home.get('/', async (ctx) => {
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `

  ctx.body = html
})

// 子路由2
const page = new Router()
page.get('/404', async (ctx) => {
  ctx.body = '404 page'
}).get('/helloworld', async (ctx) => {
  ctx.body = 'helloworld page'
})

// 装载所有子路由
const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3001, () => {
  open('http://localhost:3001')
})
