---
outline: deep
---

# 工作总结

---

### 标签页可见或隐藏

```js
// 当其选项卡的内容变得可见或被隐藏时，会在 document 上触发 visibilitychange 事件。
document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") {
	} //显示
	if (document.visibilityState === "hidden") {
	} //隐藏
});
```

### reduce 小技巧 实现 filter.map

```js
const a = [1, 2];
const b = [
	{ title: "A", value: "1" },
	{ title: "B", value: "2" },
	{ title: "C", value: "3" },
];
const target = ["A", "B"];
//第一种 使用 filter与map
const targetA = b.filter(({ value }) => a.includes(value)).map((title) => title);
//第二种 使用 reduce
const targetB = b.reduce((pre, current) => {
	if (a.includes(current.value)) {
		return [...pre, ...current.title];
	}
}, []);
```

### useEffect 实现防抖

```jsx
import { useEffect, useState } from "react";

export default function EffectDemo() {
	const [text, setText] = useState("");
	useEffect(() => {
		let timer = setTimeout(() => {
			console.log("发送搜索请求");
		}, 500);
		return () => {
			console.log("清除定时器");
			clearTimeout(timer);
		};
	}, [text]);

	return (
		<div>
			<input type='text' placeholder='请输入内容...' onChange={(e) => setText(e.target.value)} />
		</div>
	);
}
```

### React 中多个受控组件

```jsx
changeIptValue:function(event){
      this.setState({
   				 [event.target.id]:event.target.value
				})
}
```

### 原生 JS 实现点击复制

```jsx
let oInput = document.createElement("input"); //新建input节点
oInput.value = "被复制的值"; //赋值给input
document.body.appendChild(oInput); //插入input节点
oInput.select();
document.execCommand("Copy");
document.body.removeChild(oInput); //删除inpit节点
```

### Input 中文防抖

```js
const searchInputDOM = document.querySelector('.search-input');
searchInputDOM.addEventListener('input', this.debounce(300, this.SearchInputFactory));
searchInputDOM.addEventListener('compositionstart', this.onCompositionStart);
searchInputDOM.addEventListener('compositionend', this.onCompositionEnd);

debounce: function (timeout, fn) {
        var timer;
        function input(e) {
            if (e.target.composing) {
                return;
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                let val = e.target.value;
                timer = null;
            }, timeout);
        }
        return input;
    },
onCompositionStart: function (e) {
        e.target.composing = true;
    },
onCompositionEnd: function (e) {
        //console.log(e.target)
        e.target.composing = false;
        console.log(1);
        var event = document.createEvent('HTMLEvents');
        event.initEvent('input');
        e.target.dispatchEvent(event);
    },
```
