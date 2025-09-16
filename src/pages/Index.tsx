import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <ProductsSection />
        <FeaturesSection />
        <NewsletterSection />
      </main>
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default Index;
