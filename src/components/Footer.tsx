import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold tracking-tight">MINNA</h2>
            </Link>
            <p className="text-sm text-neutral-200 max-w-md">
              Shop online with MINNA, your destination for trendy, high-quality products 
              at unbeatable prices with exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/women"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/men"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-neutral-200 hover:text-neutral-100 transition-colors"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-200">
            © 2024 MINNA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;