
import React from 'react';
import { useApp } from '../context/AppContext';
import { Icons, TRANSLATIONS, BUSINESS_INFO } from '../constants';
import { Category } from '../types';

const Footer: React.FC = () => {
  const { language, setActiveCategory, setInfoModal } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  const scrollTo = (id: string, category?: any) => {
    if (category) setActiveCategory(category);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col mb-6 text-left">
              <span className="text-2xl font-bold tracking-tighter text-white font-serif">{BUSINESS_INFO.name}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Arts & Crafts Studio</span>
            </button>
            <p className="text-sm leading-relaxed max-w-xs">
              {t('footer_text')}
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Gallery</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => scrollTo('gallery', Category.AUTOMOTIVE)} className="hover:text-white transition-colors">Automotive Art</button></li>
              <li><button onClick={() => scrollTo('gallery', Category.FIGURINES)} className="hover:text-white transition-colors">Metal Figurines</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Custom Commissions</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setInfoModal('shipping')} className="hover:text-white transition-colors">Shipping Info</button></li>
              <li><button onClick={() => setInfoModal('terms')} className="hover:text-white transition-colors">Terms of Sale</button></li>
              <li><button onClick={() => setInfoModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Icons.Instagram /></a>
              <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Icons.Facebook /></a>
            </div>
            <p className="mt-8 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                Made in Zărnești, Romania
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-700">
          <p>© {new Date().getFullYear()} G. B. Arts&Crafts. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" /> Stripe Secured
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full" /> Worldwide Shipping
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
