import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    return isActive(path)
      ? "text-accent font-bold transition-colors"
      : "text-foreground hover:text-primary transition-colors font-medium";
  };

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
            <Link to="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClassName("/about")}>
              About Us
            </Link>
            <Link to="/services" className={getLinkClassName("/services")}>
              Our Services
            </Link>
            <Link to="/demo" className={getLinkClassName("/demo")}>
              App Demo
            </Link>
            <Link to="/agencies" className={getLinkClassName("/agencies")}>
              Agencies
            </Link>
            <Link to="/blog" className={getLinkClassName("/blog")}>
              Blog
            </Link>
            <Link to="/contact">
              <Button
                className={`font-semibold ${isActive("/contact")
                    ? "bg-accent hover:bg-accent text-accent-foreground"
                    : "bg-accent hover:bg-yellow-dark text-accent-foreground"
                  }`}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
