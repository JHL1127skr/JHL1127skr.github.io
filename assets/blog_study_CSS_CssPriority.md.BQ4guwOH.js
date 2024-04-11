import{_ as s,c as i,o as a,a4 as l}from"./chunks/framework.sZGJh8CM.js";const y=JSON.parse('{"title":"CSS 优先级","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/study/CSS/CssPriority.md","filePath":"blog/study/CSS/CssPriority.md"}'),h={name:"blog/study/CSS/CssPriority.md"},n=l(`<h1 id="css-优先级" tabindex="-1">CSS 优先级 <a class="header-anchor" href="#css-优先级" aria-label="Permalink to &quot;CSS 优先级&quot;">​</a></h1><hr><h3 id="css-优先级一般来说" tabindex="-1">CSS 优先级一般来说： <a class="header-anchor" href="#css-优先级一般来说" aria-label="Permalink to &quot;CSS 优先级一般来说：&quot;">​</a></h3><p><code>!important</code> &gt; <code>行内</code> &gt; <code>style</code> &gt; <code>id</code> &gt; <code>class</code></p><h3 id="具体算法" tabindex="-1">具体算法： <a class="header-anchor" href="#具体算法" aria-label="Permalink to &quot;具体算法：&quot;">​</a></h3><p>优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：</p><ul><li>如果存在内联样式，那么 A = 1, 否则 A = 0;</li><li>B 的值等于 ID 选择器 出现的次数;</li><li>C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;</li><li>D 的值等于 标签选择器 和 伪元素 出现的总次数 。</li></ul><h3 id="比较规则是" tabindex="-1">比较规则是: <a class="header-anchor" href="#比较规则是" aria-label="Permalink to &quot;比较规则是:&quot;">​</a></h3><p><strong>从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果 4 位全部相等，则后面的会覆盖前面的</strong></p><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><p><code>#nav-global</code> &gt; <code>ul</code> &gt; <code>li</code> &gt; <code>a.nav-link</code></p><p>套用上面的算法，依次求出 A B C D 的值：</p><ul><li>因为没有内联样式 ，所以 A = 0;</li><li>ID 选择器总共出现了 1 次， B = 1;</li><li>类选择器出现了 1 次， 属性选择器出现了 0 次，伪类选择器出现 0 次，所以 C = (1 + 0 + 0) = 1；</li><li>标签选择器出现了 3 次， 伪元素出现了 0 次，所以 D = (3 + 0) = 3; 上面算出的 A 、 B、C、D 可以简记作：(0, 1, 1, 3)。</li></ul><h3 id="练习" tabindex="-1">练习： <a class="header-anchor" href="#练习" aria-label="Permalink to &quot;练习：&quot;">​</a></h3><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                   /* (0, 0, 0, 1) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> li</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                /* (0, 0, 0, 2) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> ol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                             /* (0, 0, 0, 3) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> ol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                             /* (0, 0, 0, 3) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">REL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">up</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]                       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* (0, 0, 1, 1) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> ol</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.red</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         /* (0, 0, 1, 3) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.red.level</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         /* (0, 0, 2, 1) */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.a1.a2.a3.a4.a5.a6.a7.a8.a9.a10.a11</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* (0, 0, 11,0) */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#x34y</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                /* (0, 1, 0, 0) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:first-child</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> h2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .title</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             /* (0, 0, 2, 2) */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#nav</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .selected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             /* (0, 1, 2, 1) */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> body</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #nav</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .selected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   /* (0, 1, 2, 3) */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">比较规则是:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从左往右依次进行比较 ，较大者胜出，如果相等，则继续往右移动一位进行比较 。如果4位全部相等，则后面的会覆盖前面的</span></span></code></pre></div>`,15),t=[n];function e(k,p,r,d,o,c){return a(),i("div",null,t)}const A=s(h,[["render",e]]);export{y as __pageData,A as default};
