import{_ as e,c as o,o as t,a4 as a}from"./chunks/framework.sZGJh8CM.js";const b=JSON.parse('{"title":"未分类","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/interview/Unclassified.md","filePath":"blog/interview/Unclassified.md"}'),l={name:"blog/interview/Unclassified.md"},i=a('<h1 id="未分类" tabindex="-1">未分类 <a class="header-anchor" href="#未分类" aria-label="Permalink to &quot;未分类&quot;">​</a></h1><h3 id="浏览器渲染流程" tabindex="-1">浏览器渲染流程 <a class="header-anchor" href="#浏览器渲染流程" aria-label="Permalink to &quot;浏览器渲染流程&quot;">​</a></h3><ol><li>解析 HTML文件生成 <strong>DOM 树</strong></li><li>解析 CSS 和内联样式生成 <strong>CSSOM</strong>（CSS对象模型）</li><li>将 DOM 和 CSSOM 合并生成<strong>渲染树</strong>（Render Tree）</li><li><strong>布局</strong>：根据渲染树计算每个元素的位置和大小</li><li><strong>绘制</strong>：将渲染树绘制到屏幕上</li><li><strong>合成</strong>：将绘制的结果进行合成，形成最终的页面展示</li></ol><h3 id="前端白屏检测方案" tabindex="-1">前端白屏检测方案 <a class="header-anchor" href="#前端白屏检测方案" aria-label="Permalink to &quot;前端白屏检测方案&quot;">​</a></h3><ol><li>判断根元素是否渲染 （只适用于主流 SPA 框架</li><li>框架内置的<code>ErrorBoundary</code> （只适用于框架内</li><li>通过H5截图，其原理是将图片与预设的空白图片进行像素级对比</li><li>通过<code>elementFromPointAPI</code>对页面关键点采样对比，其原理是通过判断采样点是否在预设容器内（如果采样点没有内容，则该点的 DOM 元素为容器元素） 容器元素例如<code>[ html body #root ]</code></li></ol><h3 id="移动端适配" tabindex="-1">移动端适配 <a class="header-anchor" href="#移动端适配" aria-label="Permalink to &quot;移动端适配&quot;">​</a></h3><ol><li>媒体查询：根据不同的视窗大小展示不同的样式</li><li>rem+js：本质就是通过设置根元素的</li><li>vw+vh+vmin+vmax：浏览器提供的可视区域百分比</li><li>flex/百分比/grid：等比放大</li></ol><h3 id="http缓存" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;http缓存&quot;">​</a></h3><p><strong>强缓存</strong>：根据服务端设置的 <code>expires</code> 和 <code>cache-control</code> 字段中的<code>max-age</code>属性，返回给浏览器。判断过期时间，如果没过期就直接走缓存，过期了就像服务端重新发送请求（这里有个问题，就是缓存时间过期，但是资源可能未发生更新）</p><p><strong>协商缓存</strong>：携带<code>Etag/Last-Modified</code>向服务器请求判断资源是否更新，如果没有则走缓存，有过有则重新请求</p><h3 id="http与https" tabindex="-1">http与https <a class="header-anchor" href="#http与https" aria-label="Permalink to &quot;http与https&quot;">​</a></h3><ol><li>前者明文传输，后者通过ssl加密，保证数据的完整性</li><li>前者端口80，后者443</li><li>前者协议简单无状态，后者握手阶段费时</li><li>https 的缓存不如 http 的高效，会增加数据开销</li></ol><h3 id="git-pull是哪两个命令的组合" tabindex="-1">git pull是哪两个命令的组合 <a class="header-anchor" href="#git-pull是哪两个命令的组合" aria-label="Permalink to &quot;git pull是哪两个命令的组合&quot;">​</a></h3><p><code>git fetch</code> 在远程仓库拉取最近数据，将变化储存在本地。<code>git merge</code> 将储存在本地的变化合并到当前分支</p><h3 id="git-merge-和-git-rebase有什么区别" tabindex="-1">git merge 和 git rebase有什么区别 <a class="header-anchor" href="#git-merge-和-git-rebase有什么区别" aria-label="Permalink to &quot;git merge 和 git rebase有什么区别&quot;">​</a></h3><p><code>merge</code>：会将两个分支的最新修改以及合并并生成一个新的快照</p><p><code>rebase</code>：提取目标分支的修改放到与本分支共同祖先上，再将本分支的修改接到目标分支修改的后面</p><h3 id="react和vue的区别" tabindex="-1">React和Vue的区别 <a class="header-anchor" href="#react和vue的区别" aria-label="Permalink to &quot;React和Vue的区别&quot;">​</a></h3><ol><li><strong>更新颗粒度</strong>：React被称为应用级框架，因为每次更新都是从应用的跟节点开始，而Vue的更新流程始于组件</li><li><strong>组件化方式不同</strong>：React是基于js的类和函数，而Vue的组件化实现基于模版 template，script，style</li><li><strong>父子组件传参不同</strong>：React是通过props和callback，而Vue是props和emit</li></ol><h3 id="webpack和vite的区别" tabindex="-1">webpack和Vite的区别 <a class="header-anchor" href="#webpack和vite的区别" aria-label="Permalink to &quot;webpack和Vite的区别&quot;">​</a></h3><ol><li><strong>构建方式不同</strong>：<br> Vite利用ES Modules的特性进行构建，每个文件都是一个独立的模块，开发过程中只需要编译修改的文件，不需要每次都编译整个项目。而Webpack 采用静态分析的方式进行构建，需要分析整个项目中的依赖关系，每次修改后需要重新编译整个项目。</li><li><strong>热更新不同</strong>：<br> Vite使用的原生ES Modules的热更新，通过浏览器原生的模块更新能力来实现热更新。这种方式可以更快速、更准现热更新。而Webpack是通过HMR实现的，这种方式会将代码注入到页面中，从而实现实时更新。</li></ol><h3 id="ssr与csr与ssg" tabindex="-1">SSR与CSR与SSG <a class="header-anchor" href="#ssr与csr与ssg" aria-label="Permalink to &quot;SSR与CSR与SSG&quot;">​</a></h3><p>SSR：指的是浏览器渲染，在服务端将页面渲染成HTML返回给客户端 好处：首屏渲染快，SEO优化好<br> CSR：页面只有一个节点，单页面应用（SPA）好处：可以通过懒加载优化性能，对服务器压力小<br> SSG：build过程中产出完整的HTML，常用语博客文档类型网站</p><h3 id="除了console-log-还有什么其他的打印方式" tabindex="-1">除了console.log() 还有什么其他的打印方式 <a class="header-anchor" href="#除了console-log-还有什么其他的打印方式" aria-label="Permalink to &quot;除了console.log() 还有什么其他的打印方式&quot;">​</a></h3><ol><li><code>console.count()</code> 记录打印次数</li><li><code>console.dir()</code> 可以显示一个对象所有的属性与方法</li><li><code>console.group()</code> 分组</li><li><code>console.time()</code>与<code>console.timeend()</code> 时间差</li></ol>',25),r=[i];function s(c,n,d,h,g,p){return t(),o("div",null,r)}const m=e(l,[["render",s]]);export{b as __pageData,m as default};
