import { X, Check } from "lucide-react";

const WhyRent = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground">
          Why rent instead of build?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Build column */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-serif text-xl text-foreground">Building from scratch</h3>
            <ul className="mt-6 space-y-4">
              {[
                "6+ months of development",
                "$20,000+ in developer costs",
                "Manage servers, APIs, and uptime",
                "No guarantee anyone will pay",
                "You're stuck maintaining it forever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rent column */}
          <div className="rounded-xl border-2 border-primary bg-card p-8 shadow-card">
            <h3 className="font-serif text-xl text-primary">Renting from Lazy</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Live today, not in 6 months",
                "From $99/mo — cheaper than one freelancer hour",
                "We handle hosting, updates, and AI costs",
                "Proven products with real demand",
                "Cancel anytime, no lock-in",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRent;
