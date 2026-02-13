
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Icons, TRANSLATIONS, BUSINESS_INFO } from '../constants';

interface NavbarProps {
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const { language, setLanguage, cartCount, setActiveCategory } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: string) => TRANSLATIONS[key][language];

  const scrollTo = (id: string, category?: any) => {
    setIsMenuOpen(false);
    if (category) setActiveCategory(category);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tighter text-slate-900 font-serif">{BUSINESS_INFO.name}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 -mt-1">Arts & Crafts Studio</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('gallery')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{t('nav_gallery')}</button>
            <button onClick={() => scrollTo('bio')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{t('nav_bio')}</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{t('nav_contact')}</button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('ro')}
                className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'ro' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                RO
              </button>
            </div>

            <button 
              onClick={onOpenCart}
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Icons.Cart />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button onClick={() => scrollTo('gallery')} className="w-full text-left block px-3 py-4 text-base font-medium text-slate-700 border-b border-slate-50">{t('nav_gallery')}</button>
            <button onClick={() => scrollTo('bio')} className="w-full text-left block px-3 py-4 text-base font-medium text-slate-700 border-b border-slate-50">{t('nav_bio')}</button>
            <button onClick={() => scrollTo('contact')} className="w-full text-left block px-3 py-4 text-base font-medium text-slate-700">{t('nav_contact')}</button>
            
            <div className="flex items-center space-x-2 pt-4">
               <button onClick={() => setLanguage('en')} className={`px-4 py-2 text-xs font-bold rounded-md ${language === 'en' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>English</button>
               <button onClick={() => setLanguage('ro')} className={`px-4 py-2 text-xs font-bold rounded-md ${language === 'ro' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>Română</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
