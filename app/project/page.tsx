import Link from "next/link";
export default function project(){
  return(
    <main className="min-h-screen bg-black text-white p-10">
      <Link href="/">
        <p className="mb-6">返回首页</p>
      </Link>
      <h1 className="text-4xl font-bold mb-6">站长还没有个人项目</h1>
    </main>
  );
}
