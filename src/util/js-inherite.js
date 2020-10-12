// 继承
console.log('-------继承实现开始-------')
// Parent class
function Person(name) {
  this.name = name
  this.say = function() {
    console.log(this.name)
  }
}
Person.prototype.age = 10

// 原型继承

// 无法继承父类实例的属性
// 所有新实例共享父类实例的属性（浅拷贝）
function Per() {
  this.name = 'Zhangsan'
}
Per.prototype = new Person('lisi')
const P1 = new Per()
const P2 = new Per()
console.log(P1.age) //10
console.log(P2.age) //10
P2.__proto__.age = 12
console.log(P1.age) //12
console.log(P2.age) //12
console.log(P1.name) //zhangsan

// 构造函数继承

// 无法继承父类原型上的属性
// 可以向父类传参
function Con() {
  Person.call(this, 'lisi')
  this.age = 14
}
const C1 = new Con()
console.log(C1.name) //lisi
console.log(C1.age) //14

// 组合继承
// 调用两次构造函数，耗内存
function makeUp(name) {
  Person.call(this, name)
}
makeUp.prototype = new Person()
var M1 = new makeUp('lisi')
console.log(M1.name) //lisi
console.log(M1.age) //10

// 原型式继承
// 所有实例共享原型链上的属性（浅拷贝）
function Proto(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
const Per2 = new Person('wangwu')
const Pr1 = Proto(Per2)
const Pr2 = Proto(Per2)
console.log(Pr1.name) //wangwu
console.log(Pr1.age) //10
Pr2.__proto__.age = 12
Pr2.name = 'laoliu'
console.log(Pr1.name) //wangwu
console.log(Pr1.age) //12

// 寄生式继承
// 不能复用
function ProtoOne(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function subProto(obj) {
  const s1 = ProtoOne(obj)
  s1.name = 'laoqi'
  return s1
}
var P3 = new Person()
var sub = subProto(P3)
console.log(sub.name) //laoqi
console.log(sub.age) //10

// 寄生组合继承
// 有些复杂
function protoTwo(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
const p = protoTwo(Person.prototype)
function Sub(name) {
  Person.call(this, name)
}
Sub.prototype = p
P1.constructor = Sub
const sub1 = new Sub('laoba')
console.log(sub1.name)
console.log(sub1.age)
console.log('-------继承实现结束-------')
