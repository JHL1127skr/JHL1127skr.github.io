---
outline: deep
---

# CSS

### 谈一谈 BFC

**BFC 是什么**：块级格式化上下文，独立的一块区域，内部的子元素不会影响到外面的布局

**怎么形成 BFC**：

- 根元素
- `display` -> `inline-block、flow-root、flex、table、table-cell`
- `float` -> `left、right`
- `position` -> `absolute、flexd`
- `overflow` -> `auto、hidden、scroll`

**BFC 有什么特性**：

- BFC 计算高度时会包括 float 元素（解决高度塌陷）
- BFC 区域不会与 float 元素重叠（解决 float 元素遮挡）
- 属于同一个 BFC 的两个相邻容器 margin 会重叠

### 样式加权重 !important 的坏处

增加类名嵌套，id 选择器

`!important`坏处：层级过高 没办法覆盖

### z-index 属性在什么情况下会失效？

1. 父元素为`relative`时，子元素 z-index 失效
2. 元素`position`为`static `失效
3. 同时设置`float`和`z-index`时 失效

### 7 阶层叠水平（从高到低

- 正 z-index
- z-index:auto/z-index:0
- inline/inline-block
- float 浮动盒子
- block 块状水平盒子
- 负 z-index
- background/border

### 回流（重排）与重绘

> 回流必将引起重绘，而重绘不会引起回流

**回流**：当元素的尺寸、布局、是否隐藏等发生改变需要重新构建

**重制**：当元素的外观、颜色、风格改变，不会影响布局时

### 隐藏元素的几种方式

1. `display：node` （不占空间
2. `visibility：hidden` （占空间 不可点击
3. `opacity：0` （占空间 可点击
4. `positon:absolut|fixed` 移出可视区域内（占空间
5. `clip-path` 裁切（占空间
6. `transform:scale(0,0)` 缩放（占空间

### 将图片宽度设置为 300px

`<img src="1.jpg" style="width:480px!important;”> `

1. max-width=300px
2. transform: scale(0.625,0.625)

### 一个 div 内嵌一个 div margin-top30，2 个 div 相差多少

**结论**：相差 0，div 嵌套，margin-top 错误传递给父元素

**原因**：父元素中第一个子元素的 margin-top 如果如果碰不到有效的 padding 或者 border，就会一层一层的找上级麻烦

**解决办法**：

1. 给子元素添加`float`
2. 给父元素添加`position:absolute/fixed`
3. 给父元素添加`border`或者`padding`
