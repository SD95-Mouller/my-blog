import Link from "next/link";
export default function Vworld(){
    return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <Link href="/project">
        <p className="mb-6">⬅返回上一页</p>
      </Link>
        <Link href={"/project/Vworld/diary"}>
       <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        开发日记
      </button>
      </Link>
        </main>
    );
}
