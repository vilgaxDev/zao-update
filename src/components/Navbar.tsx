import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="bg-primary rounded-full px-6 py-3">
              <span className="text-2xl font-bold text-primary-foreground">zao</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Services
            </Link>
            <Link to="/demo" className="text-foreground hover:text-primary transition-colors font-medium">
              App Demo
            </Link>
            <Link to="/agencies" className="text-foreground hover:text-primary transition-colors font-medium">
              Agencies
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Button className="bg-accent hover:bg-yellow-dark text-accent-foreground font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
