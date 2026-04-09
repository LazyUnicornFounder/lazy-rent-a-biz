import { useParams, Link } from "react-router-dom";
import { businesses } from "@/data/businesses";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

const tiers = [
  { name: "Operator", key: "operatorPrice" as const, features: ["1 business", "Subdomain on lazyrentabiz.com", "Shared infra", "Community support"] },
  { name: "Owner", key: "ownerPrice" as const, features: ["1 business", "Custom domain", "Your branding", "Your Polar account", "Priority support"] },
  { name: "Portfolio", key: "portfolioPrice" as const, features: ["Up to 3 businesses", "White-label", "Priority updates", "Niche protection", "Dedicated support"] },
];

const BusinessDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const biz = businesses.find((b) => b.slug === slug);

  if (!biz) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <h1 className="font-serif text-3xl text-foreground">Business not found</h1>
          <Button className="mt-6 bg-primary hover:bg-primary-hover" asChild>
            <Link to="/businesses">Back to catalog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-24">
        <div className="container max-w-4xl">
          <Link to="/businesses" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to catalog
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-video rounded-xl bg-muted flex items-center justify-center">
              <img src={biz.imageUrl} alt={biz.name} className="h-16 w-16 opacity-30" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{biz.category}</span>
              <h1 className="mt-2 font-serif text-3xl md:text-4xl text-foreground">{biz.name}</h1>
              <p className="mt-3 text-lg text-text-secondary leading-relaxed">{biz.tagline}</p>
              <p className="mt-2 text-sm text-primary font-medium">From ${biz.operatorPrice}/mo</p>
            </div>
          </div>

          {/* What it does */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-foreground">What it does</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">{biz.description}</p>
          </div>

          {/* What's included */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-foreground">What's included in your rent</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Fully built and hosted product",
                "AI infrastructure and API costs covered",
                "Automatic updates and maintenance",
                "Operator dashboard with analytics",
                "End-customer management tools",
                "Payment collection via your Polar account",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tier selector */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-foreground text-center">Pick your tier</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {tiers.map((tier) => {
                const price = biz[tier.key];
                const featured = tier.name === "Owner";
                return (
                  <div
                    key={tier.name}
                    className={`rounded-xl p-6 ${featured ? "border-2 border-primary shadow-card" : "border border-border"} bg-card`}
                  >
                    {featured && (
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">Most popular</span>
                    )}
                    <h3 className="font-serif text-xl text-foreground">{tier.name}</h3>
                    <div className="mt-3">
                      <span className="font-serif text-3xl text-foreground">${price}</span>
                      <span className="text-text-muted">/mo</span>
                    </div>
                    <ul className="mt-6 space-y-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-6 w-full ${featured ? "bg-primary hover:bg-primary-hover" : "bg-foreground hover:bg-foreground/90"}`}
                    >
                      Rent This Business
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BusinessDetail;
