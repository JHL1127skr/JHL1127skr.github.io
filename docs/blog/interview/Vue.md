# Vue
### vue3 与 vue2 生命周期对比
```js
// setup() -> beforeCreate （初始化
// setup() -> create
// onBeforeMount -> beforeMount （组件挂载之前调用
// onMount -> mount （组件挂载之后调用
// onBeforeUpdate -> beforeUpdate （组件更新之前调用
// onUpdate -> update （组件更新之后调用
// onBeforeUnmount -> beforeDestroyed （组件卸载之前调用
// onUnmount -> destroyed （组件卸载之后调用
// onActivaed -> activaed （当组件是<keepAlive>缓存的一部分时，组件插入DOM时
// onDeactivaed -> deactivaed （当组件是<keepAlive>缓存的一部分时，组件从DOM移除时
// onErrorCaptured -> errorCaptured （错误边界，在捕获了后代组件传递的错误时调用
```
### vue3新增了什么
1. 虚拟DOM
2. 更换了双向绑定原理 Proxy
3. 组合式API
4. 单节点变成多节点
		
### Vue 的响应式原理中 Object.defineProperty 有什么缺陷?
1. 对数组的监听有限制
2. 监听对象只能监听属性，且如果属性为对象，需要遍历监听
3. proxy可以代理动态增加的属性