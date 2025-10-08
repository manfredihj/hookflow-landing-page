
import { getLandingContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { VSL } from "@/components/sections/VSL";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getLandingContent(slug);

  if (!data) {
    return {
      title: "Página no encontrada - HookflowAI",
      description: "La página que buscás no existe.",
    };
  }

  return {
    title: `${data.title} - HookflowAI`,
    description: data.description,
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getLandingContent(slug);

  if (!data) {
    return (
      <main className="container py-24">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
        <p className="text-neutral-gray mt-2">Verificá la URL o volvé al inicio.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero title={data.title} description={data.description} cta={data.cta} calLink={data.calLink} />
      {data.videoUrl && <VSL videoUrl={data.videoUrl} title={data.videoTitle} />}
      <Features items={data.features} />
      {data.showPricing !== false && data.pricingTiers && (
        <Pricing
          title={data.pricingTitle}
          subtitle={data.pricingSubtitle}
          tiers={data.pricingTiers}
        />
      )}
      {data.ctaBlock && <CallToAction text={data.ctaBlock.text} cta={data.ctaBlock.cta} calLink={data.calLink} />}
      <Footer />
    </main>
  );
}
