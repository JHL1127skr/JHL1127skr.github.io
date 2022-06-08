# New 操作符具体做了什么
---
#### const son =new Father()
- 创建一个空 son {}
- 连接原型 son.__proto__ = Father.prototype
- 绑定this指向  Father.call(this)
- 给空对象赋值静态属性 son.name
- 返回this return this
```js
function New() {
  const obj ={};
  const Constructor =[].shift.call(arguments);
  obj.__proto__ = Constructor.prototype
  const result Constructor.apple(obj,arguments)
  return type result === 'object' ? result :obj
}
```
 