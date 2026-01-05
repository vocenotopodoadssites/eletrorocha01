
import React from 'react';

const benefits = [
  {
    title: "Atendimento Rápido",
    text: "Sabemos que o calor não espera. Priorizamos emergências em Criciúma e região.",
    icon: "fa-bolt"
  },
  {
    title: "Preço Justo",
    text: "Orçamentos transparentes e competitivos, sem taxas escondidas no final.",
    icon: "fa-hand-holding-dollar"
  },
  {
    title: "Técnicos Certificados",
    text: "Nossa equipe passa por treinamentos constantes para lidar com qualquer marca.",
    icon: "fa-certificate"
  },
  {
    title: "Garantia Total",
    text: "Oferecemos garantia estendida em todas as nossas instalações e peças.",
    icon: "fa-shield-check"
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Por que a <span className="text-blue-600 italic">Eletro Rocha</span> é a melhor escolha?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Mais do que apenas consertar aparelhos, nós entregamos qualidade de vida. Um ar condicionado bem mantido economiza até 40% de energia e previne doenças respiratórias.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-blue-600 mb-3 text-2xl">
                    <i className={`fas ${b.icon}`}></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">{b.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800" 
                  alt="Quality Air Service" 
                  className="w-full h-auto"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl -z-0 opacity-20"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-600 rounded-3xl -z-0 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
