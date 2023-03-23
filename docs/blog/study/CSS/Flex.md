# Flex
---
容器内有默认水平方向的**主轴**，垂直方向的**交叉轴**。

#### 作用于容器的属性
###### 1、`flex-direction` - 用于切换主轴的方向
- `row（默认值）`： 主轴为水平方向，起点在左端
- `row-reverse`：主轴为水平方向，起点在右端
- `column`：主轴为垂直方向，起点在上端
- `column-reverse`：主轴为垂直方向，起点在下端

###### 2、`flex-wrap` - 换行（增加轴线）

- `nowrap（默认值）`：不换行
- `wrap`：换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

###### 3、`flex-flow`- 以上两种缩写 （默认 row nowrap）

```css
.box{
  flex-flow: <flex-direction> || <flex-wrap>
}
```

###### 4、`justify-content` - 主轴的对齐方式

- `flex-start（默认值）`：左对齐
- `flex-end`：右对齐
- `center`：居中
- `space-between`：两端对齐，间隔相等
- `space-around`：子元素的两侧间隔相等，
- `space-evenly`：子元素之间的间隔相等

###### 5、`align-item` - 交叉轴对齐方式
- `stretch（默认值）`：如果子元素未设置高度或为auto，将占满整个容器的高度
- `baseline`：文字基线对齐
- `flex-start`：交叉轴顶端对齐
- `flex-end`：交叉轴末端对齐
- `center`：交叉轴中点对齐
###### 6、`align-content` - 轴线对齐方式
- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。
- `stretch（默认值）`：轴线占满整个交叉轴。
#### 作用于子元素
1. `order` - 定义元素排列顺序（默认 0）

2. `flex-grow` - 元素的放大比例 （默认 0）

3. `flex-shrink` - 元素缩小比例 （默认 1）

4. `flex-basis` - 分配多余空间之前，元素占据容器的空间 （默认 auto）

5. `flex` - 前三者缩写

```css
.box{
  flex: none | <flex-grow> || <flex-shrink> || <flex-basis>
  /*
    1 -> 1 1 0
    auto -> 1 1 auto
    none -> 0 0 auto
    default -> 0 1 auto
  */
}
```

###### 6、`algin-self` - 元素的对齐方式（默认 auto，之外属性与`algin-item`属性相同）

