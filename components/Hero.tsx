
import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC = () => {
  const { language } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/V07NcqS9/p5.png" 
          alt="G.B. Arts & Crafts Studio"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1920&grayscale=true";
          }}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-7xl font-bold text-white max-w-3xl leading-tight font-serif">
          {t('hero_title')}
        </h1>
        <p className="mt-6 text-xl text-slate-300 max-w-xl font-light">
          {t('hero_subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollTo('gallery')} 
            className="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all text-center"
          >
            {t('shop_now')}
          </button>
          <button 
            onClick={() => scrollTo('bio')} 
            className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-center"
          >
            {t('nav_bio')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </div>
  );
};

export default Hero;
