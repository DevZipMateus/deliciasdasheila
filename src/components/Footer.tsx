
import React from 'react';
import { cn } from "@/lib/utils";
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-delicia-brown text-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              <span className="text-delicia-pink">Delicias</span> da Sheila
            </h3>
            <p className="text-white/80 mb-4 max-w-sm">
              Produtos artesanais feitos com amor e carinho. Pães, bolos, salgados e muito mais para tornar seus momentos ainda mais especiais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/delicias__da_sheila/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-delicia-pink/20 p-2 rounded-full hover:bg-delicia-pink/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:deliciadasheila@gmail.com"
                className="bg-delicia-pink/20 p-2 rounded-full hover:bg-delicia-pink/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+5566992144530"
                className="bg-delicia-pink/20 p-2 rounded-full hover:bg-delicia-pink/30 transition-colors"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('gallery');
                  }}
                >
                  Galeria
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Rua Natal, 538</p>
              <p>Telefone: (66) 99214-4530</p>
              <p>Email: deliciadasheila@gmail.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-delicia-pink/20 mb-8" />
        
        <div className="text-center text-white/70 text-sm">
          <p>&copy; {currentYear} Delicias da Sheila. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
