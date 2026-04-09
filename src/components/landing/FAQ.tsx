import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I own the business?",
    a: "You own the customer relationships and all revenue they generate. We own the underlying software and infrastructure. Think of it like a franchise — you run your location, we provide the brand and systems.",
  },
  {
    q: "Can I customize it?",
    a: "Yes. On the Owner and Portfolio tiers, you can add your own logo, brand colors, custom domain, and business name.",
  },
  {
    q: "What happens if I cancel?",
    a: "You stop paying, we take the truck back. Your customer data is exported to you, and the deployment is shut down. No lock-in contracts, no penalties.",
  },
  {
    q: "Who owns the customers?",
    a: "You do. Your customers pay you directly through your own Polar account. You own the relationship, the revenue, and the email list.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground">
          Common questions
        </h2>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-serif text-base text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
