import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Operator",
    price: 99,
    description: "Perfect for testing the waters",
    features: [
      "1 business",
      "Subdomain on lazyrentabiz.com",
      "Shared infrastructure",
      "Community support",
      "Cancel anytime",
    ],
    featured: false,
  },
  {
    name: "Owner",
    price: 299,
    description: "For serious operators ready to grow",
    features: [
      "1 business",
      "Custom domain",
      "Your branding and logo",
      "Your own Polar account",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Portfolio",
    price: 799,
    description: "Run multiple businesses at once",
    features: [
      "Up to 3 businesses",
      "White-label everything",
      "Priority updates and features",
      "Niche protection",
      "Dedicated support",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 border-t border-border">
      <div className="container max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground">
          Simple, honest pricing
        </h2>
        <p className="mt-4 text-center text-text-secondary max-w-xl mx-auto leading-relaxed">
          Pay monthly rent. Keep 100% of what your customers pay you. Cancel anytime.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 ${
                tier.featured
                  ? "border-2 border-primary bg-card shadow-card"
                  : "border border-border bg-card"
              }`}
            >
              <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{tier.description}</p>
              <div className="mt-6">
                <span className="font-serif text-4xl text-foreground">${tier.price}</span>
                <span className="text-text-muted">/mo</span>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${
                  tier.featured
                    ? "bg-primary hover:bg-primary-hover"
                    : "bg-foreground hover:bg-foreground/90"
                }`}
                asChild
              >
                <Link to="/businesses">Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
