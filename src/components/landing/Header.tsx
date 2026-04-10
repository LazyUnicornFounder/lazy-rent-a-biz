import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl tracking-tight text-foreground">
          Lazy Rent-A-Biz
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-sans font-medium uppercase tracking-wider text-primary">Beta</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/businesses" className="text-sm text-text-secondary hover:text-foreground transition-colors">
            Browse Businesses
          </Link>
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-text-secondary hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-sm text-text-secondary hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        <div className="flex items-center">
          <Button size="sm" className="bg-primary hover:bg-primary-hover" asChild>
            <Link to="/businesses">Browse Businesses</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
