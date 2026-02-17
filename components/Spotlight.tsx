
import React from 'react';
import { useApp } from '../context/AppContext';

const Spotlight: React.FC = () => {
  const { language } = useApp();

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1771320251692-acfb68154ad6?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
