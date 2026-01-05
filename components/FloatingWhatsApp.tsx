
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      {/* Tooltip hint */}
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-slate-100">
        Falar agora com a Eletro Rocha!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
