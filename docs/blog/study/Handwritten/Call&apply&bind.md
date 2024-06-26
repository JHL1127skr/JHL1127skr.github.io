---
outline: deep
---

# Call&apply&bind

---

::: code-group

```js [Call]
Function.prototype.myCall = fucntion(context){
    // 判断调用对象
    if(typeof this !== 'function' ){
        throw new Error('Type error') //创建一个错误类型并抛出
    }
    //获取参数
    let args = [...arguments].slice(1)
    let result = null
    // 判断 context 是否传入，如果没有传就设置为 window
    context = context || window
    // 使用Symbol保证属性唯一，不回重写用户自己定义在context中的同名属性
    let fnSymbol = Symbol()
    // 将被调用的方法设置为 context 的属性
    // this 即为我们要调用的方法
    context[fnSymbol] = this
    // 执行要被调用的方法
    result = context[fnSymbol](...args)
    // 删除手动增加的属性方法
    delete context[fnSymbol]
    // 执行结果返回
    return result
}
```

```js [Apply]
Function.prototype.myApply = function (context) {
	if (typeof this !== "function") {
		throw new Error("Type error");
	}
	let result = null;
	context = context || window;
	// 使用Symbol保证属性唯一，不回重写用户自己定义在context中的同名属性
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

```js [Bind]
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

:::
