
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const services = [
  {
    title: "Instalação Profissional",
    description: "Instalação de splits, multi-splits e sistemas centrais seguindo rigorosamente as normas técnicas dos fabricantes.",
    icon: "fa-tools",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Manutenção Preventiva",
    description: "Limpeza técnica, higienização de filtros e serpentinas, e verificação de gás para evitar quebras inesperadas.",
    icon: "fa-shield-heart",
    img: "https://images.unsplash.com/photo-1599839575945-a98f4693002c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Conserto e Manutenção",
    description: "Diagnóstico preciso e troca de peças originais para aparelhos que pararam de gelar ou apresentam ruídos.",
    icon: "fa-wrench",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Carga de Gás",
    description: "Reposição de fluido refrigerante e localização de vazamentos para manter seu ar funcionando 100%.",
    icon: "fa-gas-pump",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Especialistas em Clima</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Nossas Soluções para Você</h3>
          <p className="text-lg text-slate-600">Oferecemos o serviço completo para que você não precise se preocupar com nada além de relaxar.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a href={WHATSAPP_LINK} className="text-blue-600 font-bold flex items-center group/link">
                  Consultar Valor
                  <i className="fas fa-arrow-right ml-2 text-xs group-hover/link:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
