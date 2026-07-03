// 把 VitePress 构建产物 (docs/.vitepress/dist/) 的内容复制到 blog/ 根
// 这样 GitHub Pages 就能在 /blog/ 直接提供静态文件
import { cp, rm, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SRC = new URL('./docs/.vitepress/dist/', import.meta.url);
const DST = new URL('./', import.meta.url);

async function cleanBuildArtifacts() {
  // 清理上一次构建复制到根的产物（保留 docs/、node_modules/、package.json 等源文件）
  const entries = await readdir(DST);
  for (const name of entries) {
    if (name === 'docs' || name === 'node_modules' || name.startsWith('.')) continue;
    if (name === 'package.json' || name === 'package-lock.json' || name === 'README.md' || name === 'copy-dist.mjs') continue;
    await rm(join(DST, name), { recursive: true, force: true });
  }
}

async function copyRecursive(from, to) {
  await cp(from, to, { recursive: true, force: true });
}

await cleanBuildArtifacts();
await copyRecursive(SRC, DST);
console.log('✓ Build artifacts copied to blog/ root');