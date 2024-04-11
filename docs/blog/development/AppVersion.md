---
outline: deep
---

# APP版本号
---
**思路： 设置全局变量 打包前  执行node命令 获取package中的版本号  改变全局变量**

在package.json 里的打包命令执行前 执行node语句 （&&的作用是 保证之前的命令执行完才会执行后面的）
```json
 "scripts": {
        "build:dev": "node setVersion.js &&  react-app-rewired build",
    },
```
`setVersion.js`
```js
const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'package.json'); //读取package
let configFile = path.join(__dirname, './src/utils/config.js'); //读取全局变量
fs.readFile(file, 'utf-8', (err, data) => {  //readFile 读取文件
    if (err) {
        console.log(err);
        return;
    }
    const content = JSON.parse(data);
    const version = content.version; 

    fs.readFile(configFile, 'utf-8', (err, data2) => {
        // var result = data2.replace(/(?<=version:)[\S]*/g, version);
        var result = data2.replace(/version: '([\s\S]*)'/, `version: '${version}'`);
        fs.writeFile(configFile, result, 'utf8', function (err) { // writeFile 写
            if (err) {
                console.log(err);
                return;
            }
            process.exit(); //退出文件
        });
    });
});
```