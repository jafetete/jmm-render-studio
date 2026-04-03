import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, isMobileMenuOpen, navigateTo, toggleLanguage, setIsMobileMenuOpen, t, lang }) {
  return (
<nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 transition-all">
                <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
                  <div className="flex justify-between items-center h-20 md:h-32">
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-3 md:gap-4 initial-fade-up group min-w-0" onClick={() => navigateTo('home')}>
                      <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/Logo-JMM-blanco_vsie0i.png" alt="JMM Logo" className="h-12 md:h-24 w-auto transition-transform group-hover:scale-105 drop-shadow-md" />
                      <div className="hidden sm:block">
                        <span className="text-2xl md:text-3xl tracking-widest text-white font-display">JMM<span className="text-teal-500">.</span></span>
                        <span className="block text-xs md:text-sm text-neutral-400 tracking-widest uppercase mt-[-4px] font-light">Render Studio</span>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8 initial-fade-up" style={{animationDelay: '0.2s'}}>
                      {['home', 'portfolio', 'services', 'journal', 'about', 'contact'].map((page) => (
                        <button
                          key={page}
                          onClick={() => navigateTo(page)}
                          className={`text-sm tracking-widest uppercase font-heading transition-colors hover:text-teal-400 ${
                            currentPage === page ? 'text-teal-500' : 'text-neutral-300'
                          }`}
                        >
                          {t.nav[page]}
                        </button>
                      ))}
                      <div className="h-5 w-px bg-neutral-700 mx-2"></div>
                      <button onClick={toggleLanguage} className="flex items-center text-sm font-heading tracking-wide text-teal-400 hover:text-white transition-colors">
                        <Globe size={18} className="mr-1.5" /> {lang === 'en' ? 'ES' : 'EN'}
                      </button>
                    </div>

                    <div className="lg:hidden flex items-center space-x-3 initial-fade-up">
                      <button onClick={toggleLanguage} className="flex items-center text-sm font-heading text-teal-400 hover:text-white px-2 py-2">
                        <Globe size={18} className="mr-1.5" /> {lang === 'en' ? 'ES' : 'EN'}
                      </button>
                      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-neutral-300 hover:text-white p-2">
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                      </button>
                    </div>
                  </div>
                </div>

                {isMobileMenuOpen && (
                  <div className="lg:hidden bg-neutral-950/98 backdrop-blur-md border-b border-neutral-800 fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                      {['home', 'portfolio', 'services', 'journal', 'about', 'contact'].map((page) => (
                        <button
                          key={page}
                          onClick={() => navigateTo(page)}
                          className={`block w-full text-left px-4 py-4 text-base tracking-wide uppercase font-heading rounded-sm ${
                            currentPage === page ? 'text-teal-500 bg-neutral-900' : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                          }`}
                        >
                          {t.nav[page]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </nav>
  );
}
