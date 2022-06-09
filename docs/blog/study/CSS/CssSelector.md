# CSS 选择器
---
```css
基础选择器
*{}       /* 通配选择器 */  
.root{}   /* 类选择器 */
#root{}   /* id选择器 */
<div>{}   /* 标签选择器 */

CSS3新 属性选择器
div[class^='root']{}    /* 选中class名字以root开头的div标签 */
div[class$='root']{}    /* 选中class名字以root结尾的div标签 */
div[class*='root']{}    /* 选中class名字包含root的div标签 */

复合选择器
元素一 元素二{}  /* 后代选择器  元素1与元素2用空格隔开 最终选择子集里的所有元素 */
元素一>元素二{}  /* 子选择器 会选择离元素一最近的一级子元素*/
元素一,元素二{}  /* 并级选择器 可以同时选中两种不同的标签更改 */

兄弟选择器
div～p{}  /* div后面所有的p */
div+p{}  /* div相邻的p */

伪元素选择器
X:first-line{}  /* 第一行文字 */
X:first-letter{}  /* 第一个文字 */
X::after{}   /* 微元素 */
X::before{}  /* 微元素 */

伪类选择器
- 链接
a:link{}    /* 未选中的链接 */ 
a:visited{}    /* 选择过的链接 */ 
a:active{}    /* 活动中的链接 */ 
a:hover{}    /* 鼠标滑过的链接 */ 
- 表单
X:fcous{}      /* 选中光标所在的表单 */
X:enabled{}  /* 可用元素 */
X:disabled{} /* 不可用 */
X:checked{}  /* 选中状态 */
- 目标伪类选择器
X:target{}  /* 指定某个target元素  （锚记链接 */
- 鼠标指针
X::selection{}  /* 指针划过的样式 */

结构伪类选择器
/*  nth-child 会给所有的子级排序   先看序号 再看标签 */
/* nth-of-type 只给指定的子级做标签先看标签再看序号 */
/* 父元素第n个子元素
    n可以是关键词 : odd/奇数、even/偶数
    n可以是公式 : 2n/偶数、2n-1/奇数、3n/3的倍数、n+3/第三个之后、-n+3/前三个
*/

X:first-child {}  /* 父元素里第一个子元素 */
X:last-child{} /* 父元素里最后一个子元素 */
X:nth-child(n){}

X:first-of-type{} /* 指定类型X里面的第一个 */
X:last-of-type{} /* 指定类型X里面的第一个 */
X:nth-of-type(n){}

X:empty{}  内容为空显示修饰
X:not(){} 排除 某个
X:root{} 根元素
```