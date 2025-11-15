# 本地测试指南

本指南将帮助您在本地环境中测试DeepSeek与邮箱交互的诊询功能。

## 环境要求

- Node.js 18+（内置fetch API）或安装node-fetch依赖
- npm 或 yarn 包管理器

## 测试步骤

### 1. 安装依赖

首先，在项目根目录运行以下命令安装所需依赖：

```bash
npm install
```

### 2. 运行本地测试服务器

我们创建了一个模拟Vercel云函数环境的测试脚本。运行以下命令启动测试服务器：

```bash
node api/test-local.js
```

该脚本会：
- 启动一个Express服务器监听3000端口
- 自动运行一个测试案例，调用DeepSeek API获取诊断结果
- 输出诊断结果到控制台
- **注意**：邮件发送部分默认被注释，避免在测试时发送真实邮件

### 3. 测试方法

有两种方式可以测试：

#### 方法一：自动测试

运行测试脚本后，系统会自动执行测试，输出DeepSeek API的诊断结果。

#### 方法二：手动发送请求

您可以使用Postman、curl或其他工具发送POST请求到：
`http://localhost:3000/api/submitDiagnosis`

请求体示例：
```json
{
  "symptom": "头痛，伴有轻微恶心，已经持续两天。",
  "email": "test@example.com"
}
```

### 4. 测试完整邮件功能（可选）

如果您想测试完整的邮件发送功能：

1. 打开 `api/test-local.js` 文件
2. 取消注释以下两行代码：
   ```javascript
   // await sendEmailToUser(testEmail, testSymptom, diagnosisResult);
   // await sendEmailToAdmin(testEmail, testSymptom, diagnosisResult);
   ```
3. 确保 `api/submitDiagnosis.js` 中的邮件配置正确
4. 重新运行测试脚本

**注意**：确保SMTP配置正确，特别是邮箱密码。iCloud邮箱需要使用应用专用密码。

## 测试限制

1. **API调用限制**：DeepSeek API有调用次数限制，请避免频繁测试
2. **邮件发送**：需要真实有效的SMTP配置和邮箱账户
3. **性能差异**：本地测试环境与Vercel云函数环境可能存在性能差异

## 故障排除

### 常见问题

1. **fetch is not defined**
   - 确保使用Node.js 18+版本
   - 或者安装node-fetch: `npm install node-fetch`
   - 并在代码中添加: `const fetch = require('node-fetch');`

2. **邮件发送失败**
   - 检查SMTP配置是否正确
   - 确认邮箱密码是否为应用专用密码（特别是iCloud邮箱）
   - 确保网络连接正常，没有被防火墙阻止

3. **DeepSeek API错误**
   - 检查API密钥是否正确
   - 确认API是否可用（可能需要访问DeepSeek官网检查状态）