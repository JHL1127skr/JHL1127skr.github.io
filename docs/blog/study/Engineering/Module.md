---
outline: deep
---

# 模块化（Module）
---
### CommonJS与ES Module差异

1、CommonJS模块输出的是一个值的**拷贝**，ES Module输出的是值的**引用** <br/>
2、CommonJS模块是**运行时加载**，ES6 模块是**编译时**输出接口（静态分析，可以通过tree shaking等手段减少代码体积）<br/>
3、CommonJS 模块的 `require()` 是**同步加载模块，**ES6 模块的 `import` 命令是**异步加载**，有一个独立的模块依赖的解析阶段。

### CommonJS

```javascript
module.exports={
  data:"data"
}
```

```javascript
let { data } =require('./data')  
```

### 一、module.exports与exports的区别

::: tip
无论使用 `exports` 暴露成员，或是 `module.exports` 暴露成员，最终暴露的结果，都是以 `module.exports` 所指向的对象为准
:::



- `exports`时`module`上的一个属性，通过该属性向外暴露成员
- node为了简化提供的新方式 exports === module.exports

错误用法 
直接赋值相当于修改引用，使得`exports`不再指向`module.exports`，而我们向外共享成员的最终结果是 `module.exports` 所指的对象

```javascript
exports.data='data'; //可以拿到 
exports={} //拿不到
```

###  ESModule

```javascript
export let data ='data'
```

```javascript
import { data } from './data'
```

### 一、整体加载

```javascript
export function fun1 (){}
export function fun2 (){}
```

```javascript
import * as xx from './data';
xx.fun1()
xx.fun2()
```

### 二、export default 命令 

可以用任意名字引入default的导出

```javascript
export default {} 
```

```javascript
import xx from './data'
```

### 三、不同环境下

- **Node环境下**

因为node环境中不支持ES6语法 所以需要将后缀修改为.mjs
或者在项目里的`package.json` 中配置 `"type": "module"`

- **浏览器环境下**

```html
<script type="module">import xx from './xx'</script>
```

### 四、CommonJS 模块加载 ES6 模块

CommonJS 的`require()`命令不能加载 ES6 模块，会报错，只能使用`import()`这个方法加载。

```javascript
(async () => {
  await import('./data.mjs').then(res=>{
    console.log(res)  
  })
})();
```

上面代码可以在 CommonJS 模块中运行。
require()不支持 ES6 模块的一个原因是，它是同步加载，而 ES6 模块内部可以使用顶层await命令，导致无法被同步加载。

### 四、ES6 模块加载 CommonJS 模块

ES6 模块的import命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。

```javascript
// 正确
import packageMain from 'commonjs-package';
// 报错
import { method } from 'commonjs-package';
```

这是因为 ES6 模块需要支持静态代码分析，而 CommonJS 模块的输出接口是`module.exports`，是一个对象，无法被静态分析，所以只能整体加载。
加载单一的输出项，可以写成下面这样。

```javascript
import packageMain from 'commonjs-package';
const { method } = packageMain;
```