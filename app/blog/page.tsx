import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = getAllPosts();

  const targetTag = "技术";
  const filteredPosts = posts.filter(post => {
    if (Array.isArray(post.tags)) {
      return post.tags.includes(targetTag);
    }
    return false;
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Link 
        href="/" 
        className="text-gray-400 hover:text-white mb-6 inline-block transition-colors"
      >
        ← 返回首页
      </Link>
      <h1 className="text-4xl font-bold mb-6">技术文章</h1>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="p-4 border border-gray-700 rounded cursor-pointer hover:bg-gray-800">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
