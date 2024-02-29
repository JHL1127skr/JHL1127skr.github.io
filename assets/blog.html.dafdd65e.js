import{_ as t,r as l,o as i,c,b as n,e as p,a,d as s}from"./app.bb765282.js";const o={},u=a(`<h1 id="\u5982\u4F55\u5728github\u4E0A\u642D\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728github\u4E0A\u642D\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u535A\u5BA2" aria-hidden="true">#</a> \u5982\u4F55\u5728GitHub\u4E0A\u642D\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u535A\u5BA2</h1><hr><h3 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .github //github action \u811A\u672C
    \u251C\u2500\u2500 workflows  
        \u2514\u2500\u2500 .doc.yml	
\u251C\u2500\u2500 docs
     \u251C\u2500\u2500 .vuepress
         \u251C\u2500\u2500.cache
         \u251C\u2500\u2500.temp
         \u251C\u2500\u2500configs
             \u251C\u2500\u2500navbar.js //\u5BFC\u822A\u680F\u914D\u7F6E
             \u251C\u2500\u2500sidebar.js //\u4FA7\u8FB9\u680F\u914D\u7F6E
         \u251C\u2500\u2500public //\u9759\u6001\u6587\u4EF6
         \u251C\u2500\u2500config.js //\u914D\u7F6E\u6587\u4EF6
     \u251C\u2500\u2500 blog //\u7528\u6765\u5B58\u653EMD\u6587\u4EF6
         \u2514\u2500\u2500 ...
     \u2514\u2500\u2500 README.md //\u5165\u53E3\u9875\u9762
\u251C\u2500\u2500 .gitignore //git\u63D0\u4EA4\u9ED1\u540D\u5355
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u642D\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u642D\u5EFA\u9879\u76EE</h3><ul><li>\u6B65\u9AA41: \u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u65B0\u76EE\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA42: \u521D\u59CB\u5316\u9879\u76EE</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA43: \u5C06 VuePress \u5B89\u88C5\u4E3A\u672C\u5730\u4F9D\u8D56</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA44: \u5728\xA0package.json\xA0\u4E2D\u6DFB\u52A0\u4E00\u4E9B\xA0scripts\u5728\u65B0\u7A97\u53E3\u6253\u5F00</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA45: \u5C06\u9ED8\u8BA4\u7684\u4E34\u65F6\u76EE\u5F55\u548C\u7F13\u5B58\u76EE\u5F55\u6DFB\u52A0\u5230\xA0.gitignore\xA0\u6587\u4EF6\u4E2D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA46: \u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u7BC7\u6587\u6863</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6B65\u9AA47: \u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="github\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#github\u914D\u7F6E" aria-hidden="true">#</a> GitHub\u914D\u7F6E</h3>`,20),d=n("li",null,[s("\u521B\u5EFA\u9879\u76EE "),n("ul",null,[n("li",null,"\u9879\u76EE\u540D\u5B57\uFF1Ausername.github.io\xA0\uFF08\u4E3A\u4E86\u8BBF\u95EE\u535A\u5BA2\u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u8BE5\u8DEF\u5F84\u8DF3\u8F6C\uFF09")])],-1),r=s("\u751F\u6210\u81EA\u5DF1\u7684GitHunToken "),v=s("\u53C2\u8003 "),k={href:"https://sauljwu.github.io/pages/d6f511/#%E7%94%9F%E6%88%90github-token",target:"_blank",rel:"noopener noreferrer"},m=s("GitHub Token"),b=n("ul",null,[n("li",null,"\u70B9\u51FB\u53F3\u4E0A\u89D2\u7528\u6237\u5934\u50CF"),n("li",null,"\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u9009\u62E9setting"),n("li",null,"\u5728\u4FA7\u8FB9\u680F\u4E2D\u9009\u62E9 Developer settings"),n("li",null,"\u9009\u62E9 Personal access tokens")],-1),h=n("li",null,[s("\u65B0\u5EFAToken \u540D\u5B57\u968F\u4FBF\u8D77 "),n("ul",null,[n("li",null,"\u5C06\u751F\u6210\u7684Token\u7ED1\u5B9A\u5230\u9879\u76EE\u4E2D"),n("li",null,"\u70B9\u51FB\u9879\u76EE\u4E2D\u7684setting -\u70B9\u51FB\u4FA7\u8FB9\u680F Secrets-> Actions"),n("li",null,"\u70B9\u51FBActions secrets \u6DFB\u52A0\u4E0E .doc.yml\u6587\u4EF6\u4E2D \u540C\u540D\u7684 ACCESS_TOKEN")])],-1),g=n("li",null,"\u5C06\u4ED3\u5E93\u5730\u5740\u4E0E\u672C\u5730\u9879\u76EE\u7EDF\u4E00",-1),y=n("li",null,"\u5C06\u4EE3\u7801push\u5230master\u5373\u53EF",-1),_=a(`<h3 id="doc-yml" tabindex="-1"><a class="header-anchor" href="#doc-yml" aria-hidden="true">#</a> .doc.yml</h3><blockquote><p>github\u8BFB\u53D6\u8BE5\u6587\u4EF6 \u5728Action \u6784\u5EFA\u6253\u5305\u4E0A\u4F20</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs <span class="token comment"># workflow\u540D\u79F0</span>

<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token comment"># \u89E6\u53D1\u6761\u4EF6</span>
  <span class="token comment"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># \u662F\u5426\u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># \u6307\u5B9A\u8FD0\u884C\u6240\u9700\u8981\u7684\u865A\u62DF\u673A\u73AF\u5883\uFF08\u5FC5\u586B\uFF09</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;14&quot;</span>

      <span class="token comment"># \u7F13\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(x,q){const e=l("ExternalLinkIcon");return i(),c("div",null,[u,n("ul",null,[d,n("li",null,[r,n("blockquote",null,[n("p",null,[v,n("a",k,[m,p(e)])])]),b]),h,g,y]),_])}var w=t(o,[["render",f],["__file","blog.html.vue"]]);export{w as default};
