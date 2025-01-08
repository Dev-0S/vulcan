import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#000000e0] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
           <span className="text-[hsl(63,91%,64%)] font-mono">Vulcan_</span> CRM
        </h1>
        
        {posts.map((post) => (
          <div key={post.id}> {post.name} </div>
        ))}
      </div>
    </main>
  );
}
