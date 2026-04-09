import { useState } from "react";
import { Link } from "react-router-dom";
import { businesses, categories } from "@/data/businesses";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Businesses = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? businesses : businesses.filter((b) => b.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-24">
        <div className="container max-w-6xl">
          <h1 className="font-serif text-3xl md:text-5xl text-foreground text-center">
            Browse businesses
          </h1>
          <p className="mt-4 text-center text-text-secondary max-w-xl mx-auto leading-relaxed">
            Every business is built, hosted, and maintained by us. Pick one, rent it, and start earning.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-text-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((biz) => (
              <Link
                key={biz.slug}
                to={`/businesses/${biz.slug}`}
                className="group rounded-xl border border-border bg-card p-5 shadow-subtle transition-shadow hover:shadow-card"
              >
                <div className="aspect-video rounded-lg bg-muted overflow-hidden">
                  <img src={biz.imageUrl} alt={biz.name} className="h-full w-full object-cover" loading="lazy" width={800} height={512} />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                    {biz.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {biz.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {biz.tagline}
                  </p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    From ${biz.operatorPrice}/mo
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Businesses;
