# instandof
---
```js
{} instanceof Object //true
function instanceof(A,B){
    A=A.__proto__  // 被判断的值
    B=B.prototype  // 要判断的类型 Array Object
    while(true){
        if(A==null){
            return false
        }
        if(B===A){
            return true
        }
        A=A.__proto__
    }
}
```