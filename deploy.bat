@echo off
git add .
echo Enter SM.DOCTOR's Project commit message:
set /p commit_msg=
git commit -m "%commit_msg%"
git push origin main
echo Deployment completed! SMD's Project Github Actions build triggered...
pause