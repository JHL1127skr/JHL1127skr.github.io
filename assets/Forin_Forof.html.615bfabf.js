import{_ as n,o as a,c as s,a as e}from"./app.bb765282.js";const o={},i=e(`<h1 id="for-in-\u4E0E-for-of" tabindex="-1"><a class="header-anchor" href="#for-in-\u4E0E-for-of" aria-hidden="true">#</a> for in \u4E0E for of</h1><hr><h3 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h3><ol><li>\u904D\u5386\u5BF9\u8C61\u65F6 key = \u5BF9\u8C61\u7684\u952E / \u904D\u5386\u6570\u7EC4\u65F6 key = \u6570\u7EC4\u7684\u4E0B\u6807</li><li>\u904D\u5386\u6570\u7EC4\u65F6 \u904D\u5386\u51FA\u6765\u7684\u4E0B\u6807\u4E3A<strong>\u5B57\u7B26\u4E32</strong>\u7C7B\u578B \u4E0D\u80FD\u76F4\u63A5\u8FDB\u884C\u8FD0\u7B97</li><li>\u4F7F\u7528for in \u4F1A\u904D\u5386\u6570\u7EC4\u6240\u6709<strong>\u53EF\u679A\u4E3E\u5C5E\u6027</strong>\uFF0C\u5305\u62EC\u539F\u578B\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span> key <span class="token keyword">in</span> arr <span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u603B\u7ED3 for in \u7279\u522B\u9002\u5408\u904D\u5386\u5BF9\u8C61</p></div><h3 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for of</h3><ol><li>\u904D\u5386\u5BF9\u8C61\u65F6 \u4F1A\u62A5\u9519 <code>obj is not iterable</code> / \u904D\u5386\u6570\u7EC4\u65F6 key = \u6570\u7EC4\u7684\u503C</li><li>\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u53EA\u8981\u90E8\u7F72\u4E86 <code>Symbol.iterator</code> \u5C5E\u6027, \u5C31\u88AB\u89C6\u4E3A\u5177\u6709 iterator\u63A5\u53E3, \u5C31\u53EF\u4EE5\u4F7F\u7528 for of\u5FAA\u73AF\u3002\u63D0\u4F9B\u4E86\u904D\u5386\u6240\u6709\u6570\u636E\u7ED3\u6784\u7684\u7EDF\u4E00\u63A5\u53E3</li><li>\u53EF\u4EE5\u914D\u5408 return break continue \u6253\u65AD\u5FAA\u73AF</li></ol><p>\u90A3\u4E9B\u6570\u636E\u7ED3\u6784\u90E8\u7F72\u4E86<code>Symbol.iterator</code>\u5C5E\u6027\u4E86\u5462?</p><ul><li>\u6570\u7EC4 Array</li><li>Map</li><li>Set</li><li>String</li><li>arguments\u5BF9\u8C61</li><li>Nodelist\u5BF9\u8C61, \u5C31\u662F\u83B7\u53D6\u7684dom\u5217\u8868\u96C6\u5408</li></ul>`,10),t=[i];function r(l,c){return a(),s("div",null,t)}var d=n(o,[["render",r],["__file","Forin&Forof.html.vue"]]);export{d as default};
