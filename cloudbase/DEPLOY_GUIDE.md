# 腾讯CloudBase部署指南

本文档提供了将中医诊断系统部署到腾讯CloudBase的详细步骤。

## 前期准备

### 1. 腾讯云账号
- 注册腾讯云账号：[https://cloud.tencent.com/](https://cloud.tencent.com/)
- 完成实名认证

### 2. CloudBase环境
- 登录[腾讯云控制台](https://console.cloud.tencent.com/)
- 进入CloudBase服务
- 创建新环境（建议选择**按量计费**方式）
- 记录环境ID（稍后需要使用）

### 3. 本地环境
- 安装Node.js 14.x或更高版本
- 安装Git

## 部署步骤

### 方法一：使用部署脚本（推荐）

1. 双击运行 `cloudbase/deploy.bat`
2. 根据提示输入CloudBase环境ID
3. 脚本将自动完成登录、配置更新和部署

### 方法二：手动部署

1. 安装CloudBase CLI
```bash
npm install -g @cloudbase/cli
```

2. 登录CloudBase
```bash
tcb login
```

3. 更新环境ID
- 编辑 `cloudbase/cli.json` 文件
- 将 `"envId": "your-env-id"` 中的 `your-env-id` 替换为你的实际环境ID

4. 构建Hugo项目（如果需要）
```bash
hugo
```

5. 部署到CloudBase
```bash
tcb framework deploy --config-file cloudbase/cli.json
```

## 配置环境变量

部署完成后，需要在CloudBase控制台设置以下环境变量：

1. 进入CloudBase控制台
2. 选择你的环境
3. 点击左侧菜单的「函数管理」
4. 选择`submitDiagnosis`函数
5. 点击「函数配置」
6. 找到「环境变量」部分，点击「编辑」
7. 添加以下环境变量：
   - `DEEPSEEK_API_KEY`: DeepSeek API的访问密钥
   - `EMAIL_USER`: 发送邮件的邮箱账号
   - `EMAIL_PASS`: 发送邮件的邮箱密码/授权码
   - `ADMIN_EMAIL`: 管理员邮箱地址（可选）
8. 点击「保存」

## 配置前端API路径

在部署前端之前，需要更新前端代码中的API调用路径：

1. 编辑 `content/_index.zh-cn.md` 文件
2. 找到以下配置区域：
```javascript
// 配置区域 - 请根据部署环境修改以下配置
const useCloudBase = true; // 设置为true使用CloudBase，false使用Vercel
const cloudBaseEnvId = 'your-env-id'; // 替换为你的CloudBase环境ID
```
3. 将 `cloudBaseEnvId` 替换为你的实际环境ID
4. 确保 `useCloudBase` 设置为 `true`

## CI/CD配置

### GitHub Actions配置

1. 在项目根目录创建 `.github/workflows/deploy-cloudbase.yml` 文件
2. 内容如下：

```yaml
name: Deploy to CloudBase

on:
  push:
    branches: [ main, master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      
      - name: Install CloudBase CLI
        run: npm install -g @cloudbase/cli
      
      - name: Update envId
        run: |
          sed -i 's/your-env-id/${{ secrets.CLOUDBASE_ENV_ID }}/g' cloudbase/cli.json
      
      - name: Deploy to CloudBase
        run: |
          tcb login --apiKeyId ${{ secrets.CLOUDBASE_API_KEY_ID }} --apiKey ${{ secrets.CLOUDBASE_API_KEY }}
          tcb framework deploy --config-file cloudbase/cli.json
```

3. 在GitHub仓库设置中添加以下Secrets：
   - `CLOUDBASE_ENV_ID`: CloudBase环境ID
   - `CLOUDBASE_API_KEY_ID`: 腾讯云API密钥ID
   - `CLOUDBASE_API_KEY`: 腾讯云API密钥

## 测试和验证

部署完成后，进行以下测试：

1. 访问CloudBase分配的网站URL
2. 提交一个诊断请求
3. 检查邮箱是否收到诊断结果

## 常见问题

### 1. 部署失败
- 检查环境ID是否正确
- 确保CloudBase CLI版本最新
- 检查网络连接

### 2. API调用失败
- 确认环境变量已正确设置
- 检查前端代码中的API路径配置
- 查看CloudBase函数日志

### 3. 邮件发送失败
- 确认邮箱账号和密码/授权码正确
- 检查邮箱SMTP服务是否已启用
- 查看CloudBase函数日志

## 其他说明

- 函数超时时间设置为60秒，以适应DeepSeek API的响应时间
- 内存大小设置为256MB，可根据实际需求调整
- 部署配置文件 `.gitignore` 中建议忽略 `cloudbase/.env` 等敏感文件