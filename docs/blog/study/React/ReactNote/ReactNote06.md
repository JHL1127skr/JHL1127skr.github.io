# 06-React15 栈调和（Stack Reconciler）
---
### 调和（Reconciliation）过程和Diff算法
调和：将虚拟DOM映射到真实DOM的过程 （“使一致” 的过程）

Diff：指的是对比出两颗虚拟DOM树之间差异的过程（“找不同“ 的过程）

### Diff的策略思想
要想找出两个树结构的不同，传统的计算方法是通过循环递归进行树节点的一一对比（On3）\
为了将复杂度（On^3）-> (On)
1. 若两个组件属于同一个类型，他们将拥有相同的DOM树形结构
2. 处于同一层级的一组字节点，可用通过设置Key作为唯一标识，从而维持各个节点在不同渲染过程中的稳定性
### Diff逻辑拆分与解读
#### 一、Diff算法性能突破的关键点在于 “分层对比”
![图片](/blog/ReactNote06-1.png)

如果跨层级 直接销毁/重建

![图片](/blog/ReactNote06-2.png)
#### 二、类型一致的节点才能又继续Diff的必要性
只有确认组件类型相同后，React才会在保留组件对应DOM树的基础上，尝试向更深层次去Diff，减少Diff过程中多余的递归操作

![图片](/blog/ReactNote06-3.png)

#### 三、Key属性的设置，可以帮我们尽可能重用同一层级的节点

![图片](/blog/ReactNote06-4.png)

通过key值来判断字节点的插入 而不是销毁/重建 （务必Key唯一且稳定）

![图片](/blog/ReactNote06-5.png)
