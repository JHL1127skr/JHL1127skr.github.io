---
outline: deep
---

# React

### Redux 工作流程

派发`dispatch`触发 `action`，对应`reducer`处理，改变`store`

### Redux 三大原则

1. 单一数据源：全局的`state`被储存在一颗`object tree`。并且这棵树只存在唯一的一个`store`中
2. `state`只读：只能通过`action`改变`state`
3. 使用纯函数来执行修改：为了描述`acrion`如何修改`state`，你需要编写纯函数`reducer`

### 高阶组件平时使用过没

1. 渲染劫持，可以控制组件时候渲染。比如权限组件
2. 强化 Props，可以向原始组件混入一些`props`。比如 `withRoute`

### React 批处理 （同步异步）

1. React18 之前
   - 开启：在 React 内部触发的监听事件当中（异步
   - 关闭: 原生的事件中或者`setTimeout` （同步
2. React18 之后
   - 开启：不管是原生事件还是 React 内部统一批处理
   - 关闭：通过`flushSync(()=>{})`，实现手动关闭（注：函数内部多次 setState 仍为批处理

### React 合成事件

16:原生事件先触发 冒泡到 docuemnt 上 统一执行合成事件<br/>
17:先执行合成事件的捕获，原生事件执行完毕执行冒泡阶段的合成事件

> 注：在原生事件中阻止冒泡行为，会阻止 React 合成事件的传播

### React 闭包陷阱

没有办法拿到最新的值，因为函数组件每次重新渲染都会产生新的作用域<br/>
解决办法：`useRef` 因为返回的都是都一个对象，更新产生的 ref 指向的也是同一片内存

### React 中有哪些性能优化的方式

1. class 中 `shouldComponentUpdate` 与 `pureComponent`
2. hooks 中 `usememo`、`useCallback`、`React.memo()`
3. 列表渲染中增加 key 属性
4. 合理规划组件 将变`(state,props,context)`与不变相分离，减少组件渲染次数
5. 避免使用匿名函数
6. `React.lazy` 与 `React.Supense`

### Hooks 使用上有什么限制

1. 不要在循环、判断或嵌套函数中使用
2. 在 React 的函数组件中使用

### 正确使用 useMemo

> useCallback 是 useMemo 的语法糖

1. 防止由重新渲染而带来的不必要的重复计算
2. 搭配`React.memo()`防止子组件

### useEffect 相关

1. **`useEffect`** 会在`commit`阶段完成后**异步执行**，适用于多数场景
2. **`useLayoutEffect`** 会在`commit`阶段的`Layout`子阶段**同步**执行，主要处理 DOM 操作、调整样式、避免页面闪烁的问题
3. **`useInsertionEffect`** 会在`commit`阶段的`Mutation`子阶段**同步**执行，无法访问“对 DOM 的引用”，适用于 css in js

### 如何让 useEffect 支持 async...await

**Q:为什么不支持** <br/>
A:在`useEffect`的回调函数中应该**不返回任何内容** 或者 **返回清理函数 cleanUp**，如果是`async()=>{}`,返回值将会是一个 Promise，不能作为函数调用。

**Q:如何支持** <br/>

1. 直接在函数内定义在执行
2. 在函数使用 IIFE（立即执行函数）
3. 自定义 hooks

### useRef 使用

1. 可以作为变量储存，且永远指向的同一片内存，不受闭包陷阱的限制
2. 将 ref 直接绑定在 DOM 上以便开发者获取 DOM

**问题：** 但可能开发者过于操控 DOM，导致和 React 内部操控 DOM 的行为产生冲突。<br/>
**限制：** 所以可以通过包裹组件的方式实现隔离效果，没有办法跨过组件直接获取 DOM。<br/>
**解决：** 可以使用`forwardRef((props,ref)=>{})`包裹组件，传入 ref 到组件内部与 DOM 绑定。并且通过 React 内部的 Hooks `useImperativeHandle`，可以自定义返回 ref 的值

### useTransition 与 useDeferredValue

```jsx
const [isPending, startTransition] = useTransition();
// isPending:boolean 是否在等待（低优先级任务是否在执行）
// startTransition(()=>{}) 回调函数中的任务会被降为低优先级

const deferredValue = useDeferredValue(value);
// 将该值转成 低优先处理。（本质同上，一个包装方法，一个包装值
```
