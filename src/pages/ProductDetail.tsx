import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const products = {
    "1": {
      id: "1",
      image: product1,
      title: "A Young Woman in Colorful Jacket",
      price: 108,
      description: "Stylish and comfortable jacket perfect for the new season. Made with high-quality materials and attention to detail.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Multicolor"],
    },
    "2": {
      id: "2",
      image: product2,
      title: "Young Man in Vibrant Jacket",
      price: 108,
      originalPrice: 147,
      description: "Vibrant and eye-catching jacket that makes a statement. Perfect for casual outings and special occasions.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Blue", "Multi"],
    },
    "3": {
      id: "3",
      image: product3,
      title: "Fashionable Woman with Orange Sunglasses",
      price: 108,
      originalPrice: 147,
      description: "Complete the look with this fashionable ensemble featuring trendy accessories and comfortable fit.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Multi"],
    },
    "4": {
      id: "4",
      image: product4,
      title: "Stretch Tee in Milk",
      price: 98,
      originalPrice: 137,
      description: "Comfortable stretch tee in a beautiful milk color. Perfect for everyday wear with exceptional comfort.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Milk", "White"],
    },
  } as const;

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container-width section-padding text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container-width section-padding">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  {('originalPrice' in product) && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      className="min-w-[2.5rem]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-6">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 btn-accent"
                  size="lg"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;