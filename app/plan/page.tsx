"use client";

export default function Plan() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <Link href="/">
        <p className="mb-6">返回首页</p>
      </Link>
      <div className="max-w-xl border border-gray-700 p-8 rounded-xl hover:border-gray-400 transition-all duration-300">
        <h1 className="text-4xl font-bold mb-6">后续本站可能的更新计划</h1>
        <ol className="space-y-4 text-gray-300 text-lg">
          <li className="flex gap-3">
            <span className="text-white">▸</span>
            <span>增加访客量统计的功能</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">▸</span>
            <span>增加登录与评论功能</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white">▸</span>
            <span>修改UI，让本站更加美观</span>
          </li>
        </ol>
      </div>
    </main>
  );
}
