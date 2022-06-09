# 命令行交互
---
#### 需要用到的依赖

```markdown
inquirer -- 交互  参考  <https://blog.csdn.net/qq_26733915/article/details/80461257>
shell -- 执行
chalk -- 修饰
```

#### 在package.json 的 scripts 对象中写下执行语句 node 调用单独的js文件

```json
 "scripts": {
    "start": "node demo.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

#### demo.js

```jsx
const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');

const cmdConfig ={
  	'dev': 'cross-env NODE_ENV=development env-cmd -f .env.development react-app-rewired build',
  	'prod': 'cross-env NODE_ENV=production env-cmd -f .env.production react-app-rewired build'
}
async function index() {
    const { mode } = await inquirer.prompt([
        {
            name: 'mode',
            message: '请选择模式',
            type: 'list',
            choices: [
                {
                    name: '测试',
                    value: 'dev',
                },
                {
                    name: '生产',
                    value: 'prod',
                },
            ],
        },
    ]);
  // mode value值 跟据拿到的model 进行匹配配置文件
  cosnt start =cmdConfig[mode]
  console.log(chalk.green(`即将执行命令：${start}`)); // shalk.grenn 命令行语句颜色
  shell.exec(start) // 命令行执行语句
  }
index()
```

