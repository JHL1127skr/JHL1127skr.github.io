---
outline: deep
---

# 数据类型以及判断数据类型的方法

---

### 一、基本的数据类型介绍，及值类型和引用类型的理解

在 JS 中共有 8 种基础的数据类型：String、Number、Undefined、Boolean、Object、null、Symbol、BigInt

#### ES6 新增数据类型

- Symbol 代表独一无二的值，最大的用法是用来定义对象的唯一属性名
- BigInt  可以表示任意大小的整数。（ES10 新增）

#### 值类型数据变动

```js
let a = 100;
let b = a;
a = 200;
console.log(b); // 100
```

![图片](/blog/dataType1.png)

#### 引用类型数据变动

```js
let a = { age: 20 };
let b = a;
b.age = 30;
console.log(a.age); // 30
```

![图片](/blog/dataType2.png)

### 二、数据类型判断

#### 1、typeof：能判断所有值类型，函数。不可对  null、对象、数组进行精确判断，因为都返回  object 

```js
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
```

#### 2、instanceof：能判断对象类型，不能判断基本数据类型 返回值 true/false

```js
其内部运行机制是判断在其原型链中能否找到该类型的原型。比如考虑以下代码：

class People {}class
Student extends People {}
const vortesnail = new Student();
console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true
```

#### 3、Object.prototype.toString.call() .slice(8, -1).toLowerCase();：所有原始数据类型都是能判断的，还有  Error 对象，Date 对象等。

涉及两个问题

::: tip 问：为什么 toString 方法在 Object.prototype
因为 `toString` 为 Object 的原型方法，而 Array 和 function 等类型作为 Object 的实例都**重写**了 toString 方法。如果只是简单的调用 obj 的 toString 方法只会转化成字符串
:::

::: tip 问：为什么需要用到.call 方法
call 的作用是改变 this 指向可以在一个对象上借用另一个对象的方法
:::

```js
Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () {}); // "[object Function]"
```
