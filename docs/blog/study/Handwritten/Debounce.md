---
outline: deep
---
# 防抖与节流
---

### 防抖
```js
/**
 * 防抖
 * @param { Function} fn 执行的函数
 * @param { number } delay  延迟时间
 * @param { boolean } immediate 是否立马执行
 */
const debounce = (fn, delay, immediate) => {
    let timerId = null
    return function (...args) {
        if (timerId) clearTimeout(timerId)
      
        if (immediate && !timerId) {
            fn.apply(this, args)
        }
      
        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
```
### 节流
```js
/**
 * 节流
 * @param { Function} fn 执行的函数
 * @param { number } delay  延迟时间
 */
const throttle = (fn, delay) => {
    let prevTime = 0
    return function (...args) {
        const nowTime = +new Date()
      
        if (nowTime - prevTime > delay) {
            prevTime = nowTime
            fn.apply(this, args)
        }
    }
}
```