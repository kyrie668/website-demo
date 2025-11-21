# EmailJS 配置指南

本文档说明如何配置 EmailJS 以实现联系表单发送邮件功能。

## 步骤 1: 注册 EmailJS 账户

1. 访问 https://www.emailjs.com/
2. 点击 "Sign Up" 注册免费账户（免费套餐每月可发送 200 封邮件）

## 步骤 2: 添加 Email Service

1. 登录后进入 Dashboard
2. 点击左侧菜单 "Email Services"
3. 点击 "Add New Service"
4. 选择你的邮箱服务提供商（Gmail、Outlook 等）
5. 按照提示完成授权连接
6. 复制生成的 **Service ID**

## 步骤 3: 创建 Email Template

1. 点击左侧菜单 "Email Templates"
2. 点击 "Create New Template"
3. 设置模板名称（如 "Contact Form"）
4. 在模板中使用以下变量：

```
Subject: 新联系表单提交 - {{from_name}}

内容：
姓名: {{from_name}}
邮箱: {{from_email}}
电话: {{phone}}
地点: {{location}}
需求描述: {{message}}
```

5. 在 "To Email" 字段填入接收邮件的邮箱：`maymaychu.mcc@gmail.com`
6. 点击 "Save"
7. 复制生成的 **Template ID**

## 步骤 4: 获取 Public Key

1. 点击左侧菜单 "Account" > "General"
2. 在 "API Keys" 部分找到 **Public Key**
3. 复制 Public Key

## 步骤 5: 配置环境变量

在项目根目录创建 `.env` 文件（如果不存在），并添加以下配置：

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

⚠️ **重要**: 
- `.env` 文件不应提交到 Git 仓库
- 已添加到 `.gitignore` 中
- 生产环境需要在部署平台配置这些环境变量

## 步骤 6: 测试表单

1. 启动开发服务器：`npm run dev`
2. 访问联系页面
3. 填写表单并提交
4. 检查配置的接收邮箱是否收到邮件

## 故障排除

### 邮件未收到

1. 检查邮箱的垃圾邮件文件夹
2. 确认 EmailJS 账户未超过免费额度限制
3. 检查浏览器控制台是否有错误信息
4. 确认环境变量已正确配置

### 配置错误

如果看到 "EmailJS 未配置" 错误，请检查：
1. `.env` 文件是否存在
2. 环境变量名称是否正确（必须以 `VITE_` 开头）
3. 是否需要重启开发服务器

## 免费套餐限制

- 每月 200 封邮件
- 如需更多，可升级到付费套餐

## 替代方案

如果不想使用 EmailJS，可以考虑：
1. 使用后端 API（Node.js/Express + nodemailer）
2. 使用 Formspree、SendGrid 等第三方服务
3. 使用 Next.js API Routes（如果迁移到 Next.js）

