# git


推荐一个好玩的学习git命令的网站 [git](https://learngitbranching.js.org/?locale=zh_CN) 

创建xx分支。 git branch player-modal

切换分支。git checkout player-modal

Git status  查看对当前分支的修改了的文件

git status 对比冲突

git pull origin dev 拉取dev分支

git commit  提交
git branch xxxx 创建分支
git checkout xxx  切换分支
git checkout -b <your-branch-name>   创建同时切换分支


git branch -m oldName newName  修改本地分支名称

git push --delete origin oldName 删除远程分支

git push origin newName 上传本地分支

git branch --set-upstream-to origin/newName关联远程分支

git merge xxx 合并分支

Git  rebase xxx  线性合并分支

Git checkout xxx^^  切换到xxx到前两个父节点
Git checkout xxx~2  切换到xxx到前两个父节点

git branch -f xxx HEAD~3  切换分支xxx到HEAD的前三个父节点。 或者用来切换到xyzj节点


git reset HEAD^本地操作回退一个节点

Git  revert 回退远程的节点，在现在的节点下创造上一个节点的镜像

Git cherry-pick xx xxx xxx  将节点复制到当前HEAD节点下

Git rebase  -i   HEAD～4  通过弹出的ui界面操作修改提交节点顺序

git stash  save  ’暂存‘
git stash list 
git stash pop