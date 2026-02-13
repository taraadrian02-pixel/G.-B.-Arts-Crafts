
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS, BUSINESS_INFO, Icons } from '../constants';

const ContactForm: React.FC = () => {
  const { language } = useApp();
  const t = (key: string) => TRANSLATIONS[key][language];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    console.log(`Sending email to ${BUSINESS_INFO.email}`, formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">{t('contact_us')}</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Workshop</h4>
                  <p className="text-sm text-slate-700">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                  <p className="text-sm text-slate-700">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</h4>
                  <p className="text-sm text-slate-700">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
                <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-600 hover:text-slate-900 shadow-sm transition-all hover:-translate-y-1">
                    <Icons.Instagram />
                </a>
                <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-600 hover:text-slate-900 shadow-sm transition-all hover:-translate-y-1">
                    <Icons.Facebook />
                </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 shadow-xl border border-slate-100">
              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-slate-500">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none transition-all"
                        placeholder="George Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none transition-all"
                        placeholder="george@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Your Message</label>
                    <textarea 
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white outline-none transition-all resize-none"
                      placeholder="I'm interested in a custom automotive sculpture..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors shadow-lg"
                  >
                    {t('send_message')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
