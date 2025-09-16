import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const Products = () => {
  const [filter, setFilter] = React.useState("all");

  const allProducts = [
    {
      id: "1",
      image: product1,
      title: "A Young Woman in Colorful Jacket",
      price: 108,
      category: "women",
    },
    {
      id: "2",
      image: product2,
      title: "Young Man in Vibrant Jacket",
      price: 108,
      originalPrice: 147,
      category: "men",
    },
    {
      id: "3",
      image: product3,
      title: "Fashionable Woman with Orange Sunglasses",
      price: 108,
      originalPrice: 147,
      category: "women",
    },
    {
      id: "4",
      image: product4,
      title: "Stretch Tee in Milk",
      price: 98,
      originalPrice: 137,
      category: "women",
    },
    {
      id: "5",
      image: product5,
      title: "Stylish Model in Floral Shirt",
      price: 208,
      originalPrice: 247,
      category: "women",
    },
    {
      id: "6",
      image: product6,
      title: "Stylish Woman in Retro-Contemporary Fashion",
      price: 148,
      category: "women",
    },
    {
      id: "7",
      image: product7,
      title: "Close-up of Person in Light Green Activewear",
      price: 948,
      category: "women",
    },
    {
      id: "8",
      image: product8,
      title: "Monochromatic Pink Suit for Men",
      price: 788,
      category: "men",
    },
  ];

  const filteredProducts = filter === "all" ? allProducts : allProducts.filter(product => product.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container-width section-padding">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4 sm:mb-0">
              All Products
            </h1>
            
            {/* Filter Buttons */}
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filter === "women" ? "default" : "outline"}
                onClick={() => setFilter("women")}
                size="sm"
              >
                Women
              </Button>
              <Button
                variant={filter === "men" ? "default" : "outline"}
                onClick={() => setFilter("men")}
                size="sm"
              >
                Men
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;