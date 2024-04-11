import{_ as e,o as a,c as s,a as d}from"./app.bb765282.js";const i={},n=d(`<h1 id="mysql\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#mysql\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> MySQL\u57FA\u672C\u64CD\u4F5C</h1><hr><h5 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h5><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u67E5\u8868   select * from \u8868\u540D
\u5177\u4F53\u67E5\u5B57\u6BB5\u540D  select * from \u8868\u540D where \u5B57\u6BB5\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>eg: select * from \u8868\u540D where not \u5B57\u6BB5\u540D in (select f_id from \u8868\u540D2 where \u5B57\u6BB5\u540D2 = 11) -- \u8868\u8FBE\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="\u67E5\u770B\u6240\u6709\u5217-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u5217-\u6CE8\u91CA" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u5217 -- \u6CE8\u91CA</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show full columns from \u8868\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="\u6761\u4EF6\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u67E5\u8BE2" aria-hidden="true">#</a> \u6761\u4EF6\u67E5\u8BE2</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u6BD4\u8F83\u8FD0\u7B97\u7B26 &lt;\u3001&gt;\u3001&gt;=\u3001&lt;=\u3001!\u3001=\u3001
eg: select * from \u8868\u540D where \u5B57\u6BB5\u540D = 123
\u903B\u8F91\u8FD0\u7B97\u7B26 and--\u903B\u8F91\u4E14\u3001or--\u903B\u8F91\u6216\u3001not--\u903B\u8F91\u975E
eg: select * from \u8868\u540D where not \u5B57\u6BB5\u540D = 123 and \u5B57\u6BB52 = 3  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true">#</a> \u6A21\u7CCA\u67E5\u8BE2</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>like %--\u66FF\u6362\u4E00\u4E2A\u6216\u591A\u4E2A\u3001__--\u5360\u4F4D\u7B26\u66FF\u6362\u4E00\u4E2A
eg: select * from \u8868\u540D where  \u5B57\u6BB5\u540D like &#39;\u5F20%&#39;
rlike--\u6B63\u5219
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u8303\u56F4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4\u67E5\u8BE2" aria-hidden="true">#</a> \u8303\u56F4\u67E5\u8BE2</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>between and 
eg:select * from \u8868\u540D where \u5B57\u6BB5\u540D between xx and xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>order by -- asc(\u5347\u5E8F)/desc(\u964D\u5E8F) 
eg:select * from \u8868\u540D where \u5B57\u6BB5\u540D1,\u5B57\u6BB5\u540D2 order by desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4" aria-hidden="true">#</a> \u5206\u7EC4</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>group by -- count(*)
eg:select count(*),\u5B57\u6BB5 from \u8868\u540D  group by \u5B57\u6BB5
\u6392\u5E8F eg:select count(*),\u5B57\u6BB5 from \u8868\u540D where  group by \u5B57\u6BB5 order by count(*) desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h6><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>-- \u65F6\u95F4\u5904\u7406
DATE_FORMAT(f_create_time,&#39;%Y-%m-%d&#39;) -- 2021-08-11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[n];function l(c,m){return a(),s("div",null,r)}var h=e(i,[["render",l],["__file","MySQL.html.vue"]]);export{h as default};
