import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logoImg from "@assets/procare-logo_1768425692146.jpg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll if on home page
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "p-1 rounded-lg transition-all",
              !scrolled ? "bg-white" : "bg-transparent"
            )}>
              <img 
                src={logoImg} 
                alt="Procare Logo" 
                className="h-10 md:h-12 w-auto" 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full",
                  location === link.href 
                    ? "text-accent after:w-full" 
                    : scrolled ? "text-gray-700" : "text-gray-100"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:09044681080">
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className={cn(
                  "gap-2 font-semibold shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0",
                  !scrolled && "bg-white text-primary hover:bg-gray-100"
                )}
              >
                <Phone className="w-4 h-4" />
                <span>0904 468 1080</span>
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "text-2xl font-display font-medium text-white/80 hover:text-white transition-colors",
                location === link.href && "text-white font-bold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 border-t border-white/10 pt-8">
            <a href="tel:09044681080" className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/60">Call Us Anytime</p>
                <p className="text-xl font-semibold">0904 468 1080</p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
