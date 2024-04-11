---
outline: deep
---

# for in 与 for of
---
### `for in`
1. 遍历对象时 `key = 对象的键` / 遍历数组时 `key = 数组的下标`
2. 遍历数组时 遍历出来的下标为**字符串**类型 不能直接进行运算
3. 使用for in 会遍历数组所有**可枚举属性**，包括原型。
```javascript
const arr =[1,2];
arr.name = 'name';
for( key in arr ){
    console.log(key)
}
// 0
// 1
// name
```
::: tip
总结 for in 特别适合遍历对象
:::
### for of     
1. 遍历对象时 会报错  `obj is not iterable` / `遍历数组时 key = 数组的值`
2. 一个数据结构只要部署了  `Symbol.iterator` 属性, 就被视为具有 iterator接口, 就可以使用 for of循环。提供了遍历所有数据结构的统一接口
3. 可以配合 return break continue 打断循环

那些数据结构部署了`Symbol.iterator`属性了呢?


 `数组 Array`、`Map`、`Set`、`String`、`arguments对象`、`Nodelist对象（就是获取的dom列表集合）` 