# JSX如何变成DOM
---
- ReactElement：虚拟DOM 本质对象 
- Current Fiber Tree：“真实UI对应的” 通过alternate于wip Fiber链接
- WorkInProgress Fiber Tree：“内存中构建的” 由ReactElement与CurrentFIber 进行diff算法比较出来
- FIberRootNode：“首屏渲染时仅有根节点的空白页面”
![图片](/blog/jsx.png)