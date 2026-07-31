"use client";
import Link from "next/link";
export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <Link href="/">
        <p className="mb-6">返回首页</p>
      </Link>
      <div className="max-w-xl border border-gray-700 p-8 rounded-xl hover:border-gray-400 transition-all duration-300">
        <h1 className="text-4xl font-bold mb-6">关于我</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          你好，我是一个大学生，在2025年升入大学，在2026年7月分流到软件工程专业。
        </p>
      </div>
    </main>
  );
}
