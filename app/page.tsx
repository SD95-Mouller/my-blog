"use client";
import Link from "next/link";
export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black text-white">
      
      <h1 className="text-5xl font-bold mb-4">
        SD95的个人网站
      </h1>

      <p className="text-lg text-gray-400 mb-6">
        花径不曾缘客扫，蓬门今始为君开
      </p>
      
      <Link href={"/blog"}>
       <button className="my-3 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        技术文章
      </button>
      </Link>
      <Link href={"/life"}>
       <button className="my-3 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        站长经历
      </button>
      </Link>
      <Link href={"/project"}>
       <button className="my-3 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        个人项目
      </button>
      </Link>
      <Link href={"/plan"}>
       <button className="my-3 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        后续更新
      </button>
      </Link>
      <Link href={"/about"}>
       <button className="my-3 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        自我介绍
      </button>
      </Link>

    </main>
  );
}
