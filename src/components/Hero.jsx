import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ navigateTo, t }) {
  return (
<section className="relative h-[92svh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950">
                <div className="absolute inset-0 z-0">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    poster="https://res.cloudinary.com/drqimcuhb/video/upload/q_auto/f_auto/v1775083660/portada_rf05rg.jpg"
                    className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
                    style={{userSelect:'none'}}
                  >
                    <source src="https://res.cloudinary.com/drqimcuhb/video/upload/q_auto/f_auto/v1775083660/portada_rf05rg.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 z-10" style={{pointerEvents:'all'}}></div>
                  
                  <div className="absolute inset-0 bg-neutral-950/50 z-20 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="hero-scanline"></div>
                  <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-teal-500/40 pointer-events-none z-30 hidden md:block" style={{animation:'fadeIn 2s ease 1s both'}}></div>
                  <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-teal-500/40 pointer-events-none z-30 hidden md:block" style={{animation:'fadeIn 2s ease 1.2s both'}}></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-teal-500/40 pointer-events-none z-30 hidden md:block" style={{animation:'fadeIn 2s ease 1.4s both'}}></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-teal-500/40 pointer-events-none z-30 hidden md:block" style={{animation:'fadeIn 2s ease 1.6s both'}}></div>
                </div>
                
                <div className="relative z-30 text-center px-5 md:px-4 max-w-5xl mx-auto">
                  <div className="mb-4 flex items-center justify-center gap-3" style={{opacity:0, animation:'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards'}}>
                    <div className="h-px w-8 md:w-12 bg-teal-500/60"></div>
                    <h2 className="text-teal-400 font-heading tracking-[0.22em] md:tracking-[0.3em] text-[11px] md:text-base uppercase">{t.hero.sub}</h2>
                    <div className="h-px w-8 md:w-12 bg-teal-500/60"></div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display text-white mb-6 md:mb-8 leading-[1.08] md:leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" style={{opacity:0, animation:'fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards'}} dangerouslySetInnerHTML={{ __html: t.hero.title }}></h1>
                  <p className="text-base md:text-xl text-neutral-300 mb-8 md:mb-10 max-w-2xl mx-auto font-body leading-relaxed" style={{opacity:0, animation:'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1s forwards'}}>{t.hero.desc}</p>
                  <div style={{opacity:0, animation:'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.3s forwards'}}>
                    <button onClick={() => navigateTo('portfolio')} className="bg-teal-600 hover:bg-teal-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-sm font-heading text-xs md:text-sm tracking-[0.18em] md:tracking-widest uppercase transition-all inline-flex items-center mx-auto space-x-2 group hover:scale-105 shadow-lg shadow-teal-900/50 pulse-glow btn-ripple">
                      <span>{t.hero.btn}</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </section>
  );
}
