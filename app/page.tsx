
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container py-24 text-center">
        <h1 className="text-5xl font-extrabold text-brand-primary mb-4">HookflowAI</h1>
        <p className="text-neutral-gray text-xl mb-8">Landings rápidas en Next.js + Tailwind</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/ecommerce" className="underline text-brand-primary">E-commerce</Link>
          <Link href="/inmobiliarias" className="underline text-brand-primary">Inmobiliarias</Link>
          <Link href="/agencias" className="underline text-brand-primary">Agencias</Link>
        </div>
      </section>
    </main>
  );
}
