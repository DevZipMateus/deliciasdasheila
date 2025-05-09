
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Galeria', id: 'gallery' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-2 bg-white/95 backdrop-blur-sm shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-delicia-brown font-display font-bold text-xl md:text-2xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="text-delicia-pink">Delicias</span> da Sheila
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-delicia-brown hover:text-delicia-pink transition-colors duration-300 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation with Sheet component */}
        <Sheet>
          <SheetTrigger asChild>
            <button 
              className="md:hidden text-delicia-pink p-2 rounded-md hover:bg-delicia-lightpink/30 transition-colors" 
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] p-0 bg-gradient-to-br from-white to-delicia-lightpink/30 border-l-4 border-delicia-pink">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-5 border-b border-delicia-lightpink/50">
                <div className="font-display font-bold text-xl text-delicia-brown">
                  <span className="text-delicia-pink">Delicias</span> da Sheila
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-delicia-lightpink/30 transition-all">
                  <X className="text-delicia-brown" size={20} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={cn(
                      "text-delicia-brown text-lg font-medium hover:bg-delicia-lightpink/30 transition-all w-full text-center py-5 px-4 flex items-center justify-center",
                      "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-delicia-pink after:transition-all after:duration-300 hover:after:w-1/4"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      setTimeout(() => scrollToSection(link.id), 100);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="p-6 border-t border-delicia-lightpink/50 mt-auto">
                <div className="text-delicia-brown text-sm text-center">
                  © 2024 Delicias da Sheila - Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavBar;
