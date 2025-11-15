@echo off

REM 中医诊断系统 - CloudBase部署脚本
REM Windows批处理文件，用于快速部署到腾讯CloudBase

echo 开始部署中医诊断系统到腾讯CloudBase...

REM 检查Node.js是否安装
node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo 错误：未找到Node.js。请先安装Node.js 14.x或更高版本。
    pause
    exit /b 1
)

REM 检查CloudBase CLI是否安装，未安装则安装
where tcb >nul 2>nul
if %errorlevel% neq 0 (
    echo 正在安装CloudBase CLI...
    npm install -g @cloudbase/cli
    if %errorlevel% neq 0 (
        echo 错误：CloudBase CLI安装失败。
        pause
        exit /b 1
    )
)

REM 提示用户登录
set /p choice=是否需要登录CloudBase账号？(Y/N): 
if /i "%choice%" == "Y" (
    echo 正在启动CloudBase登录...
    tcb login
    if %errorlevel% neq 0 (
        echo 错误：CloudBase登录失败。
        pause
        exit /b 1
    )
)

REM 进入项目根目录
cd ..

REM 提示用户输入环境ID
set /p envId=请输入您的CloudBase环境ID: 

REM 更新cli.json中的环境ID
powershell -Command "(Get-Content cloudbase/cli.json) -replace 'your-env-id', '%envId%' | Set-Content cloudbase/cli.json"

REM 构建前端项目（如果需要）
echo 提示：如果需要构建前端项目，请在此处添加构建命令
REM hugo

REM 部署到CloudBase
echo 正在部署到CloudBase环境 %envId%...
tcb framework deploy --config-file cloudbase/cli.json

if %errorlevel% equ 0 (
    echo 部署成功！
    echo 请在前端代码中更新cloudBaseEnvId为：%envId%
    echo 请在CloudBase控制台设置必要的环境变量
) else (
    echo 部署失败！请检查错误信息。
    pause
    exit /b 1
)

pause