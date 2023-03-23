# New
---
```js
function New (){
  const obj ={} //创建一个对象
  const Constructor = [].shift.call(arguments) //通过arguments拿到构造函数
  //将空对象的原型指向构造函数，便可以访问到构造函数 原型上的属性
  obj.__proto__ = Constructor.prototype 
  //使用apply将构造函数的this指向到新对象，便可以访问到 构造函数上的属性
  const result  = Constructor.apply(obj,arguments)
  //判断构造函数的返回值并返回
  return typeof result === 'object' ? result : obj
}
```