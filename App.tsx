
import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { PRODUCTS, TRANSLATIONS } from './constants';
import { Category } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ArtistBio from './components/ArtistBio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StripeCheckout from './components/StripeCheckout';
import GeminiAdvisor from './components/GeminiAdvisor';
import InfoModal from './components/InfoModal';

const GalleryContent: React.FC = () => {
  const { language, clearCart, activeCategory, setActiveCategory } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleCheckoutSuccess = () => {
    setIsCheckoutOpen(false);
    clearCart();
    setShowOrderSuccess(true);
    setTimeout(() => setShowOrderSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        {showOrderSuccess && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 bg-green-600 text-white font-bold text-sm shadow-2xl animate-bounce">
            {TRANSLATIONS.success_order[language]}
          </div>
        )}

        <Hero />

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block">The Collection</span>
                <h2 className="text-4xl font-bold text-slate-900 font-serif">Featured Works</h2>
              </div>
              
              <div className="flex gap-4">
                {['All', Category.AUTOMOTIVE, Category.FIGURINES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                      activeCategory === cat 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                        : 'border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <ArtistBio />
        <ContactForm />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {isCheckoutOpen && (
        <StripeCheckout 
          onClose={() => setIsCheckoutOpen(false)}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      <GeminiAdvisor />
      <InfoModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <GalleryContent />
    </AppProvider>
  );
};

export default App;
