# Promise
---
### Promise状态
- 等待中：pending
- 成功：resolved
- 失败：rejected
### Promise原型上的方法
- 成功回调：Promise.prototype.then() 
- 失败回调：Promise.prototype.catch() 
- 不管成功或者失败：Promise.prototype.finally() 
### Promise方法（all rece allSettled any）
- 1、Promise.all
```js
const p = Promise.all([p1,p2,p3])
//全部成功 p的状态变为 resolved ，只要有一个失败 变成 rejected
```
- 2、Promise.rece
```js
const p = Promise.race([p1,p2,p3])
//数组中的实例谁的状态先改变 就会影响到p的状态，可以做 指定时间没有返回就抛出一个reject
```
- 3、Promise.Settled
```js
const p = Promise.allSettled([p1,p2,p3])
//不管成功或是失败 都会等到数组中所有的执行完毕才会返回状态 返回的对象是个数组
```
- 4、Promise.any
```js
const p =Promise.any([p1,p2,p3])
//如果一个成功 p的状态会变成 resolved，如果有一个错误 那么必须其他全部错误 p的状态才会变成rejected
```