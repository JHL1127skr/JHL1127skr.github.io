---
outline: deep
---

# bind的使用
---
**问：bind之后能改变this指向吗**

**答：不能**

改变this指向后  返回一个绑定函数 bound function 如下图
![](/blog/bind.png)
- TargetFunction 指向bind之前的函数
- BoundThis 绑定的this指向
- BoundArgs 传入的参数

所以 当绑定函数执行的时候 相当于 `TargetFunction.apply(BoundThis,BoundArgs)`