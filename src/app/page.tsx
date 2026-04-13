import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 py-32">
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-md">
          <Image
            src="/avatar.png"
            alt="김유경"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">
          안녕하세요, 김유경입니다.
        </h1>
        <nav className="flex gap-4">
          <Link
            href="/resume/"
            className="rounded-full border border-zinc-200 px-5 py-2 text-sm text-zinc-600 transition-colors hover:border-zinc-400 hover:text-black"
          >
            Resume
          </Link>
          <Link
            href="/books/"
            className="rounded-full border border-zinc-200 px-5 py-2 text-sm text-zinc-600 transition-colors hover:border-zinc-400 hover:text-black"
          >
            Books
          </Link>
        </nav>
      </main>
    </div>
  );
}
