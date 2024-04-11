import{_ as n,o as s,c as a,a as e}from"./app.bb765282.js";var i="/blog/git.png";const t={},c=e('<h1 id="git-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git-\u64CD\u4F5C" aria-hidden="true">#</a> Git \u64CD\u4F5C</h1><hr><p><img src="'+i+`" alt="\u56FE\u7247"></p><h4 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">=</span> \u4E34\u65F6\u50A8\u5B58\u4EE3\u7801
<span class="token function">git</span> stash  <span class="token comment">#\u5C06\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\u7684\u4EE3\u7801 \u50A8\u5B58\u5230\u67D0\u533A\u57DF\u67D0\u5904</span>
<span class="token function">git</span> stash pop <span class="token comment">#\u5C06\u50A8\u5B58\u7684\u4EE3\u7801\u91CA\u653E\u51FA\u6765</span>
<span class="token function">git</span> stash list <span class="token comment">#\u67E5\u770B\u5F53\u524Dstash\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">#\u5C06\u67D0\u6761\u8BB0\u5F55\u91CA\u653E\u51FA\u6765</span>
<span class="token function">git</span> stash <span class="token function">clear</span> <span class="token comment">#\u5220\u9664\u6240\u6709\u8BB0\u5F55</span>

<span class="token operator">=</span> commit\u65F6\u4E0D\u6821\u9A8Ceslint
<span class="token function">git</span> commit -m <span class="token string">&#39;&#39;</span> --no-verigy

<span class="token operator">=</span> \u67E5\u8BE2\u63D0\u4EA4\u8BB0\u5F55
<span class="token function">git</span> log
-2 <span class="token comment">#\u67E5\u8BE2\u51E0\u6761</span>
-p <span class="token comment">#\u663E\u793A\u6BCF\u4E2A\u63D0\u4EA4\u7684\u5DEE\u5F02</span>
--stat <span class="token comment">#\u663E\u793A\u6BCF\u6B21\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539\u4FE1\u606F</span>

<span class="token operator">=</span> \u63D0\u4EA4commit \u4E4B\u540E\u53D1\u73B0\u6F0F\u63D0\u4EA4\u51E0\u4E2A\u6587\u4EF6
<span class="token function">git</span> commit -m <span class="token string">&#39;&#39;</span> --amend <span class="token comment">#\u4F1A\u5F52\u7C7B\u5230\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684commit\u4E2D</span>

<span class="token operator">=</span> \u64A4\u9500\u5DE5\u4F5C\u533A\u6216\u6682\u5B58\u533A\u7684\u4EE3\u7801
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span> <span class="token comment">#\u64A4\u9500\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539</span>
<span class="token function">git</span> checkout HEAD <span class="token builtin class-name">.</span> <span class="token comment">#\u64A4\u9500\u5DE5\u4F5C\u533A\uFF0C\u6682\u5B58\u533A\u7684\u4FEE\u6539 \uFF08HEAD\u8868\u793A\u5F53\u524D\u5206\u652F\u6700\u65B0\u7684\u5DE5\u4F5C\u533A\uFF0C\u6682\u5B58\u533A</span>

<span class="token operator">=</span> \u64A4\u9500\u67D0\u6761commit
<span class="token function">git</span> reset --xx <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
--soft  <span class="token comment">#\u64A4\u9500commit\u5E76\u4FDD\u5B58\u4FEE\u6539\u5728\u6682\u5B58\u533A</span>
--mixed <span class="token comment">#\u64A4\u9500commit\u5E76\u4FDD\u5B58\u4FEE\u6539\u5728\u5DE5\u4F5C\u533A</span>
--hard <span class="token comment">#\u64A4\u9500commit \u5E76\u5220\u9664\u4FEE\u6539</span>
<span class="token function">git</span> reset --soft HEAD~2 <span class="token comment"># HEAD\uFF5E2 \u6700\u8FD1\u4E24\u6761\u7684commit\u8BB0\u5F55</span>

<span class="token operator">=</span> \u64A4\u9500commit \u5E76\u4FDD\u7559\u8BB0\u5F55
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
<span class="token function">git</span> revert HEAD^ <span class="token comment">#HEAD^ == HEAD~1 \u8868\u793A\u6700\u65B0\u7684\u4E00\u6761commit\u8BB0\u5F55</span>

<span class="token operator">=</span> \u5C06\u6307\u5B9A\u7684commit\u5E94\u7528\u5230\u5176\u4ED6\u5206\u652F
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">&gt;</span> <span class="token comment">#hash\u503C\u6216\u8005\u5206\u652F\u540D\u79F0\uFF08\u8BE5\u5206\u652F\u6700\u65B0\u7684\u4E00\u6B21commit</span>
<span class="token function">git</span> cherry-pick A B <span class="token comment">#\u8282\u70B9A\u548C\u8282\u70B9B</span>
<span class="token function">git</span> cherry-pick A<span class="token punctuation">..</span>B <span class="token comment">#\u4ECE\u8282\u70B9A\u5230\u8282\u70B9B \u4E14\u5206\u652FA\u5FC5\u987B\u65E9\u4E0EB (A,B]</span>
<span class="token function">git</span> cherry-pick A^<span class="token punctuation">..</span>B <span class="token comment">#\u4ECE\u8282\u70B9A\u5230\u8282\u70B9B [A,B] \u5305\u542BA</span>
<span class="token comment">#\u5F53\u4EA7\u751F\u51B2\u7A81\u540E \u4F1A\u4E2D\u65ADcherry-pick \u624B\u52A8\u5904\u7406\u51B2\u7A81 git add .\u63D0\u4EA4\u5230\u6682\u5B58\u533A</span>
--continue <span class="token comment">#\u7EE7\u7EED\u6267\u884C</span>
--abort <span class="token comment">#\u653E\u5F03\u5408\u5E76 \u56DE\u5230\u64CD\u4F5C\u524D\u7684\u6837\u5B50</span>
--quit <span class="token comment">#\u9000\u51FAcherry-pick \u4F46\u662F\u4E0D\u56DE\u5230\u64CD\u4F5C\u524D\u7684\u6837\u5B50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[c];function l(p,m){return s(),a("div",null,o)}var d=n(t,[["render",l],["__file","Git.html.vue"]]);export{d as default};
