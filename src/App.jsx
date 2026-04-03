import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Camera, ChevronLeft, ChevronRight, FileText, Instagram, Mail, MapPin, Maximize, MessageCircle, Ruler, Send, X } from 'lucide-react';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import Viewer360 from './components/Viewer360';
import Home from './pages/Home';
import { ICONS, JOURNAL_ARTICLES, PORTFOLIO_ITEMS, TESTIMONIALS, TRANSLATIONS } from './data/siteData';

export default function App() {
          const [currentPage, setCurrentPage] = useState('home');
          const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
          const [activeProject, setActiveProject] = useState(null);
          const [activeArticle, setActiveArticle] = useState(null);
          const [currentImageIndex, setCurrentImageIndex] = useState(0);
          const [isGalleryPaused, setIsGalleryPaused] = useState(false);
          const [lang, setLang] = useState('es');
          const [isImageLoaded, setIsImageLoaded] = useState(false);

          const t = TRANSLATIONS[lang];

          useEffect(() => {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }, [currentPage]);

          useEffect(() => {
            setIsImageLoaded(false);
          }, [currentImageIndex, activeProject]);

          useEffect(() => {
            if (!activeProject) return;
            window.requestAnimationFrame(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            });
          }, [activeProject]);

          useEffect(() => {
            if (!activeArticle) return;
            window.requestAnimationFrame(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            });
          }, [activeArticle]);

          useEffect(() => {
            if (!activeProject || activeProject.gallery.length <= 1 || isGalleryPaused) return;
            const timer = setTimeout(() => {
              setCurrentImageIndex((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1));
            }, 3500); 
            return () => clearTimeout(timer);
          }, [activeProject, currentImageIndex, isGalleryPaused]);

          useEffect(() => {
            window.jmmTab = function(btn, key) {
              const wrapper = btn.closest('.jmm-tabs-wrapper');
              if (!wrapper) return;
              wrapper.querySelectorAll('.jmm-tab-btn').forEach((b) => b.classList.remove('active'));
              wrapper.querySelectorAll('.jmm-tab-panel').forEach((p) => p.classList.remove('active'));
              btn.classList.add('active');
              wrapper.querySelector(`#jmm-panel-${key}`)?.classList.add('active');
            };

            const cleanups = [];
            const timeouts = [];

            const cursor = document.getElementById('customCursor');
            const cursorRing = document.getElementById('customCursorRing');
            if (cursor && cursorRing && window.matchMedia('(pointer: fine)').matches) {
              let mouseX = 0;
              let mouseY = 0;
              let ringX = 0;
              let ringY = 0;

              const onMouseMove = (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
              };
              const onMouseOver = (e) => {
                const el = e.target.closest('button, a, [class*="cursor-pointer"], input, select, textarea, label');
                document.body.classList.toggle('cursor-hover', !!el);
              };
              const onMouseLeave = () => {
                cursor.style.opacity = '0';
                cursorRing.style.opacity = '0';
              };
              const onMouseEnter = () => {
                cursor.style.opacity = '1';
                cursorRing.style.opacity = '1';
              };

              let animationFrameId = 0;
              const animateRing = () => {
                ringX += (mouseX - ringX) * 0.12;
                ringY += (mouseY - ringY) * 0.12;
                cursorRing.style.left = `${ringX}px`;
                cursorRing.style.top = `${ringY}px`;
                animationFrameId = window.requestAnimationFrame(animateRing);
              };
              animationFrameId = window.requestAnimationFrame(animateRing);

              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseover', onMouseOver);
              document.addEventListener('mouseleave', onMouseLeave);
              document.addEventListener('mouseenter', onMouseEnter);
              cleanups.push(() => document.removeEventListener('mousemove', onMouseMove));
              cleanups.push(() => document.removeEventListener('mouseover', onMouseOver));
              cleanups.push(() => document.removeEventListener('mouseleave', onMouseLeave));
              cleanups.push(() => document.removeEventListener('mouseenter', onMouseEnter));
              cleanups.push(() => window.cancelAnimationFrame(animationFrameId));
            }

            const scrollBar = document.getElementById('scrollProgress');
            const onScroll = () => {
              if (!scrollBar) return;
              const scrollTop = document.documentElement.scrollTop;
              const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const progress = docHeight > 0 ? scrollTop / docHeight : 0;
              scrollBar.style.width = `${progress * 100}%`;
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            cleanups.push(() => window.removeEventListener('scroll', onScroll));

            function animateCounter(el) {
              const target = parseInt(el.getAttribute('data-target'), 10);
              const duration = 1800;
              const start = performance.now();

              function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = target + (el.getAttribute('data-suffix') || '');
              }

              requestAnimationFrame(update);
            }

            const counterObserver = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                  entry.target.dataset.counted = 'true';
                  animateCounter(entry.target);
                }
              });
            }, { threshold: 0.5 });

            function observeCounters() {
              document.querySelectorAll('[data-target]').forEach((el) => counterObserver.observe(el));
            }

            function enhanceNavLinks() {
              document.querySelectorAll('nav button').forEach((btn) => {
                if (!btn.classList.contains('nav-link-animated')) {
                  btn.classList.add('nav-link-animated');
                }
              });
            }

            function init3DCards() {
              document.querySelectorAll('.group.relative.overflow-hidden').forEach((card) => {
                if (card.dataset.tilt3d) return;
                card.dataset.tilt3d = '1';
                card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`;
                  card.style.transition = 'transform 0.1s ease';
                });
                card.addEventListener('mouseleave', () => {
                  card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
                  card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                });
              });
            }

            function applyPulseGlow() {
              document.querySelectorAll('button.bg-teal-600, button.bg-teal-500').forEach((btn) => {
                if (!btn.classList.contains('pulse-glow')) btn.classList.add('pulse-glow', 'btn-ripple');
              });
            }

            function enhanceFooter() {
              document.querySelectorAll('footer img').forEach((img) => {
                if (!img.classList.contains('footer-logo-float')) {
                  img.classList.add('footer-logo-float');
                }
              });
            }

            function enhanceContactIcons() {
              document.querySelectorAll('.flex.items-start.group').forEach((row) => {
                const iconWrap = row.querySelector('.w-12');
                if (iconWrap && !iconWrap.classList.contains('contact-icon-wrap')) {
                  iconWrap.classList.add('contact-icon-wrap');
                  const inner = iconWrap.querySelector('svg');
                  if (inner) inner.classList.add('contact-icon-inner');
                }
              });
            }

            const onImageLoad = (e) => {
              if (e.target.tagName === 'IMG' && !e.target.classList.contains('reveal-blur-in')) {
                e.target.classList.add('reveal-blur-in');
              }
            };
            document.addEventListener('load', onImageLoad, true);
            cleanups.push(() => document.removeEventListener('load', onImageLoad, true));

            const dynamicStyle = document.createElement('style');
            dynamicStyle.textContent = `
              @keyframes pageIn {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              main > div {
                animation: pageIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both !important;
              }
            `;
            document.head.appendChild(dynamicStyle);
            cleanups.push(() => dynamicStyle.remove());

            const uiObserver = new MutationObserver((mutations) => {
              const shouldUpdate = mutations.some((m) => m.addedNodes.length > 0);
              if (shouldUpdate) {
                observeCounters();
                init3DCards();
                applyPulseGlow();
                enhanceNavLinks();
                enhanceFooter();
                enhanceContactIcons();
              }
            });
            uiObserver.observe(document.body, { childList: true, subtree: true });
            cleanups.push(() => uiObserver.disconnect());
            cleanups.push(() => counterObserver.disconnect());

            timeouts.push(window.setTimeout(() => {
              observeCounters();
              init3DCards();
              applyPulseGlow();
              enhanceNavLinks();
              enhanceFooter();
              enhanceContactIcons();
            }, 800));

            return () => {
              delete window.jmmTab;
              cleanups.forEach((fn) => fn());
              timeouts.forEach((id) => window.clearTimeout(id));
            };
          }, []);

          const navigateTo = (page) => {
            setCurrentPage(page);
            setIsMobileMenuOpen(false);
          };

          const toggleLanguage = () => {
            setLang(prev => prev === 'en' ? 'es' : 'en');
          };

          const openGallery = (project) => {
            setActiveProject(project);
            setCurrentImageIndex(0);
          };

          const openArticle = (article) => {
            setActiveArticle(article);
          };

          const closeGallery = () => setActiveProject(null);

          const nextImage = (e) => {
            e.stopPropagation();
            if (activeProject && activeProject.gallery.length > 0) {
              setCurrentImageIndex((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1));
            }
          };

          const prevImage = (e) => {
            e.stopPropagation();
            if (activeProject && activeProject.gallery.length > 0) {
              setCurrentImageIndex((prev) => (prev === 0 ? activeProject.gallery.length - 1 : prev - 1));
            }
          };

          return (
            <div className="min-h-screen bg-neutral-900 text-neutral-100 selection:bg-teal-500 selection:text-white">
              <div className="custom-cursor" id="customCursor"></div>
              <div className="custom-cursor-ring" id="customCursorRing"></div>
              <div className="scroll-progress" id="scrollProgress"></div>
              <Navbar currentPage={currentPage} isMobileMenuOpen={isMobileMenuOpen} navigateTo={navigateTo} toggleLanguage={toggleLanguage} setIsMobileMenuOpen={setIsMobileMenuOpen} t={t} lang={lang} />

              <main className="pt-24 md:pt-28 relative z-10">
                {currentPage === 'home' && <Home navigateTo={navigateTo} t={t} lang={lang} />}
                {currentPage === 'portfolio' && <PortfolioView openGallery={openGallery} t={t} lang={lang} />}
                {currentPage === 'services' && <ServicesView t={t} />}
                {currentPage === 'journal' && <JournalView t={t} lang={lang} openArticle={openArticle} />}
                {currentPage === 'about' && <AboutView t={t} />}
                {currentPage === 'contact' && <ContactView t={t} />}
              </main>

              <Footer navigateTo={navigateTo} t={t} />

              {activeProject && (
                <div className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col fade-in" onClick={(e) => { if(e.target === e.currentTarget) closeGallery(); }}>
                  <button onClick={closeGallery} className="absolute top-3 right-3 md:top-8 md:right-8 text-white z-[110] transition-colors hover:text-teal-400 p-2">
                    <X size={32} />
                  </button>

                  {activeProject.gallery.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white z-[110] transition-all bg-black/40 hover:bg-teal-500 p-2 md:p-4 rounded-full shadow-lg hover:scale-110">
                        <ChevronLeft size={28} className="md:w-8 md:h-8" />
                      </button>
                      <button onClick={nextImage} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white z-[110] transition-all bg-black/40 hover:bg-teal-500 p-2 md:p-4 rounded-full shadow-lg hover:scale-110">
                        <ChevronRight size={28} className="md:w-8 md:h-8" />
                      </button>
                    </>
                  )}

                  <div
                    className="flex-1 flex items-center justify-center p-4 pt-16 pb-24 md:p-12 relative w-full h-full overflow-hidden"
                    onClick={(e) => { if(e.target === e.currentTarget) closeGallery(); }}
                  >
                    <div
                      className="relative inline-flex items-center justify-center w-full h-full md:w-auto md:h-auto md:max-w-full md:max-h-full min-w-[150px] min-h-[150px]"
                      onMouseEnter={() => setIsGalleryPaused(true)}
                      onMouseLeave={() => setIsGalleryPaused(false)}
                    >
                      {!isImageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                          <div className="w-12 h-12 border-4 border-teal-500/30 border-t-teal-500 rounded-full animate-spin"></div>
                        </div>
                      )}

                      <img
                        key={`img-${currentImageIndex}`}
                        src={activeProject.gallery[currentImageIndex].src}
                        alt={`${activeProject.title} - View ${currentImageIndex + 1}`}
                        className={`block w-full h-full object-contain md:max-w-full md:max-h-[85vh] md:w-auto md:h-auto drop-shadow-2xl md:rounded-sm transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        draggable="false"
                        onLoad={() => setIsImageLoaded(true)}
                        onError={(e) => { e.target.style.display = 'none'; setIsImageLoaded(true); }}
                      />

                      {isImageLoaded && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent z-10 md:rounded-b-sm"></div>

                          <img
                            key={`wm-${currentImageIndex}`}
                            src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/Logo-JMM-blanco_vsie0i.png"
                            alt="Watermark"
                            className="gallery-img-enter absolute bottom-6 right-4 md:bottom-6 md:right-6 h-6 md:h-12 w-auto z-20 opacity-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                          />

                          <div
                            key={`txt-${currentImageIndex}`}
                            className="gallery-text-enter absolute bottom-10 left-4 md:bottom-8 md:left-8 text-left z-20 max-w-[85%] md:max-w-[70%]"
                          >
                            <h3 className="text-lg md:text-3xl text-white mb-1 font-display tracking-wide text-shadow-strong">
                              {activeProject.title}
                            </h3>
                            <p className="text-[11px] md:text-base text-neutral-200 mb-1 md:mb-2 font-body italic text-shadow-strong leading-tight">
                              {activeProject.gallery[currentImageIndex].desc[lang] || t.portfolio.lblGallery}
                            </p>
                            <div className="hidden md:block text-teal-300 text-[10px] md:text-sm font-heading tracking-widest uppercase text-shadow-strong mt-1 md:mt-0">
                              {activeProject.year && <span>{activeProject.year}</span>}
                              {activeProject.area && <span className="mx-2 text-white/50">|</span>}
                              {activeProject.area && <span>{typeof activeProject.area === 'object' ? activeProject.area[lang] : activeProject.area}</span>}
                              {activeProject.location && <span className="mx-2 text-white/50">|</span>}
                              {activeProject.location && <span>{activeProject.location}</span>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {activeProject.gallery.length > 1 && (
                    <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex items-center justify-center space-x-2 md:space-x-3 z-[105]" onClick={(e) => e.stopPropagation()}>
                      {activeProject.gallery.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-8 md:w-10 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]' : 'w-1.5 md:w-2 bg-neutral-500 hover:bg-neutral-300'}`}
                          aria-label={`View ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* MODAL DEL ARTÍCULO DE BLOG */}
              {activeArticle && (
                <div className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-sm overflow-y-auto" onClick={(e) => { if(e.target === e.currentTarget) setActiveArticle(null); }}>
                  <button onClick={() => setActiveArticle(null)} className="fixed top-4 right-4 md:top-8 md:right-8 text-white z-[110] transition-colors hover:text-teal-400 p-2 bg-neutral-900 rounded-full shadow-lg border border-neutral-700">
                    <X size={32} />
                  </button>
                  <div className="max-w-[1400px] w-full mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8 fade-in relative" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden shadow-2xl">
                      <div className="h-64 md:h-[450px] relative w-full">
                        <img src={activeArticle.coverImg} alt={activeArticle.title[lang]} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                      </div>
                      <div className="p-6 md:p-16 -mt-20 md:-mt-32 relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-teal-600 text-white text-[10px] md:text-sm font-heading uppercase tracking-widest rounded-sm mb-4 md:mb-6 shadow-lg">{activeArticle.date[lang]}</span>
                        <h1 className="text-3xl md:text-6xl font-display text-white mb-6 md:mb-8 leading-tight drop-shadow-md">{activeArticle.title[lang]}</h1>
                        
                        <div className="flex items-center text-neutral-300 text-sm md:text-base mb-8 md:mb-12 border-b border-neutral-800 pb-8">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 md:mr-6 border-2 border-teal-500 shadow-md">
                            <img src={activeArticle.authorImg} alt={activeArticle.author} className="w-full h-full object-cover bg-neutral-800" />
                          </div>
                          <div>
                            <span className="block text-white font-heading tracking-wide text-base md:text-lg">{activeArticle.author}</span>
                            <span className="block text-xs md:text-sm font-body text-neutral-500 uppercase tracking-wider mt-0.5">JMM Render Studio</span>
                          </div>
                        </div>

                        <div className="font-body font-light text-neutral-300 text-lg md:text-xl lg:text-2xl" dangerouslySetInnerHTML={{ __html: activeArticle.content[lang] }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        }

        function PortfolioView({ openGallery, t, lang }) {
          const [filter, setFilter] = useState('all');
          const categories = ['all', 'residential', 'comercial'];

          const filteredItems = filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.category === filter);

          return (
            <div className="animate-in fade-in duration-500 bg-neutral-900 min-h-screen pb-20 md:pb-24">
              <Reveal direction="down" className="py-16 md:py-20 bg-neutral-950 text-center px-4">
                <h1 className="text-5xl md:text-6xl font-display tracking-wide text-white mb-4">{t.portfolio.title}</h1>
                <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-body leading-relaxed">{t.portfolio.desc}</p>
              </Reveal>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 overflow-hidden">
                <Reveal direction="up" delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full text-sm font-heading uppercase tracking-widest transition-all duration-300 border ${filter === cat ? 'bg-teal-600 border-teal-600 text-white shadow-lg scale-105' : 'border-neutral-700 text-neutral-400 hover:border-teal-500 hover:text-teal-400 hover:scale-105'}`}>
                      {t.portfolio.filters[cat]}
                    </button>
                  ))}
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredItems.map((item, idx) => (
                    <Reveal key={item.id} delay={idx * 150} direction="up" className="group relative overflow-hidden bg-neutral-950 rounded-sm cursor-pointer block ring-1 ring-inset ring-white/5 transform-gpu" onClick={() => openGallery(item)}>
                      <img src={item.img} alt={item.title} className="w-full aspect-square object-cover transition-transform duration-[2000ms] scale-[1.02] md:group-hover:scale-110" loading="lazy" />
                      
                      <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/Logo-JMM-blanco_vsie0i.png" alt="Watermark" className="absolute bottom-4 right-4 h-8 md:h-12 w-auto opacity-30 pointer-events-none z-20 transition-all duration-500 md:group-hover:opacity-60 md:group-hover:scale-110 drop-shadow-lg" />
                      
                      <div className="p-3 md:p-4 md:absolute md:inset-0 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 md:flex md:items-center md:justify-center md:z-30">
                        <div className="md:text-center transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500 pointer-events-none flex flex-col items-center">
                          <Maximize className="text-white hidden md:mx-auto md:mb-3 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-700 md:delay-100 text-shadow-strong" size={32} />
                          <span className="block text-teal-400 text-[10px] md:text-xs font-heading uppercase tracking-widest mb-1 text-shadow-strong">{t.portfolio.filters[item.category] || item.category}</span>
                          <h4 className="text-white text-xl md:text-3xl font-display md:px-4 text-shadow-strong mb-2">{item.title}</h4>
                          <span className="block text-neutral-300 font-heading text-[10px] leading-relaxed mb-4 md:hidden text-shadow-strong">{item.year} | {typeof item.area === 'object' ? item.area[lang] : item.area} | {item.location}</span>
                          <span className="mt-2 inline-block px-4 py-1.5 md:px-6 md:py-2 bg-teal-600 text-white text-[10px] md:text-xs font-heading uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(20,184,166,0.4)] pointer-events-auto transition-colors">
                            {t.portfolio.viewMore}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        function ServicesView({ t }) {
          const [expandedIndex, setExpandedIndex] = useState(null);
          const itemRefs = useRef([]); 

          const toggleExpand = (idx) => {
            if (expandedIndex === idx) {
              setExpandedIndex(null);
            } else {
              setExpandedIndex(idx);
              setTimeout(() => {
                if (itemRefs.current[idx]) {
                  const navHeight = window.innerWidth < 768 ? 96 : 128;
                  const element = itemRefs.current[idx];
                  const y = element.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 510); 
            }
          };

          const renderExpandedContent = (idx) => {
            const details = t.services.details[idx];
            
            switch(idx) {
              case 0:
                return (
                  <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-500">
                    <p className="text-teal-400 font-body mb-6">{details.text}</p>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-neutral-950 rounded-sm relative group overflow-hidden border border-neutral-800 min-h-[300px]">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083637/plano-plantas_qqrqqc.jpg" alt="Blueprint Plans" className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 relative z-10" onError={(e) => { e.target.style.display='none'; }} />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 z-0"><FileText size={64} /></div>
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 text-xs text-white rounded-sm z-20 font-body text-shadow-strong">{details.lbl1}</div>
                      </div>
                      <div className="bg-neutral-950 rounded-sm relative group overflow-hidden border border-neutral-800 min-h-[300px]">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083640/plano-isometrico_nxepqu.jpg" alt="Structural Isometrics" className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 relative z-10" onError={(e) => { e.target.style.display='none'; }} />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 z-0"><Ruler size={64} /></div>
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 text-xs text-white rounded-sm z-20 font-body text-shadow-strong">{details.lbl2}</div>
                      </div>
                    </div>
                  </div>
                );
              case 1:
                return (
                  <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-500">
                    <p className="text-teal-400 font-body mb-6">{details.text}</p>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-neutral-950 rounded-sm relative group overflow-hidden border border-neutral-800 min-h-[300px]">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083647/levantamiento-real_he3pzs.png" alt="Real State Survey" className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 relative z-10" onError={(e) => { e.target.style.display='none'; }} />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 z-0"><Camera size={64} /></div>
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 text-xs text-white rounded-sm z-20 font-body text-shadow-strong">{details.lbl1}</div>
                      </div>
                      <div className="bg-neutral-950 rounded-sm relative group overflow-hidden border border-neutral-800 min-h-[300px]">
                        <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/levantamiento-plano_eeb8ir.png" alt="Architectural Digitization" className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 relative z-10" onError={(e) => { e.target.style.display='none'; }} />
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-800 z-0"><FileText size={64} /></div>
                        <div className="absolute bottom-4 left-4 px-3 py-1.5 text-xs text-white rounded-sm z-20 font-body text-shadow-strong">{details.lbl2}</div>
                      </div>
                    </div>
                  </div>
                );
              case 2:
                return (
                  <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-500">
                    <p className="text-teal-400 font-body mb-6">{details.text}</p>
                    <Viewer360 />
                  </div>
                );
              case 3:
                return (
                  <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-500">
                    <p className="text-teal-400 font-body mb-6">{details.text}</p>
                    <ImageSlider 
                        beforeSrc="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083631/mueble-render_gn4nku.jpg" 
                        afterSrc="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083631/mueble-real_wkn3y5.jpg" 
                        beforeLabel={details.lbl1} 
                        afterLabel={details.lbl2} 
                    />
                  </div>
                );
              case 4:
                return (
                  <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-500">
                    <div className="bg-teal-900/20 border border-teal-800/50 p-6 rounded-sm">
                      <p className="text-neutral-300 font-body leading-relaxed">
                        {details.text}
                      </p>
                    </div>
                  </div>
                );
              default: return null;
            }
          };

          return (
            <div className="animate-in fade-in duration-500 relative min-h-screen pb-20 md:pb-24 overflow-hidden">
              <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
                <img 
                  src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775085323/Portada-7_c72bbm.png" alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
                />
                <div className="absolute inset-0 bg-neutral-950/80"></div>
              </div>

              <Reveal direction="down" className="py-16 md:py-20 text-center px-4 relative z-10">
                <h1 className="text-5xl md:text-6xl font-display tracking-wide text-white mb-4">{t.services.srvTitle}</h1>
                <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-body leading-relaxed">{t.services.srvDesc}</p>
              </Reveal>

              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 space-y-5 md:space-y-6 relative z-10">
                {t.services.items.map((srv, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <Reveal key={index} delay={index * 150} direction="up" className={`bg-neutral-950/90 backdrop-blur-md border transition-all duration-500 rounded-sm ${isExpanded ? 'border-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.15)] scale-[1.02]' : 'border-neutral-800 hover:border-teal-900 hover:scale-[1.01]'}`}>
                      <div ref={(el) => itemRefs.current[index] = el} className="p-5 md:p-8">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start text-left cursor-pointer" onClick={() => toggleExpand(index)}>
                          <div className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-500 shadow-lg ${isExpanded ? 'bg-teal-500 text-white shadow-[0_0_25px_rgba(20,184,166,0.6)] scale-110' : 'bg-neutral-900 text-teal-500'}`}>
                            {ICONS[index]}
                          </div>
                          
                          <div className="flex-1 w-full">
                            <div className="flex justify-between items-start mb-2 gap-3">
                              <h3 className={`text-xl md:text-3xl font-heading tracking-wide transition-colors w-full ${isExpanded ? 'text-teal-400' : 'text-white'}`}>{srv.title}</h3>
                              <ChevronRight className={`text-neutral-500 transition-transform duration-500 flex-shrink-0 ${isExpanded ? 'rotate-90 text-teal-500' : ''}`} />
                            </div>
                            <p className="text-neutral-400 font-body leading-relaxed text-sm md:text-lg">{t.services.items[index].desc}</p>
                          </div>
                        </div>

                        <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden no-scrollbar">
                            {renderExpandedContent(index)}
                          </div>
                        </div>

                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        }

        function JournalView({ t, lang, openArticle }) {
          return (
            <div className="animate-in fade-in duration-500 bg-neutral-900 min-h-screen pb-20 md:pb-24 relative overflow-hidden">
              <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
                <img 
                  src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775085323/Portada-7_c72bbm.png" alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
                />
                <div className="absolute inset-0 bg-neutral-950/80"></div>
              </div>

              <Reveal direction="down" className="py-16 md:py-20 text-center px-4 relative z-10">
                <h1 className="text-5xl md:text-6xl font-display tracking-wide text-white mb-4">{t.journal.title}</h1>
                <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-body leading-relaxed">{t.journal.desc}</p>
              </Reveal>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {JOURNAL_ARTICLES.map((article, idx) => (
                    <Reveal key={article.id} delay={idx * 150} direction="up" className="bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden group cursor-pointer hover:border-teal-500 transition-colors shadow-lg flex flex-col" onClick={() => openArticle(article)}>
                      <div className="h-56 md:h-64 overflow-hidden relative flex-shrink-0">
                        <img src={article.coverImg} alt={article.title[lang]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </div>
                      <div className="p-6 md:p-8 relative bg-neutral-950 flex flex-col flex-1 justify-between">
                        <div>
                          <span className="text-neutral-500 text-[10px] md:text-xs font-heading uppercase tracking-widest mb-3 block">{article.date[lang]}</span>
                          <h3 className="text-xl md:text-2xl font-heading text-white mb-4 leading-snug group-hover:text-teal-400 transition-colors">{article.title[lang]}</h3>
                        </div>
                        <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
                          <span className="text-teal-500 text-xs font-heading uppercase tracking-widest">{t.journal.label}</span>
                          <ArrowRight size={16} className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        function AboutView({ t }) {
          const [activeStep, setActiveStep] = useState(null);

          return (
            <div className="animate-in fade-in duration-500 relative min-h-screen overflow-hidden">
              <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
                <img 
                  src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775085323/Portada-7_c72bbm.png" alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
                />
                <div className="absolute inset-0 bg-neutral-950/80"></div>
              </div>

              <section className="relative py-20 md:py-32 overflow-hidden z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <Reveal direction="up">
                    <h1 className="text-5xl md:text-6xl font-display tracking-wide text-white mb-6">{t.about.title}</h1>
                    <div className="w-16 h-1 bg-teal-500 mx-auto mb-8"></div>
                    <h2 className="text-xl md:text-2xl text-teal-400 font-heading mb-8 leading-relaxed">{t.about.sub}</h2>
                    <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-body mb-12 md:mb-16 text-left md:text-center">
                      <p dangerouslySetInnerHTML={{ __html: t.about.p1 }}></p>
                      <p>{t.about.p2}</p>
                    </div>

                    <div className="mt-10 md:mt-12 bg-neutral-950/60 border border-neutral-800 p-6 md:p-8 flex flex-col items-center justify-center rounded-sm relative overflow-hidden group hover:border-teal-900 transition-colors duration-500 shadow-xl max-w-2xl mx-auto">
                      <div className="absolute opacity-[0.05] group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none">
                         <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083599/Costa-Rica_cjodgp.png" alt="Map Background" className="w-full h-full object-cover scale-150" />
                      </div>
                      <div className="w-40 h-40 sm:w-56 sm:h-56 relative z-10 flex items-center justify-center mb-6">
                         <img src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083599/Costa-Rica_cjodgp.png" alt="Costa Rica Map" className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-[1500ms] group-hover:scale-110 relative z-10" />
                         <div className="absolute z-20 top-[30%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]">
                             <MapPin size={28} className="animate-bounce" fill="currentColor" />
                         </div>
                      </div>
                      <div className="relative z-10 text-center overflow-visible">
                         <p className="text-teal-400 flex items-center justify-center font-heading text-base md:text-2xl tracking-[0.2em] md:tracking-widest text-center drop-shadow-md">
                            {t.about.locationDesc}
                         </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              <section className="py-16 md:py-24 relative z-10 bg-neutral-900/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Reveal direction="up" className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-display tracking-wide text-white mb-4">{t.about.processTitle}</h2>
                    <div className="w-16 h-1 bg-teal-500 mx-auto mb-4"></div>
                    <p className="text-neutral-400 font-body italic">{t.about.processDesc}</p>
                  </Reveal>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mt-12">
                    {t.about.steps.map((item, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <Reveal key={idx} delay={idx * 200} direction="up" className="relative pt-8 group cursor-pointer" onClick={() => setActiveStep(isActive ? null : idx)}>
                          {idx !== t.about.steps.length - 1 && (
                            <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-neutral-800 transition-colors duration-500"></div>
                          )}
                          <div className="relative z-10 flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-heading mb-6 transition-all duration-500 shadow-lg ${isActive ? 'bg-teal-500 border-teal-500 text-white shadow-[0_0_25px_rgba(20,184,166,0.6)] scale-110' : 'bg-neutral-950 border-teal-500 text-teal-400 hover:scale-105'}`}>
                              0{idx + 1}
                            </div>
                            <h4 className={`text-2xl font-display tracking-wide mb-3 transition-colors ${isActive ? 'text-teal-400' : 'text-white'}`}>{item.title}</h4>
                            <p className={`text-sm px-4 font-body leading-relaxed transition-all duration-500 ${isActive ? 'text-neutral-200' : 'text-neutral-500'}`}>{item.desc}</p>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          );
        }

        function ContactView({ t }) {
          const [isSubmitting, setIsSubmitting] = useState(false);
          const [submitMessage, setSubmitMessage] = useState('');

          const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitMessage('');
            
            const form = e.target;
            const formData = new FormData(form);
            
            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  country_code: formData.get('country_code'),
                  project_type: formData.get('project_type'),
                  message: formData.get('message'),
                  botcheck: formData.get('botcheck')
                })
              });
              
              const data = await response.json();
              
              if (response.status === 200 || data.success) {
                setSubmitMessage('success');
                form.reset();
              } else {
                setSubmitMessage('error');
              }
            } catch (error) {
              setSubmitMessage('error');
            } finally {
              setIsSubmitting(false);
              setTimeout(() => setSubmitMessage(''), 7000);
            }
          };

          return (
            <div className="animate-in fade-in duration-500 relative min-h-screen pb-20 md:pb-24 overflow-hidden">
              <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
                <img 
                  src="https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775085323/Portada-7_c72bbm.png" alt="Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
                />
                <div className="absolute inset-0 bg-neutral-950/80"></div>
              </div>

              <Reveal direction="down" className="py-16 md:py-20 text-center px-4 relative z-10">
                <h1 className="text-5xl md:text-6xl font-display tracking-wide text-white mb-4">{t.contact.title}</h1>
                <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-body leading-relaxed">{t.contact.desc}</p>
              </Reveal>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                  
                  <Reveal direction="left">
                    <h3 className="text-2xl md:text-3xl font-display tracking-wide text-white mb-8">{t.contact.infoTitle}</h3>
                    <div className="space-y-7 md:space-y-8 font-body">
                      <div className="flex items-start group">
                        <div className="w-12 h-12 bg-neutral-800/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-teal-500 mr-6 flex-shrink-0 transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110">
                          <MessageCircle size={24} />
                        </div>
                        <div>
                          <h4 className="text-neutral-400 text-sm font-heading uppercase tracking-wider mb-1">{t.contact.lblPhone}</h4>
                          <a href="https://wa.me/50670188160" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl text-white hover:text-teal-400 transition-colors break-words">{t.contact.valPhone}</a>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 h-12 bg-neutral-800/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-teal-500 mr-6 flex-shrink-0 transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110">
                          <Send size={24} />
                        </div>
                        <div>
                          <h4 className="text-neutral-400 text-sm font-heading uppercase tracking-wider mb-1">{t.contact.lblTelegram}</h4>
                          <a href="https://t.me/JMM_RENDER_STUDIO" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl text-white hover:text-teal-400 transition-colors break-all">t.me/JMM_RENDER_STUDIO</a>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 h-12 bg-neutral-800/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-teal-500 mr-6 flex-shrink-0 transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h4 className="text-neutral-400 text-sm font-heading uppercase tracking-wider mb-1">{t.contact.lblEmail}</h4>
                          <a href="mailto:info@jmm-arquitectura.art" className="text-base md:text-xl text-white hover:text-teal-400 transition-colors break-all">info@jmm-arquitectura.art</a>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-12 h-12 bg-neutral-800/80 backdrop-blur-sm rounded-sm flex items-center justify-center text-teal-500 mr-6 flex-shrink-0 transition-all duration-500 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110">
                          <Instagram size={24} />
                        </div>
                        <div>
                          <h4 className="text-neutral-400 text-sm font-heading uppercase tracking-wider mb-1">{t.contact.lblIg}</h4>
                          <a href="https://instagram.com/jmm_render_studio" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl text-white hover:text-teal-400 transition-colors break-all">@jmm_render_studio</a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 md:mt-12 p-6 md:p-8 bg-neutral-950 border border-neutral-800 rounded-sm hover:border-teal-900 transition-colors duration-500">
                      <p className="text-neutral-300 italic font-body text-base md:text-lg leading-relaxed">{t.contact.quote}</p>
                    </div>
                  </Reveal>

                  <Reveal direction="right" delay={200}>
                    <div className="bg-neutral-950 p-6 md:p-10 rounded-sm border border-neutral-800 hover:border-teal-900 transition-colors duration-500 shadow-2xl">
                      <h3 className="text-2xl md:text-3xl font-display tracking-wide text-white mb-8">{t.contact.formTitle}</h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-6 font-body">
                        <input type="hidden" name="subject" value="Nueva Cotización desde la Web JMM" />
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div>
                          <label className="block text-sm font-heading text-neutral-400 mb-2 uppercase tracking-wide">{t.contact.name}</label>
                          <input name="name" type="text" required className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder={t.contact.namePh} />
                        </div>
                        <div>
                          <label className="block text-sm font-heading text-neutral-400 mb-2 uppercase tracking-wide">{t.contact.email}</label>
                          <input name="email" type="email" required className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder={t.contact.emailPh} />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-heading text-neutral-400 mb-2 uppercase tracking-wide">{t.contact.phone}</label>
                          <div className="flex">
                            <select name="country_code" className="bg-neutral-900 border border-neutral-700 rounded-l-sm px-2 md:px-3 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors border-r-0 cursor-pointer">
                              <option value="+506">+506</option>
                              <option value="+1">+1</option>
                              <option value="+52">+52</option>
                              <option value="+34">+34</option>
                              <option value="+57">+57</option>
                              <option value="+54">+54</option>
                              <option value="+51">+51</option>
                              <option value="+56">+56</option>
                              <option value="+507">+507</option>
                            </select>
                            <input name="phone" type="tel" className="w-full bg-neutral-900 border border-neutral-700 rounded-r-sm px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors" placeholder={t.contact.phonePh} />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-heading text-neutral-400 mb-2 uppercase tracking-wide">{t.contact.type}</label>
                          <select name="project_type" className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors appearance-none cursor-pointer">
                            {t.contact.typeOpt.map((opt, idx) => (
                              <option key={idx} value={idx === 0 ? "" : opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-heading text-neutral-400 mb-2 uppercase tracking-wide">{t.contact.msg}</label>
                          <textarea name="message" rows="4" required className="w-full bg-neutral-900 border border-neutral-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none" placeholder={t.contact.msgPh}></textarea>
                        </div>
                        
                        <button type="submit" disabled={isSubmitting} className={`w-full font-heading uppercase tracking-widest py-4 rounded-sm transition-all mt-4 flex justify-center items-center ${isSubmitting ? 'bg-teal-800 text-teal-200 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-500 text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]'}`}>
                          {isSubmitting ? 'Enviando...' : t.contact.submit}
                        </button>

                        {submitMessage === 'success' && (
                          <div className="p-4 bg-teal-900/50 border border-teal-500 rounded-sm text-teal-300 text-sm text-center mt-4 fade-in">
                            {t.contact.successMsg}
                          </div>
                        )}
                        {submitMessage === 'error' && (
                          <div className="p-4 bg-red-900/50 border border-red-500 rounded-sm text-red-300 text-sm text-center mt-4 fade-in">
                            {t.contact.errorMsg}
                          </div>
                        )}
                      </form>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        }
