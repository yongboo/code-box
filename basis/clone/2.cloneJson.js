// 利用JSON实现拷贝

// cloneJson内部也是使用的递归
// 优化点是 做了循环引用的检查，不会导致栈溢出

function cloneJson (source) {
  return JSON.parse(JSON.stringify(source))
}

let a = {
  a1: 1,
  a2: {
    b1: 2,
    b2: 3
  }
}

let b = cloneJson(a)
a.a1 = 10
a.a2.b1 = 100
console.log(b.a1) // 1
console.log(b.a2.b1) // 2

let c = {}
c.c = c
cloneJson(c) // TypeError: Converting circular structure to JSON