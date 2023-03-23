# Git操作
---
![图片](/blog/git.png)
#### 常用命令
```bash
= 临时储存代码
git stash  #将暂存区与工作区的代码 储存到某区域某处
git stash pop #将储存的代码释放出来
git stash list #查看当前stash的所有记录
git stash apply stash@{0} #将某条记录释放出来
git stash clear #删除所有记录

= commit时不校验eslint
git commit -m '' --no-verigy

= 查询提交记录
git log
-2 #查询几条
-p #显示每个提交的差异
--stat #显示每次提交的文件修改信息

= 提交commit 之后发现漏提交几个文件
git commit -m '' --amend #会归类到上一次提交的commit中

= 撤销工作区或暂存区的代码
git checkout . #撤销工作区的修改
git checkout HEAD . #撤销工作区，暂存区的修改 （HEAD表示当前分支最新的工作区，暂存区

= 撤销某条commit 
git reset --xx <commit>
--soft  #撤销commit并保存修改在暂存区
--mixed #撤销commit并保存修改在工作区
--hard #撤销commit 并删除修改
git reset --soft HEAD~2 # HEAD～2 最近两条的commit记录

= 撤销commit 并保留记录
git revert <commit> 
git revert HEAD^ #HEAD^ == HEAD~1 表示最新的一条commit记录
```
