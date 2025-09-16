import * as React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/women"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Women
            </Link>
            <Link
              to="/men"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Men
            </Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-1 md:flex-none text-center">
            <h1 className="text-2xl font-bold tracking-tight">MINNA</h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/women"
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/men"
                className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;