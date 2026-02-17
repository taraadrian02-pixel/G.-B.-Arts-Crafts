
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS, Icons } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, addToCart } = useApp();
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const t = (key: string) => TRANSLATIONS[key][language];

  useEffect(() => {
    setImageError(false);
  }, [product.image]);

  useEffect(() => {
    if (isZoomed) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsZoomed(false);
      };
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isZoomed]);

  const renderImage = (className: string, isFullView: boolean = false) => {
    if (imageError) {
      return (
        <div className={`flex flex-col items-center justify-center bg-slate-200 p-6 text-center ${className}`}>
          <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {language === 'ro' ? 'Imagine Indisponibilă' : 'Image Unavailable'}
          </span>
        </div>
      );
    }

    const rotationClass = product.rotate ? 'rotate-90 scale-125' : '';

    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-100`}>
        <img 
          src={product.image} 
          alt={product.name[language]} 
          onError={() => setImageError(true)}
          className={`object-cover transition-transform duration-700 ${className} ${rotationClass}`}
        />
        {product.isSold && (
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="bg-red-600/90 text-white py-2 w-[180%] text-center font-black text-xs md:text-sm tracking-[0.4em] -rotate-45 shadow-2xl border-y-2 border-white/20 whitespace-nowrap">
              {language === 'ro' ? 'VÂNDUT' : 'SOLD'}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div 
        onClick={() => setIsZoomed(true)}
        className="group relative bg-white border border-slate-100 overflow-hidden transition-all hover:shadow-xl cursor-zoom-in"
      >
        <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
          {renderImage("w-full h-full group-hover:scale-105")}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
             <div className="p-2 bg-white/90 backdrop-blur rounded-full shadow-lg">
                <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
             </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-slate-50">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-semibold text-slate-900">
              {product.name[language]}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              {product.category}
            </p>
            {product.isSold && (
              <span className="text-[10px] text-red-600 font-bold uppercase tracking-widest">
                SOLD / VÂNDUT
              </span>
            )}
          </div>
        </div>
      </div>

      {isZoomed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setIsZoomed(false)} 
          />
          
          <div className="relative w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-hidden">
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-[110] p-2 bg-white/80 hover:bg-white rounded-full transition-colors text-slate-900 shadow-md"
            >
              <Icons.Close />
            </button>

            <div className="flex-1 bg-slate-100 flex items-center justify-center overflow-hidden">
              {renderImage("w-full h-full object-contain max-h-[40vh] md:max-h-full", true)}
            </div>

            <div className="w-full md:w-[400px] p-8 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block">
                  {product.category}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">
                  {product.name[language]}
                </h2>
                {product.isSold && (
                  <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-6">
                    SOLD / VÂNDUT
                  </p>
                )}
                <div className="w-12 h-[2px] bg-slate-900 mb-8" />
                <p className="text-sm text-slate-600 leading-relaxed mb-12">
                  {product.description[language]}
                </p>
              </div>

              <div>
                {product.isSold ? (
                  <div className="w-full py-4 border-2 border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-not-allowed">
                    {language === 'ro' ? 'Piesă Vândută' : 'Item Sold'}
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      addToCart(product);
                      setIsZoomed(false);
                    }}
                    className="w-full py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-3"
                  >
                    <Icons.Cart />
                    {t('add_to_cart')}
                  </button>
                )}
                <p className="mt-4 text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
                  Hand-welded & Unique Piece
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
