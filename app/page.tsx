"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [show, setShow] = useState(true);

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
     

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white text-black p-6 rounded-lg text-center">
            <p className="mb-4">请问您是真人吗？</p>

            <button
              className="mr-2 px-4 py-2 bg-black text-white rounded"
              onClick={() => setShow(false)}
            >
              我是真人
            </button>

            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={() => alert("抱歉，您不能访问该网站")}
            >
              不是
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
