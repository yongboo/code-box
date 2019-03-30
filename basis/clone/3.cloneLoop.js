// 破解递归爆栈的方法有两条路，第一种是消除尾递归，但在这个例子中貌似行不通，
// 第二种方法就是干脆不用递归，改用循环

// https://juejin.im/post/5bc1ae9be51d450e8b140b0c

function cloneLoop(x) {
  const root = {};

  // 栈
  const loopList = [{
    parent: root,
    key: undefined,
    data: x,
  }];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
}


let a = {
  a1: 1,
  a2: {
    b1: 2,
    b2: 3
  }
}

let b = cloneLoop(a)
a.a1 = 10
a.a2.b1 = 100

console.log(a.a1) // 10
console.log(a.a2.b1) // 100

console.log(b.a1) // 1
console.log(b.a2.b1) // 2