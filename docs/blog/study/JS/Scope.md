---
outline: deep
---

# 作用域和作用域链
--- 
### 什么是作用域（scope）
作用域是在运行时代码中某些特定部分中的变量、函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。

ES6之前 JavaScript 只有**全局作用域**和**函数作用域**,ES6提供了**块级作用域**,可通过新增命令let和const来体现
### 全局作用域和函数作用域
```js
function foo(){
  var test = 'Tony'
  age = 18 //等同于 window.age = 18
}
foo()
console.log(test) // Uncaught ReferenceError: test is not defined
console.log(age) // 18
```
### 块级作用域
```js
//在 {} 内使用 let / const 定义的变量便形成块级作用域
if(true){
  const test ='Tony'
}
console.log(test) // Uncaught ReferenceError: test is not defined
```
### 作用域链 
作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行