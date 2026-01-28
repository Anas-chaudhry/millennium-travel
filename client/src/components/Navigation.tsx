/* Design Philosophy: Dynamic Modernism with Cultural Fusion
 * - Fluid navigation with smooth transitions
 * - Vibrant brand colors (orange, teal, amber)
 * - Mobile-first responsive design with drawer navigation
 */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plane } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#destinations", label: "Destinations" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#006D77] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Millennium
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Travel Agency</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="text-sm font-medium text-foreground hover:text-[#FF6B35] transition-colors duration-300 relative group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button
              className="rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Raleway, sans-serif' }}
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] rounded-l-3xl">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                      }
                      handleNavClick(link.href);
                    }}
                    className="text-lg font-semibold text-foreground hover:text-[#FF6B35] transition-colors duration-300 py-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="rounded-full font-semibold shadow-lg mt-4"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                  onClick={() => handleNavClick("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
