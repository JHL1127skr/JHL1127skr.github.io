<script setup>
    // 定义一个 ref 用于引用 DOM 元素
    const getRandomHexColor =()=> {
    	// 生成一个 0 到 16777215 之间的随机数
    	const randomNum = Math.floor(Math.random() * 16777216);
    	// 将数字转换为十六进制字符串，并确保它是六位长
    	const hexColor = `#${randomNum.toString(16).padStart(6, "0")}`;
    	return hexColor;
    }		
    const handle =($event)=>{
        const el =$event.target
        const { clientX: x, clientY: y } = $event;
        const clipPath = [
    		`circle(0px at ${x}px ${y}px)`,
    		`circle(${Math.hypot(
    			Math.max(x, innerWidth - x),
    			Math.max(y, innerHeight - y),
    		)}px at ${x}px ${y}px)`,
    	];
        const transition = document.startViewTransition(() => {
    		el.style.backgroundColor = getRandomHexColor();
    	});
        transition.ready.then(() => {
    		// 新视图的根元素动画
    		document.documentElement.animate(
    			{ clipPath: clipPath },
    			{
    				duration: 500,
    				easing: "ease-in",
    				pseudoElement: "::view-transition-new(root)",
    			},
    		);
    	});
    }	
   
</script>

<div class="tip custom-block" style="padding-top: 8px"><b>点击屏幕改变颜色</b></div>

<div :class="$style.root"  @click="handle"></div>

::: details code

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				width: 100vw;
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				color: azure;
				background-color: rgb(0, 0, 0);
			}

			::view-transition-old(root),
			::view-transition-new(root) {
				animation: none;
				mix-blend-mode: normal;
			}
		</style>
	</head>

	<body></body>
	<script>
		function getRandomHexColor() {
			// 生成一个 0 到 16777215 之间的随机数
			const randomNum = Math.floor(Math.random() * 16777216);
			// 将数字转换为十六进制字符串，并确保它是六位长
			const hexColor = `#${randomNum.toString(16).padStart(6, "0")}`;
			return hexColor;
		}
		document.documentElement.addEventListener("click", ({ clientX: x, clientY: y }) => {
			const clipPath = [
				`circle(0px at ${x}px ${y}px)`,
				`circle(${Math.hypot(
					Math.max(x, innerWidth - x),
					Math.max(y, innerHeight - y),
				)}px at ${x}px ${y}px)`,
			];
			const transition = document.startViewTransition(() => {
				document.querySelector("body").style.backgroundColor = getRandomHexColor();
			});
			transition.ready.then(() => {
				// 新视图的根元素动画
				document.documentElement.animate(
					{ clipPath: clipPath },
					{
						duration: 300,
						easing: "ease-in",
						pseudoElement: "::view-transition-new(root)",
					},
				);
			});
		});
	</script>
</html>
```

:::

参考了 vitePress 官网的主题切换 [示例](https://vitepress.dev/zh/guide/extending-default-theme#%E4%BD%BF%E7%94%A8%E8%A7%86%E5%9B%BE%E8%BF%87%E6%B8%A1-api)，用到了[`document.startViewTransition`](https://developer.chrome.com/docs/web-platform/view-transitions/)这个 API。

其原理是 浏览器会先捕捉当前页面的状态，类似于实时截图，或者“快照” <br>
执行实际的 dom 变化，再次记录变化后的页面状态（截图）<br>
最后触发两者的过渡动画，包括透明度、位移等变化，也可以自定义 CSS 动画。

参考文章

- [太丝滑了！了解一下原生的视图转换动画 View Transitions API](https://blog.csdn.net/xgangzai/article/details/134131242)
- [MDN - ViewTransition](https://developer.mozilla.org/zh-CN/docs/Web/API/ViewTransition)

<style module>
 .root{
		width: 100%;
		height: 50vh;
		background-color: #000;
	}
    ::view-transition-old(root),
	::view-transition-new(root) {
	    animation: none;
	    mix-blend-mode: normal;
	}
</style>
