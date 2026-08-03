// 1. 导入 Link：用来做页面跳转
import Link from 'next/link';
// 2. 导入我们的文章工具
import { getPostById, getAllPosts } from '@/lib/posts';

// 3. 页面组件（新版Next.js必须await params）
export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostById(params.slug);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      {/* 🔴 新增：返回博客列表按钮 */}
      <Link 
        href="/life" 
        className="text-gray-400 hover:text-white mb-6 inline-block transition-colors"
      >
        ← 返回博客列表
      </Link>

      {/* 文章标题 */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {/* 文章日期 */}
      <p className="text-gray-400 mb-8">{post.date}</p>

      {/* 文章内容 */}
      <div
        className="max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}

// 生成所有文章路径
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}
