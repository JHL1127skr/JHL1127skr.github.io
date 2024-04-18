---
outline: deep
---

# 网页中的各种距离

### 事件源

- `pageX/PageY`：对于整个文档页面的坐标位置。
- `clientX/clientY`：对于当前可视区域的坐标位置。
- `screenX/screenY`： 相对于整个桌面的的坐标位置。
- `offsetX/offsetY`： 相对于事件目标（触发事件的元素）的水平位置。
  ![](/blog/distance01.png)

### window

- `scrollX/Y`：浏览器滚动的距离。
- `innerWidth/Height`：浏览器可视区域的宽度和高度。
  ![](/blog/distance02.png)

### element

- `scrollLeft/Top`：元素滚动的距离（没有滚动条为 0）。
- `scrollWidth/Height`：元素内容的宽度和高度。
  ![](/blog/distance03.png)
- `clientWidth/Height`：元素宽度/高度（不包含边框（）height + padding）。
- `clientLeft/Top`：元素边框的宽和高 （当滚动条在左边时候，包含滚动条的宽度）。
- `offsetWidth/Height`：元素宽度/高度（包含边框 height+padding+border）。
  ![](/blog/distance04.png)
- `offsetLeft/Top` 当前元素到 `offsetParent` 元素的顶部内边距的距离。
  ::: tip offsetParent
  `offsetParent` 返回一个指向最近的（指包含层级上的最近）包含该元素的**定位元素**或者最近的`table, td, th, body`元素。

![](/blog/distance05.png)
