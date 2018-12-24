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





---

### 事件注册
* addEventListener
* 该函数的第三个参数可以是布尔值，也可以是对象。
* 对于布尔值 useCapture 参数来说，该参数默认值为 false，标识冒泡阶段触发，为true表示捕获阶段触发
* 对于对象参数来说，可以使用以下几个属性
   * capture，布尔值，和 useCapture 作用一样
   * once，布尔值，值为 true 表示该回调只会调用一次，调用后会移除监听
   * passive，布尔值，表示永远不会调用 preventDefault
* 一般来说，我们只希望事件只触发在目标上，这时候可以使用 stopPropagation 来阻止事件的进一步传播。
* 通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。
* stopImmediatePropagation 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

### 事件代理
* 节省内存
* 不需要给子节点注销事件

## 跨域
因为浏览器出于安全考虑，有同源策略。如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。

### JSONP
JSONP 的原理很简单，就是利用 \<script\> 标签没有跨域限制的漏洞。通过 <script> 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。












