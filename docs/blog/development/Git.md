# Git操作
---
![图片](/blog/git.png)
#### 补充
```bash
git remote update origin -p #更新远端分支
git push origin --delete [branchname]  #删除远端分支
git stash #将修改代码放到本地另一个地方储存
git stash pop #将本地储存代码拉回
git commit -m '' --no-verify # 不校验eslint

删除本地分支
git branch -d xxx   
git branch -D xxx    #强制删除 如果分支未合并完全使用该命令

克隆测试分支上的代码
git clone -b develop 地址

创建分支xxx并推向远端	
git checkout -b xxx 
git push origin xxx

撤销commit 
git reset --soft HEAD^
```
#### merge中出现的问题
```bash
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.
#造成这个问题的原因是：没有拉去代码。
#解决办法:保留本地的更改,中止合并->重新合并->重新拉取
git merge --abort   #中止合并
git reset --merge   #撤销合并
git pull            #拉去代码
```
