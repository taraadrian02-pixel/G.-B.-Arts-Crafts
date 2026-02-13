
import React from 'react';
import { useApp } from '../context/AppContext';
import { Icons } from '../constants';

const POLICY_CONTENT: Record<string, { title: { en: string, ro: string }, body: { en: string, ro: string } }> = {
  shipping: {
    title: { en: "Shipping Information", ro: "Informații de Livrare" },
    body: { 
      en: "We offer worldwide shipping via premium couriers. Every artwork is custom-crated in protective wooden packaging to ensure it arrives in perfect condition. Domestic shipping (Romania) takes 2-4 business days. International shipping takes 7-14 business days.",
      ro: "Oferim livrare internațională prin curieri premium. Fiecare operă de artă este ambalată în cutii de lemn personalizate pentru a asigura sosirea în stare perfectă. Livrarea internă (România) durează 2-4 zile lucrătoare. Livrarea internațională durează 7-14 zile lucrătoare."
    }
  },
  terms: {
    title: { en: "Terms of Sale", ro: "Termeni și Condiții" },
    body: { 
      en: "Each piece is handmade and unique. By purchasing, you agree that minor variations in welding texture and metal finish are part of the artistic value. Payments are processed securely via Stripe. Returns are accepted within 14 days if the item is in original condition.",
      ro: "Fiecare piesă este lucrată manual și unică. Prin achiziție, sunteți de acord că micile variații în textura sudurii și finisajul metalului fac parte din valoarea artistică. Plățile sunt procesate securizat prin Stripe. Retururile sunt acceptate în termen de 14 zile dacă produsul este în starea originală."
    }
  },
  privacy: {
    title: { en: "Privacy Policy", ro: "Politica de Confidențialitate" },
    body: { 
      en: "G. B. Arts&Crafts respects your privacy. We only collect information necessary to fulfill your order and communicate about your commission. We never share your data with third parties except for payment processing and shipping providers.",
      ro: "G. B. Arts&Crafts vă respectă confidențialitatea. Colectăm doar informațiile necesare pentru a onora comanda și pentru a comunica despre comisionul dumneavoastră. Nu împărtășim niciodată datele cu terțe părți, cu excepția procesatorilor de plăți și a furnizorilor de servicii de livrare."
    }
  }
};

const InfoModal: React.FC = () => {
  const { infoModal, setInfoModal, language } = useApp();

  if (!infoModal || !POLICY_CONTENT[infoModal]) return null;

  const content = POLICY_CONTENT[infoModal];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setInfoModal(null)} />
      <div className="relative bg-white w-full max-w-2xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={() => setInfoModal(null)}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <Icons.Close />
        </button>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{content.title[language]}</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed text-lg">
            {content.body[language]}
          </p>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={() => setInfoModal(null)}
            className="px-8 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
