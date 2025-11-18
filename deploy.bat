@echo off
git add .
echo 输入递交修改信息:
set /p commit_msg=
git commit -m "%commit_msg%"
git push origin main
echo 部署完成！Github Actions 已触发...
pause