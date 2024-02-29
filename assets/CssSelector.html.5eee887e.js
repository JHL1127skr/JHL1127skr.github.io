import{_ as n,o as s,c as a,a as e}from"./app.bb765282.js";const t={},c=e(`<h1 id="css-\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#css-\u9009\u62E9\u5668" aria-hidden="true">#</a> CSS \u9009\u62E9\u5668</h1><hr><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u57FA\u7840\u9009\u62E9\u5668
*</span><span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">/* \u901A\u914D\u9009\u62E9\u5668 */</span>  
<span class="token selector">.root</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">/* \u7C7B\u9009\u62E9\u5668 */</span>
<span class="token selector">#root</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">/* id\u9009\u62E9\u5668 */</span>
<span class="token selector">&lt;div&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">/* \u6807\u7B7E\u9009\u62E9\u5668 */</span>

<span class="token selector">CSS3\u65B0 \u5C5E\u6027\u9009\u62E9\u5668
div[class^=&#39;root&#39;]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u9009\u4E2Dclass\u540D\u5B57\u4EE5root\u5F00\u5934\u7684div\u6807\u7B7E */</span>
<span class="token selector">div[class$=&#39;root&#39;]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u9009\u4E2Dclass\u540D\u5B57\u4EE5root\u7ED3\u5C3E\u7684div\u6807\u7B7E */</span>
<span class="token selector">div[class*=&#39;root&#39;]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u9009\u4E2Dclass\u540D\u5B57\u5305\u542Broot\u7684div\u6807\u7B7E */</span>

<span class="token selector">\u590D\u5408\u9009\u62E9\u5668
\u5143\u7D20\u4E00 \u5143\u7D20\u4E8C</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u540E\u4EE3\u9009\u62E9\u5668  \u5143\u7D201\u4E0E\u5143\u7D202\u7528\u7A7A\u683C\u9694\u5F00 \u6700\u7EC8\u9009\u62E9\u5B50\u96C6\u91CC\u7684\u6240\u6709\u5143\u7D20 */</span>
<span class="token selector">\u5143\u7D20\u4E00&gt;\u5143\u7D20\u4E8C</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u5B50\u9009\u62E9\u5668 \u4F1A\u9009\u62E9\u79BB\u5143\u7D20\u4E00\u6700\u8FD1\u7684\u4E00\u7EA7\u5B50\u5143\u7D20*/</span>
<span class="token selector">\u5143\u7D20\u4E00,\u5143\u7D20\u4E8C</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u5E76\u7EA7\u9009\u62E9\u5668 \u53EF\u4EE5\u540C\u65F6\u9009\u4E2D\u4E24\u79CD\u4E0D\u540C\u7684\u6807\u7B7E\u66F4\u6539 */</span>

<span class="token selector">\u5144\u5F1F\u9009\u62E9\u5668
div\uFF5Ep</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* div\u540E\u9762\u6240\u6709\u7684p */</span>
<span class="token selector">div+p</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* div\u76F8\u90BB\u7684p */</span>

<span class="token selector">\u4F2A\u5143\u7D20\u9009\u62E9\u5668
X:first-line</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u7B2C\u4E00\u884C\u6587\u5B57 */</span>
<span class="token selector">X:first-letter</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u7B2C\u4E00\u4E2A\u6587\u5B57 */</span>
<span class="token selector">X::after</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">/* \u5FAE\u5143\u7D20 */</span>
<span class="token selector">X::before</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u5FAE\u5143\u7D20 */</span>

<span class="token selector">\u4F2A\u7C7B\u9009\u62E9\u5668
- \u94FE\u63A5
a:link</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u672A\u9009\u4E2D\u7684\u94FE\u63A5 */</span> 
<span class="token selector">a:visited</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u9009\u62E9\u8FC7\u7684\u94FE\u63A5 */</span> 
<span class="token selector">a:active</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u6D3B\u52A8\u4E2D\u7684\u94FE\u63A5 */</span> 
<span class="token selector">a:hover</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">/* \u9F20\u6807\u6ED1\u8FC7\u7684\u94FE\u63A5 */</span> 
<span class="token selector">- \u8868\u5355
X:fcous</span><span class="token punctuation">{</span><span class="token punctuation">}</span>      <span class="token comment">/* \u9009\u4E2D\u5149\u6807\u6240\u5728\u7684\u8868\u5355 */</span>
<span class="token selector">X:enabled</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u53EF\u7528\u5143\u7D20 */</span>
<span class="token selector">X:disabled</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u4E0D\u53EF\u7528 */</span>
<span class="token selector">X:checked</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u9009\u4E2D\u72B6\u6001 */</span>
<span class="token selector">- \u76EE\u6807\u4F2A\u7C7B\u9009\u62E9\u5668
X:target</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u6307\u5B9A\u67D0\u4E2Atarget\u5143\u7D20  \uFF08\u951A\u8BB0\u94FE\u63A5 */</span>
<span class="token selector">- \u9F20\u6807\u6307\u9488
X::selection</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u6307\u9488\u5212\u8FC7\u7684\u6837\u5F0F */</span>

\u7ED3\u6784\u4F2A\u7C7B\u9009\u62E9\u5668
<span class="token comment">/*  nth-child \u4F1A\u7ED9\u6240\u6709\u7684\u5B50\u7EA7\u6392\u5E8F   \u5148\u770B\u5E8F\u53F7 \u518D\u770B\u6807\u7B7E */</span>
<span class="token comment">/* nth-of-type \u53EA\u7ED9\u6307\u5B9A\u7684\u5B50\u7EA7\u505A\u6807\u7B7E\u5148\u770B\u6807\u7B7E\u518D\u770B\u5E8F\u53F7 */</span>
<span class="token comment">/* \u7236\u5143\u7D20\u7B2Cn\u4E2A\u5B50\u5143\u7D20
    n\u53EF\u4EE5\u662F\u5173\u952E\u8BCD : odd/\u5947\u6570\u3001even/\u5076\u6570
    n\u53EF\u4EE5\u662F\u516C\u5F0F : 2n/\u5076\u6570\u30012n-1/\u5947\u6570\u30013n/3\u7684\u500D\u6570\u3001n+3/\u7B2C\u4E09\u4E2A\u4E4B\u540E\u3001-n+3/\u524D\u4E09\u4E2A
*/</span>

<span class="token selector">X:first-child</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">/* \u7236\u5143\u7D20\u91CC\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20 */</span>
<span class="token selector">X:last-child</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u7236\u5143\u7D20\u91CC\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20 */</span>
<span class="token selector">X:nth-child(n)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">X:first-of-type</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u6307\u5B9A\u7C7B\u578BX\u91CC\u9762\u7684\u7B2C\u4E00\u4E2A */</span>
<span class="token selector">X:last-of-type</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u6307\u5B9A\u7C7B\u578BX\u91CC\u9762\u7684\u7B2C\u4E00\u4E2A */</span>
<span class="token selector">X:nth-of-type(n)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">X:empty</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token selector">\u5185\u5BB9\u4E3A\u7A7A\u663E\u793A\u4FEE\u9970
X:not()</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token selector">\u6392\u9664 \u67D0\u4E2A
X:root</span><span class="token punctuation">{</span><span class="token punctuation">}</span> \u6839\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[c];function l(o,i){return s(),a("div",null,p)}var d=n(t,[["render",l],["__file","CssSelector.html.vue"]]);export{d as default};
