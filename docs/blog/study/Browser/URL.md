# 从输入URL到页面加载出来发生了什么
---
### 一、DNS解析域名得到IP地址
#### 1、URL的组成	
```
https://baidu.com:80/xxxx/page/index.html?id=xxx#title
协议     主机     端口  路径      资源名     参数    锚点
```
#### 2、DNS解析分为递归查询和迭代查询两种，一般是迭代查询
### 二、TCP连接（三次握手）
- 第一次：客户端发送请求到服务器，服务器知道客户端发送，自己接收正常。
- 第二次：服务器发给客户端，客户端知道自己发送、接收正常，服务器接收、发送正常。
- 第三次：客户端发给服务器：服务器知道客户端发送，接收正常，自己接收，发送也正常
### 三、发送HTTP请求
- 请求报文
    - 请求行 === 路径 方法 协议
    - 请求头 === 自定义信 和 content-type , userAgent 等
    - 请求体 === 用来传输数据
    - 状态码 HTTP缓存（强缓存、协商缓存）
### 四、服务处理请求并返回HTTP报文
- 响应报头与响应报文
- 状态码
    - 1xx : 指示信息====表示请求已接收 ,继续处理
    - 2xx : 成功====表示请求已被成功接收
    - 3xx : 重定向====要完成请求必须进行更进一步操作
        - 301 永久重定向
        - 302 临时重定向
        - 304 客户端有缓存 服务端的一种响应
    - 4xx : 客户端错误====请求语法错误或者 请求无法实现
        - 400 错误请求
        - 401 未授权
        - 403 禁止访问
        - 404 未找到
    - 5xx : 服务端错误====服务器未能实现合法请求
        - 500 服务器内部错误
        - 503 服务器不可用
### 五、浏览器渲染页面
![图片](/blog/url.png)
1. 解析HTML，构建DOM树
2. 解析CSS，生成CSS规则树
3. 合并DOM树和CSS规则，生成render树
4. 布局render树（layout/reflow：回流），负责计算元素的尺寸和位置
5. 绘制render树（repaint：重绘），绘制页面像素信息
6. 解析Javascript脚本  通过DOM API和CSSOM API 操作DOM树 和CSS树  与用户进行交互

如果遇到外联的样式声明和脚本声明  则暂停文档解析

![图片](/blog/script.png)

script标签的 defer 与 async 属性 **只适用于外联脚本** 带有src属性

**async** 异步下载脚本文件，**下载完毕立即解释** 执行代码（如果有多个 因为是异步 没有办法判断顺序）

![图片](/blog/script-async.png)

**defer**开启新的线程下载脚本文件，并使脚本在 **文档解析完成** 后执行 （如果有多个  按顺序执行）

![图片](/blog/script-defer.png)

### 六、TCP断开连接（四次挥手）
- 第一次：客户端请求断开
- 第二次：服务器确认客户端的断开请求
- 第三次：服务器请求断开
- 第四次：客户端确认服务器的断开
