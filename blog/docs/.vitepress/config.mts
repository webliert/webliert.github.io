import { defineConfig } from 'vitepress';

export default defineConfig({
  // ⭐ 关键：部署在 /blog/ 子路径
  base: '/blog/',

  title: "Webliert's Blog",
  description: '给机器人写灵魂的代码农',
  lang: 'zh-CN',

  // 默认暗色
  appearance: 'dark',

  // 头部导航
  nav: [
    { text: '首页', link: '/' },
    { text: '归档', link: '/posts/' },
    { text: '关于', link: '/about' },
  ],

  // 社交链接
  socialLinks: [
    { icon: 'github', link: 'https://github.com/webliert' },
  ],

  // 侧边栏
  sidebar: {
    '/posts/': [
      {
        text: '文章',
        items: [
          { text: 'Hello World', link: '/posts/hello-world' },
          { text: 'MoveIt2 快速入门', link: '/posts/moveit2-quickstart' },
        ],
      },
    ],
    '/': [
      { text: '首页', link: '/' },
      { text: '归档', link: '/posts/' },
      { text: '关于', link: '/about' },
    ],
    '/about': [
      { text: '关于', link: '/about' },
    ],
  },

  // 本地搜索（无需 Algolia）
  search: {
    provider: 'local',
  },

  // Markdown 选项
  markdown: {
    lineNumbers: true,
  },

  // 站点底部
  footer: {
    message: 'Webliert © 2026 · Powered by VitePress',
    copyright: '',
  },
});