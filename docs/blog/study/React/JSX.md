---
outline: deep
---

# JSX 如何变成 DOM

---

- `ReactElement`：虚拟 DOM 本质对象
- `Current Fiber Tree`：“真实 UI 对应的” 通过 alternate 于 wip Fiber 链接
- `WorkInProgress Fiber Tree`：“内存中构建的” 由 ReactElement 与 CurrentFIber 进行 diff 算法比较出来
- `FIberRootNode`：“首屏渲染时仅有根节点的空白页面”
  ![图片](/blog/jsx.png)
