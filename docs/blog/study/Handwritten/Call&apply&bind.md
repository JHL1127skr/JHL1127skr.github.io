# Call&apply&bind
---
### Call
```js
function x(a, b) {
    console.log(this);
    console.log(a, b);
}
let y = { name: '姜海龙' }
//第一步 给函数的原型对象 添加方法
Function.prototype.myCall = function (otherThis, ...args) {
    // 此时 myCall函数里的this  指向调用者 x
    // this(...args)
    //使用otherThis 改变 x函数的this 指向
    // 谁调用 函数 函数 就指向 谁 
    otherThis.fn = this
    // 核心理论  将x函数 作为 y对象的方法
    otherThis.fn(...args) //调用
    delete otherThis.fn //删除
}
x.myCall(y, '1', '2')
```
### Apply
```js
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new Error("Type error");
  }
  let result = null;
  context = context || window;
  // 与上面代码相比，我们使用 Symbol 来保证属性唯一
  // 也就是保证不会重写用户自己原来定义在 context 中的同名属性
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  // 执行要被调用的方法
  if (arguments[1]) {
    result = context[fnSymbol](...arguments[1]);
  } else {
    result = context[fnSymbol]();
  }
  delete context[fnSymbol];
  return result;
};
```
### Bind
```js
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new Error("Type error");
  }
  // 获取参数
  const args = [...arguments].slice(1),
  const fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      // 当前的这个 arguments 是指 Fn 的参数
      args.concat(...arguments)
    );
  };
};

```