# 科技风格个人在线简历 - 使用指南

## 📋 目录

1. [项目简介](#项目简介)
2. [JSON配置文件说明](#json配置文件说明)
3. [本地开发环境搭建](#本地开发环境搭建)
4. [个人信息配置指南](#个人信息配置指南)
5. [GitHub Pages部署步骤](#github-pages部署步骤)
6. [常见问题与解决方案](#常见问题与解决方案)
7. [个性化定制建议](#个性化定制建议)

---

## 项目简介

这是一个具有现代科技风格的个人在线简历网页，采用深色背景、霓虹色调点缀、几何线条元素及流畅的动画效果，营造强烈的科技感与未来感。

### 主要特性

- 🎨 **科技风格设计** - 深色主题配合霓虹色彩，几何线条装饰
- 📱 **完全响应式** - 完美适配桌面、平板、移动设备
- ⚡ **流畅动画** - 滚动触发动画、悬停效果、粒子背景
- 🔧 **易于配置** - 所有数据集中在JSON文件，修改便捷
- 🚀 **GitHub Pages就绪** - 可直接部署，无需后端服务

### 项目结构

```
tech-resume/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── app.js          # 应用逻辑
├── data/
│   └── config.json     # 配置文件（核心）
├── assets/             # 资源文件夹
│   └── avatar.jpg      # 头像图片
└── README.md           # 本文档
```

---

## JSON配置文件说明

配置文件位于 `data/config.json`，包含所有可自定义的内容。

### 完整字段说明

#### 1. personal（个人信息）

```json
{
  "personal": {
    "name": "张三",                    // 姓名
    "title": "高级全栈工程师",          // 职位头衔
    "avatar": "assets/avatar.jpg",    // 头像路径（支持jpg/png/webp）
    "summary": "...",                  // 个人简介（建议100-200字）
    "location": "北京市朝阳区",         // 所在地
    "availability": "开放机会"          // 状态：开放机会/暂不考虑/在职看机会
  }
}
```

#### 2. contact（联系方式）

```json
{
  "contact": {
    "email": "your@email.com",         // 邮箱
    "phone": "+86 138-0000-0000",      // 电话
    "github": "https://github.com/username",  // GitHub主页
    "linkedin": "https://linkedin.com/in/username", // LinkedIn
    "website": "https://yoursite.com", // 个人网站
    "wechat": "your_wechat_id"         // 微信号
  }
}
```

#### 3. education（教育背景）

```json
{
  "education": [
    {
      "school": "清华大学",             // 学校名称
      "degree": "计算机科学与技术 · 硕士", // 学位专业
      "period": "2014 - 2017",         // 时间段
      "location": "北京",               // 地点
      "highlights": [                   // 亮点列表（建议3-5条）
        "研究方向：分布式系统与云计算",
        "GPA: 3.8/4.0，专业排名前5%"
      ]
    }
  ]
}
```

#### 4. experience（工作经历）

```json
{
  "experience": [
    {
      "company": "字节跳动",            // 公司名称
      "position": "高级技术专家",       // 职位
      "period": "2021.03 - 至今",      // 时间段
      "location": "北京",               // 地点
      "type": "全职",                   // 类型：全职/实习/兼职
      "description": "...",             // 工作描述
      "achievements": [                 // 成就列表（建议3-5条）
        "主导推荐系统重构，响应时间降低40%"
      ],
      "technologies": ["Go", "Kubernetes", "Redis"] // 使用的技术栈
    }
  ]
}
```

#### 5. projects（项目经验）

```json
{
  "projects": [
    {
      "name": "智能推荐引擎",           // 项目名称
      "role": "技术负责人",             // 担任角色
      "period": "2022.01 - 2023.06",   // 时间段
      "description": "...",             // 项目描述
      "highlights": [                   // 项目亮点（建议3-4条）
        "采用Transformer架构"
      ],
      "technologies": ["Python", "PyTorch"], // 技术栈
      "link": "https://github.com/..."  // 项目链接（可选）
    }
  ]
}
```

#### 6. skills（技能特长）

```json
{
  "skills": {
    "programming": [                    // 编程语言
      {"name": "Go", "level": 95, "years": 5}  // level: 熟练度0-100
    ],
    "frameworks": [...],                // 框架
    "databases": [...],                 // 数据库
    "tools": [...],                     // 工具
    "soft": ["技术领导力", "团队协作"]   // 软技能
  }
}
```

#### 7. certifications（认证资质）

```json
{
  "certifications": [
    {
      "name": "AWS Solutions Architect",  // 证书名称
      "issuer": "Amazon Web Services",    // 颁发机构
      "date": "2023",                     // 获得日期
      "credential": "AWS-SAP-12345"       // 证书编号（可选）
    }
  ]
}
```

#### 8. languages（语言能力）

```json
{
  "languages": [
    {"name": "中文", "level": "母语"},
    {"name": "英语", "level": "流利 (CET-6)"}
  ]
}
```

#### 9. interests（兴趣爱好）

```json
{
  "interests": ["开源贡献", "技术写作", "马拉松", "摄影"]
}
```

#### 10. theme（主题配色）

```json
{
  "theme": {
    "primaryColor": "#00f5ff",      // 主色调（青色）
    "secondaryColor": "#ff00ff",    // 次要色（品红）
    "accentColor": "#00ff88",       // 强调色（绿色）
    "backgroundColor": "#0a0a1a"    // 背景色（深蓝黑）
  }
}
```

---

## 本地开发环境搭建

### 方法一：使用 VS Code Live Server（推荐）

1. 安装 VS Code 编辑器
2. 安装 Live Server 扩展
3. 打开项目文件夹
4. 右键 `index.html` → "Open with Live Server"

### 方法二：使用 Python 简易服务器

```bash
# Python 3
cd tech-resume
python -m http.server 8000

# 访问 http://localhost:8000
```

### 方法三：使用 Node.js

```bash
# 安装 serve
npm install -g serve

# 运行
cd tech-resume
serve .

# 访问 http://localhost:3000
```

### 方法四：使用 PHP 内置服务器

```bash
cd tech-resume
php -S localhost:8000

# 访问 http://localhost:8000
```

---

## 个人信息配置指南

### 步骤 1：准备头像

1. 准备一张正方形头像图片（建议 400x400 像素以上）
2. 将图片放入 `assets/` 文件夹
3. 在 `config.json` 中更新路径：
   ```json
   "avatar": "assets/your-avatar.jpg"
   ```

### 步骤 2：编辑基本信息

打开 `data/config.json`，修改以下内容：

1. **personal** - 填写姓名、职位、简介
2. **contact** - 填写联系方式
3. **education** - 添加教育经历
4. **experience** - 添加工作经历
5. **projects** - 添加项目经验
6. **skills** - 设置技能等级

### 步骤 3：自定义技能等级

技能等级（level）建议范围：

- **90-100**: 精通/专家级
- **70-89**: 熟练/高级
- **50-69**: 中等/中级
- **30-49**: 基础/入门

### 步骤 4：调整主题颜色

在 `config.json` 的 `theme` 部分修改颜色：

```json
{
  "theme": {
    "primaryColor": "#2563eb",    // 修改为你喜欢的主色
    "secondaryColor": "#7c3aed",  // 修改次要色
    "accentColor": "#059669",     // 修改强调色
    "backgroundColor": "#f8fafc"  // 修改背景色
  }
}
```

推荐配色方案：

| 风格 | 主色 | 次要色 | 强调色 | 背景 |
|------|------|--------|--------|------|
| 极简白（默认） | #2563eb | #7c3aed | #059669 | #f8fafc |
| 科技青 | #00f5ff | #ff00ff | #00ff88 | #0a0a1a |
| 赛博朋克 | #ff00ff | #00ffff | #ffff00 | #0d0d0d |
| 暗夜紫 | #a855f7 | #ec4899 | #22d3ee | #0f0a1a |
| 翡翠绿 | #10b981 | #06b6d4 | #f59e0b | #022c22 |

---

## GitHub Pages部署步骤

### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub
2. 点击 "New repository"
3. 仓库名建议格式：`your-username.github.io` 或 `resume`
4. 选择 Public（公开）
5. 点击 "Create repository"

### 步骤 2：上传项目文件

**方法 A：使用 Git 命令行**

```bash
# 进入项目目录
cd tech-resume

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Tech Resume"

# 添加远程仓库
git remote add origin https://github.com/your-username/resume.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**方法 B：使用 GitHub Desktop**

1. 打开 GitHub Desktop
2. File → Add Local Repository
3. 选择项目文件夹
4. 点击 "Publish repository"

**方法 C：直接上传**

1. 在 GitHub 仓库页面点击 "uploading an existing file"
2. 拖拽所有项目文件
3. 点击 "Commit changes"

### 步骤 3：启用 GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"，目录选择 "/ (root)"
5. 点击 "Save"

### 步骤 4：访问你的简历

- 如果仓库名是 `username.github.io`，访问：`https://username.github.io`
- 如果仓库名是其他名称，访问：`https://username.github.io/resume`

部署完成后，GitHub Pages 会自动分配一个 `github.io` 域名，你也可以配置自定义域名。

---

## 常见问题与解决方案

### Q1: 页面显示"加载数据失败"

**原因**：直接打开 HTML 文件会遇到跨域限制

**解决方案**：
- 使用本地服务器（见"本地开发环境搭建"）
- 不要直接双击打开 `index.html`

### Q2: 头像无法显示

**可能原因及解决方案**：

1. **路径错误**：确保路径正确
   ```json
   "avatar": "assets/avatar.jpg"  // 正确
   "avatar": "/assets/avatar.jpg" // 可能错误
   ```

2. **文件不存在**：确认图片已放入 `assets/` 文件夹

3. **格式不支持**：使用 jpg、png、webp 格式

### Q3: GitHub Pages 部署后样式丢失

**解决方案**：

1. 检查文件路径是否使用相对路径
2. 如果仓库名不是 `username.github.io`，需要修改路径：
   
   在 `index.html` 中修改：
   ```html
   <link rel="stylesheet" href="./css/style.css">
   <script src="./js/app.js"></script>
   ```

### Q4: 中文显示乱码

**解决方案**：

确保所有文件使用 UTF-8 编码：
- JSON 文件保存为 UTF-8
- HTML 已包含 `<meta charset="UTF-8">`

### Q5: 动画卡顿

**解决方案**：

1. 减少粒子数量：修改 `app.js` 中的 `particleCount`
2. 关闭动画：在 CSS 中添加 `prefers-reduced-motion` 支持

### Q6: 手机端菜单无法点击

**解决方案**：

确保 JavaScript 正确加载，检查浏览器控制台是否有错误。

### Q7: 如何导出为PDF？

**方法一：浏览器打印（推荐）**

1. 在浏览器中打开简历页面
2. 按 `Ctrl+P`（Windows）或 `Cmd+P`（Mac）打开打印对话框
3. 目标打印机选择"另存为 PDF"或"Save as PDF"
4. 确保勾选"背景图形"选项以保留颜色
5. 点击保存

**方法二：Chrome 开发者工具**

1. 按 `F12` 打开开发者工具
2. 按 `Ctrl+Shift+P`（Windows）或 `Cmd+Shift+P`（Mac）
3. 输入 "Capture full size screenshot"
4. 保存截图后转换为 PDF

**打印优化说明**：

项目已内置打印样式优化，会自动：
- 隐藏导航栏、动画背景、返回顶部按钮等非必要元素
- 调整字体大小和间距以适应 A4 纸张
- 压缩内容布局，尽可能在单页显示
- 保留颜色和关键视觉元素

**提示**：如果内容较多无法单页显示，可以在打印设置中调整边距或缩放比例。

---

## 个性化定制建议

### 1. 修改字体

在 `index.html` 中更换 Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

在 `css/style.css` 中修改：

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### 2. 添加新的模块

1. 在 `index.html` 中添加新的 section
2. 在 `config.json` 中添加对应数据
3. 在 `app.js` 中添加渲染函数

### 3. 调整动画速度

在 `css/style.css` 中修改动画时长：

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### 4. 添加深色/浅色模式切换

可以扩展主题系统，添加主题切换按钮：

```javascript
// 在 app.js 中添加
toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
}
```

### 5. 添加 Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 6. SEO 优化建议

1. 修改 `index.html` 中的 meta 标签：
   ```html
   <meta name="description" content="你的个人简介">
   <meta name="keywords" content="你的关键词">
   ```

2. 添加 Open Graph 标签用于社交分享

### 7. 性能优化

1. 压缩图片（使用 TinyPNG 等工具）
2. 压缩 CSS 和 JS 文件
3. 使用 CDN 加载字体和图标库

---

## 技术支持

如有问题，可以：

1. 检查浏览器控制台错误信息
2. 确认 JSON 格式正确（使用 JSONLint 验证）
3. 参考本文档的常见问题部分

---

**祝你使用愉快！🎉**
