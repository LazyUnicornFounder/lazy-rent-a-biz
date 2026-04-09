import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    const { error } = await supabase
      .from("early_access_emails")
      .insert({ email: trimmed.toLowerCase() });

    if (error) {
      if (error.code === "23505") {
        setStatus("success"); // already signed up, treat as success
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } else {
      setStatus("success");
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container flex justify-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-base font-medium text-text-muted">
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

        {/* Early access signup */}
        <div className="mt-10 mx-auto max-w-md">
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-4">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">You're on the list. We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                className="h-12 text-base bg-card"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary-hover h-12 px-6 shrink-0"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>Get Early Access</>
                )}
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-2 text-sm text-destructive">{errorMsg}</p>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
            <Link to="/businesses">
              Browse Businesses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
