"use client";
import Link from "next/link";
export default function Project() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <Link href="/">
        <p className="mb-6">⬅返回首页</p>
      </Link>
        <Link href={"/project/Vworld"}>
       <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        ai沉浸互动
      </button>
      </Link>
    </main>
  );
}
