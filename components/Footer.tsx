
import React from 'react';
import { COMPANY_NAME, SERVICE_AREA } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <i className="fas fa-snowflake text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-sm text-center md:text-left">
              Especialistas em climatização residencial e comercial.<br/>
              Atendendo {SERVICE_AREA}.
            </p>
          </div>

          <div className="flex space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-500 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços</a>
            <a href="#beneficios" className="hover:text-blue-500 transition-colors">Benefícios</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs tracking-widest uppercase opacity-50">
          &copy; {currentYear} {COMPANY_NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
