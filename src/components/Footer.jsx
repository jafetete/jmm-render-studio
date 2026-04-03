import React from 'react';
import { Instagram, Mail, MessageCircle, Send } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer({ navigateTo, t }) {
  return (
<footer className="relative z-20 bg-teal-800 text-teal-50 pt-16 md:pt-20 pb-8 overflow-hidden">
                <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-14 md:mb-16">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="mb-6 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/Logo-JMM-blanco_vsie0i.png" alt="JMM Logo" className="h-28 md:h-36 w-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-lg" />
                      </div>
                      <p className="text-teal-100/80 mb-8 text-sm leading-relaxed max-w-sm mt-4 font-body">
                        {t.footer.desc}
                      </p>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-heading tracking-wider text-white mb-6 uppercase">{t.footer.links}</h4>
                      <ul className="space-y-4">
                        {['home', 'portfolio', 'services', 'journal', 'about', 'contact'].map((page) => (
                          <li key={page}>
                            <button onClick={() => navigateTo(page)} className="text-teal-100/80 font-heading hover:text-white transition-all hover:translate-x-1 text-sm uppercase tracking-wide inline-flex items-center">
                              {t.nav[page]}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-heading tracking-wider text-white mb-6 uppercase">{t.footer.contact}</h4>
                      <ul className="space-y-4 text-sm text-teal-100/90 font-body">
                        <li className="flex items-center justify-center md:justify-start hover:translate-x-1 transition-transform">
                          <MessageCircle size={18} className="mr-3 text-teal-400 flex-shrink-0" />
                          <a href="https://wa.me/50670188160" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start hover:translate-x-1 transition-transform">
                          <Send size={18} className="mr-3 text-teal-400 flex-shrink-0" />
                          <a href="https://t.me/JMM_RENDER_STUDIO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start hover:translate-x-1 transition-transform">
                          <Mail size={18} className="mr-3 text-teal-400 flex-shrink-0" />
                          <a href="mailto:info@jmm-arquitectura.art" className="hover:text-white transition-colors">info@jmm-arquitectura.art</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start hover:translate-x-1 transition-transform">
                          <Instagram size={18} className="mr-3 text-teal-400 flex-shrink-0" />
                          <a href="https://instagram.com/jmm_render_studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@jmm_render_studio</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-teal-700 pt-10 flex flex-col md:flex-row items-center text-xs text-teal-200/60 font-body gap-6 md:gap-0">
                    <div className="order-3 md:order-1 flex-1 flex justify-center md:justify-start w-full">
                      <p className="text-sm">&copy; {new Date().getFullYear()} JMM Render Studio. {t.footer.rights}</p>
                    </div>
                    
                    <div className="order-1 md:order-2 flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
                      <span className="uppercase tracking-widest text-xs md:text-sm font-heading text-teal-400">Powered by</span>
                      <a href="https://www.instagram.com/bcd_creations" target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/Logo-BCD_rddlv8.png" alt="BCD" className="h-16 md:h-28 w-auto opacity-100 transition-transform duration-500 hover:scale-105" />
                      </a>
                      <div className="h-px md:h-20 w-16 md:w-px bg-teal-700 mx-2"></div>
                      <a href="https://www.instagram.com/bcd_creations" target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083642/Logo-SGI_jdknjr.png" alt="SGI" className="h-14 md:h-24 w-auto opacity-100 transition-transform duration-500 hover:scale-105" />
                      </a>
                    </div>

                    <div className="order-2 md:order-3 flex-1 flex justify-center md:justify-end w-full">
                      <p className="text-sm" dangerouslySetInnerHTML={{ __html: t.footer.design }}></p>
                    </div>
                  </div>
                </Reveal>
              </footer>
  );
}
