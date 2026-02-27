
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../constants';

const GeminiAdvisor: React.FC = () => {
  const { language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getAdvice = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResponse('');
    
    try {
      // Initialize the GoogleGenAI client with the mandatory apiKey named parameter.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      // Fix: Removed 'p.price' which was causing a TypeScript error as it doesn't exist on the Product type.
      const productSummary = PRODUCTS.map(p => `- ${p.name.en}: ${p.description.en}`).join('\n');
      
      const systemInstruction = `You are an art advisor for G. B. Arts&Crafts, an elite metal sculpture and paintings gallery. 
      Help the customer decide what to buy based on their interests. 
      Respond in ${language === 'en' ? 'English' : 'Romanian'}. 
      Our current collection includes:\n${productSummary}\n
      Be concise, elegant, and professional. Recommend specific items from the list above.`;

      const result = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: { systemInstruction }
      });
      
      // Access the .text property directly from the result object as per Google GenAI guidelines.
      setResponse(result.text || "I'm sorry, I couldn't process that. Please try again.");
    } catch (err) {
      console.error(err);
      setResponse("Our AI advisor is currently resting. Please check back later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 border border-slate-700"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Art Advisor AI</span>
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-end md:p-6 pointer-events-none">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full md:w-[450px] bg-white shadow-2xl pointer-events-auto overflow-hidden animate-in slide-in-from-bottom md:slide-in-from-right duration-300">
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-serif">Curated Advice</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Powered by Gemini</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-6 h-[400px] overflow-y-auto bg-slate-50 space-y-4">
                {response ? (
                    <div className="p-4 bg-white border border-slate-200 text-slate-700 text-sm leading-relaxed rounded shadow-sm">
                        {response}
                    </div>
                ) : (
                    <div className="text-center text-slate-400 mt-12 italic">
                        "What piece would look great in a minimalist modern living room?"
                    </div>
                )}
                {isLoading && (
                    <div className="flex justify-center p-4">
                        <div className="w-6 h-6 border-2 border-slate-900/10 border-t-slate-900 rounded-full animate-spin" />
                    </div>
                )}
            </div>

            <div className="p-6 border-t border-slate-100 bg-white">
                <div className="flex gap-2">
                    <input 
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && getAdvice()}
                        placeholder={language === 'en' ? "Ask about our collection..." : "Întreabă despre colecție..."}
                        className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 outline-none text-sm focus:border-slate-900"
                    />
                    <button 
                        onClick={getAdvice}
                        disabled={isLoading}
                        className="bg-slate-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-800"
                    >
                        Ask
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAdvisor;
