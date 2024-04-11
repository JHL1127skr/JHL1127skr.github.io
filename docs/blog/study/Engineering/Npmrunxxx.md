---
outline: deep
---

# npm run xxx 发生了什么
---
以React为例
当执行npm `start / yarn start` 时 相当于执行了 `package.json` 中 "script" 里对应的命令`react-scripts start`

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
}
```
#### 问题一：
**为什么不直接执对应的命令而去执行npm run xxx**

答：因为 直接去执行命令会报错，操作系统中没有存在该指令

#### 问题二：
**既然命令不存在 那么执行npm run xxx的时候 可以成功呢**

答：在安装依赖时 会在node_modules/.bin下生成 react-scripts 的脚本软链接
![图片](/blog/Npmrunxxx01.png)

#### 问题三：
**真实的文件在哪**

在node_modules/react-script/bin/react-sript.js

![图片](/blog/Npmrunxxx02.png)


在start.js中引入了 webpack-dev-server 该模块是webpack的一个插件 专门用来启动本地调试服务器的
![图片](/blog/Npmrunxxx03.png)