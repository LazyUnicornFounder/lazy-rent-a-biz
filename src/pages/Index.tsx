import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FoodTruckCallout from "@/components/landing/FoodTruckCallout";
import CatalogPreview from "@/components/landing/CatalogPreview";
import WhyRent from "@/components/landing/WhyRent";
import PricingSection from "@/components/landing/PricingSection";
import FAQ from "@/components/landing/FAQ";
import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";
import OpenSourceBanner from "@/components/OpenSourceBanner";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <FoodTruckCallout />
      <CatalogPreview />
      <WhyRent />
      <PricingSection />
      <FAQ />
      <About />
      <Footer />
          <OpenSourceBanner />
          <PortfolioFooter />
    </div>
  );
};

export default Index;
