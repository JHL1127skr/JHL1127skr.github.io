import{_ as n,o as s,c as a,a as t}from"./app.bb765282.js";const e={},p=t(`<h1 id="instandof" tabindex="-1"><a class="header-anchor" href="#instandof" aria-hidden="true">#</a> instandof</h1><hr><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">//true</span>
<span class="token keyword">function</span> <span class="token keyword">instanceof</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span><span class="token constant">B</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token constant">A</span><span class="token operator">=</span><span class="token constant">A</span><span class="token punctuation">.</span>__proto__  <span class="token comment">// \u88AB\u5224\u65AD\u7684\u503C</span>
    <span class="token constant">B</span><span class="token operator">=</span><span class="token class-name">B</span><span class="token punctuation">.</span>prototype  <span class="token comment">// \u8981\u5224\u65AD\u7684\u7C7B\u578B Array Object</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token operator">===</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token constant">A</span><span class="token operator">=</span><span class="token constant">A</span><span class="token punctuation">.</span>__proto__
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","Instandof.html.vue"]]);export{r as default};
