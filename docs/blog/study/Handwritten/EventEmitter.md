---
outline: deep
---

# 发布订阅模式
---
### 创建
```js
class myEventEmitter{
    constructor(){
        //eventMap 用来存储事件和监听函数之前的关系
        this.eventMap={}    
    }
    //type 代表事件名称
    on(type,handler){
        //handler必须是一个函数 不然抛错
        if(!(handler instandof Function)){
            throw new Error('请传入一个函数')        
        }
        //判断type对应队列是否存在
        if(!this.eventMap[type]){
            //如果不存在新建任务队列
            this.eventMap[type]=[]        
        }
        //如果存在  直接推入队列
        this.eventMap[type].push(handler)
    }
    emit(type,params){
        if(this.eventMap[type]){
            this.eventMap[type].forEach((handler,index)=>{
                  handler(params)          
            })  
        }    
    }
    of(type,handler){
        if(this.eventMap[type]){
            const index = this.eventMap[type].indexOf(handler)
            this.eventMap[type].splice(index,1)
        }   
    }
}
```
### 调用
```js
const myEvent = new myEventEmitter()

const testHandler = (params)=>{
    console.log(`test触发事件,参数是："${params}`)
}
//监听
myEvent.on('test',testHandler)
//订阅
myEvent.emit('test',{})
```