# Webliert's Blog

VitePress 静态博客，部署在 `https://webliert.github.io/blog/`。

## 文件结构

```
blog/
├── docs/                # 源文件
│   ├── index.md         # 首页
│   ├── about.md         # 关于页
│   ├── posts/           # 文章目录
│   └── .vitepress/      # VitePress 配置
├── package.json
├── copy-dist.mjs        # 构建后自动复制到 blog/ 根
└── index.html           # 构建产物（提交到仓库）
```

## 写新文章

1. 在 `docs/posts/` 下新建 `.md` 文件
2. 文件开头加 frontmatter：
   ```yaml
   ---
   title: 文章标题
   date: 2026-07-03
   tags: ['ROS2', 'MoveIt2']
   ---
   ```
3. 如果是新分类，记得在 `docs/.vitepress/config.mts` 的 `sidebar` 里加上链接

## 本地预览

```bash
npm install
npm run docs:dev
# 访问 http://localhost:5173/blog/
```

## 发布

```bash
npm run docs:build
# 自动把 dist 复制到 blog/ 根
git add blog
git commit -m "post: xxx"
git push
```

## 注意事项

- 每次写完文章都要 `npm run docs:build` + `git push` 才能上线
- 仓库根 `.gitignore` 已经忽略 `blog/node_modules/` 和 `blog/docs/.vitepress/dist/` 中间产物
- 但 `blog/index.html`、`blog/assets/`、`blog/posts/` 这些最终产物**不忽略**，需要提交