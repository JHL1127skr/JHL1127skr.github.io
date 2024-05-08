---
outline: deep
---

# Promise 与 async/await

---

### Promise

#### 1、状态

- 等待中：pending
- 成功：resolved
- 失败：rejected

#### 2、原型方法

- 成功回调 `Promise.prototype.then()`
- 失败回调：`Promise.prototype.catch() `
- 不管成功或者失败：`Promise.prototype.finally() `

#### 3、静态方法（all、rece、allSettled、any、withResolved）

```javascript
const p = Promise.all([p1, p2, p3]);
//全部成功 p的状态变为 resolved ，只要有一个失败 变成 rejected

const p = Promise.race([p1, p2, p3]);
//数组中的实例谁的状态先改变 就会影响到p的状态，可以做 指定时间没有返回就抛出一个reject

const p = Promise.allSettled([p1, p2, p3]);
//不管成功或是失败 都会等到数组中所有的执行完毕才会返回状态 返回的对象是个数组

const p = Promise.any([p1, p2, p3]);
//如果一个成功 p的状态会变成 resolved，如果有一个错误 那么必须其他全部错误 p的状态才会变成rejected

const { promise, reslove, reject } = Promise.withResolved();
const fn = () => {
	resolve("....");
};
promise.then((res) => {
	console.log(res); //.....
});
// 可以在任何地方调用 resolve 和 reject
```

### async/await

#### 1、含义

一句话，它就是 Generator 函数的语法糖。
<br/>
内置执行器、更好的语义、更广的适用性、返回值是 Promise

#### 2、语法

```javascript
async function getStockPriceByName(name) {
	const symbol = await getStockSymbol(name);
	const stockPrice = await getStockPrice(symbol);
	return stockPrice;
}

getStockPriceByName("goog").then(function (result) {
	console.log(result);
});
```
