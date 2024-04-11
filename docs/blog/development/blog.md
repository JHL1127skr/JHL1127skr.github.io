---
outline: deep
---

# 如何在GitHub上搭建属于自己的博客
---
### 项目结构
```
├── .github //github action 脚本
    ├── workflows  
        └── .doc.yml	
├── docs
     ├── .vuepress
         ├──.cache
         ├──configs
             ├──navbar.js //导航栏配置
             ├──sidebar.js //侧边栏配置
         ├──public //静态文件
         ├──theme //主题文件
             ├──index.css //自定义样式
         ├──config.js //配置文件
     ├── blog //用来存放MD文件
         └── ...
     └── index.md //入口页面
├── .gitignore //git提交黑名单
└── package.json
```
### 搭建项目
- 步骤1: 创建并进入一个新目录
```bash
mkdir doc
cd doc
```
- 步骤2: 初始化项目
```bash
git init
yarn init
```
- 步骤3: 将 VuePress 安装为本地依赖
```bash
yarn add -D vitepress
```
- 步骤4: 在 package.json 中添加一些 scripts在新窗口打开
```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
- 步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
```bash
echo docs/.vitepress/cache >> .gitignore
echo docs/.vitepress/dist >> .gitignore
echo node_modules >> .gitignore
echo .DS_Store >> .gitignore
```
- 步骤6: 创建你的第一篇文档
```bash
mkdir docs
echo '# Hello VuePress' > docs/index.md
```
- 步骤7: 在本地启动服务器来开发你的文档网站
```bash
yarn docs:dev
```
### GitHub配置
- 创建项目
    - 项目名字：username.github.io （为了访问博客的时候可以直接通过该路径跳转）
- 生成自己的GitHunToken
    > 参考 [GitHub Token](https://sauljwu.github.io/pages/d6f511/#%E7%94%9F%E6%88%90github-token)
    - 点击右上角用户头像
    - 在下拉菜单中选择setting
    - 在侧边栏中选择 Developer settings
    - 选择 Personal access tokens
- 新建Token 名字随便起 
    - 将生成的Token绑定到项目中
    - 点击项目中的setting
    -点击侧边栏 Secrets-> Actions
    - 点击Actions secrets 添加与 .doc.yml文件中 同名的 ACCESS_TOKEN 
- 将仓库地址与本地项目统一
- 将代码push到master即可
### .doc.yml
> github读取该文件 在Action 构建打包上传
```yml
name: docs

on:
  # 每当 push 到 master 分支时触发部署
  push:
    branches: [master]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20]

    steps:
      - uses: actions/checkout@v3

      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm docs:build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vitepress/dist
```