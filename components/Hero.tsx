
import React from 'react';
import { WHATSAPP_LINK, SERVICE_AREA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1631541490212-32a220261394?auto=format&fit=crop&q=80&w=2000" 
          alt="Ar condicionado moderno em ambiente residencial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 px-3 py-1 rounded-full text-blue-300 text-sm font-semibold mb-6">
            <i className="fas fa-location-dot"></i>
            <span>Atendendo {SERVICE_AREA}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Sinta o Frescor do <span className="text-blue-500">Conforto Absoluto</span> na Sua Casa.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            Instalação profissional, limpeza profunda e manutenção especializada. Garanta o clima perfeito e ar puro para sua família com a <strong>Eletro Rocha</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              Solicitar Orçamento
              <i className="fab fa-whatsapp ml-2 text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="#servicos" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8 opacity-80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">10+</span>
              <span className="text-sm uppercase tracking-wider text-slate-400">Anos de Experiência</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">2k+</span>
              <span className="text-sm uppercase tracking-wider text-slate-400">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
           {/* Visual floating element */}
           <div className="bg-white p-6 rounded-2xl shadow-2xl relative overflow-hidden transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35220adcfba?auto=format&fit=crop&q=80&w=800" 
                alt="Serviço de Manutenção de Ar Condicionado" 
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                Online no WhatsApp
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800">Manutenção Preventiva</h4>
                  <p className="text-sm text-slate-500">Aumente a vida útil do seu aparelho</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
           </div>
           {/* Decorative circles */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
