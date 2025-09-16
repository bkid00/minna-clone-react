import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-background">
      <div className="container-width section-padding">
        <div className="relative">
          <img
            src={heroImage}
            alt="Colorful clothing collection on hangers"
            className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-lg animate-fade-in"
          />
          
          {/* Optional overlay content */}
          <div className="absolute inset-0 bg-black/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;