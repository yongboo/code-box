const Koa = require('koa')
const app = new Koa()
const open = require('open')

app.use( async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'shangyongbo',
      {
        domain: 'localhost',
        path: '/index',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2018-11-03'),
        httpOnly: false,
        overwrite: false
      }
    )
    ctx.body = 'cookie is ok'
  } else {
    ctx.body = 'hello world'
  }
})

app.listen(3001, () => {
  open('http://localhost:3001')
})