import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-image.png";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const heroImages = [heroImage, product1, product2, product3, product4];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <Carousel className="w-full h-screen">
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Hero content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                      MINNA
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                      Modern Fashion Collection
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 text-white border-white hover:bg-white hover:text-black" />
        <CarouselNext className="right-8 text-white border-white hover:bg-white hover:text-black" />
      </Carousel>
    </section>
  );
};

export default HeroSection;