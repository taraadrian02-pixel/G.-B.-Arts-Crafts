
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface StripeCheckoutProps {
  onClose: () => void;
  onSuccess: () => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ onClose, onSuccess }) => {
  const { cartTotal } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call to Stripe
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white p-8 shadow-2xl rounded-sm">
        <h2 className="text-2xl font-bold font-serif mb-6">Secure Checkout</h2>
        
        <form onSubmit={handlePayment} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Card Information</label>
              <div className="px-4 py-4 bg-slate-50 border border-slate-200 flex items-center justify-between">
                <input 
                  required
                  type="text" 
                  placeholder="4242 4242 4242 4242" 
                  className="bg-transparent outline-none w-full"
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" className="h-4" alt="Visa" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Expiry Date</label>
                <input required type="text" placeholder="MM / YY" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 outline-none" />
               </div>
               <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">CVC</label>
                <input required type="text" placeholder="123" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 outline-none" />
               </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-slate-500 uppercase tracking-widest">Amount to Pay</span>
                <span className="text-2xl font-bold">€{cartTotal}</span>
            </div>
            
            <button 
              disabled={isProcessing}
              type="submit"
              className={`w-full py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay with Stripe</>
              )}
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="w-full mt-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StripeCheckout;
