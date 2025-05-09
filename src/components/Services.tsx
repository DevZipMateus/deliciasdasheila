import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Send, Plus, Minus } from "lucide-react";

const Services = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
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
      image: "https://images.unsplash.com/photo-1605256107786-c598074d5027?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const handleProductSelect = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        const newSelected = prev.filter(id => id !== productId);
        setQuantities(current => {
          const updated = { ...current };
          delete updated[productId];
          return updated;
        });
        return newSelected;
      } else {
        setQuantities(current => ({
          ...current,
          [productId]: 1
        }));
        return [...prev, productId];
      }
    });
  };

  const increaseQuantity = (productId: string) => {
    setQuantities(current => ({
      ...current,
      [productId]: (current[productId] || 0) + 1
    }));
  };

  const decreaseQuantity = (productId: string) => {
    setQuantities(current => {
      if ((current[productId] || 0) <= 1) return current;
      return {
        ...current,
        [productId]: current[productId] - 1
      };
    });
  };

  const handleSendWhatsApp = () => {
    const selectedItems = products
      .filter(product => selectedProducts.includes(product.id))
      .map(product => `${product.title} (${quantities[product.id] || 1}x)`)
      .join('\n- ');

    if (selectedItems.length === 0) {
      alert('Por favor, selecione ao menos um produto para continuar.');
      return;
    }

    const message = `Olá! Estou interessado(a) nos seguintes produtos:\n- ${selectedItems}\n\nGostaria de mais informações, por favor.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5566992144530?text=${encodedMessage}`, '_blank');
  };

  const totalSelectedItems = selectedProducts.reduce((total, productId) => 
    total + (quantities[productId] || 1), 0);

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
          <p className="mt-4 text-delicia-brown">
            Selecione os produtos que deseja, escolha a quantidade e envie sua lista pelo WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card opacity-0 relative"
              ref={el => elementsRef.current[2 + index] = el}
            >
              <div className="absolute top-4 right-4 z-20 bg-white rounded-full p-1.5 shadow-md">
                <Checkbox
                  id={`product-${product.id}`}
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => handleProductSelect(product.id)}
                  className="data-[state=checked]:bg-delicia-pink data-[state=checked]:text-white border-delicia-pink"
                />
              </div>
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
                <div className="mt-4 flex justify-between items-center">
                  <label 
                    htmlFor={`product-${product.id}`}
                    className="inline-block text-delicia-pink font-medium hover:text-delicia-pink/80 transition-colors cursor-pointer"
                  >
                    {selectedProducts.includes(product.id) ? 'Selecionado ✓' : 'Selecionar →'}
                  </label>
                  
                  {selectedProducts.includes(product.id) && (
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-2 py-1">
                      <button 
                        onClick={() => decreaseQuantity(product.id)}
                        className="text-delicia-pink p-1 rounded-full hover:bg-gray-200"
                        disabled={(quantities[product.id] || 1) <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium text-gray-800 w-6 text-center">
                        {quantities[product.id] || 1}
                      </span>
                      <button 
                        onClick={() => increaseQuantity(product.id)}
                        className="text-delicia-pink p-1 rounded-full hover:bg-gray-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleSendWhatsApp}
            className="bg-delicia-pink hover:bg-delicia-pink/90 text-white px-6 py-6 rounded-full text-lg"
          >
            <Send className="mr-2 h-5 w-5" />
            Enviar seleção por WhatsApp ({totalSelectedItems} {totalSelectedItems === 1 ? 'item' : 'itens'})
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
