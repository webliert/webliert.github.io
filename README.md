# webliert.github.io

> 🤖 Robotics Researcher · 给机器人写灵魂的代码农

我的个人主页，部署在 GitHub Pages。

在线访问：<https://webliert.github.io>

## ✨ 特性

- **暗色玻璃拟态**风格 + 可切换亮色主题
- **响应式布局**：桌面端左右两栏，移动端单栏堆叠
- **零依赖**：原生 HTML / CSS / JavaScript，无任何框架或打包工具
- **可自定义**：所有颜色 / 模糊度通过 CSS 变量驱动（`static/css/root.css`）

## 🛠️ 技术栈

- HTML5
- CSS3（CSS Variables / Backdrop Filter / Grid Layout）
- Vanilla JavaScript（Cookie 主题持久化、图片弹窗）

## 📁 项目结构

```
.
├── index.html              # 单页面入口
├── README.md
└── static/
    ├── css/
    │   ├── root.css        # 主题变量（暗色 / 亮色）
    │   └── style.css       # 布局、动画、玻璃样式
    ├── js/
    │   └── script.js       # 交互逻辑
    ├── fonts/              # Ubuntu 字体
    ├── svg/                # 技能墙 / 蛇形 SVG
    └── img/                # 头像、背景、项目封面
```

## 🚀 本地预览

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 📝 自定义指南

| 想改什么 | 改哪里 |
|---|---|
| 姓名 / 简介 / 描述 | `index.html` 里的 `header` 区块 |
| 项目卡片 | `index.html` 里的 `.projectList` |
| 头像 | 替换 `static/img/logo.png` |
| 背景图 | 替换 `static/img/background.png` |
| 主题色 | `static/css/root.css` 顶部变量 |
| 模糊强度 | `--card-filter`（默认 18px，0=不模糊）|

## 🙏 致谢

- 布局骨架参考自 [ZYYO666/homepage](https://github.com/ZYYO666/homepage)
- 蛇形 SVG 来自 [Platane/snk](https://github.com/Platane/snk)
- 技能墙 SVG 来自 [tandpfun/skill-icons](https://github.com/tandpfun/skill-icons)