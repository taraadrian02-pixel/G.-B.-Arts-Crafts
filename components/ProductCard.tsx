
import React from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, addToCart } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  return (
    <div className="group relative bg-white border border-slate-100 overflow-hidden transition-all hover:shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors"
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
