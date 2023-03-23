# BFC
---
### BFC是什么
BFC全称 Block Formatting Context 又名 “ 块级格式化上下文 ”
简单来说，BFC是一个完全独立的空间，里面的子元素不会影响到外面的布局。
### 怎么触发一个BFC
1. 根元素（`html`），包括含body的元素
2. 设置浮动（`float`），且值不为`none`（为`left`、`right`）
3. 设置定位（`position`），且值不为`static`、`relative`（为`absolute`，`fiexd`）
4. 设置`display`为这些值：`flow-root`、`inline-block`、`flex`、`grid`、`table`、`table-cell`、`table-caption`
5. 设置`overflow`，且值不为`visible`（为`auto`、`hidden`、`scroll`）	
### BFC有那些特征
1. 属于同一个BFC的两个相邻容器的上下margin可能会重叠 -> 解决外边距的塌陷问题
2. 计算BFC高度时浮动元素也会被计算 -> 解决父元素高度塌陷问题
3. BFC的区域不会与浮动容器发生重叠 -> 解决浮动重叠问题
4. 所有属于BFC中的盒子默认左对齐，并且它们的左边距可以触及到容器的左边线。最后一个盒子，尽管是浮动的，但依然遵循这个原则
5. BFC是独立容器，容器内部元素不会影响容器外部元素