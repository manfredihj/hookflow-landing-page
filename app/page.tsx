
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="container py-24 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">HookflowAI</h1>
          <p className="text-white/80 text-xl mb-8">Landings rápidas en Next.js + Tailwind</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/ecommerce" className="underline text-brand-green hover:text-white">E-commerce</Link>
            <Link href="/inmobiliarias" className="underline text-brand-green hover:text-white">Inmobiliarias</Link>
            <Link href="/agencias" className="underline text-brand-green hover:text-white">Agencias</Link>
          </div>
        </section>
      </main>
    </>
  );
}
