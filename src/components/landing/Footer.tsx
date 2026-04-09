import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="font-serif text-lg text-foreground">Lazy Rent-A-Biz</span>
            <p className="mt-2 text-sm text-text-muted max-w-xs">
              Turnkey AI businesses you can rent, brand, and run — without writing a line of code.
            </p>
          </div>
          <nav className="flex gap-8 text-sm text-text-secondary">
            <Link to="/businesses" className="hover:text-foreground transition-colors">
              Catalog
            </Link>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
          </nav>
        </div>
        <div className="mt-12 text-xs text-text-muted">
          © {new Date().getFullYear()} Lazy Rent-A-Biz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
