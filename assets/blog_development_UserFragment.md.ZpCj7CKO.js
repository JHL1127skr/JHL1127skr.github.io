import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DwS4PCXf.js";const c=JSON.parse('{"title":"vsCode用户片段","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/development/UserFragment.md","filePath":"blog/development/UserFragment.md"}'),n={name:"blog/development/UserFragment.md"},l=t(`<h1 id="vscode用户片段" tabindex="-1">vsCode用户片段 <a class="header-anchor" href="#vscode用户片段" aria-label="Permalink to &quot;vsCode用户片段&quot;">​</a></h1><hr><p>左上角Code -&gt; 首选项 -&gt; 用户片段</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;Print to console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;prefix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发关键词</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;console.log(&#39;$1&#39;);&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// $1 占位符  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      //\${1/^([a-zA-Z])/\${1:/upcase}/}  //首字母大写 table键切换</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$2&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //\\t缩进一格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Log output to console&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;Print to console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;prefix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发关键词</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&quot;console.log(&#39;$(1|aaa,bbb,ccc)&#39;);&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//table 可以上下切换</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Log output to console&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span></code></pre></div>`,4),p=[l];function e(h,k,o,r,d,E){return a(),i("div",null,p)}const u=s(n,[["render",e]]);export{c as __pageData,u as default};