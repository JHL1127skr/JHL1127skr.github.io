# 提交Commit限制
---
#### 通过插件 捕获到每次git commit 提交内容，并经过相关ESlint校验。
#### 目录结构
```
├── .husky
    ├── _
        ├── .gitignore   
        └── husky.sh
    ├── commit-msg    
    └── pre-commit 	
├── package.json
└── commitlint.config.js	
```		
#### commit-msg
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
```
#### pre-commit 	
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
#### package.json
```json
{
//...
  "scripts": {
    "prepare": "husky install", //husky 初始化
    "commit": "git-cz" //commit操作
  },
//...
  "devDependencies": {
    "@commitlint/cli": "^16.2.1",
    "@commitlint/config-conventional": "^16.2.1",
    "commitizen": "^4.2.4",
    "husky": "^7.0.4",
    "lint-staged": "^12.3.4",
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```
#### commitlint.config.js
```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [0, 'never']
    }
};
```