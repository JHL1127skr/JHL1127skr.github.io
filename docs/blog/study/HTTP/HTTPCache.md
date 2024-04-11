---
outline: deep
---

# https缓存
### 强缓存
![图片](/blog/httpCache1.png)
Canche-Control： 控制强制缓存的逻辑。
- max-age：缓存最大过期时间。
- no-cache：可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）还是使用客户端缓存（304）。
- no-store：永远都不要在客户端存储资源，永远都去原始服务器去获取资源。
### 协商缓存
服务端缓存策略，服务端判断客户端资源，是否和服务端资源一样，一致则返回 304，否则返回 200 和最新的资源。
资源标记：
- Last-Modified：资源的最后修改时间。
- Etag：资源的唯一标识（一个字符串，类似于人类的指纹）。

![图片](/blog/httpCache2.png)
#### Last-Modified
服务端拿到 if-Modified-Since 之后拿这个时间去和服务端资源最后修改时间做比较如果一致则返回 304 不一致（也就是资源已经更新了）就返回 200 和新的资源及新的 Last-Modified

![图片](/blog/httpCache3.png)

#### Etag
其实 Etag 和 Last-Modified 一样的，只不过 Etag 是服务端对资源按照一定方式（比如 contenthash）计算出来的唯一标识，就像人类指纹一样，传给客户端之后，客户端再传过来时候，服务端会将其与现在的资源计算出来的唯一标识做比较，一致则返回 304，不一致就返回 200 和新的资源及新的 Etag。
![图片](/blog/httpCache4.png)
### 总结
两者比较：
- 优先使用 Etag。
- Last-Modified 只能精确到秒级。
- 如果资源被重复生成，而内容不变，则 Etag 更精确。

![图片](/blog/httpCache5.png)