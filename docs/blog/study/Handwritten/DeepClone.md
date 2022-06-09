# 深拷贝
---
```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */
const deepClone =(obj={},map=new Map())=>{
    if(type obj !== 'object'){
        return obj
    }
    if(map.get(obj)){
        return map.get(obj)
    }
    let result = Array.isArray(obj)?[]:{}
    
   	map.set(obj,result)
    
    for(const key in obj){
        result[key]=deepClone(obj[key],map)
    }
    
    return result
}
```