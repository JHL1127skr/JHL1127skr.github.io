import{_ as n,o as s,c as e,a}from"./app.8b255e0f.js";var i="/blog/git.png";const t={},c=a('<h1 id="git\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git\u64CD\u4F5C" aria-hidden="true">#</a> Git\u64CD\u4F5C</h1><hr><p><img src="'+i+`" alt="\u56FE\u7247"></p><h4 id="\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145" aria-hidden="true">#</a> \u8865\u5145</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote update origin -p <span class="token comment">#\u66F4\u65B0\u8FDC\u7AEF\u5206\u652F</span>
<span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>branchname<span class="token punctuation">]</span>  <span class="token comment">#\u5220\u9664\u8FDC\u7AEF\u5206\u652F</span>
<span class="token function">git</span> stash <span class="token comment">#\u5C06\u4FEE\u6539\u4EE3\u7801\u653E\u5230\u672C\u5730\u53E6\u4E00\u4E2A\u5730\u65B9\u50A8\u5B58</span>
<span class="token function">git</span> stash pop <span class="token comment">#\u5C06\u672C\u5730\u50A8\u5B58\u4EE3\u7801\u62C9\u56DE</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;&#39;</span> --no-verify <span class="token comment"># \u4E0D\u6821\u9A8Ceslint</span>

\u5220\u9664\u672C\u5730\u5206\u652F
<span class="token function">git</span> branch -d xxx   
<span class="token function">git</span> branch -D xxx    <span class="token comment">#\u5F3A\u5236\u5220\u9664 \u5982\u679C\u5206\u652F\u672A\u5408\u5E76\u5B8C\u5168\u4F7F\u7528\u8BE5\u547D\u4EE4</span>

\u514B\u9686\u6D4B\u8BD5\u5206\u652F\u4E0A\u7684\u4EE3\u7801
<span class="token function">git</span> clone -b develop \u5730\u5740

\u521B\u5EFA\u5206\u652Fxxx\u5E76\u63A8\u5411\u8FDC\u7AEF	
<span class="token function">git</span> checkout -b xxx 
<span class="token function">git</span> push origin xxx

\u64A4\u9500commit 
<span class="token function">git</span> reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="merge\u4E2D\u51FA\u73B0\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#merge\u4E2D\u51FA\u73B0\u7684\u95EE\u9898" aria-hidden="true">#</a> merge\u4E2D\u51FA\u73B0\u7684\u95EE\u9898</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fatal: You have not concluded your merge <span class="token punctuation">(</span>MERGE_HEAD exists<span class="token punctuation">)</span>.
Please, commit your changes before you merge.
<span class="token comment">#\u9020\u6210\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\uFF1A\u6CA1\u6709\u62C9\u53BB\u4EE3\u7801\u3002</span>
<span class="token comment">#\u89E3\u51B3\u529E\u6CD5:\u4FDD\u7559\u672C\u5730\u7684\u66F4\u6539,\u4E2D\u6B62\u5408\u5E76-&gt;\u91CD\u65B0\u5408\u5E76-&gt;\u91CD\u65B0\u62C9\u53D6</span>
<span class="token function">git</span> merge --abort   <span class="token comment">#\u4E2D\u6B62\u5408\u5E76</span>
<span class="token function">git</span> reset --merge   <span class="token comment">#\u64A4\u9500\u5408\u5E76</span>
<span class="token function">git</span> pull            <span class="token comment">#\u62C9\u53BB\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[c];function o(d,r){return s(),e("div",null,l)}var m=n(t,[["render",o],["__file","Git.html.vue"]]);export{m as default};
