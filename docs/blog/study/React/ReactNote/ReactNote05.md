# 05-虚拟DOM
---
::: tip 历史DOM操作解决方案
原生API -> JQ类的库 -> 模版引擎（数据驱动视图）-> 虚拟DOM
:::
::: tip Diff算法
指的是对比出两颗虚拟DOM树之间差异的过程
:::
### 一、什么是虚拟DOM
本质上是JS和DOM之间的一个映射缓存，形态上表现为一个能够描述DOM结构及其属性信息的JS对象
### 二、虚拟DOM大致工作流程
挂载阶段：根据JSX的描述 => 生成虚拟DOM => ReactDOM.render => 渲染成真实DOM
更新阶段：Diff算法 => 定位出两次虚拟DOM的差异 => 作用于真实DOM
### 三、虚拟DOM的价值到底是什么（解决了什么问题）
1. 研发体验/研发效率的问题
2. 跨平台多端开发 同一套虚拟DOM可以渲染在不同的载体
3. “批量更新”  batch函数处理
