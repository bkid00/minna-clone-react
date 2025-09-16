import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({ id, image, title, price, originalPrice }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="product-card bg-card rounded-lg overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="product-image w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-sm font-medium text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-foreground">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;