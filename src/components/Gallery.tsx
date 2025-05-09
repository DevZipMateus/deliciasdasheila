
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Image, Video } from 'lucide-react';

const Gallery = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Dados simulados para galeria
  const items = {
    bolos: [
      {
        id: 1,
        title: "Bolo de Chocolate",
        description: "Delicioso bolo de chocolate com cobertura cremosa",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 2,
        title: "Naked Cake",
        description: "Bolo com recheio aparente e frutas frescas",
        image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 3,
        title: "Bolo de Festa",
        description: "Bolo decorado para aniversários e ocasiões especiais",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
    ],
    paes: [
      {
        id: 1,
        title: "Pão Caseiro",
        description: "Pão caseiro com massa macia e saborosa",
        image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 2,
        title: "Pão Integral",
        description: "Pão integral rico em fibras e sabor",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 3,
        title: "Pão Francês",
        description: "Tradicional pão francês crocante por fora e macio por dentro",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
    ],
    salgados: [
      {
        id: 1,
        title: "Coxinha",
        description: "Coxinha de frango com massa crocante",
        image: "https://plus.unsplash.com/premium_photo-1677000666414-51bd3e31ffdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 2,
        title: "Quiche",
        description: "Quiche de legumes com massa folhada",
        image: "https://images.unsplash.com/photo-1559717865-a99cac1c95d8?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 3,
        title: "Empada",
        description: "Empada de frango com massa amanteigada",
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
    ],
    pudins: [
      {
        id: 1,
        title: "Pudim de Leite",
        description: "Tradicional pudim de leite condensado",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
      {
        id: 2,
        title: "Pudim de Chocolate",
        description: "Pudim de chocolate com calda especial",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        type: "image"
      },
    ]
  };

  const [activeTab, setActiveTab] = useState("bolos");

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-20 bg-delicia-cream"
    >
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossa Galeria
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Conheça alguns dos nossos produtos feitos com muito carinho e dedicação
          </p>
        </div>

        <Tabs defaultValue="bolos" value={activeTab} onValueChange={setActiveTab} className="w-full opacity-0" ref={el => elementsRef.current[2] = el}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-delicia-lightpink/20">
              <TabsTrigger value="bolos" className="data-[state=active]:bg-delicia-pink data-[state=active]:text-white">
                Bolos
              </TabsTrigger>
              <TabsTrigger value="paes" className="data-[state=active]:bg-delicia-pink data-[state=active]:text-white">
                Pães
              </TabsTrigger>
              <TabsTrigger value="salgados" className="data-[state=active]:bg-delicia-pink data-[state=active]:text-white">
                Salgados
              </TabsTrigger>
              <TabsTrigger value="pudins" className="data-[state=active]:bg-delicia-pink data-[state=active]:text-white">
                Pudins
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(items).map(([category, categoryItems]) => (
            <TabsContent value={category} key={category} className="mt-0 focus-visible:outline-none">
              <div className="gallery-container">
                {categoryItems.map((item, index) => (
                  <div key={item.id} className="gallery-item group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-medium text-lg">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                      <div className="absolute top-4 right-4">
                        {item.type === 'image' ? (
                          <Image className="text-white bg-delicia-pink/60 rounded-full p-1.5" size={28} />
                        ) : (
                          <Video className="text-white bg-delicia-pink/60 rounded-full p-1.5" size={28} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
