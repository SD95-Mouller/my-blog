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
       <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        Enter
      </button>
      </Link>

    </main>
  );
}
