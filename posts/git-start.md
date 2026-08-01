---
title: 零基础完成git开发环境配置
date: "2026-07-21"
tags: ["技术", "git"]
---
# 零基础完成git开发环境配置
## 一、前言
本文面向零基础读者，详细讲解git开发环境配置。
## 二、操作步骤与知识讲解
### 1.安装git（针对windows系统）
#### 操作步骤
①打开https://git-scm.com/install/windows

②点击Git for Windows/x64 Setup(大部分情况都是点击这个，具体还是要看个人电脑)
![图片](git官网安装页面.png "安装git")

③之后一路默认并点击下一步（Next）即可

#### 原理讲解
①略

②x64,x86,ARMx64讲解

**x64**是指64位架构的windows操作系统，专门运行在现代64位cpu上；

**x86**是32位系统，现在基本已被淘汰；

**ARM64**是基于ARM的Windows64位操作系统。

x64安装包只能安装在64位windows系统上，而x86安装包不但可以安装在32位windows系统上，也可安装在64位windows系统上；

ARM64不能装ARM64之外的安装包，别的系统也不能装ARM64安装包。

③略

### 2.git配github
#### 操作步骤
①打开git-bash.exe

②运行命令：git --version

若返回版本号，则继续下一步。

③运行命令：

&emsp;&emsp;git config --global user.name"此处填写你的github用户名"

&emsp;&emsp;git config --global user.email"此处填写你的github关联邮箱"

④运行命令：git config --global --list

确认全局配置是正确的，之后继续下一步。

⑤运行命令：ssh-keygen -t ed25519 -C "填写你的github关联邮箱"

后续继续回车即可，直至进入下一步。

⑥运行命令： cat  ~/.ssh/id_ed25519.pub

将运行后终端输出的字符串复制

⑦打开github,点击右上角头像→点击settings→点击左侧SSH and GPG keys→New SSH key;

title自定义（比如windows-gitbash），把公钥内容粘贴到Key中，点击Add SSH key，后续完成账号验证即可。

⑧运行命令：ssh -T git@github.com

对于弹出的提示，输入yes并回车。

至此，我们便完成了git开发环境的配置，后续可以使用git操控github远程仓库。

#### 原理讲解
①**git-bash.exe**是Git for windows自带的一套终端模拟器，模拟出类似**Linux**的运行环境。

它使用**bash运行环境**，支持<u>所有的git命令</u>，<u>Linux常用命令</u>并且自带<u>OpenSSH</u>。

其中，**Bash**指的是Bourne Again Shell。而**Shell**指的是命令解释器，是人与操作系统内核之间的翻译官。

**Bash**就是Shell的一种，<u>Linux</u>的默认终端就是bash。

②这是一条git命令，用于查看git版本。

③git config是git配置命令；--global指全局级别，使得本机的所有git仓库共用这套配置；

user.name是提交代码时显示的作者名称，user.email是提交代码时绑定的作者邮箱。

执行这两条命令后，所有git commit都会带上相应的作者名称与作者邮箱。

④这是用于查看全局配置的Git命令

⑤SSH指的是Secure Shell（安全外壳协议），可以以加密方式远程登录另一台电脑/服务器。

ssh-keygen是OpenSSH自带的SSH密钥生成工具，用于生成非对称密钥对（公钥＋私钥），常用于Git与服务器免密SSH登录；

-t ed25519中，-t用于指定算法，而ed25519则是现代推荐的椭圆加密算法；

-C "填写你的github关联邮箱"，这里-C用来添加注释，一般是写邮箱，方便区分多组密钥。

注释会显示在公钥文件的末尾。

后续几步都是直接回车，这样会使得密钥对文件保存在默认地址，并且不给私钥设置密码。

⑥**cat**是Linux命令的一种，用于读取指定文件的内容并打印到终端。

**~**代表用户当前的家目录，整个文件结构最终指向的就是公钥文件，执行命令后所输出的字符串即为公钥。

⑦将SSH生成的公钥与github账号进行了绑定

⑧这是一条OpenSSH客户端命令，用于测试SSH连接是否通畅，首次连接会弹出主机身份确认提示。

此处不具体展开讲解该命令。
