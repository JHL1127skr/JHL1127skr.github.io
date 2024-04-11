---
outline: deep
---

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


关于最后一步判断返回值
如果构造函数显式返回一个对象（且该对象不是 null）,则 new 表达式的结果就是这个对象

function fn(arg){
  this.value = arg;
  // 显式返回一个对象
  return { customProp: 'customValue' };
} 

let obj = new fn('some value') // 输出：{ customProp: 'customValue' } 
//没有返回值时输出： { value: 'some value' }


```