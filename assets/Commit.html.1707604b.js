import{_ as n,o as s,c as a,a as e}from"./app.8b255e0f.js";const t={},i=e(`<h1 id="\u63D0\u4EA4commit\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4commit\u9650\u5236" aria-hidden="true">#</a> \u63D0\u4EA4Commit\u9650\u5236</h1><hr><h4 id="\u901A\u8FC7\u63D2\u4EF6-\u6355\u83B7\u5230\u6BCF\u6B21git-commit-\u63D0\u4EA4\u5185\u5BB9-\u5E76\u7ECF\u8FC7\u76F8\u5173eslint\u6821\u9A8C\u3002" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u63D2\u4EF6-\u6355\u83B7\u5230\u6BCF\u6B21git-commit-\u63D0\u4EA4\u5185\u5BB9-\u5E76\u7ECF\u8FC7\u76F8\u5173eslint\u6821\u9A8C\u3002" aria-hidden="true">#</a> \u901A\u8FC7\u63D2\u4EF6 \u6355\u83B7\u5230\u6BCF\u6B21git commit \u63D0\u4EA4\u5185\u5BB9\uFF0C\u5E76\u7ECF\u8FC7\u76F8\u5173ESlint\u6821\u9A8C\u3002</h4><h4 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .husky
    \u251C\u2500\u2500 _
        \u251C\u2500\u2500 .gitignore   
        \u2514\u2500\u2500 husky.sh
    \u251C\u2500\u2500 commit-msg    
    \u2514\u2500\u2500 pre-commit 	
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 commitlint.config.js	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="commit-msg" tabindex="-1"><a class="header-anchor" href="#commit-msg" aria-hidden="true">#</a> commit-msg</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

npx --no -- commitlint --edit &quot;$1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pre-commit" tabindex="-1"><a class="header-anchor" href="#pre-commit" aria-hidden="true">#</a> pre-commit</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

npx lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token comment">//...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span> <span class="token comment">//husky \u521D\u59CB\u5316</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git-cz&quot;</span> <span class="token comment">//commit\u64CD\u4F5C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">//...</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@commitlint/cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@commitlint/config-conventional&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^12.3.4&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{ts,tsx,js,jsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint --fix&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz-conventional-changelog&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="commitlint-config-js" tabindex="-1"><a class="header-anchor" href="#commitlint-config-js" aria-hidden="true">#</a> commitlint.config.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[i];function p(c,l){return s(),a("div",null,o)}var u=n(t,[["render",p],["__file","Commit.html.vue"]]);export{u as default};
