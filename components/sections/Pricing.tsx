import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export function Pricing({ title = "Planes y Precios", subtitle, tiers }: PricingProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 ${
                tier.highlighted
                  ? 'border-brand-primary border-2 shadow-xl scale-105'
                  : 'border-gray-200'
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-extrabold text-brand-primary mb-2">
                  {tier.price}
                </div>
                <p className="text-neutral-gray text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-neutral-dark">
                    <svg
                      className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-brand-primary hover:bg-brand-primary/90'
                    : 'bg-neutral-dark hover:bg-neutral-dark/90'
                }`}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
