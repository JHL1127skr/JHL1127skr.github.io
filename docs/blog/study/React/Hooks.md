---
outline: deep
---

# React-Hooks设计思：未完成
---
::: tip 类组件
面向对象编程思想的一种表征
- **封装**：将一类属性和方法，“聚拢”到一个Class里去
- **继承**：新的Class可以通过继承现有Class实现对某一类属性的方法和使用
:::

::: tip 函数组件
函数组件会捕获render内部的状态，这是两类组件最大的不同 [参考](https://zhuanlan.zhihu.com/p/62767474)
:::
::: tip 类组件与函数组件的区别
- 类组件需要继承class，函数组件不需要
- 类组件可以访问生命周期方法，函数组件不能
- 类组件可以获取到实例化后的this，并基于这个this做各样的事情，而函数不能
- 类组件中可以定义并维护state（状态），而函数组件不可以
:::
### 为什么需要React-Hooks
#### 一、告别难以理解的Class
1. this指向问题
2. 生命周期的学习成本以及不合理的逻辑规划方式（业务逻辑与生命周期耦合）
#### 二、解决业务逻辑难以拆分的问题
#### 三、使状态逻辑复用变得简单可行
类组件中靠的是高阶组件（HOC）和Render Props，现在我们通过自定义Hook达到既不破坏组件结构、又能实现逻辑复用效果
#### 四、函数组件从设计思想上来看更加契合React的理念
### 深入Hook工作机制：本质是链表
#### 一、Hooks使用规则
1. 只在React函数中使用Hooks
2. 不要在循环、条件或者嵌套函数中使用Hook

> 要确保Hooks在每次渲染时都要保持同样的执行顺序

#### 二、hooks调用链路 - 单向 顺序链表
::: tip 初始化：
mountState(首次渲染) 构建链表并渲染
:::

![图片](/blog/Hooks01.png)

::: tip 更新：
updateState 依次遍历链表并渲染
:::

![图片](/blog/Hooks02.png)

::: warning 注意：
hooks的渲染是通过“依次遍历”来定位每个hooks内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的。
:::