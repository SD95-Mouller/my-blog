import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  id: string;
  title: string;
  date: string;
  tags?: string[];
};

// 获取所有文章
export function getAllPosts(): Post[] {
  // 兜底：如果posts文件夹不存在，返回空数组
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    // 强制把日期转成字符串，避免之前的Date对象报错
    const dateStr = data.date instanceof Date
      ? data.date.toISOString().split('T')[0]
      : String(data.date);

    return { id, title: data.title, date: dateStr, tags: data.tags || [] };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 获取单篇文章
export async function getPostById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  // 兜底：如果文章不存在，直接跳404，不会报错
  if (!fs.existsSync(fullPath)) notFound();

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const dateStr = data.date instanceof Date
    ? data.date.toISOString().split('T')[0]
    : String(data.date);

  return { id, contentHtml, title: data.title, date: dateStr };
}