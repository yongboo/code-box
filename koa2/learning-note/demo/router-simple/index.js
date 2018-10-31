const koa = require('koa')
const open = require('open')
const fs = require('fs')
const app = new koa()

app.use(async (ctx, next) => {
  let url = ctx.request.url
  let html = await router(url)
  ctx.body = html 

})

app.listen(3001, () => {
  open('http://localhost:3001')
})

async function router(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    default:
      break   
  }

  let html = await fetchContent(view)
  return html
}

function fetchContent (view) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./view/${view}`, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}