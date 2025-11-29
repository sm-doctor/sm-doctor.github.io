@echo off
REM 设置命令提示符的代码页为UTF-8，解决中文显示问题
chcp 65001 > nul
setlocal enabledelayedexpansion

REM 确保我们在正确的目录中
cd /d %~dp0

echo 开始部署public目录到gh-pages分支...

REM 首先构建网站
if exist public rmdir /s /q public
echo 构建Hugo网站...
hugo --minify

if errorlevel 1 (
    echo 构建失败！请检查错误信息
    pause
    exit /b 1
)

REM 进入public目录
cd public

REM 初始化git仓库（如果尚未初始化）
if not exist .git (
    echo 初始化gh-pages git仓库...
    git init
    REM 请替换下面的URL为你的GitHub仓库URL
    git remote add origin https://github.com/sm-doctor/sm-doctor.github.io.git 2> nul || git remote set-url origin https://github.com/sm-doctor/sm-doctor.github.io.git
)

REM 检查gh-pages分支是否存在
set BRANCH_EXISTS=
git show-ref --verify --quiet refs/heads/gh-pages 2> nul && set BRANCH_EXISTS=true

if not defined BRANCH_EXISTS (
    echo 创建gh-pages分支...
    git checkout -b gh-pages
) else (
    echo 切换到gh-pages分支...
    git checkout gh-pages
)

REM 添加所有文件
git add .

REM 提交更改 - 使用日期作为默认提交信息
set default_commit_msg=Deploy site - %date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,8%
set /p commit_msg=输入提交信息 (默认: "%default_commit_msg%"): 
if "%commit_msg%"=="" set commit_msg=%default_commit_msg%
git commit -m "%commit_msg%"

REM 推送更改到远程gh-pages分支
echo 推送更改到远程gh-pages分支...
git push -f origin gh-pages

if errorlevel 1 (
    echo 推送失败！请检查错误信息
    pause
    exit /b 1
)

echo 部署成功完成！
pause
endlocal