function cb (newVal) {
  console.log('试图更新了')
}

// 这个方法通过 Object.defineProperty 来实现对对象的「响应式」化
function defineReactive (obj, key, val) {
  Object.defineProperty (obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal
      cb(newVal)
    }
  })
}

function observe (obj) {
  if (!obj || (typeof obj !== 'object')) return
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

class Vue {
  constructor (options) {
    this._data = options.data
    observe(this._data)
  }
}

let _vue = new Vue({
  data: {
    test: 'hi xiaoming'
  }
})

_vue._data.test = 'hello world!'
