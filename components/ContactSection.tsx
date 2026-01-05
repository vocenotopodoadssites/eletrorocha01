
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
       <div className="container mx-auto px-4 md:px-8">
         <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
              <i className="fas fa-snowflake text-[15rem]"></i>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Não sofra mais com o calor! <br/> Solicite seu orçamento agora.
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Estamos prontos para te atender. Mande uma mensagem agora e receba um orçamento personalizado em poucos minutos.
            </p>
            
            <div className="flex flex-col items-center">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-xl flex items-center shadow-lg transition-all transform hover:scale-105 active:scale-95"
              >
                <i className="fab fa-whatsapp mr-3 text-3xl"></i>
                Falar com a Eletro Rocha
              </a>
              <span className="mt-6 text-blue-200 font-medium tracking-widest text-sm uppercase">
                WhatsApp: {WHATSAPP_NUMBER}
              </span>
            </div>
         </div>
       </div>
    </section>
  );
};

export default ContactSection;
