# 事件循环机制
---
##### JavaScript是一门单线程语言 所以被分为
- 同步任务
- 异步任务

![图片](/blog/eventloop.png)

#### 在JS中是有两个任务队列的 
宏任务队列（Macro Queue）
- setTimeout
- setInterval
- I/O
- 用户交互操作，UI渲染
- script (整体代码)
微任务队列（Micro Queue）
- Promise.then
- MutationObserver
- process.nextTick
#### 执行机制：
执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环

#### 例题
```js
console.log('aaa');
(async ()=>{
    console.log(111); 
})().then(()=>{ 
    console.log(222);  
});
 console.log('bbb');
//a 1 b 2
```
```js
console.log('aaa');
(async ()=>{  
    console.log(111);
    await console.log(222); 
    console.log(333);
})().then(()=>{  
   console.log(444);
});
console.log('ddd');
//a  1 2  d 3 4
```
