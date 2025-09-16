import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import product2 from "@/assets/product-2.jpg";
import product8 from "@/assets/product-8.jpg";

const Men = () => {
  const menProducts = [
    {
      id: "2",
      image: product2,
      title: "Young Man in Vibrant Jacket",
      price: 108,
      originalPrice: 147,
    },
    {
      id: "8",
      image: product8,
      title: "Monochromatic Pink Suit for Men",
      price: 788,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container-width section-padding">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Men's Collection
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
            {menProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Men;