import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { ICONS, PORTFOLIO_ITEMS, TESTIMONIALS } from '../data/siteData';

export default function Home({ navigateTo, t, lang }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (TESTIMONIALS.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <div className="animate-in fade-in duration-700">
      <Hero navigateTo={navigateTo} t={t} />

      <section className="py-10 md:py-12 bg-neutral-950 border-y border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { num: 47, suffix: '+', label: t.portfolio.filters.all === 'All' ? 'Projects' : 'Proyectos' },
              { num: 8, suffix: '+', label: t.portfolio.filters.all === 'All' ? 'Years of experience' : 'Años de experiencia' },
              { num: 100, suffix: '%', label: t.portfolio.filters.all === 'All' ? 'Satisfied clients' : 'Clientes satisfechos' },
              { num: 5, suffix: '', label: t.portfolio.filters.all === 'All' ? 'Specialized services' : 'Servicios especializados' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-display font-bold stat-gradient" data-target={stat.num} data-suffix={stat.suffix}>{stat.num}{stat.suffix}</span>
                  <span className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 font-body leading-relaxed">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900 border-b border-neutral-800">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display tracking-wide text-white mb-4">{t.services.title}</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {t.services.items.map((srv, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up" className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigateTo('services')}>
                <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-teal-500 mb-6 md:group-hover:bg-teal-500 md:group-hover:text-white transition-all duration-500 md:group-hover:scale-110 shadow-lg">
                  {ICONS[idx]}
                </div>
                <h4 className="text-neutral-200 font-heading mb-2 text-sm uppercase tracking-wide md:group-hover:text-teal-400 transition-colors">{srv.title}</h4>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 md:py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="left" className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display tracking-wide text-white mb-4">{t.portfolio.featTitle}</h2>
              <div className="w-16 h-1 bg-teal-500"></div>
            </div>
            <button onClick={() => navigateTo('portfolio')} className="hidden md:flex items-center text-teal-400 hover:text-teal-300 font-heading uppercase text-sm tracking-widest group transition-colors">
              {t.portfolio.featBtn} <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {PORTFOLIO_ITEMS.filter((item) => [2, 6, 7].includes(item.id)).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 200} direction="up" className="group relative overflow-hidden bg-neutral-950 rounded-sm cursor-pointer block ring-1 ring-inset ring-white/5 transform-gpu" onClick={() => navigateTo('portfolio')}>
                <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover transition-transform duration-[1500ms] scale-[1.02] md:group-hover:scale-110" loading="lazy" />

                <div className="p-4 md:absolute md:inset-0 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 md:flex md:flex-col md:justify-end z-20 pointer-events-none">
                  <span className="text-teal-400 text-[10px] md:text-xs font-heading uppercase tracking-widest mb-1 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-500 text-shadow-strong">{t.portfolio.filters[item.category] || item.category}</span>
                  <h4 className="text-white text-lg md:text-3xl font-display transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:delay-75 text-shadow-strong">{item.title}</h4>
                  <div className="mt-3 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:delay-100 hidden md:block">
                    <span className="inline-block px-5 py-1.5 bg-teal-600 text-white text-xs font-heading uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(20,184,166,0.5)] pointer-events-auto">{t.portfolio.viewMore}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={200}>
            <button onClick={() => navigateTo('portfolio')} className="mt-8 w-full md:hidden border border-teal-600 text-teal-400 py-3 uppercase text-sm font-heading tracking-widest hover:bg-teal-600 hover:text-white transition-colors">
              {t.portfolio.featBtn}
            </button>
          </Reveal>
        </div>
      </section>

      {/* SECCIÓN DE TESTIMONIOS */}
      <section className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800 rounded-full mix-blend-screen filter blur-[120px]"></div>
        </div>

        <Reveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-teal-400 tracking-[0.2em] text-sm uppercase font-heading mb-3">{t.testimonials.subtitle}</h3>
            <h2 className="text-4xl md:text-5xl font-display tracking-wide text-white mb-6">{t.testimonials.title}</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="relative bg-neutral-950/80 backdrop-blur-md py-12 px-2 md:px-16 rounded-sm border border-neutral-800 shadow-2xl flex items-center">
            <div className="overflow-hidden w-full relative">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${0}%)` }}>
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-16 flex flex-col items-center text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-teal-500 p-3 md:p-4 bg-neutral-950 mb-8 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                      <img src={testimonial.logo} alt={testimonial.company} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-neutral-300 text-lg md:text-2xl font-body leading-relaxed italic mb-8 max-w-4xl mx-auto">"{testimonial.text[lang]}"</p>
                    <h4 className="text-white font-display tracking-widest uppercase text-sm md:text-base">{testimonial.company}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}