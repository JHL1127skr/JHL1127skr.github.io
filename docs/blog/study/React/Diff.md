---
outline: deep
---

# 虚拟 DOM

---

### 虚拟 DOM（Virtual DOM）

### 一、什么是虚拟 DOM

本质是 JS 跟 DOM 的一个映射缓存，形态上表现为一个能够描述 DOM 结构及其属性信息的 JS 对象
![](/blog/Diff01.png)

#### 二、虚拟 DOM 的价值到底是什么（解决了什么问题）

1、研发体验/研发效率的问题<br/>
2、跨平台多端开发 同一套虚拟 DOM 可以渲染在不同的载体<br/>
3、“批量更新”

### Diff 算法

#### 一、什么是 diff 算法

> **算法的核心就是复用节点**

在 v16 之前:React 通过递归直接生成虚拟 DOM，setState 触发重新渲染，对比生成新旧虚拟 DOM，对比差异渲染真实的 DOM<br/>
在 v16 之后:为了优化性能，先将虚拟 DOM 转化为 Fiber，也就是将树转换成链表，然后再渲染，整体渲染流程分成了两个阶段<br/>

render ： 从虚拟 DOM 转换成 Fiber，并且对需要 dom 操作的节点打上 effectTag 的标记<br/>
commit：对有 effectTag 标记的 fiber 节点进行 dom 操作，并执行所有的 effect 副作用函数<br/>

> vdom -> fiber 这个过程称之为 reconcile（调和），是可以被打断的，由 scheduler 调度执行

#### 二、React 预设的三个限制

1、只对同层级元素进行 Diff。如果一个 DOM 元素前后跨越了层级，那么 React 不会尝试复用它<br/>
2、两个不同类型的元素会产生不同的树。即销毁原组件，创建新组件。<br/>
3、开发者可以通过 Key 来暗示子元素在不同的渲染下保持稳

#### 三、具体实现

入口函数 `reconcileChildFibers()`

```javascript
// 根据newChild类型选择不同diff函数处理
function reconcileChildFibers(
	returnFiber: Fiber,
	currentFirstChild: Fiber | null,
	newChild: any,
): Fiber | null {
	const isObject = typeof newChild === "object" && newChild !== null;

	if (isObject) {
		// object类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE
		switch (newChild.$typeof) {
			case REACT_ELEMENT_TYPE:
			// 调用 reconcileSingleElement 处理
			// ...其他case
		}
	}

	if (typeof newChild === "string" || typeof newChild === "number") {
		// 调用 reconcileSingleTextNode 处理
	}

	if (isArray(newChild)) {
		// 调用 reconcileChildrenArray 处理
	}

	// 一些其他情况调用处理函数

	// 以上都没有命中，删除节点
	return deleteRemainingChildren(returnFiber, currentFirstChild);
}
```

#### 第一轮遍历：尝试逐个复用节点

遍历 JSX 对象（newChildren 数组）去和 Fiber 节点对比（链表）<br/>
判断 key 和 type（节点类型，如 div、p、span、函数组件名），如果都相同则复用，不同跳出整个遍历。

#### 第二轮遍历：处理剩下的节点

**情况 1：只剩旧 Fiber 节点**<br/>
说明更新需要的新 Fiber 节点已经创建完毕，遍历剩余的旧 Fiber 节点依次执行删除操作（放入父 fiber 节点的 deletions 数组中）

**情况 2：只剩新 JSX 节点**<br/>
说明旧的 Fiber 节点都已复用，遍历剩余的 JSX 节点依次执行插入操作 （打上 Placement 标记）

**情况 3：新旧子节点都有剩 （重点**）<br/>
将剩下的旧 Fiber 节点放入以 key 为 key，以 fiber 为 value 的 Map 对象中，在遍历余下的 JSX 对象，通过 key 索引就能在 map 中找到对应的 Fiber。

`oldIndex`：旧 Fiber 节点中对应的索引 <br/>
`lastplacedIndex`：最后一个可复用的节点在旧 Fiber 节点中的位置索引

如果 `oldIndex >= lastPlacedIndex` 代表该可复用节点不需要移动 ，并将 `lastPlacedIndex = oldIndex; `<br/>
如果 `oldIndex < lastplacedIndex `该可复用节点之前插入的位置索引小于这次更新需要插入的位置索引，代表该节点需要向右移动
