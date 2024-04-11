import{_ as s,c as i,o as a,a4 as t,ai as n,aj as p,ak as e}from"./chunks/framework.sZGJh8CM.js";const y=JSON.parse('{"title":"npm run xxx 发生了什么","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/study/Engineering/Npmrunxxx.md","filePath":"blog/study/Engineering/Npmrunxxx.md"}'),r={name:"blog/study/Engineering/Npmrunxxx.md"},h=t(`<h1 id="npm-run-xxx-发生了什么" tabindex="-1">npm run xxx 发生了什么 <a class="header-anchor" href="#npm-run-xxx-发生了什么" aria-label="Permalink to &quot;npm run xxx 发生了什么&quot;">​</a></h1><hr><p>以React为例 当执行npm <code>start / yarn start</code> 时 相当于执行了 <code>package.json</code> 中 &quot;script&quot; 里对应的命令<code>react-scripts start</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;private&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react-scripts start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react-scripts build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react-scripts test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;react-scripts eject&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="问题一" tabindex="-1">问题一： <a class="header-anchor" href="#问题一" aria-label="Permalink to &quot;问题一：&quot;">​</a></h4><p><strong>为什么不直接执对应的命令而去执行npm run xxx</strong></p><p>答：因为 直接去执行命令会报错，操作系统中没有存在该指令</p><h4 id="问题二" tabindex="-1">问题二： <a class="header-anchor" href="#问题二" aria-label="Permalink to &quot;问题二：&quot;">​</a></h4><p><strong>既然命令不存在 那么执行npm run xxx的时候 可以成功呢</strong></p><p>答：在安装依赖时 会在node_modules/.bin下生成 react-scripts 的脚本软链接 <img src="`+n+'" alt="图片"></p><h4 id="问题三" tabindex="-1">问题三： <a class="header-anchor" href="#问题三" aria-label="Permalink to &quot;问题三：&quot;">​</a></h4><p><strong>真实的文件在哪</strong></p><p>在node_modules/react-script/bin/react-sript.js</p><p><img src="'+p+'" alt="图片"></p><p>在start.js中引入了 webpack-dev-server 该模块是webpack的一个插件 专门用来启动本地调试服务器的 <img src="'+e+'" alt="图片"></p>',15),l=[h];function k(o,d,E,c,u,g){return a(),i("div",null,l)}const q=s(r,[["render",k]]);export{y as __pageData,q as default};
