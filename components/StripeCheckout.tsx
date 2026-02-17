
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_INFO } from '../constants';

interface RequestFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ onClose, onSuccess }) => {
  const { cart, language } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const itemList = cart.map(item => `- ${item.name[language]}`).join('%0D%0A');
    const subject = `Inquiry: Art Pieces Request - ${name}`;
    const body = `Hello George,%0D%0A%0D%0AI am interested in the following pieces from your collection:%0D%0A%0D%0A${itemList}%0D%0A%0D%0AMy contact details:%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APlease let me know the details and availability.%0D%0A%0D%0ABest regards,%0D%0A${name}`;
    
    // Simulate processing
    setTimeout(() => {
      window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
      setIsProcessing(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white p-8 shadow-2xl rounded-sm">
        <h2 className="text-2xl font-bold font-serif mb-6">
          {language === 'ro' ? 'Confirmă Cererea' : 'Confirm Request'}
        </h2>
        
        <form onSubmit={handleRequest} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                {language === 'ro' ? 'Nume Complet' : 'Full Name'}
              </label>
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 outline-none focus:border-slate-900 transition-colors"
                placeholder="Ex. George Popescu"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                {language === 'ro' ? 'Adresa de Email' : 'Email Address'}
              </label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 outline-none focus:border-slate-900 transition-colors"
                placeholder="nume@exemplu.com"
              />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-500 mb-6 italic leading-relaxed">
              {language === 'ro' 
                ? 'Cererea va fi trimisă direct către George Băbău. Aceasta va deschide aplicația dumneavoastră de email.' 
                : 'Your request will be sent directly to George Băbău. This will open your default email client.'}
            </p>
            
            <button 
              disabled={isProcessing}
              type="submit"
              className={`w-full py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-800'}`}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>{language === 'ro' ? 'Trimite prin Email' : 'Send via Email'}</>
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

export default RequestForm;
