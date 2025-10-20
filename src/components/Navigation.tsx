import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/sortby-logo.jpeg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="SortBy Logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-2xl font-bold gradient-text">
              SortBy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === "Products") {
                return (
                  <Popover key={link.path}>
                    <PopoverTrigger className="relative group flex items-center gap-1">
                      <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                        {link.name}
                      </span>
                      <ChevronDown className="w-4 h-4 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
                      {(location.pathname === "/products/suvira" || location.pathname === "/products/pulse") && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="w-48 glass border-primary/20">
                      <div className="space-y-2">
                        <Link
                          to="/products/suvira"
                          className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                        >
                          Suvira
                        </Link>
                        <Link
                          to="/products/pulse"
                          className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                        >
                          Pulse
                        </Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="relative px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => {
              if (link.name === "Products") {
                return (
                  <div key={link.path} className="space-y-2">
                    <div className="text-sm font-medium text-foreground/60 px-2">
                      {link.name}
                    </div>
                    <Link
                      to="/products/suvira"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block pl-6 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      Suvira
                    </Link>
                    <Link
                      to="/products/pulse"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block pl-6 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      Pulse
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
