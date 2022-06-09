---
sidebarDepth: 2
---
# Webpack
## 一、基础
### 1.1  目录结构
```
webpack_work                  
├─ src         
├─ .browserslistrc   
├─ postcss.config.js      
└─ package.json  
``` 
### 1.2 基础配置
```js
const path = require("path");

const config = {
    mode: "development", //模式
    /*
        // development 开发模式，打包更加快速，省了代码优化步骤
        // production 生产模式，打包比较慢，会开启 tree-shaking 和 压缩代码
        // none 不使用任何默认优化选项
    */
    entry: "./src/index.js", //入口文件
    output: {
        filename: "bundle.js", //输出文件名
        path: path.join(__dirname, "dist"), //输出文件目录
    },
    module: { // loader      
        rules: [
           ...
        ]
    },
    plugins: [ // plugin
        ...    
    ],
    devServer: {// 启动
        ...   
    },
};
module.exports = (env, argv) => {
    // 区分环境 这里可以通过不同的模式修改 config 配置
    console.log("argv.mode=", argv.mode); // 打印 mode(模式) 值
    return config;
};
```
##### webpack 默认支持处理 JS 与 JSON 文件，其他类型都处理不了，这里必须借助 Loader 来对不同类型的文件的进行处理。
### 1.3 Loader : 就是将 Webpack 不认识的内容转化为认识的内容
#### 1.3.1   处理 CSS ：```css-loader```
```js
// yarn add  css-loader -D

rules: [ // 转换规则
    {
        test:/\.css$/, //匹配所有的 css 文件
        use: 'css-loader' // use: 对应的 Loader 名称
    }
]
```
#### 1.3.2 引入 CSS ：```style-loader```
```js
// yarn add  style-loader -D

rules: [
    {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader']
}
```
#### 1.3.3 CSS兼容性：```postcss-loader```   ```postcss```   ```postcss-preset-env```
```js
// yarn add postcss postcss-loader postcss-preset-env -D
 
 rules: [
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader', 'postcss-loader']
}
```
```js
// yarn add postcss postcss-loader postcss-preset-env -D
 
 rules: [
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader', 'postcss-loader']
}
```
创建 postcss 配置文件 postcss.config.js
```
// postcss.config.js
module.exports = {
  plugins: [require('postcss-preset-env')]
}
```
创建 postcss-preset-env 配置文件 .browserslistrc
```
# 换行相当于 and
last 2 versions # 回退两个浏览器版本
> 0.5% # 全球超过0.5%人使用的浏览器，可以通过 caniuse.com 查看不同浏览器不同版本占有率
IE 10 # 兼容IE 10
```
#### 1.3.4 引入sass ```sass-loader```   ```node-sass```
```js
// yarn add sass-loader node-sass -D

rules: [
    {
         test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件   
         use:['style-loader', 'css-loader','postcss-loader', 'sass-loader', ] 
    }
]
```
#### 1.3.5 JS 兼容性（Babel）
```js
// yarn add babel-loader @babel/core @babel/preset-env -D

// ./babelrc.js

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: false 默认值，无视浏览器兼容配置，引入所有 polyfill
        // useBuiltIns: entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
        // useBuiltIns: usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        useBuiltIns: "entry",
        corejs: "3.9.1", // 是 core-js 版本号
        targets: {
          chrome: "58",
          ie: "11",
        },
      },
    ],
  ],
};
```
### 1.4 plugin : 可以贯穿 Webpack 打包的生命周期，执行不同的任务
#### 1.4.1 自动引入到 Html ：html-webpack-plugin 
```js
 //yarn add html-webpack-plugin -D
 
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 plugins:[ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
```
#### 1.4.2 目录清空：clean-webpack-plugin
```js
 //yarn add clean-webpack-plugin -D

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  plugins:[ // 配置插件
    new CleanWebpackPlugin() // 引入插件
  ] 
```
#### 1.4.3 分理样式文件 ：mini-css-extract-plugin
```js
// yarn add mini-css-extract-plugin -D

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

rules: [{
     test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
     use: [
         //'style-loader', 
          MiniCssExtractPlugin.loader, // 添加 loader 
           'css-loader','postcss-loader','sass-loader', 
     ]
}]

plugins:[
    new MiniCssExtractPlugin({ // 添加插件
      filename: '[name].[hash:8].css'
    }),
]
```
#### 1.4.4 图片和字体文件 file-loader / url-loader / img-loader
   Loader说明   file-loader解决图片引入问题，并将图片 copy 到指定目录，默认为 dist   url-loader解依赖 file-loader，当图片小于 limit 值的时候，会将图片转为 base64 编码，大于 limit 值的时候依然是使用 file-loader 进行拷贝   img-loader压缩图片
```js
// yarn add file-loader -D
rules: [{
    test:/\.(jpe?g|png|gif)$/i, // 匹配图片文件
    use:[
        'file-loader' // 使用 file-loader     
]
// yarn add url-loader -D
```
```js
rules:[{
     test: /\.(jpe?g|png|gif)$/i,
     use:[
          {
            loader: 'url-loader',
            options: {
              name: '[name][hash:8].[ext]',
              // 文件小于 50k 会转换为 base64，大于则拷贝文件
              limit: 50 * 1024
            }
          }
        ]
}]
```
### 1.5 环境区分
#### 1.5.1 本地安装 cross-env 
```bash
yarn add cross-env -D
```
#### 1.5.2  配置启动命令
```json
// package.json
"scripts": {
    "dev": "cross-env NODE_ENV=dev webpack serve --mode development", 
    "test": "cross-env NODE_ENV=test webpack --mode production",
    "build": "cross-env NODE_ENV=prod webpack --mode production"
  },
```
#### 1.5.3 在 Webpack 配置文件中获取环境变量
```js
const config = {
    ...
}
module.exports = (env, argv) => {
  console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  return config;
}
```
### 1.6 启动 devServer
#### 1.6.1 安装webpack-dev-server
```bash
yarn add webpack-dev-server@3.11.2 -D
```
>注意：本文使用的 webpack-dev-server 版本是  3.11.2，当版本 version >= 4.0.0 时，需要使用 devServer.static 进行配置，不再有 devServer.contentBase 配置项。

#### 1.6.2 配置本地服务
```js
// webpack.config.js
const config = {
  // ...
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
  },
 // ...
}
```
### 1.7 资源模块的使用
>webpack5 新增资源模块(asset module)，允许使用资源文件（字体，图标等）而无需配置额外的 loader。
资源模块支持以下四个配置：
-asset/resource 将资源分割为单独的文件，并导出 url，类似之前的 file-loader 的功能.
-asset/inline 将资源导出为 dataUrl 的形式，类似之前的 url-loader 的小于 limit 参数时功能.
-asset/source 将资源导出为源码（source code）. 类似的 raw-loader 功能
-asset 会根据文件大小来选择使用哪种类型，当文件小于 8 KB（默认） 的时候会使用 asset/inline，否则会使用 asset/resource
```js
rules:[
    {
        test:/\.(jpe?g|png|gif)$/i,
        type:'asset',
        generator:{
            // 输出文件位置以及文件名
            // [ext] 自带 "." 这个与 url-loader 配置不同  
             filename: "[name][hash:8][ext]"   
        },
        parser: {
           dataUrlCondition: {
                maxSize: 50 * 1024 //超过50kb不转 base64
              }
           }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }    
    }
]
```
### 2.SourceMap 配置选择
SourceMap 是一种映射关系，当项目运行后，如果出现错误，我们可以利用 SourceMap 反向定位到源码位置
## 二、进阶