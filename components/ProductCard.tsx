
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, addToCart } = useApp();
  const [imageError, setImageError] = useState(false);
  const t = (key: string) => TRANSLATIONS[key][language];

  // Reset error state if product image path changes
  useEffect(() => {
    setImageError(false);
  }, [product.image]);

  return (
    <div className="group relative bg-white border border-slate-100 overflow-hidden transition-all hover:shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
        {!imageError ? (
          <img 
            key={product.image}
            src={product.image} 
            alt={product.name[language]} 
            onError={() => {
              console.warn(`Failed to load image: ${product.image}`);
              setImageError(true);
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200 p-6 text-center">
            <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {language === 'ro' ? 'Imagine Indisponibilă' : 'Image Unavailable'}
            </span>
            <span className="text-[8px] text-slate-400 mt-2 break-all px-2 font-mono">
              {product.image}
            </span>
            <button 
              onClick={() => setImageError(false)}
              className="mt-4 text-[9px] underline text-blue-600 uppercase font-bold"
            >
              Retry
            </button>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <button 
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-xl"
          >
            {t('add_to_cart')}
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {product.name[language]}
          </h3>
          <p className="text-sm font-bold text-slate-900">
            €{product.price}
          </p>
        </div>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {product.description[language]}
        </p>
        <div className="mt-3 flex items-center gap-2">
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter bg-slate-100 text-slate-600 rounded">
                {product.category}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
