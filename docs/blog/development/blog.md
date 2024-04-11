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
         ├──.temp
         ├──configs
             ├──navbar.js //导航栏配置
             ├──sidebar.js //侧边栏配置
         ├──public //静态文件
         ├──config.js //配置文件
     ├── blog //用来存放MD文件
         └── ...
     └── README.md //入口页面
├── .gitignore //git提交黑名单
└── package.json
```
### 搭建项目
- 步骤1: 创建并进入一个新目录
```bash
mkdir vuepress-starter
cd vuepress-starter
```
- 步骤2: 初始化项目
```bash
git init
yarn init
```
- 步骤3: 将 VuePress 安装为本地依赖
```bash
yarn add -D vuepress@next
```
- 步骤4: 在 package.json 中添加一些 scripts在新窗口打开
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
- 步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```
- 步骤6: 创建你的第一篇文档
```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
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
name: docs # workflow名称

on: # 触发条件
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [master]
  # 是否手动触发部署
  workflow_dispatch:
jobs:
  docs:
    runs-on: ubuntu-latest # 指定运行所需要的虚拟机环境（必填）

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: "14"

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        env:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
```