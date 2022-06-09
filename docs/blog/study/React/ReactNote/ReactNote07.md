# 07-setState工作流
---
::: tip setState是同步还是异步
setState的表现会因调用场景的不同而不同：
- 在React钩子函数及合成事件中，他表现为异步
- 在setTimeout、setInterval等函数中，包括DOM原生事件中，都表现为同步
:::

::: tip 什么是批量更新
每来一个setState，就把它塞入一个队列汇里“攒起来”，等时机成熟，再把所有的State结果做合并，最后只针对最近的state之走一次更新流程
:::

### setState工作流程
![图片](/blog/ReactNote07-1.png)
#### 一、入口函数
充当一个分发器，根据入参的不同，分发到不同的功能函数当中去

![图片](/blog/ReactNote07-2.png)

#### 二、enqueueSetState
1、将新的state放进组件的状态队列里
2、用 **enqueueUpdate** 处理将要更新的实例对象

![图片](/blog/ReactNote07-3.png)
#### 三、enqueueUpdate
引出 **batchingStrategy** 对象 
该对象的 *isBatchingUpdates* 属性直接决定里当下是走更新流程还是排队等待

![图片](/blog/ReactNote07-4.png)
#### 四、batchingStrategy
批量更新 “锁”管理器

![图片](/blog/ReactNote07-5.png)

React中的 *Transaction*（事务）机制

![图片](/blog/ReactNote07-6.png)


