# 原型与原型链
---
- 原型：每一个 JavaScript 对象（null 除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性，其实就是 prototype 对象。
- 原型链：由相互关联的原型组成的链状结构就是原型链。

![图片](/blog/prototype.png)

#### 例题
```js
var F = function() {}; 
Object.prototype.a = AA;
Function.prototype.b = BB;
var f = new F();
​
f.a(); // AA 
f.b(); // undefined
​
F.a(); // AA
F.b(); // BB
```
#### 实例对象的  __proto__ 等于 构造函数的  prototype
```js
function Foo(){}
let foo =new Foo()
​
foo.__proto__ == Foo.prototype
Foo.prototype.constructor == Foo
```
#### 为什么需要原型
```js
function Person() {
   this.eat = function() {}
}
Person.prototype.run = function() {}
let p1 = new Person();
let p2 = new Person();
​
console.log(p1.eat === p2.eat); // false
console.log(p1.run === p2.run); // true  方法共享
```