import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Check if we're on home page
  const isHomePage = location.pathname === "/";

  // Determine navbar style based on page and scroll state
  const navbarClasses = isHomePage && !isScrolled
    ? "bg-transparent shadow-none"
    : "bg-white shadow-sm";

  const textClasses = isHomePage && !isScrolled
    ? "text-white"
    : "text-[#333]";

  const hoverClasses = isHomePage && !isScrolled
    ? "hover:text-yellow-300"
    : "hover:text-[#6b8e23]";

  return (
    <>
      <nav className={`flex items-center px-6 md:px-10 py-5 fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${navbarClasses}`}>
        {/* Logo */}
        <div className="logo">
          <Link to="/" className={`text-2xl font-bold ${textClasses} transition-colors`}>
            zao
          </Link>
        </div>

        {/* Desktop Navigation - Grouped on the right */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><Link to="/" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>Home</Link></li>
            <li><Link to="/about" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>About Us</Link></li>
            <li><Link to="/services" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>Our Services</Link></li>
            <li><Link to="/demo" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>App Demo</Link></li>
            <li><Link to="/agencies" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>Agencies</Link></li>
            <li><Link to="/blog" className={`${textClasses} ${hoverClasses} text-base font-medium transition-colors`}>Blog</Link></li>
          </ul>

          {/* Contact Button */}
          <Link to="/contact">
            <button className="bg-[#f9a825] hover:bg-[#e69500] text-white px-5 py-2.5 text-base font-bold rounded-lg transition-colors cursor-pointer border-none">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 ${textClasses} ${isHomePage && !isScrolled ? 'hover:bg-white/20' : 'hover:bg-gray-100'} rounded-lg transition-colors ml-auto`}
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
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
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-xl font-bold text-[#333]">zao</span>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#333]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <Link to="/" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>Home</Link>
            <Link to="/about" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>About Us</Link>
            <Link to="/services" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>Our Services</Link>
            <Link to="/demo" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>App Demo</Link>
            <Link to="/agencies" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>Agencies</Link>
            <Link to="/blog" className="block py-3 px-4 text-[#333] hover:text-[#6b8e23] font-medium" onClick={closeSidebar}>Blog</Link>
          </div>
          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <Link to="/contact" onClick={closeSidebar}>
              <button className="w-full bg-[#f9a825] hover:bg-[#e69500] text-white px-5 py-3 text-base font-bold rounded-lg transition-colors cursor-pointer border-none">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
