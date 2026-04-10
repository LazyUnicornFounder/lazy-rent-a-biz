const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          Lazy Rent-A-Biz is part of{" "}
          <a
            href="https://lazyfounderventures.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Lazy Founder Ventures
          </a>
          {" "}— a studio building tools and businesses for founders who want to work smarter, not harder.
        </p>
      </div>
    </section>
  );
};

export default About;
