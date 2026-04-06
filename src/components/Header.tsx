import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto flex items-center gap-4 px-4 py-2 rounded-full border border-border transition-all duration-300 shadow-2xl",
          isScrolled 
            ? "bg-background/60 backdrop-blur-xl scale-95" 
            : "bg-background/5 backdrop-blur-md"
        )}
      >
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-full transition-all relative group",
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a 
            href="https://drive.google.com/file/d/1WL84esf7GjJixaPvTGsvQt29-GHQtrli/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-background text-foreground flex items-center space-x-2 px-4 py-1.5 text-xs font-bold"
            >
              Resume ↗
            </HoverBorderGradient>
          </a>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-accent/10 transition-colors text-foreground"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-1 ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-24 px-6 md:hidden pointer-events-auto"
          >
            <div className="glass-card p-6 flex flex-col gap-4 border border-border shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-border/50",
                    location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://drive.google.com/file/d/1WL84esf7GjJixaPvTGsvQt29-GHQtrli/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium py-2 text-muted-foreground"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
