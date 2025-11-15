# 腾讯CloudBase环境配置指南

## 环境变量设置

在腾讯CloudBase控制台中，需要设置以下环境变量：

| 环境变量名 | 描述 | 是否必需 |
|----------|------|--------|
| DEEPSEEK_API_KEY | DeepSeek API的访问密钥 | 是 |
| EMAIL_USER | 发送邮件的邮箱账号 | 是 |
| EMAIL_PASS | 发送邮件的邮箱密码/授权码 | 是 |
| ADMIN_EMAIL | 管理员邮箱地址 | 否（默认为bluey@139.com） |

## 设置步骤

1. 登录[腾讯云控制台](https://console.cloud.tencent.com/)
2. 进入CloudBase服务
3. 选择你的环境
4. 点击左侧菜单的「函数管理」
5. 选择`submitDiagnosis`函数
6. 点击「函数配置」
7. 找到「环境变量」部分，点击「编辑」
8. 添加上述环境变量及其对应值
9. 点击「保存」完成设置

## 注意事项

1. **DeepSeek API密钥**：请确保使用有效的API密钥，建议使用主密钥以获得完整权限
2. **邮箱配置**：
   - 如果使用iCloud邮箱，需要生成专用的App密码
   - 其他邮箱服务需要确保SMTP服务已启用
3. **安全考虑**：
   - 环境变量中的敏感信息（如密码、密钥）在CloudBase中是加密存储的
   - 请勿在代码中硬编码敏感信息
   - 定期更新API密钥和密码以提高安全性

## 环境变量管理最佳实践

1. 使用CloudBase CLI管理环境变量（适用于CI/CD流程）：
   ```bash
   # 安装CloudBase CLI
   npm install -g @cloudbase/cli
   
   # 登录
   tcb login
   
   # 设置环境变量
   tcb fn config set -e [环境ID] -f submitDiagnosis --key DEEPSEEK_API_KEY --value "your_api_key"
   ```

2. 不同环境（开发、测试、生产）使用不同的环境变量配置

3. 定期轮换敏感信息，特别是API密钥和邮箱密码

4. 对于团队开发，可以使用环境变量模板，确保所有团队成员使用一致的配置结构