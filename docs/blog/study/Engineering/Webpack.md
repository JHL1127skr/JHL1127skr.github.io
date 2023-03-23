---
sidebarDepth: 2
---
# Webpack
## 一、基础

### 1、简单配置

#### 1.1目录结构

```javascript
webpack_work
├─ dist //打包之后的文件夹
├─ src //入口路径
├─ .browserslistrc 
├─ postcss.config.js
├─ .babelrc.js  //配置babel
├─ webpack.config.js 
└─ package.json
```

#### 1.2 基础配置

```javascript
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
    devtool: 'source-map',
  	resolve:{
      alias:{}
    }
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

**webpack 默认支持处理 JS 与 JSON 文件，其他类型都处理不了，这里必须借助 Loader 来对不同类型的文件的进行处理。**

#### 1.3 Loader : 就是将 Webpack 不认识的内容转化为认识的内容

##### 1.3.1 处理 CSS ：`css-lodaer`

```javascript
// yarn add  css-loader -D

rules: [ // 转换规则
    {
        test:/\.css$/, //匹配所有的 css 文件
        use: 'css-loader' // use: 对应的 Loader 名称
    }
]
```

##### 1.3.2 引入 CSS ：`style-loader`

```javascript
// yarn add  style-loader -D

rules: [
    {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader']
}
```

##### 1.3.3 CSS兼容性：`postcss-loader、postcss、postcss-preset-env`

```javascript
// yarn add postcss postcss-loader postcss-preset-env -D
 
 rules: [
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader','css-loader', 'postcss-loader']
}
```

创建 postcss 配置文件 `postcss.config.js`

```javascript
// postcss.config.js
module.exports = {
  plugins: [require('postcss-preset-env')]
}
```

创建 postcss-preset-env 配置文件 `.browserslistrc`

```javascript
# 换行相当于 and
last 2 versions # 回退两个浏览器版本
> 0.5% # 全球超过0.5%人使用的浏览器，可以通过 caniuse.com 查看不同浏览器不同版本占有率
IE 10 # 兼容IE 10
```

##### 1.3.4 引入sass `sass-loader node-sass`

```javascript
// yarn add sass-loader node-sass -D

rules: [
    {
         test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件   
         use:['style-loader', 'css-loader','postcss-loader', 'sass-loader', ] 
    }
]
```

##### 1.3.5 JS 兼容性（Babel）`babel-loader @babel/core @babel/preset-env`

```javascript
// yarn add babel-loader @babel/core @babel/preset-env -D

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: false 默认值，无视浏览器兼容配置，引入所有 polyfill
        // useBuiltIns: entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
        // useBuiltIns: usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
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

#### **1.4 plugin : 可以贯穿 Webpack 打包的生命周期，执行不同的任务**

##### 1.4.1 自动引入到 Html ：`html-webpack-plugin`

```javascript
//yarn add html-webpack-plugin -D
 
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 plugins:[ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
```

##### 1.4.2 目录清空：`clean-webpack-plugin`

```javascript
 //yarn add clean-webpack-plugin -D

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  plugins:[ // 配置插件
    new CleanWebpackPlugin() // 引入插件
  ]
```

##### **1.4.3 分理样式文件 ：**`mini-css-extract-plugin`

```javascript
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

##### **1.4.4 图片和字体文件 **`file-loader、url-loader、img-loader`

| ** Loader** | **说明**                                                     |
| ----------- | ------------------------------------------------------------ |
| file-loader | 解决图片引入问题，并将图片 copy 到指定目录，默认为 dist      |
| url-loader  | 解依赖 file-loader，当图片小于 limit 值的时候，会将图片转为 base64 编码，大于 limit 值的时候依然是使用 file-loader 进行拷贝 |
| img-loader  | 压缩图片                                                     |

```javascript
// yarn add file-loader -D

rules: [{
    test:/\.(jpe?g|png|gif)$/i, // 匹配图片文件
    use:[
        'file-loader' // 使用 file-loader     
    ]
```

```javascript
// yarn add url-loader -D

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

#### 1.5 环境区分

##### 1.5.1 本地安装`cross-env`

```javascript
yarn add cross-env -D
```

##### 1.5.2 配置启动命令

```json
"scripts": {
  "dev": "cross-env NODE_ENV=dev webpack serve --mode development", 
  "test": "cross-env NODE_ENV=test webpack --mode production",
  "build": "cross-env NODE_ENV=prod webpack --mode production"
},
```

##### 1.5.3 在 Webpack 配置文件中获取环境变量

```javascript
const config = {
  ...
}
console.log('process.env.NODE_ENv=', process.env.NODE_ENv) // 打印环境变量
module.exports = (env, argv) => {
  console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  return config;
}
```

#### 1.6 启动 devServer

##### 1.6.1 安装 `webpack-dev-server`

```javascript
yarn add webpack-dev-server -D
```

##### 1.6.2 配置本地服务

```javascript
const config = {
  // ...
  devServer: {
    static: { directory: path.join(__dirname, "public") }, // 静态文件目录
    compress: true, //是否启动压缩 gzip
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
  },
 // ...
}
```

#### 1.7 资源模块的使用

> webpack5 新增资源模块(asset module)，允许使用资源文件（字体，图标等）而无需配置额外的 loader。

资源模块支持以下四个配置：

1. asset/resource 将资源分割为单独的文件，并导出 url，类似之前的 file-loader 的功能.
2. asset/inline 将资源导出为 dataUrl 的形式，类似之前的 url-loader 的小于 limit 参数时功能.
3. asset/source 将资源导出为源码（source code）. 类似的 raw-loader 功能
4. asset 会根据文件大小来选择使用哪种类型，当文件小于 8 KB（默认） 的时候会使用 asset/inline，否则会使用 asset/resource

```javascript
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

```javascript
const config = {
	// ...
  devtool: 'source-map',
  module: { 
     // ...
  }
  // ...
```

#### 2.1 推荐配置

**本地开发：**`eval-cheap-module-source-map`

- 本地开发首次打包慢点没关系，因为 eval 缓存的原因，rebuild 会很快
- 开发中，我们每行代码不会写的太长，只需要定位到行就行，所以加上 cheap
- 我们希望能够找到源代码的错误，而不是打包后的，所以需要加上 module

**生产环境：**`(none)`

- 就是不想别人看到我的源代码

### 3.三种 hash 值

Webpack 文件指纹策略是将文件名后面加上 hash 值。例如我们在基础配置中用到的`filename: "[name][hash:8][ext]"`
这里里面 `[]`包起来的，就叫占位符，它们都是什么意思呢？请看下面这个表 

| **占位符**  | **解释**                   |
| ----------- | -------------------------- |
| ext         | 文件后缀名                 |
| name        | 文件名                     |
| path        | 文件相对路径               |
| folder      | 文件所在文件夹             |
| hash        | 每次构建生成的唯一 hash 值 |
| chunkhash   | 根据 chunk 生成 hash 值    |
| contenthash | 根据文件内容生成hash 值    |

表格里面的 hash、chunkhash、contenthash 你可能还是不清楚差别在哪

- **hash** ：任何一个文件改动，整个项目的构建 hash 值都会改变；
- **chunkhash**：文件的改动只会影响其所在 chunk 的 hash 值；
- **contenthash**：每个文件都有单独的 hash 值，文件的改动只会影响自身的 hash 值；

## 二、进阶

### 1、优化构建速度

#### 1.1 构建费时分析 `speed-measure-webpack-plugin`

```javascript
...
// 费时分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
...

const config = {...}

module.exports = (env, argv) => {
  // 这里可以通过不同的模式修改 config 配置


  return smp.wrap(config);
}
```

> 注意：**有些 Loader 或者 Plugin 新版本会不兼容，需要进行降级处理**

这里我们对 `mini-css-extract-plugin` 进行一下降级处理: `^2.1.0 -> ^1.3.6`

#### 1.2 优化 resolve 配置

##### 1.2.1 alias

alias 用的创建 `import`或 `require` 的别名，用来简化模块引用，项目中基本都需要进行配置。

```javascript
const path = require('path')
...
// 路径处理方法
function resolve(dir){
  return path.join(__dirname, dir);
}

 const config  = {
  ...
  resolve:{
    // 配置别名
    alias: {
      '~': resolve('src'),
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  }
};
```

配置完成后，在项目中

```javascript
// 使用 src 别名 ~ 
import '~/fonts/iconfont.css'

// 使用 src 别名 @ 
import '@/fonts/iconfont.css'

// 使用 components 别名
import footer from "components/footer";
```

##### 1.2.2 extensions

```javascript
const config = {
  //...
  resolve: {
    extensions: ['.js', '.json', '.wasm'],
  },
};
```

如果用户引入模块时不带扩展名，例如

```javascript
import file from '../path/to/file';
```

那么 webpack 就会按照 extensions 配置的数组从左到右的顺序去尝试解析模块
需要注意的是：

1. 高频文件后缀名放前面；
2. 手动配置后，默认配置会被覆盖

如果想保留默认配置，可以用 ... 扩展运算符代表默认配置，例如

```javascript
const config = {
  //...
  resolve: {
    extensions: ['.ts', '...'], 
  },
};
```

##### 1.2.3 modules

告诉 webpack 解析模块时应该搜索的目录，常见配置如下

> 优先 src 目录下查找需要解析的文件，会大大节省查找时间

```javascript
const config = {
  //...
  resolve: {
     modules: [resolve('src'), 'node_modules'],
  },
};
```

#### 1.3 noParse

- 不需要解析依赖的第三方大型类库等，可以通过这个字段进行配置，以提高构建速度
- 使用 noParse 进行忽略的模块文件中不会解析 import、require 等语法

```javascript
const config = {
  //...
  module: { 
    noParse: /jquery|lodash/,
    rules:[...]
  }

};
```

#### 1.4利用缓存

##### 1.4.1 babel-loader 开启缓存

```javascript
const config = {
 module: { 
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // 启用缓存
            }
          },
        ]
      },
    ]
  }
}
```

##### 1.4.2 `cache-loader` 缓存区域loader

```javascript
// yarn add cache-loader -D 
const config = {
 module: { 
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'cache-loader', // 获取前面 loader 转换的结果
          'css-loader',
          'postcss-loader',
          'sass-loader', 
        ]
      }, 
      // ...
    ]
  }
}
```

### 2、优化构建结果

#### 2.1 构建结果分析 `[webpack-bundle-analyzer](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpack-bundle-analyzer) `

```javascript
// yarn add webpack-bundle-analyzer -D
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  // ...
  plugins:[ 
    // ...
    // 配置插件 
    new BundleAnalyzerPlugin({
      // analyzerMode: 'disabled',  // 不启动展示打包报告的http服务器
      // generateStatsFile: true, // 是否生成stats.json文件
    })
  ],
};
```

```json
 "scripts": {
    "analyzer": "cross-env NODE_ENV=prod webpack --progress --mode production"
  },
