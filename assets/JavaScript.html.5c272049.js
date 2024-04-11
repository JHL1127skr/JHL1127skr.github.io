import{_ as n,o as a,c as s,a as t}from"./app.bb765282.js";const e={},p=t(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h3 id="\u6DF1\u62F7\u8D1D\u90FD\u6709\u54EA\u4E9B\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u90FD\u6709\u54EA\u4E9B\u65B9\u5F0F" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u90FD\u6709\u54EA\u4E9B\u65B9\u5F0F</h3><ol><li>\u9012\u5F52</li><li>JSON</li><li><code>structuredClone</code></li></ol><blockquote><p>\u6CE8\u610F\uFF1A...\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u53EA\u80FD\u53EA\u80FD\u6DF1\u62F7\u8D1D\u7B2C\u4E00\u5C42\uFF0C \u65E2\u4E0D\u662F\u6DF1\u62F7\u8D1D\u4E5F\u4E0D\u662F\u6D45\u62F7\u8D1D</p></blockquote><h3 id="\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B</h3><ol><li>\u6CA1\u6709\u81EA\u5DF1\u7684this\uFF0C\u53EA\u4F1A\u7EE7\u627F\u81EA\u5DF1\u4F5C\u7528\u57DF\u7684\u4E0A\u4E00\u5C42\uFF0C\u4E14\u4E0D\u53EF\u88AB\u6539\u53D8</li><li>\u4E0D\u80FD\u901A\u8FC7<code>call\u3001apply\u3001bind</code>\u65B9\u6CD5\u6539\u53D8this\u6307\u5411</li><li>\u6CA1\u6709<code>arguments</code> \u548C <code>prototype</code></li><li>\u4E0D\u80FD\u5F53\u505A\u6784\u9020\u51FD\u6570\u4F7F\u7528</li></ol><h3 id="array-isarray-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#array-isarray-\u5B9E\u73B0" aria-hidden="true">#</a> Array.isArray \u5B9E\u73B0</h3><ol><li>\u5224\u65AD\u662F\u5426\u662F\u5BF9\u8C61</li><li>\u5224\u65AD\u662F\u5426\u6709<code>Symbol.iterator</code>\u5C5E\u6027\uFF0C\u4E14\u662F\u4E00\u4E2A\u51FD\u6570</li><li>\u5224\u65AD\u662F\u5426\u6709<code>length</code>\u5C5E\u6027</li></ol><h3 id="\u751F\u6210\u957F\u5EA6\u6570\u7EC4\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u957F\u5EA6\u6570\u7EC4\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u751F\u6210\u957F\u5EA6\u6570\u7EC4\u7684\u65B9\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//[undefined]</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//[undefined]</span>
<span class="token comment">// \u751F\u62101-10000\u7684\u65B9\u6CD5</span>
<span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">//[1,2,...]</span>
<span class="token punctuation">[</span><span class="token operator">...</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">//[1,2,...]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new\u64CD\u4F5C\u7B26\u5177\u4F53\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new\u64CD\u4F5C\u7B26\u5177\u4F53\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new\u64CD\u4F5C\u7B26\u5177\u4F53\u505A\u4E86\u4EC0\u4E48</h3><ol><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61</li><li>\u5C06\u7A7A\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570 \u539F\u578B\u4E0A\u7684\u65B9\u6CD5</li><li>\u4F7F\u7528apply\u5C06\u6784\u9020\u51FD\u6570\u7684this\u6307\u5411\u7A7A\u5BF9\u8C61\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E0A\u7684\u5C5E\u6027</li><li>\u5224\u65AD\u6784\u9020\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5E76return</li></ol><h3 id="object-defineproperty-\u4E0E-proxy" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-\u4E0E-proxy" aria-hidden="true">#</a> Object.defineProperty \u4E0E Proxy</h3><ul><li><code>defineProperty</code>\u53EA\u80FD\u5BF9\u5C5E\u6027\u8FDB\u884C\u76D1\u542C\uFF0C\u76D1\u542C\u6574\u4E2A\u5BF9\u8C61\u9700\u8981\u904D\u5386</li><li><code>Proxy</code>(\u5143\u7F16\u7A0B:\u5373\u5BF9\u7F16\u7A0B\u8BED\u8A00\u8FDB\u884C\u7F16\u7A0B)\u53EF\u4EE5\u76D1\u542C\u5BF9\u8C61\u6240\u6709\u5C5E\u6027\uFF0C\u548C\u6570\u7EC4</li></ul><h3 id="isnan-\u548C-number-isnan-\u51FD\u6570\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#isnan-\u548C-number-isnan-\u51FD\u6570\u7684\u533A\u522B" aria-hidden="true">#</a> isNaN \u548C Number.isNaN \u51FD\u6570\u7684\u533A\u522B\uFF1F</h3><ul><li><code>isNaN</code> \u7C7B\u578B\u68C0\u6D4B \u5982\u679C\u4E0D\u662FNumber \u4F1A\u5148\u5C06\u53C2\u6570\u8F6C\u6362\u6210\u6570\u503C\u7C7B\u578B\u5728\u5224\u65AD <code>eg: isNaN(&#39;str&#39;) // true</code></li><li><code>Number.isNaN</code> \u7C7B\u578B\u68C0\u6D4B \u5982\u679C\u4E0D\u662FNumber \u4F1A\u76F4\u63A5\u8FD4\u56DEfalse <code>eg: Number.isNaN(&#39;str&#39;) // false</code></li></ul><h3 id="commonjs-\u548C-esmodule-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#commonjs-\u548C-esmodule-\u7684\u533A\u522B" aria-hidden="true">#</a> CommonJS \u548C ESModule \u7684\u533A\u522B</h3><ol><li>CommonJS \u503C\u7684\u62F7\u8D1D\uFF0CESModule \u503C\u7684\u5F15\u7528</li><li>CommonJS \u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0CESModule \u9759\u6001\u7F16\u8BD1</li><li>CommonJS \u540C\u6B65\uFF0CESModule \u5F02\u6B65</li></ol><ul><li>AMD \u4F9D\u8D56\u524D\u7F6E \u5F02\u6B65\u52A0\u8F7D</li><li>CMD \u5C31\u8FD1\u4F9D\u8D56 \u6309\u9700\u52A0\u8F7D</li></ul><h3 id="map\u548Cweakmap\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#map\u548Cweakmap\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> Map\u548CWeakMap\u6709\u4EC0\u4E48\u533A\u522B</h3><ul><li>Map\u7684key\u53EF\u4EE5\u653E\u5165\u4EFB\u4F55\u503C\uFF0CWeakMap\u53EA\u80FD\u7528\u5BF9\u8C61\u5F53\u4F5Ckey</li><li>Map\u53EF\u4EE5\u4F7F\u7528for of \u904D\u5386\uFF0CWeakMap\u4E0D\u884C</li></ul><h3 id="for-of-\u4E0E-for-in-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#for-of-\u4E0E-for-in-\u7684\u533A\u522B" aria-hidden="true">#</a> for of \u4E0E for in \u7684\u533A\u522B</h3><ul><li>in\uFF1A\u9002\u5408\u904D\u5386\u5BF9\u8C61\uFF0C\u4F7F\u7528\u5B83\u904D\u5386\u6570\u7EC4\u7684\u65F6\u5019\u4F1A\u628A \u53EF\u679A\u4E3E\u5C5E\u6027 \u904D\u5386\u51FA\u6765</li><li>of\uFF1A\u904D\u5386\u5BF9\u8C61\u62A5\u9519\uFF01\u5B83\u53EA\u80FD\u904D\u5386\u542B\u6709<code>iterator</code>\uFF08\u8FED\u4EE3\u5668\uFF09\u5C5E\u6027\u7684\u6570\u636E\u63A5\u53E3 \u5982\uFF1A<code>Map\uFF0CSet\uFF0CArray\uFF0Carguments\uFF0CString</code></li></ul><h3 id="array-shift-\u4E0E-array-unshift-\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#array-shift-\u4E0E-array-unshift-\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Array.shift() \u4E0E Array.unshift() \u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48</h3><ul><li>shift\u8868\u793A\u5220\u9664\u6570\u7EC4\u7B2C\u4E00\u9879\uFF0C\u8FD4\u56DE\u5220\u9664\u7684\u503C</li><li>unshift\u8868\u793A\u5728\u6570\u7EC4\u524D\u589E\u52A0\uFF0C\u8FD4\u56DE\u6570\u7EC4\u589E\u52A0\u540E\u7684\u957F\u5EA6</li></ul><h3 id="foreach\u5982\u4F55\u8DF3\u51FA\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#foreach\u5982\u4F55\u8DF3\u51FA\u5FAA\u73AF" aria-hidden="true">#</a> forEach\u5982\u4F55\u8DF3\u51FA\u5FAA\u73AF</h3><p>\u81EA\u8EAB\u6CA1\u6709\u529E\u6CD5\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u4F7F\u7528return\u53EF\u4EE5\u8DF3\u51FA\u5355\u6B21\u5FAA\u73AF\uFF0C\u5229\u7528try{}catch{}\u629B\u51FA\u5F02\u5E38\u53EF\u4EE5\u6253\u65AD\u5FAA\u73AF\uFF0C\u6216\u8005\u4F7F\u7528 <code>some</code> \u6216 <code>every</code> \u901A\u8FC7 return \u5224\u65AD\u6253\u65AD\u5FAA\u73AF</p><h3 id="\u9632\u6296\u4E0E\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296\u4E0E\u8282\u6D41" aria-hidden="true">#</a> \u9632\u6296\u4E0E\u8282\u6D41</h3><p>\u9632\u6296\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u540E\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u56DE\u8C03\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21,\u5982\u679C\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u518D\u6B21\u89E6\u53D1\u4E8B\u4EF6,\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u65F6\u95F4</p><blockquote><p>\u5C06\u591A\u6B21\u6267\u884C\u53D8\u6210\u6700\u540E\u4E00\u6B21\u6267\u884C</p></blockquote><p>\u8282\u6D41\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u65F6\u5728\u89C4\u5B9A\u65F6\u95F4\u6BB5\u53EA\u80FD\u8C03\u7528\u4E00\u6B21\u56DE\u8C03\u51FD\u6570,\u5982\u679C\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u518D\u6B21\u89E6\u53D1,\u5219\u4EC0\u4E48\u4E5F\u4E0D\u505A,\u4E5F\u4E0D\u4F1A\u4EE5\u91CD\u7F6E\u5B9A\u65F6\u5668</p><blockquote><p>\u5C06\u591A\u6B21\u6267\u884C\u53D8\u4E3A\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21</p></blockquote><h3 id="\u4EE3\u7801\u9898" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u9898" aria-hidden="true">#</a> \u4EE3\u7801\u9898</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span>\u3001<span class="token keyword">const</span> a <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
   a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span> <span class="token punctuation">;</span> a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span> 
	 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// c</span>

<span class="token number">2</span>\u3001<span class="token keyword">const</span> a <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span> <span class="token punctuation">;</span> a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span>
	 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// </span>

<span class="token number">3</span>\u3001<span class="token keyword">const</span> a <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;456&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	 a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;b&#39;</span> <span class="token punctuation">;</span> a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528toString { [object object]:&#39;123&#39; }</span>
	 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// c </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),o=[p];function c(i,l){return a(),s("div",null,o)}var u=n(e,[["render",c],["__file","JavaScript.html.vue"]]);export{u as default};
