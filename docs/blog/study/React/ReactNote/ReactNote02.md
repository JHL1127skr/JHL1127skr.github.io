# 02-生命周期
---
::: tip 虚拟DOM：核心算法的基石
- 组件初始化： render方法 -> 生成虚拟DOM -> ReactDOM.render -> 真实DOM
- 组件更新： render方法 -> 生成新的虚拟DOM ->diff算法 -> 定位出两次虚拟DOM的差异
:::
::: tip 组件化：工程化思想在框架中落地
- 几乎所有可见/不可见的内容都可以被抽离为各种各样的组件，每个组件即是封闭的又是开放的
- 封闭：针对”渲染工作流“，每个组件只能处理内部的渲染逻辑
- 开放：基于”单项数据流“ 组件之间的互相通信，改变内部数据进而对渲染结构产生影响
:::

### 拆解React生命周期
> 生命周期方法的本质：组件的“灵魂（render）”与“躯干（render以外的生命周期）”
### 一、React15的生命周期流程

![图片](/blog/ReactNote02-1.png)

**初始化**：constructor -> WillMount -> render -> DIdMount

**更新**：
- 1、父组件触发：componentWillReceiveProps(nextProps) -> WillUpdate -> redner -> DIdUpdate
> 如果父组件导致组件重新渲染，即使props没有更改，也会调用此方法（componentReceiveProps）。如果只是想处理更改，请确保进行当前值与变更值的比较。  --React官方  

::: warning
注意：componentWillReceiveProps(nextProps) 并不是由Props改变触发的，而是由父组件的更新触发的
:::
- 2、自身触发：shouldComponentUpdate(nextProps，nextState) -> WillUpdate -> redner -> DIdUpdate

**卸载**：在父组件中被移除/组件设置的key 在父组件runder的过程中 与上次不一样
### 二、React16的生命周期流程

![图片](/blog/ReactNote02-2.png)

#### 一、新增了两个生命周期
```jsx
static getDerivedStateFromProps(nextProps,prevState){
  //static 静态方法 this为null
  //函数返回结果将会被添加到state里面 
  //null 表示state不需要任何改变 
  return {
    flag:true
  }
}
```
1. 静态方法：不依赖组件实例而存在，所以在方法内部访问不到this
2. 两个参数：父组件的Props，组件自身的State
3. 需要一个对象格式的返回值：需要用返回值更新state ，return null
4. 并非覆盖式更新，针对某个属性的定向更新：更新完原有属性和更新属性共存
```jsx
getSnapshotBeforeUpdate(){
  //return 的值 回传给 componentDidUpdate 里的 info
  return null
} 
componentDidUpdate(prevProps,prevState,info){}
```
1. 返回值作为DidUpdate第三个参数传入
#### 二、删除了三个Will相关的生命周期
**前置条件**:

每触发一次组件的更新 ，react就会构建一颗新的虚拟DOM树，通过与上一次的虚拟DOM进行diff，来实现DOM定向更新。这个漫长且不可打段的递归更新过程，将会带来用户体验成的巨大风险。渲染过程一旦开始就会牢牢占用主线程，直到递归彻底完成。浏览器没有办法处理渲染之外的是事情，若渲染时间过长，没有办法处理用户交互，就会导致页面卡顿或卡死。

**解决办法**：

Fiber架构：对React核心算法的一次重写

Fiber会将一个大的更新任务拆解为许多小任务，会使原本同步的渲染过程变成可打断的异步模式。

根据“能否被打断”这一标准 React16生命周期被划分为 render 和 commit  两个阶段。render阶段在执行过程中 允许被打断，而commit阶段总是同步执行的

在Fiber机制下，render阶段是允许暂停，终止，和重启的。（重复执行一遍整个任务，而非接着上次执行接着往下走）导致render阶段的生命周期有可能被重复执行的。

**总结**：

React为了解决之前的漫长不可打断的同步渲染进程带来的风险，推出Filer架构，使渲染流程变成可打断的异步模式。在Fiber机制下，三个Will相关的生命周期处于可以被打断的render阶段，render阶段使允许暂停、终止、和重启的。所以为了防止生命周期多次被调用导致出现BUG，进而删除和引入新的生命周期，同时也确保了生命周期的行为更加纯粹、可控、可预测。
#### 三、Fiber架构对生命周期的影响
![图片](/blog/ReactNote02-3.png)



