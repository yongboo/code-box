// 递归实现对象拷贝

// 本例未考虑到数组问题
// 深层递归会导致爆栈
// 无法处理循环引用


function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function clone (source) {
  if (!isObject(source)) return source
  let temp = {}
  for(let key in source) {
    if(source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        temp[key] = clone(source[key])
      } else {
        temp[key] = source[key]
      }
    }
  }
  return temp
}

let a = {
  a1: 1,
  a2: {
    b1: 2,
    b2: 3
  }
}

let b = clone(a)
a.a1 = 10
a.a2.b1 = 100
console.log(b.a1) // 1
console.log(b.a2.b1) // 2


// let c = {}
// c.c = c
// clone(c) // Maximum call stack size exceeded

