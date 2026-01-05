
import React from 'react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Morador de Criciúma",
    content: "O serviço foi impecável. O técnico chegou no horário, instalou os dois aparelhos rapidamente e deixou tudo limpo. Recomendo muito a Eletro Rocha!",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Ana Claudia",
    role: "Empresária - Içara",
    content: "Contratei para a manutenção do ar do meu escritório. O ar estava com mau cheiro e agora parece novo. Atendimento nota 10 pelo WhatsApp.",
    avatar: "https://i.pravatar.cc/150?u=ana"
  },
  {
    name: "Marcos Pereira",
    role: "Morador do Centro",
    content: "Melhor custo-benefício da região. Foram os únicos que me deram um orçamento detalhado e cumpriram o prazo prometido.",
    avatar: "https://i.pravatar.cc/150?u=marcos"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-extrabold mb-6">O que nossos clientes dizem</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, star) => (
                  <i key={star} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
