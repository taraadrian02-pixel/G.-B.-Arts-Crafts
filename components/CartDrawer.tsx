
import React from 'react';
import { useApp } from '../context/AppContext';
import { Icons, TRANSLATIONS } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { language, cart, removeFromCart, cartTotal, cartCount } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold font-serif text-slate-900">{t('cart_title')} ({cartCount})</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
              <Icons.Close />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <Icons.Cart />
                <p className="mt-4 text-sm font-medium">{t('cart_empty')}</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-slate-50 pb-6">
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-slate-100 rounded">
                    <img src={item.image} alt={item.name[language]} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between font-medium">
                      <h3 className="text-sm text-slate-900">{item.name[language]}</h3>
                      <p className="text-sm text-slate-900">€{item.price}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {language === 'ro' ? 'Piesă Unică' : 'Unique Piece'}
                        </span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] font-bold uppercase tracking-widest text-red-600 hover:text-red-700"
                      >
                        {language === 'ro' ? 'Elimină' : 'Remove'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-medium text-slate-600 uppercase tracking-widest">{t('total')}</span>
                <span className="text-2xl font-bold text-slate-900">€{cartTotal}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors shadow-lg"
              >
                {t('checkout')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
