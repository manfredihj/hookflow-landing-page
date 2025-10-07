
import { Button } from "@/components/ui/button";

export function CallToAction({ text, cta }: { text: string; cta: string }) {
  return (
    <section className="py-16">
      <div className="container text-center rounded-2xl p-10 bg-brand-primary text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{text}</h2>
        <Button size="lg" variant="secondary">{cta}</Button>
      </div>
    </section>
  );
}
