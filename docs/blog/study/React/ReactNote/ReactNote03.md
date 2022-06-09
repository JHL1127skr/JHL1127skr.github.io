# 03-数据如何在组件中流动
---
### 数据驱动视图
###### React的视图会随着数据的变化而变化
```jsx
UI = render(data) / UI =f(data)
```
### 组件间通信
#### 一、基于props的单项数据流
>组件，从概念上类似于JavaScript函数。它接受任意的入参（即 “props” ）并返回用于描述页面展示内容的Rract元素     --props

单项数据流：当前组件的state以props的形式流动时，只能留香组件树中比自己层级更低的组件
- 父子组件通信
- 子父组件通信
- 兄弟组件通信
#### 二、利用“发布 - 订阅”模式驱动React数据在任意组件间流动
![图片](/blog/ReactNote03-1.png)
#### 三、Context API 组件树全局通信方式
![图片](/blog/ReactNote03-2.png)
#### 四、Redux
> Redux是JavaScript状态容器，它提供可预测的状态管理

![图片](/blog/ReactNote03-3.png)


