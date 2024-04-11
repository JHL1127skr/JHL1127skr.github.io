---
outline: deep
---

# JavaScript
### 深拷贝都有哪些方式
1. 递归
2. JSON
3. `structuredClone`
> 注意：...扩展运算符，只能只能深拷贝第一层， 既不是深拷贝也不是浅拷贝
### 箭头函数和普通函数的区别
1. 箭头函数没有自己的this，只会继承自己作用域上一层的this，且不能被改变
2. call、apply、bind方法不能改变箭头函数的this指向
3. 箭头函数没有`arguments`，没有`prototype`
4. 箭头函数不能当作构造函数使用
5. 箭头函数不能用作`Generator`函数,不能使用`yeild`关键字
		
### Array.isArray  实现
1. 判断是否是对象
2. 判断是否有`Symbol.iterator`属性，且是一个函数
3. 判断是否有`length`属性
		
### 生成长度数组的方式
```js
new Array(1).fill() //[undefined]
Array.from({length:1}) //[undefined]
// 生成1-10000的方法
[...new Array(10000).keys()] //[1,2,...]
[...Array.from({length:1}).keys()] //[1,2,...]
```

### new操作符具体做了什么
1. 创建一个空对象
2. 将空对象的原型指向构造函数，这样就可以访问到构造函数 原型上的方法
3. 使用apply将构造函数的this指向空对象，这样可以访问到构造函数上的属性
4. 判断构造函数的返回值并return 
	
### Object.defineProperty 与 Proxy
- `defineProperty`只能对属性进行监听，监听整个对象需要遍历 
- `Proxy`(元编程:即对编程语言进行编程)可以监听对象所有属性，和数组
	
### isNaN 和 Number.isNaN 函数的区别？
- `isNaN` 类型检测 如果不是Number 会先将参数转换成数值类型在判断	`eg: isNaN('str') // true`
- `Number.isNaN` 类型检测 如果不是Number 会直接返回false  `eg: Number.isNaN('str') // false`
		
### CommonJS 和 ESModule 的区别
1. CommonJS 值的拷贝，ESModule 值的引用
2. CommonJS 运行时加载，ESModule 静态编译
3. CommonJS 同步，ESModule 异步
- AMD  依赖前置  异步加载
- CMD  就近依赖  按需加载

###  Map和WeakMap有什么区别
- Map的key可以放入任何值，WeakMap只能用对象当作key
- Map可以使用for of 遍历，WeakMap不行

### for of 与 for in 的区别
- in：适合遍历对象，使用它遍历数组的时候会把 可枚举属性 遍历出来
- of：遍历对象报错！它只能遍历含有`iterator`（迭代器）属性的数据接口 如：`Map，Set，Array，arguments，String`

### Array.shift() 与 Array.unshift() 的返回值是什么
- shift表示删除数组第一项，返回删除的值
- unshift表示在数组前增加，返回数组增加后的长度

### forEach如何跳出循环
自身没有办法跳出循环，使用return可以跳出单次循环，利用try{}catch{}抛出异常可以打断循环，或者使用 `some` 或 `every` 通过 return 判断打断循环

### 防抖与节流
 防抖：触发事件后在规定时间内回调函数只执行一次,如果在规定时间内再次触发事件,则会重新计算时间
>  将多次执行变成最后一次执行
    
节流：触发事件时在规定时间段只能调用一次回调函数,如果在规定时间内再次触发,则什么也不做,也不会以重置定时器
> 将多次执行变为在规定时间内只执行一次
	
### 代码题
```js
1、const a ={}, b='123', c=123;
   a[b]='b' ; a[c]='c'; 
	 console.log(a[b])  // c

2、const a ={}, b=Symbol('123'), c=Symbol('123');
	 a[b]='b' ; a[c]='c';
	 console.log(a[b])  // 

3、const a ={}, b={key:'123'}, c={key:'456'};
	 a[b]='b' ; a[c]='c'; //调用toString { [object object]:'123' }
	 console.log(a[b])  // c 
```