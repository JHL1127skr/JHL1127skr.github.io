---
outline: deep
---

# 未分类

### 版本号中的^和～是什么意思

一个标准的版本号是 x.y.z

> x：主版本号，代表发生**不兼容的 API 改变**\
> y：副版本号，代表**向后兼容的功能性改变**\
> z：补丁版本，代表**向后兼容的 bug fix 版本**

- `～x.y.z`：匹配大于 `x.y.z` 的 **`z`** 的最新版\
  > 比如～ 1.9.1，会去匹配 1.9.x 的最新版本，但不会升级到 1.10.0
- `^x.y.z`:匹配大于 `x.y.z` 的 **`y.z`** 的最新版\
  > 比如^3.3.4，会去匹配 3.x.x 中最新的版本，但不会自动更新到 4.0.0。

### 在 npm 的安装命令中-D、-S、--save、--save-dev 是什么意思

- `-S 或 --save`：包信息会添加在 `dependencies` 中，意味着该包不仅在开发环境中需要，而且在生产环境中也是必不可少的
- ` -D 或 --save-dev`：包信息会添加在 `devDependencies` 中，这类包是项目开发过程中使用的工具等。打包时不会加载改列表的包

### 浏览器渲染流程

1. 解析 HTML 文件生成 **DOM 树**
2. 解析 CSS 和内联样式生成 **CSSOM**（CSS 对象模型）
3. 将 DOM 和 CSSOM 合并生成**渲染树**（Render Tree）
4. **布局**：根据渲染树计算每个元素的位置和大小
5. **绘制**：将渲染树绘制到屏幕上
6. **合成**：将绘制的结果进行合成，形成最终的页面展示

### 前端白屏检测方案

1. 判断根元素是否渲染 （只适用于主流 SPA 框架
2. 框架内置的`ErrorBoundary` （只适用于框架内
3. 通过 H5 截图，其原理是将图片与预设的空白图片进行像素级对比
4. 通过`elementFromPointAPI`对页面关键点采样对比，其原理是通过判断采样点是否在预设容器内（如果采样点没有内容，则该点的 DOM 元素为容器元素） 容器元素例如`[ html body #root ]`

### 移动端适配

1. 媒体查询：根据不同的视窗大小展示不同的样式
2. rem+js：本质就是通过设置根元素的
3. vw+vh+vmin+vmax：浏览器提供的可视区域百分比
4. flex/百分比/grid：等比放大

### http 缓存

**强缓存**：根据服务端设置的 `expires` 和 `cache-control` 字段中的`max-age`属性，返回给浏览器。判断过期时间，如果没过期就直接走缓存，过期了就像服务端重新发送请求（这里有个问题，就是缓存时间过期，但是资源可能未发生更新）

**协商缓存**：携带`Etag/Last-Modified`向服务器请求判断资源是否更新，如果没有则走缓存，有过有则重新请求

### http 与 https

1. 前者明文传输，后者通过 ssl 加密，保证数据的完整性
2. 前者端口 80，后者 443
3. 前者协议简单无状态，后者握手阶段费时
4. https 的缓存不如 http 的高效，会增加数据开销

### git pull 是哪两个命令的组合

`git fetch` 在远程仓库拉取最近数据，将变化储存在本地。`git merge` 将储存在本地的变化合并到当前分支

### git merge 和 git rebase 有什么区别

`merge`：会将两个分支的最新修改以及合并并生成一个新的快照

`rebase`：提取目标分支的修改放到与本分支共同祖先上，再将本分支的修改接到目标分支修改的后面

### React 和 Vue 的区别

1. **更新颗粒度**：React 被称为应用级框架，因为每次更新都是从应用的跟节点开始，而 Vue 的更新流程始于组件
2. **组件化方式不同**：React 是基于 js 的类和函数，而 Vue 的组件化实现基于模版 template，script，style
3. **父子组件传参不同**：React 是通过 props 和 callback，而 Vue 是 props 和 emit

### webpack 和 Vite 的区别

1. **构建方式不同**：<br/>
   Vite 利用 ES Modules 的特性进行构建，每个文件都是一个独立的模块，开发过程中只需要编译修改的文件，不需要每次都编译整个项目。而 Webpack 采用静态分析的方式进行构建，需要分析整个项目中的依赖关系，每次修改后需要重新编译整个项目。
2. **热更新不同**：<br/>
   Vite 使用的原生 ES Modules 的热更新，通过浏览器原生的模块更新能力来实现热更新。这种方式可以更快速、更准现热更新。而 Webpack 是通过 HMR 实现的，这种方式会将代码注入到页面中，从而实现实时更新。

### SSR 与 CSR 与 SSG

SSR：指的是浏览器渲染，在服务端将页面渲染成 HTML 返回给客户端 好处：首屏渲染快，SEO 优化好<br/>
CSR：页面只有一个节点，单页面应用（SPA）好处：可以通过懒加载优化性能，对服务器压力小<br/>
SSG：build 过程中产出完整的 HTML，常用语博客文档类型网站

### 除了 console.log() 还有什么其他的打印方式

1. `console.count()` 记录打印次数
2. `console.dir()` 可以显示一个对象所有的属性与方法
3. `console.group()` 分组
4. `console.time()`与`console.timeend()` 时间差
