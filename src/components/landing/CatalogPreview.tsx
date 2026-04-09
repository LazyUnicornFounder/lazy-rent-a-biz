import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { businesses } from "@/data/businesses";
import { ArrowRight } from "lucide-react";

const CatalogPreview = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground">
          Businesses ready to rent
        </h2>
        <p className="mt-4 text-center text-text-secondary max-w-xl mx-auto leading-relaxed">
          Each one is a complete product — built, hosted, and maintained by us. You just add customers.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((biz) => (
            <Link
              key={biz.slug}
              to={`/businesses/${biz.slug}`}
              className="group rounded-xl border border-border bg-card p-5 shadow-subtle transition-shadow hover:shadow-card"
            >
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <img src={biz.imageUrl} alt={biz.name} className="h-12 w-12 opacity-30" />
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

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
            <Link to="/businesses">
              View all businesses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;
