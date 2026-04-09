import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container flex justify-center mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-text-muted">
          Made for <span className="text-foreground font-semibold">Lovable</span> &amp; <span className="text-foreground font-semibold">Polar</span>
        </span>
      </div>
      <div className="container max-w-3xl text-center">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight text-foreground">
          Rent a business.{" "}
          <span className="text-primary">Skip the build.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-2xl mx-auto">
          Turnkey AI businesses, ready to operate. Pick one, pay monthly, keep
          100% of what you earn. Cancel anytime.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8 py-6" asChild>
            <Link to="/businesses">
              Browse Businesses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
