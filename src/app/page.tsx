import { headers } from "next/headers";
import Link from "next/link";
export const dynamic = "force-dynamic";
import { ClerkProvider, SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default async function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gradient-to-b from-[#000000] to-[#000000e0]">
      <SignedOut>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
           <span className="text-[hsl(63,91%,64%)] font-mono">Vulcan_</span> CRM
        </h1>
        </div>
        <div className="flex justify-center items-center text-2xl font-semibold text-center text-white">
          <SignInButton/>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
           Welcome to <span className="text-[hsl(63,91%,64%)] font-mono">Vulcan_</span>
        </h1>
        </div>
          <div className="mt-12 flex gap-4">
            <Link href="/" className="relative overflow-hidden bg-transparent text-white font-bold py-2 px-4 rounded-md transition duration-500 group">
              <span className="relative text-xl text-white">
                Home
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-[hsl(63,91%,64%)] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ marginTop: '4px', marginBottom: '-4px' }}></span>
              </span>
            </Link>
            <Link href="/contactsTable" className="relative overflow-hidden bg-transparent text-white font-bold py-2 px-4 rounded-md transition duration-500 group">
              <span className="relative text-xl text-white">
                Org Charts
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-[hsl(63,91%,64%)] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ marginTop: '4px', marginBottom: '-4px' }}></span>
              </span>
            </Link>
            <Link href="/templatesPage" className="relative overflow-hidden bg-transparent text-white font-bold py-2 px-4 rounded-md transition duration-500 group">
              <span className="relative text-xl text-white">
                Retainers
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-[hsl(63,91%,64%)] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ marginTop: '4px', marginBottom: '-4px' }}></span>
              </span>
            </Link>
          </div>
          <div className="flex justify-center items-center text-2xl font-semibold text-center text-white">
          <SignOutButton/>
        </div>
        </div>
      </SignedIn>
    </main>
  );
}
