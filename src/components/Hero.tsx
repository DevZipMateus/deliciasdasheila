
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-delicia-lightpink/30 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/e2d0ff0c-69a4-4015-8574-280dee19c121.png" 
            alt="Delicias da Sheila Logo" 
            className="w-40 h-40 mx-auto mb-6 opacity-0"
            ref={el => elementsRef.current[0] = el}
          />
          
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-delicia-pink leading-tight mb-6 opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Delicias da Sheila
          </h1>
          
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-delicia-brown text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            Pães, Bolos, Salgados e muito mais! <br />
            Produtos artesanais feitos com amor e dedicação
          </p>
          
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <a 
              href="#contact" 
              className="bg-delicia-pink hover:bg-delicia-pink/80 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Faça seu Pedido
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-delicia-lightpink/30 text-delicia-brown border border-delicia-pink/20 px-6 py-3 rounded-full font-medium transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-delicia-pink hover:text-delicia-pink/80 transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
