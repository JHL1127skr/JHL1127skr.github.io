# 箭头函数和普通函数的区别
---

1. 箭头函数没有自己的this，只会继承自己作用域上一层的this，且不能被改变
2. call、apply、bind方法不能改变箭头函数的this指向
3. 箭头函数没有`arguments`，没有`prototype`
4. 箭头函数不能当作构造函数使用
5. 箭头函数不能用作`Generator`函数,不能使用`yeild`关键字