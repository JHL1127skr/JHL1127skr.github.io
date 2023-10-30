# 检测代码重复率

---

使用「jscpd」检测项目中代码的重复率，针对复制粘贴的代码尤其有效，支持超过 150 种的源码文件格式。

#### 一、安装

```bash
npm i jscpd -g
```

#### 二、配置

可以创建`.jscpd.json`，或者直接在`package.json` 中配置。

1. `threshold`：重复率超过多少报错
2. `reporters`：输出形式
    1. html：网页
    2. console：控制台输出
3. `ignore`：忽略文件
4. `format`：进行重复度检测的源代码格式, 不写默认全部
5. `absolute`：绝对路径

```json
  "jscpd": {
   "threshold": 5,
   "reporters": [
   "html",
   "console"
   ],
   "ignore": [
   ".git",
   "node_modules",
   "public",
   ".husky"
   ],
   "format": ["javascript", "vue"],
   "absolute": true
   }
```

#### 三、执行

```bash
# 命令 文件 输出地址
jscpd ./src -o 'report'
```

#### 四、结果

控制台
![图片](/blog/CodeRepeatLog.png)

网页

![图片](/blog/CodeRepeatHtml.png)
![图片](/blog/CodeRepeatHtml2.png)

#### 五、在 commit 提交检测

在 ` pre-commit` 文件中加入命令，通过上述的 `threshold` 来控制是否报错打断

```json
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

jscpd ./src
npx lint-staged
```
