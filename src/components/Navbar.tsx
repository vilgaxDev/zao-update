import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="bg-primary rounded-full px-6 py-3">
                <span className="text-2xl font-bold text-primary-foreground">zao</span>
              </div>
            </Link>

            {/* Desktop/Tablet Navigation - Shows on screens 900px and above */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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

            {/* Mobile Menu Button - Only shows on screens below 900px */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Only on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar - Only on mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background z-[70] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="bg-primary rounded-full px-4 py-2">
              <span className="text-xl font-bold text-primary-foreground">zao</span>
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/")} ${isActive("/") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/about")} ${isActive("/about") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/services")} ${isActive("/services") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                Our Services
              </Link>
              <Link
                to="/demo"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/demo")} ${isActive("/demo") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                App Demo
              </Link>
              <Link
                to="/agencies"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/agencies")} ${isActive("/agencies") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                Agencies
              </Link>
              <Link
                to="/blog"
                className={`block py-3 px-4 rounded-lg ${getLinkClassName("/blog")} ${isActive("/blog") ? "bg-accent/10" : "hover:bg-muted"
                  }`}
                onClick={closeSidebar}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-border">
            <Link to="/contact" onClick={closeSidebar}>
              <Button
                className={`w-full font-semibold ${isActive("/contact")
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
    </>
  );
};

export default Navbar;
