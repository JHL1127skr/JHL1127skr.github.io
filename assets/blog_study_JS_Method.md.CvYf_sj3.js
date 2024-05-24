import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.DwS4PCXf.js";const F=JSON.parse('{"title":"数组字符串常用方法","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/study/JS/Method.md","filePath":"blog/study/JS/Method.md"}'),k={name:"blog/study/JS/Method.md"},n=h(`<h1 id="数组字符串常用方法" tabindex="-1">数组字符串常用方法 <a class="header-anchor" href="#数组字符串常用方法" aria-label="Permalink to &quot;数组字符串常用方法&quot;">​</a></h1><hr><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//改变原数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 翻转</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除最后一个元素。返回值：被删除的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在数组末端添加元素。返回值：添加以后的长度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除第一个元素。 返回值：被删除的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 排序。a-b升序 a+b降序</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unshift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在数组头部添加元素。 返回值：添加以后的长度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">splice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">开始位置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(必填)，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">删除几个</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(可选)，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">新增的值</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(可选)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除并替换。返回值：被删除的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">替换的值</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(必填)，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">开始索引</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(可选)，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">结束位置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(可选)(不包括)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 替换数组元素。返回值：修改后的数组</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//不改变原数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 遍历数组。返回值：undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(开始位置，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">结束位置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(不包括)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 截取元素。返回值：截取出来的数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对数组每一项进行操作。返回值：一个新数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 筛选出满足条件的数组。 返回值：一个新数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断数组中是否 至少有一项 满足条件。返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">every</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断数组中是否 每一项 都满足条件。返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据条件查找第一个满足的元素。 返回值：查到返回元素，查不到返回undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findLast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同上 从后往前查。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据条件查找第一个满足的元素。返回值：查到返回下标，查不到返回 -1、</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findLastIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 同上 从后往前查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr1,arr2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 合并一个或多个数组。返回值：合成后的新数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 拼接 创建一个新的字符串用参数将所有元素链接。 返回值：字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查找数组中是否存在某个元素 用的是 === 所以不能用来判断对象。返回值：查到返回下标，查不到返回 -1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reduce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">前一项</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">当前项</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{},初始值) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//累加</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查找数组是否包含某个元素 返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nums) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将多位数组根据次数拉平，默认1层，Infinity(无限) 。 返回值：拉平后的新数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通过下标获取元素，可以传入 负数 。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{return..}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// return的值作为组名进行分组。 返回值：一个包含组名的对象</span></span></code></pre></div><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回对应索引下的内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charCodeAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回对饮索引下内容的ASCII码</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查询某个元素第一次出现的索引</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastIndexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//查询某个元素最后一次出现的索引</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断字符串与子串的包含关系 返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断字符串是否以某个元素开头 返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断字符串是否以某个元素结尾 返回值：布尔值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ele </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reg); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//查询字符串，可以传入字符串或者正则 返回值：查到返回下标，查不到返回 -1、</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(开始位置, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">结束位置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(不包括)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 截取字符串</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(开始位置, 截取几个); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//截取字符串</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 变小写</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUpperCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 变大写</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//分割字符串 返回值：数组</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(替换的词 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 正则, 要替换的内容); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 替换</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reg); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将符合字符串放入一个数组中返回 返回值：数组/null</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(添加的数量, 添加的值); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//添加头</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(添加的数量, 添加的值); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//添加尾</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(要检查的值, 起始位置); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 检查字符串是否以指定的子字符串开头</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(要检查的值, 起始位置); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 检查字符串是否以指定的子字符串结尾</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除字符串开头和结尾的空格</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除字符串开头的空格</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除字符串结尾的空格</span></span></code></pre></div>`,6),t=[n];function l(p,E,e,r,d,g){return a(),i("div",null,t)}const A=s(k,[["render",l]]);export{F as __pageData,A as default};