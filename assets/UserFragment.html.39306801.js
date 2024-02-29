import{_ as n,o as s,c as a,a as t}from"./app.bb765282.js";const o={},e=t(`<h1 id="vscode\u7528\u6237\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#vscode\u7528\u6237\u7247\u6BB5" aria-hidden="true">#</a> vsCode\u7528\u6237\u7247\u6BB5</h1><hr><p>\u5DE6\u4E0A\u89D2Code -&gt; \u9996\u9009\u9879 -&gt; \u7528\u6237\u7247\u6BB5</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>	<span class="token property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u89E6\u53D1\u5173\u952E\u8BCD</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
			<span class="token string">&quot;console.log(&#39;$1&#39;);&quot;</span><span class="token punctuation">,</span> <span class="token comment">// $1 \u5360\u4F4D\u7B26  </span>
      <span class="token comment">//\${1/^([a-zA-Z])/\${1:/upcase}/}  //\u9996\u5B57\u6BCD\u5927\u5199 table\u952E\u5207\u6362</span>
			<span class="token string">&quot;\\t$2&quot;</span>  <span class="token comment">//\\t\u7F29\u8FDB\u4E00\u683C</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Log output to console&quot;</span> <span class="token comment">//\u63CF\u8FF0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u89E6\u53D1\u5173\u952E\u8BCD</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
			<span class="token string">&quot;console.log(&#39;$(1|aaa,bbb,ccc)&#39;);&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//table \u53EF\u4EE5\u4E0A\u4E0B\u5207\u6362</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Log output to console&quot;</span> <span class="token comment">//\u63CF\u8FF0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[e];function c(l,i){return s(),a("div",null,p)}var r=n(o,[["render",c],["__file","UserFragment.html.vue"]]);export{r as default};
