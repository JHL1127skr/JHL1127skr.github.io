---
outline: deep
---

# bind 的使用

---

:::tip 问：bind 之后能改变 this 指向吗?
答：不行
:::

```js
function fn() {
	console.log(this.name);
}
const target = { name: "xx" };
const newFn = fn.bind(target, "123");
console.dir(newFn);
```

改变`this`指向后，返回一个绑定函数 `bound function`。如下图：
![](/blog/bind.png)

`TargetFunction`：指向原函数、
`BoundThis`：绑定的 this 指向、
`BoundArgs`：传入的参数

所以 当绑定函数执行的时候 相当于 `TargetFunction.apply(BoundThis,BoundArgs)`
