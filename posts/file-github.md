---
title: 本地文件夹传到github
date: "2026-07-22"
tags: ["git", "技术"]
---

# 本地文件夹传到github
## 一、前言
本文主要针对零基础读者，详细讲解如何将本地文件夹传到github。

在阅读本文前，请您确保您已经完成了git的开发环境配置（使用SSH方式）。
## 二、操作步骤与知识讲解
### 操作步骤
#### 1.本地初始化git仓库
①打开git-bash.exe，切换目录到目标文件夹

②运行命令：git init

③运行命令：git add .

④运行命令：git commit -m "第一次提交，这是备注信息"
#### 2.github上创建新仓库
①进入github首页→点击右上角“+”→填写仓库名称（英文）与描述信息→选择公开（public）/私人（private）→点击绿色按钮Create repository

②复制仓库的SSH地址
#### 3.关联远程github仓库
①运行命令：git remote add origin 这里粘贴你上一步复制的SSH地址

②运行命令：git remote -v

若显示了origin与SSH地址，则进入下一步。

③运行命令：git push -u origin master
### 知识讲解
#### 1.本地初始化git仓库
①略

②这是一条git命令，在当前文件夹下创建git仓库，执行后会在当前文件夹下会创建一个隐藏的.git文件夹。

③这是一条git命令，添加当前目录下的所有文件到暂存区。

不理解什么是暂存区的读者请[点击这里](https://www.runoob.com/git/git-workflow.html "git工作流程介绍")，也可参考[这个](https://www.runoob.com/git/git-basic-operations.html "git基本操作与文件状态")。

④这是一条git命令，将暂存区的文件添加到本地仓库中。

引号内的内容是备注，可以自定义。
#### 2.github上创建新仓库
略
#### 3.关联远程github仓库
①git remote命令用于管理git远程仓库;add在当前仓库中新增远程仓库；

origin是自定义的远程仓库的别名，也可以命名成别的，但行业默认用origin代表主远程仓库；

SSH/HTTPS地址指向了远程git仓库，也就是说SSH/HTTPS地址是远程仓库的URL。

②该命令可以查看当前仓库所配置的远程仓库以及它们的URL。

③git push用于将本地的分支版本上传到远程仓库并合并；

origin是远程仓库的名称；

master是本地仓库分支的名称；

该命令将本地仓库的master分支推送到远程仓库origin的master分支。

中间的-u使得本地master分支与远程仓库的master分支绑定，后续推送时可以不用写完整命令。
