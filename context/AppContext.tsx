
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, CartItem, Product, Category } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  activeCategory: Category | 'All';
  setActiveCategory: (cat: Category | 'All') => void;
  infoModal: string | null;
  setInfoModal: (type: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Application now defaults to Romanian
  const [language, setLanguage] = useState<Language>('ro');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [infoModal, setInfoModal] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('gb_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gb_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Since pieces are unique, we don't increment quantity. 
        // We just return the current state or could show a notification.
        return prev;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    // For unique pieces, quantity is always 1 unless removed.
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    // We don't allow quantity > 1.
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <AppContext.Provider value={{
      language, setLanguage, cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount,
      activeCategory, setActiveCategory, infoModal, setInfoModal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
