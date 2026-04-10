import { ShoppingBag, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Pick a business from the catalog",
    description:
      "Browse our collection of turnkey AI businesses. Each one is built, tested, and ready for customers.",
  },
  {
    icon: CreditCard,
    title: "Connect your payment account",
    description:
      "Link your Polar account so your customers pay you directly. You keep 100% of what they pay.",
  },
  {
    icon: Rocket,
    title: "Market it to your niche and keep the profit",
    description:
      "Add your branding, pick your niche, and start selling. We handle the tech. You handle the hustle.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="container max-w-5xl">
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <span className="font-serif text-5xl md:text-6xl font-bold text-primary/20">{i + 1}</span>
              <div className="mt-4 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
