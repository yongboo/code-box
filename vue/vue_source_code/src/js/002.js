
// 订阅者
class Dep {
  constructor () {
    this.subs = [] // 存放watcher
  }
  
  addSub (sub) {
    this.subs.push(sub)
  }

  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

// watcher
class Watcher {
  constructor () {
    /* 在 new 一个 Watcher 对象时将该对象赋值给 Dep.target，在 get 中会用到 */
    Dep.target = this
  }

  update () {
    console.log('视图更新了')
  }
}

Dep.target = null





// function cb (newVal) {
//   console.log('试图更新了')
// }

// 这个方法通过 Object.defineProperty 来实现对对象的「响应式」化
function defineReactive (obj, key, val) {
  const dep = new Dep()
  Object.defineProperty (obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
      dep.addSub(Dep.target)
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal
      /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
      dep.notify()
      // cb(newVal)
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
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher()
  }
}

let _vue = new Vue({
  data: {
    test: 'hi xiaoming'
  }
})

document.write(_vue._data.test)
_vue._data.test = 'hello world!'
