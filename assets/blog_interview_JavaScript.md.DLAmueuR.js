import{_ as i,c as s,o as a,a4 as l}from"./chunks/framework.sZGJh8CM.js";const c=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/interview/JavaScript.md","filePath":"blog/interview/JavaScript.md"}'),h={name:"blog/interview/JavaScript.md"},n=l(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h3 id="深拷贝都有哪些方式" tabindex="-1">深拷贝都有哪些方式 <a class="header-anchor" href="#深拷贝都有哪些方式" aria-label="Permalink to &quot;深拷贝都有哪些方式&quot;">​</a></h3><ol><li>递归</li><li>JSON</li><li><code>structuredClone</code></li></ol><blockquote><p>注意：...扩展运算符，只能只能深拷贝第一层， 既不是深拷贝也不是浅拷贝</p></blockquote><h3 id="箭头函数和普通函数的区别" tabindex="-1">箭头函数和普通函数的区别 <a class="header-anchor" href="#箭头函数和普通函数的区别" aria-label="Permalink to &quot;箭头函数和普通函数的区别&quot;">​</a></h3><ol><li>箭头函数没有自己的this，只会继承自己作用域上一层的this，且不能被改变</li><li>call、apply、bind方法不能改变箭头函数的this指向</li><li>箭头函数没有<code>arguments</code>，没有<code>prototype</code></li><li>箭头函数不能当作构造函数使用</li><li>箭头函数不能用作<code>Generator</code>函数,不能使用<code>yeild</code>关键字</li></ol><h3 id="array-isarray-实现" tabindex="-1">Array.isArray 实现 <a class="header-anchor" href="#array-isarray-实现" aria-label="Permalink to &quot;Array.isArray  实现&quot;">​</a></h3><ol><li>判断是否是对象</li><li>判断是否有<code>Symbol.iterator</code>属性，且是一个函数</li><li>判断是否有<code>length</code>属性</li></ol><h3 id="生成长度数组的方式" tabindex="-1">生成长度数组的方式 <a class="header-anchor" href="#生成长度数组的方式" aria-label="Permalink to &quot;生成长度数组的方式&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[undefined]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[undefined]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成1-10000的方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[1,2,...]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Array.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({length:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[1,2,...]</span></span></code></pre></div><h3 id="new操作符具体做了什么" tabindex="-1">new操作符具体做了什么 <a class="header-anchor" href="#new操作符具体做了什么" aria-label="Permalink to &quot;new操作符具体做了什么&quot;">​</a></h3><ol><li>创建一个空对象</li><li>将空对象的原型指向构造函数，这样就可以访问到构造函数 原型上的方法</li><li>使用apply将构造函数的this指向空对象，这样可以访问到构造函数上的属性</li><li>判断构造函数的返回值并return</li></ol><h3 id="object-defineproperty-与-proxy" tabindex="-1">Object.defineProperty 与 Proxy <a class="header-anchor" href="#object-defineproperty-与-proxy" aria-label="Permalink to &quot;Object.defineProperty 与 Proxy&quot;">​</a></h3><ul><li><code>defineProperty</code>只能对属性进行监听，监听整个对象需要遍历</li><li><code>Proxy</code>(元编程:即对编程语言进行编程)可以监听对象所有属性，和数组</li></ul><h3 id="isnan-和-number-isnan-函数的区别" tabindex="-1">isNaN 和 Number.isNaN 函数的区别？ <a class="header-anchor" href="#isnan-和-number-isnan-函数的区别" aria-label="Permalink to &quot;isNaN 和 Number.isNaN 函数的区别？&quot;">​</a></h3><ul><li><code>isNaN</code> 类型检测 如果不是Number 会先将参数转换成数值类型在判断 <code>eg: isNaN(&#39;str&#39;) // true</code></li><li><code>Number.isNaN</code> 类型检测 如果不是Number 会直接返回false <code>eg: Number.isNaN(&#39;str&#39;) // false</code></li></ul><h3 id="commonjs-和-esmodule-的区别" tabindex="-1">CommonJS 和 ESModule 的区别 <a class="header-anchor" href="#commonjs-和-esmodule-的区别" aria-label="Permalink to &quot;CommonJS 和 ESModule 的区别&quot;">​</a></h3><ol><li>CommonJS 值的拷贝，ESModule 值的引用</li><li>CommonJS 运行时加载，ESModule 静态编译</li><li>CommonJS 同步，ESModule 异步</li></ol><ul><li>AMD 依赖前置 异步加载</li><li>CMD 就近依赖 按需加载</li></ul><h3 id="map和weakmap有什么区别" tabindex="-1">Map和WeakMap有什么区别 <a class="header-anchor" href="#map和weakmap有什么区别" aria-label="Permalink to &quot;Map和WeakMap有什么区别&quot;">​</a></h3><ul><li>Map的key可以放入任何值，WeakMap只能用对象当作key</li><li>Map可以使用for of 遍历，WeakMap不行</li></ul><h3 id="for-of-与-for-in-的区别" tabindex="-1">for of 与 for in 的区别 <a class="header-anchor" href="#for-of-与-for-in-的区别" aria-label="Permalink to &quot;for of 与 for in 的区别&quot;">​</a></h3><ul><li>in：适合遍历对象，使用它遍历数组的时候会把 可枚举属性 遍历出来</li><li>of：遍历对象报错！它只能遍历含有<code>iterator</code>（迭代器）属性的数据接口 如：<code>Map，Set，Array，arguments，String</code></li></ul><h3 id="array-shift-与-array-unshift-的返回值是什么" tabindex="-1">Array.shift() 与 Array.unshift() 的返回值是什么 <a class="header-anchor" href="#array-shift-与-array-unshift-的返回值是什么" aria-label="Permalink to &quot;Array.shift() 与 Array.unshift() 的返回值是什么&quot;">​</a></h3><ul><li>shift表示删除数组第一项，返回删除的值</li><li>unshift表示在数组前增加，返回数组增加后的长度</li></ul><h3 id="foreach如何跳出循环" tabindex="-1">forEach如何跳出循环 <a class="header-anchor" href="#foreach如何跳出循环" aria-label="Permalink to &quot;forEach如何跳出循环&quot;">​</a></h3><p>自身没有办法跳出循环，使用return可以跳出单次循环，利用try{}catch{}抛出异常可以打断循环，或者使用 <code>some</code> 或 <code>every</code> 通过 return 判断打断循环</p><h3 id="防抖与节流" tabindex="-1">防抖与节流 <a class="header-anchor" href="#防抖与节流" aria-label="Permalink to &quot;防抖与节流&quot;">​</a></h3><p>防抖：触发事件后在规定时间内回调函数只执行一次,如果在规定时间内再次触发事件,则会重新计算时间</p><blockquote><p>将多次执行变成最后一次执行</p></blockquote><p>节流：触发事件时在规定时间段只能调用一次回调函数,如果在规定时间内再次触发,则什么也不做,也不会以重置定时器</p><blockquote><p>将多次执行变为在规定时间内只执行一次</p></blockquote><h3 id="代码题" tabindex="-1">代码题 <a class="header-anchor" href="#代码题" aria-label="Permalink to &quot;代码题&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   a[b]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; a[c]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a[b])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 a[b]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; a[c]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a[b])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 a[b]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; a[c]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//调用toString { [object object]:&#39;123&#39; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	 console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a[b])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// c</span></span></code></pre></div>`,34),t=[n];function e(k,p,r,d,o,E){return a(),s("div",null,t)}const g=i(h,[["render",e]]);export{c as __pageData,g as default};
