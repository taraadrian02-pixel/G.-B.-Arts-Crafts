
import React from 'react';
import { useApp } from '../context/AppContext';

const Spotlight: React.FC = () => {
  const { language } = useApp();

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://pixabay.com/images/download/u_1916vmqe0b-image-10128520_1920.png" 
          alt="Artisan Detail" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-40" />
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-white/60 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
          {language === 'en' ? 'The Soul of Detail' : 'Sufletul Detaliului'}
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
          {language === 'en' 
            ? "Every weld is a story of divine inspiration." 
            : "Fiecare sudură este o poveste a inspirației divine."}
        </h2>
        <div className="w-16 h-1 bg-white mx-auto" />
      </div>
    </section>
  );
};

export default Spotlight;
