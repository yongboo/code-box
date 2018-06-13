import 'babel-polyfill'
class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }
  
  sayHello() {
    console.log(this.name + 'say hello')
  }
}
let shanyongbo = new Person('shanyongbo', 30)
shanyongbo.sayHello()

console.log(typeof Person)
console.log(Person.prototype.constructor === Person)
if(module.hot) {
  console.log('module is updateing')
}