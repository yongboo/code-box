# InterviewMap - Js

## 执行上下文
* 在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段，JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。

* let 不能在声明前使用，但是这并不是常说的 let 不会提升，let 提升了声明但没有赋值，因为临时死区导致了并不能在声明前使用。

## 浅拷贝和深拷贝
### 浅拷贝
浅拷贝只解决了第一层的问题
* Object.assign()
* ...扩展运算符

### 深拷贝
* JSON.stringfy() JSON.parse()提供的序列化和反序列方法
  * 会忽略 undefined
  * 不能序列化函数
  * 不能解决循环引用的对象
* lodash中的cloneDeep()

## promise
### promise:
 * 是一个状态机，pending, fulfilled, rejected
 * 初始状态为pending 
 * Promise 新建后就会立即执行
 * then方法的回调函数执行视状态而定 （返回一个新的Promise对象）
    * 状态为 fulfilled / rejected 就执行回调
    * 状态为pending时 把回调函数放到一个异步队列中
 * resolve/reject方法执行，遍历执行异步队列中的回调函数
### promise的问题：
* 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
* 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
* 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。











