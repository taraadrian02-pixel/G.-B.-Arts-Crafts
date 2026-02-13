
import React from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../constants';

const ArtistBio: React.FC = () => {
  const { language } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  return (
    <section id="bio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] md:aspect-square bg-slate-200 overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="images/george.jpg" 
                alt="Artist George Băbău" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-900 z-0" />
            <div className="absolute -bottom-6 -right-6 px-8 py-6 bg-slate-900 text-white z-20 shadow-xl">
              <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-1 text-slate-400">Fondator</span>
              <span className="text-2xl font-serif">George Băbău</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Behind the Iron</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">{t('bio_title')}</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t('bio_content')}
              </p>
            </div>
            <div className="flex items-center gap-8">
                <div>
                    <p className="text-3xl font-bold text-slate-900">15+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Ani Exp.</p>
                </div>
                <div className="w-[1px] h-12 bg-slate-200" />
                <div>
                    <p className="text-3xl font-bold text-slate-900">500+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Piese Vândute</p>
                </div>
                <div className="w-[1px] h-12 bg-slate-200" />
                <div>
                    <p className="text-3xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Sudat Manual</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
