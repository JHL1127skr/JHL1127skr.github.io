module.exports = {
	"/blog/study": [
		// {
		// 	text: "HTML",
		// 	collapsed: false,
		// 	items: [],
		// },
		{
			text: "CSS",
			collapsed: false,
			items: [
				{ text: "CSS 优先级", link: "/blog/study/CSS/CssPriority.md" },
				{ text: "CSS 常见选择器", link: "/blog/study/CSS/CssSelector.md" },
				{ text: "Flex 布局", link: "/blog/study/CSS/Flex.md" },
				{ text: "BFC", link: "/blog/study/CSS/BFC.md" },
				{ text: "网页中的各种距离", link: "/blog/study/CSS/Distance.md" },
			],
		},
		{
			text: "JavaScript",
			collapsed: false,
			items: [
				{ text: "数组字符串常用方法", link: "/blog/study/JS/Method.md" },
				{ text: "数据类型及判断数据类型的方法", link: "/blog/study/JS/DataType.md" },
				{ text: "作用域和作用域链", link: "/blog/study/JS/Scope.md" },
				{ text: "原型与原型链", link: "/blog/study/JS/Prototype.md" },
				{ text: "Promise", link: "/blog/study/JS/Promise.md" },
				{ text: "for in 与 for of", link: "/blog/study/JS/Forin&Forof.md" },
				{ text: "bind的使用", link: "/blog/study/JS/Bind.md" },
			],
		},
		{
			text: "React",
			collapsed: false,
			items: [
				{ text: "JSX如何变成DOM", link: "/blog/study/React/JSX.md" },
				{ text: "生命周期", link: "/blog/study/React/Component.md" },
				{ text: "组件重新渲染", link: "/blog/study/React/Render.md" },
				{ text: "虚拟DOM", link: "/blog/study/React/Diff.md" },
				{ text: "React 性能优化", link: "/blog/study/React/Performance.md" },
				{ text: "React 事件机制", link: "/blog/study/React/Event.md" },
				{ text: "React-Hooks设计思：未完成", link: "/blog/study/React/Hooks.md" },
				{ text: "Fiber架构：未完成", link: "/blog/study/React/Fiber.md" },
				{ text: "React 状态管理", link: "/blog/study/React/Redux.md" },
			],
		},
		{
			text: "Vue3",
			collapsed: false,
			items: [
				{ text: "基础用法", link: "/blog/study/Vue3/Base.md" },
				{ text: "CSS 特性", link: "/blog/study/Vue3/Css.md" },
				{ text: "组件直接传参", link: "/blog/study/Vue3/Component.md" },
				{ text: "状态管理Pinia", link: "/blog/study/Vue3/Pinia.md" },
			],
		},
		{
			text: "HTTP",
			collapsed: false,
			items: [
				{ text: "HTTP与HTTPS", link: "/blog/study/HTTP/HTTP.md" },
				{ text: "HTTP缓存", link: "/blog/study/HTTP/HTTPCache.md" },
			],
		},
		{
			text: "浏览器相关",
			collapsed: false,
			items: [
				{ text: "从输入URL到页面加载出来发生了什么", link: "/blog/study/Browser/URL.md" },
				{ text: "垃圾回收机制", link: "/blog/study/Browser/GarbageCollection.md" },
				{ text: "事件循环机制", link: "/blog/study/Browser/EventLoop.md" },
			],
		},
		{
			text: "工程化",
			collapsed: false,
			items: [
				{ text: "npm/yarn/pnpm", link: "/blog/study/Engineering/Npm&Yarn&Pnpm.md" },
				{ text: "npm run xxx 发生了什么", link: "/blog/study/Engineering/Npmrunxxx.md" },
				{ text: "模块化（Module）", link: "/blog/study/Engineering/Module.md" },
				{ text: "webpack基本配置", link: "/blog/study/Engineering/Webpack.md" },
			],
		},
		{
			text: "手撕",
			collapsed: false,
			items: [
				{ text: "new", link: "/blog/study/Handwritten/New.md" },
				{ text: "call/apply/bind", link: "/blog/study/Handwritten/Call&apply&bind.md" },
				{ text: "深拷贝", link: "/blog/study/Handwritten/DeepClone.md" },
				{ text: "发布订阅模式", link: "/blog/study/Handwritten/EventEmitter.md" },
				{ text: "Instanceof", link: "/blog/study/Handwritten/Instandof.md" },
				{ text: "防抖与节流", link: "/blog/study/Handwritten/Debounce.md" },
			],
		},
	],
	"/blog/development": [
		{
			text: "开发",
			items: [
				{ text: "Git 操作", link: "/blog/development/Git.md" },
				{ text: "检测代码重复率", link: "/blog/development/CodeRepeat.md" },
				{ text: "APP 版本号", link: "/blog/development/AppVersion.md" },
				{ text: "MySQL 基础操作", link: "/blog/development/MySQL.md" },
				{ text: "工作总结", link: "/blog/development/WorkSummary.md" },
				{ text: "vsCode用户片段", link: "/blog/development/UserFragment.md" },
				{ text: "如何在 GitHub 上搭建自己的博客", link: "/blog/development/blog.md" },
				{ text: "网址总结", link: "/blog/development/Website.md" },
			],
		},
	],
	"/blog/interview": [
		{
			text: "面试",
			items: [
				{ text: "未分类", link: "/blog/interview/Unclassified.md" },
				{ text: "JS 相关", link: "/blog/interview/JavaScript.md" },
				{ text: "CSS 相关", link: "/blog/interview/Css.md" },
				{ text: "Vue 相关", link: "/blog/interview/Vue.md" },
				{ text: "React 相关", link: "/blog/interview/React.md" },
			],
		},
	],
	"/blog/algorithm": [
		{
			text: "数组",
			collapsed: false,
			items: [
				{ text: "左右指针", link: "/blog/algorithm/Array/LeftAndRight.md" },
				{ text: "快慢指针", link: "/blog/algorithm/Array/FastAndSlow.md" },
				{ text: "滑动窗口", link: "/blog/algorithm/Array/SlidingWindow.md" },
				{ text: "二维数组", link: "/blog/algorithm/Array/TwoDimensional.md" },
				{ text: "前缀和", link: "/blog/algorithm/Array/PrefixSum.md" },
				{ text: "差分数组", link: "/blog/algorithm/Array/Differential.md" },
			],
		},
		{
			text: "链表",
			collapsed: false,
			items: [
				{ text: "结构", link: "/blog/algorithm/LinkedList/Structure" },
				{ text: "虚拟头结点", link: "/blog/algorithm/LinkedList/Fictitious" },
				{ text: "双指针", link: "/blog/algorithm/LinkedList/DoublePointer" },
			],
		},
		{
			text: "二叉树",
			collapsed: false,
			items: [{ text: "结构", link: "/blog/algorithm/BinaryTree/Structure" }],
		},
	],
};
