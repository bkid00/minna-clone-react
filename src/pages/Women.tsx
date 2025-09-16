import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";

const Women = () => {
  const womenProducts = [
    {
      id: "1",
      image: product1,
      title: "A Young Woman in Colorful Jacket",
      price: 108,
    },
    {
      id: "3",
      image: product3,
      title: "Fashionable Woman with Orange Sunglasses",
      price: 108,
      originalPrice: 147,
    },
    {
      id: "4",
      image: product4,
      title: "Stretch Tee in Milk",
      price: 98,
      originalPrice: 137,
    },
    {
      id: "5",
      image: product5,
      title: "Stylish Model in Floral Shirt",
      price: 208,
      originalPrice: 247,
    },
    {
      id: "6",
      image: product6,
      title: "Stylish Woman in Retro-Contemporary Fashion",
      price: 148,
    },
    {
      id: "7",
      image: product7,
      title: "Close-up of Person in Light Green Activewear",
      price: 948,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container-width section-padding">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Women's Collection
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Women;