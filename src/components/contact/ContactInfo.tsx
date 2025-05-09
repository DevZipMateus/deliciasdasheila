
import React from 'react';
import { Instagram, Phone, MapPin, Mail, WhatsApp } from 'lucide-react';

const ContactInfo = ({ setRef }: { setRef: (el: HTMLDivElement | null) => void }) => {
  return (
    <div 
      className="grid md:grid-cols-2 gap-8 opacity-0 bg-white rounded-2xl p-8 shadow-sm"
      ref={setRef}
    >
      <div>
        <h3 className="text-2xl font-semibold text-delicia-brown mb-4">Informações de Contato</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-delicia-lightpink/20 p-3 rounded-full">
              <Phone className="text-delicia-pink h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-delicia-brown">Telefone</h4>
              <p className="text-delicia-brown/70">
                <a href="tel:+5566992144530" className="hover:text-delicia-pink transition-colors">
                  (66) 99214-4530
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-delicia-lightpink/20 p-3 rounded-full">
              <WhatsApp className="text-delicia-pink h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-delicia-brown">WhatsApp</h4>
              <p className="text-delicia-brown/70">
                <a href="https://wa.me/5566992144530" target="_blank" rel="noopener noreferrer" className="hover:text-delicia-pink transition-colors">
                  (66) 99214-4530
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-delicia-lightpink/20 p-3 rounded-full">
              <Mail className="text-delicia-pink h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-delicia-brown">Email</h4>
              <p className="text-delicia-brown/70">
                <a href="mailto:deliciadasheila@gmail.com" className="hover:text-delicia-pink transition-colors">
                  deliciadasheila@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-delicia-lightpink/20 p-3 rounded-full">
              <MapPin className="text-delicia-pink h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-delicia-brown">Endereço</h4>
              <p className="text-delicia-brown/70">
                Rua Natal, 538
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-delicia-lightpink/20 p-3 rounded-full">
              <Instagram className="text-delicia-pink h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-delicia-brown">Instagram</h4>
              <p className="text-delicia-brown/70">
                <a href="https://www.instagram.com/delicias__da_sheila/" target="_blank" rel="noopener noreferrer" className="hover:text-delicia-pink transition-colors">
                  @delicias__da_sheila
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center text-center">
        <img 
          src="/lovable-uploads/e2d0ff0c-69a4-4015-8574-280dee19c121.png" 
          alt="Delicias da Sheila Logo" 
          className="w-32 h-32 mx-auto mb-6"
        />
        <h3 className="text-xl font-display font-semibold text-delicia-pink">Delicias da Sheila</h3>
        <p className="text-delicia-brown/70 mt-2">Produtos artesanais feitos com amor</p>
        <div className="mt-6">
          <a 
            href="https://wa.me/5566992144530" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-delicia-pink text-white px-6 py-3 rounded-full hover:bg-delicia-pink/80 transition-colors"
          >
            <WhatsApp size={18} />
            <span>Fazer pedido</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
