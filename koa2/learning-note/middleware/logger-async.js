function logger (ctx) {
  console.log(ctx.method, ctx.header.host, ctx.url)
}

module.exports = function () {
  return async function(ctx, next) {
    logger(ctx)
    await next()
  }
}