---
outline: deep
---

# 组件重新渲染

---

<div class="tip custom-block" style="padding-top: 8px">
state、props、context改变都会使组件<b>重新渲染</b>
</div>

> `Context` 提供了一个无需为每层组件手动添加 `props`，就能在组件树间进行数据传递的方法。正是因为其这个特点，它是可以穿透 `React.memo` 或者 `shouldComponentUpdate` 的比对的，也就是说，一旦 `Context` 的 `Value` 变动，所有依赖该 `Context` 的组件会全部 `forceUpdate`

::: tip Q：子组件重新渲染会导致父组件会渲染吗
A：不会 子组件更新并不会影响 父组件的 `props` 和 `state`
:::

:::tip Q：子组件没有传入 Props，但父组件更新子组件为什么还是一样会重新渲染
A：因为 React 内部会默认给子组件传入一个`props:{}` ,应为每次的 {} 引用地址都不同`{}! == {} //true`,所以子组件还是会重新渲染
:::

:::tip Q：上述问题有什么好的解决方案吗
A：React.memo 和 React.pureComponent，他们会对 props 进行 "浅比较"，判断两次是否相等
:::

:::tip Q：还有那些 API 会影响到组件之间的渲染
A：函数组件 Hooks 中的`useMemo`、`useCallback。`类组件中的`shouldComponentUpdate`<br/>相同点 该缓存不受函数式组件的重新 render 的控制，只根据依赖的变更才会改变.同时传入子组件时，不会引起子组件的渲染，前提是子组件 需要被`React.memo`或`React.pureComponent`包裹\
`shouldComponentUpdate` 是类组件的勾子函数，通过返回 true/false 来判断是否更新
:::
