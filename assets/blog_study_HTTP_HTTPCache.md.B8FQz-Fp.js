import{_ as a,c as t,o as e,a4 as i,am as o,an as l,ao as s,ap as r,aq as d}from"./chunks/framework.sZGJh8CM.js";const b=JSON.parse('{"title":"https缓存","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/study/HTTP/HTTPCache.md","filePath":"blog/study/HTTP/HTTPCache.md"}'),h={name:"blog/study/HTTP/HTTPCache.md"},c=i('<h1 id="https缓存" tabindex="-1">https缓存 <a class="header-anchor" href="#https缓存" aria-label="Permalink to &quot;https缓存&quot;">​</a></h1><h3 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h3><p><img src="'+o+'" alt="图片"> Canche-Control： 控制强制缓存的逻辑。</p><ul><li>max-age：缓存最大过期时间。</li><li>no-cache：可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）还是使用客户端缓存（304）。</li><li>no-store：永远都不要在客户端存储资源，永远都去原始服务器去获取资源。</li></ul><h3 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h3><p>服务端缓存策略，服务端判断客户端资源，是否和服务端资源一样，一致则返回 304，否则返回 200 和最新的资源。 资源标记：</p><ul><li>Last-Modified：资源的最后修改时间。</li><li>Etag：资源的唯一标识（一个字符串，类似于人类的指纹）。</li></ul><p><img src="'+l+'" alt="图片"></p><h4 id="last-modified" tabindex="-1">Last-Modified <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified&quot;">​</a></h4><p>服务端拿到 if-Modified-Since 之后拿这个时间去和服务端资源最后修改时间做比较如果一致则返回 304 不一致（也就是资源已经更新了）就返回 200 和新的资源及新的 Last-Modified</p><p><img src="'+s+'" alt="图片"></p><h4 id="etag" tabindex="-1">Etag <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;Etag&quot;">​</a></h4><p>其实 Etag 和 Last-Modified 一样的，只不过 Etag 是服务端对资源按照一定方式（比如 contenthash）计算出来的唯一标识，就像人类指纹一样，传给客户端之后，客户端再传过来时候，服务端会将其与现在的资源计算出来的唯一标识做比较，一致则返回 304，不一致就返回 200 和新的资源及新的 Etag。 <img src="'+r+'" alt="图片"></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>两者比较：</p><ul><li>优先使用 Etag。</li><li>Last-Modified 只能精确到秒级。</li><li>如果资源被重复生成，而内容不变，则 Etag 更精确。</li></ul><p><img src="'+d+'" alt="图片"></p>',17),n=[c];function p(_,m,u,f,g,T){return e(),t("div",null,n)}const q=a(h,[["render",p]]);export{b as __pageData,q as default};
