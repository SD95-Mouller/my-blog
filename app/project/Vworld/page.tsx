import Link from "next/link";
export default function Vworld(){
    return(
        <main className="h-screen flex flex-col items-center justify-center bg-black text-white">
        
        <Link href={"/project/Vworld/diary"}>
       <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
        开发日记
      </button>
      </Link>
        </main>
    );
}
