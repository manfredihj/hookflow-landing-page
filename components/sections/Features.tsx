
import { Card } from "@/components/ui/card";

export function Features({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="container py-16 grid gap-6 md:grid-cols-3">
      {items.map((f, i) => (
        <Card key={i}>
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-neutral-gray">{f.text}</p>
        </Card>
      ))}
    </section>
  );
}
