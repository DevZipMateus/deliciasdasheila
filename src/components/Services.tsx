
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            elementsRef.current.forEach((el, index) => {
              if (el) {
                setTimeout(() => {
                  el.classList.add('animate-slide-up');
                }, index * 100);
              }
            });
          }
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      id: "paes",
      title: "Pães Artesanais",
      description: "Diversos tipos de pães feitos com ingredientes selecionados e fermentação natural.",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "bolos",
      title: "Bolos Especiais",
      description: "Bolos para todas as ocasiões: aniversários, casamentos, confraternizações e muito mais.",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "salgados-assados",
      title: "Salgados Assados",
      description: "Salgados assados perfeitos para festas, eventos ou para um lanche especial.",
      image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "salgados-fritos",
      title: "Salgados Fritos",
      description: "Deliciosos salgados fritos como coxinha, bolinha de queijo, risoles e muito mais.",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "pudins",
      title: "Pudins",
      description: "Pudins cremosos de diversos sabores, perfeitos para sobremesa.",
      image: "https://images.unsplash.com/photo-1624616116225-6d6b6b48cce4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "cosmeticos",
      title: "Cosméticos",
      description: "Linha completa de cosméticos para complementar o seu cuidado pessoal.",
      image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="bg-delicia-cream py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossos Produtos
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Conheça nossa variedade de produtos feitos com carinho e ingredientes selecionados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card opacity-0 relative"
              ref={el => elementsRef.current[2 + index] = el}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-display text-2xl mb-1">{product.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-delicia-brown">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
