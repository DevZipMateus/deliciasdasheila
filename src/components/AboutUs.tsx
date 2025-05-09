
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const AboutUs = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Sobre Nós
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Conheça a história da Delicias da Sheila e nossa paixão pela culinária artesanal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p 
              className="text-delicia-brown opacity-0" 
              ref={el => elementsRef.current[2] = el}
            >
              A <span className="font-semibold text-delicia-pink">Delicias da Sheila</span> surgiu em 2022, nascida da paixão de Sheila Pereira Nunes da Silva pela culinária. Tudo começou assistindo vídeos no YouTube e, com o tempo, aprimorando suas habilidades em cursos do SENAI.
            </p>
            <p 
              className="text-delicia-brown opacity-0" 
              ref={el => elementsRef.current[3] = el}
            >
              Hoje, oferecemos uma variedade de produtos feitos artesanalmente com muito carinho e dedicação. Nossos principais produtos são pães artesanais, deliciosos bolos, salgados assados e fritos, e pudins irresistíveis.
            </p>
            <p 
              className="text-delicia-brown opacity-0" 
              ref={el => elementsRef.current[4] = el}
            >
              Além dos produtos de confeitaria, também oferecemos uma linha de cosméticos para complementar nossa renda e proporcionar mais opções aos nossos clientes.
            </p>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden opacity-0" ref={el => elementsRef.current[5] = el}>
            <div className="absolute inset-0 p-2 bg-gradient-to-br from-delicia-pink/20 to-delicia-lightpink/20 rounded-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/e2d0ff0c-69a4-4015-8574-280dee19c121.png" 
                  alt="Delicias da Sheila" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
