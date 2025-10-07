
import { Button } from "@/components/ui/button";

export function Hero({ title, description, cta }: { title: string; description: string; cta: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-pink to-brand-blue opacity-10" />
      <div className="container py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-brand-primary">{title}</h1>
        <p className="text-lg md:text-xl text-neutral-gray mb-8 max-w-3xl mx-auto">{description}</p>
        <Button size="lg">{cta}</Button>
      </div>
    </section>
  );
}
