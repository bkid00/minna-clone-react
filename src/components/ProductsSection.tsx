import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: "1",
      image: product1,
      title: "A Young Woman in Colorful Jacket",
      price: 108,
    },
    {
      id: "2",
      image: product2,
      title: "Young Man in Vibrant Jacket",
      price: 108,
      originalPrice: 147,
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
    {
      id: "8",
      image: product8,
      title: "Monochromatic Pink Suit for Men",
      price: 788,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Products</h2>
          <Link
            to="/products"
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors underline underline-offset-4"
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;