```

#### 2.2 压缩CSS `[optimize-css-assets-webpack-plugin](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Foptimize-css-assets-webpack-plugin)`

```javascript
// yarn add  optimize-css-assets-webpack-plugin -D
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = {
  // ...
  optimization: {
    minimize: true,
    minimizer: [
      // 添加 css 压缩配置
      new OptimizeCssAssetsPlugin({}),
    ]
  },
}
```

#### 2.3 压缩JS `terser-webpack-plugin (内置)`

```javascript
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  // ...
  optimization: {
    minimize: true, // 开启最小化
    minimizer: [
      // ...
      new TerserPlugin({})
    ]
  },
  // ...
}
```

#### 2.4 清除无用的CSS `[purgecss-webpack-plugin](https://link.juejin.cn/?target=https%3A%2F%2Fwww.purgecss.cn%2Fplugins%2Fwebpack.html%23%25E7%2594%25A8%25E6%25B3%2595) `

```javascript
// yarn add purgecss-webpack-plugin -D
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob'); // 文件匹配模式

function resolve(dir){
  return path.join(__dirname, dir);
}

const PATHS = {
  src: resolve('src')
}

const config = {
  plugins:[ // 配置插件
    // ...
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true})
    }),
  ]
}

```

#### 2.5 Tree-shaking

`Tree-shaking` 作用是剔除没有使用的代码，以降低包的体积

- webpack 默认支持，需要在 .bablerc 里面设置 `model：false`，即可在生产环境下默认开启

```javascript
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                module: false,
                corejs: "3.9.1", // 是 core-js 版本号
                targets: {
                    chrome: "58",
                    ie: "11",
                },
            },
        ],
    ],
    options: {
        cacheDirectory: true, // 启用缓存
    },
};
```
