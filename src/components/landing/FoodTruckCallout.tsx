const FoodTruckCallout = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="rounded-2xl bg-dark-section px-8 py-12 md:px-16 md:py-16 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-primary-foreground">
            "It's like renting a food truck. We own it. You drive it.{" "}
            <span className="text-primary">You keep what you sell.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodTruckCallout;
