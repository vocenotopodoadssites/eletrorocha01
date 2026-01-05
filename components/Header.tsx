
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, COMPANY_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <i className="fas fa-snowflake text-white text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#inicio" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'} transition-colors`}>Início</a>
          <a href="#servicos" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'} transition-colors`}>Serviços</a>
          <a href="#beneficios" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'} transition-colors`}>Por que nós?</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
            Orçamento Grátis
          </a>
        </nav>

        <div className="md:hidden">
           <a href={WHATSAPP_LINK} className={`text-2xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            <i className="fab fa-whatsapp"></i>
           </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
