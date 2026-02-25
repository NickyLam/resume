# AI Resume Homepage

一个偏 AI 科技硬核风格的个人简历主页模板，适合部署到 GitHub Pages。

## 文件结构

- `index.html`：页面结构
- `styles.css`：视觉样式
- `script.js`：渲染逻辑
- `resume.config.json`：简历数据（主要编辑这个文件）

## 快速开始

1. 修改 `resume.config.json` 为你的真实信息。
2. 本地预览（任选其一）：

```bash
# 方式1：Python
python3 -m http.server 8080

# 方式2：Node (如果你有 http-server)
npx http-server -p 8080
```

打开 `http://localhost:8080`。

## 部署到 GitHub Pages

### 1) 推送代码

```bash
git init
git add .
git commit -m "feat: init ai resume homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2) 开启 Pages

仓库页面 -> `Settings` -> `Pages`：

- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/ (root)`

保存后等待 1-2 分钟。

### 3) 访问地址

- 用户主页仓库（`<your-username>.github.io`）：
  `https://<your-username>.github.io`
- 普通仓库：
  `https://<your-username>.github.io/<repo-name>/`

## 自定义说明

主要修改 `resume.config.json`：

- `basics`：姓名、标题、联系方式、CV
- `metrics`：首页关键数字（建议 3-4 条）
- `experience`：经历
- `projects`：项目
- `skills`：技能
- `socials`：外链
- `theme.accent` / `theme.accent2`：主题色

## 注意

- 这是纯静态页面，不依赖后端。
- 如果页面未加载数据，先检查 `resume.config.json` 路径是否正确，以及是否通过 HTTP 服务打开（而非直接双击文件）。
