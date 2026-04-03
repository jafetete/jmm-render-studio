import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, direction = 'up', className = '', onClick }) => {
          const [isVisible, setIsVisible] = useState(false);
          const ref = useRef(null);

          useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target);
                }
              }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            if (ref.current) observer.observe(ref.current);
            return () => { if (ref.current) observer.unobserve(ref.current); };
          }, []);

          let transformBase = 'translate-y-12';
          if (direction === 'down') transformBase = '-translate-y-12';
          if (direction === 'left') transformBase = '-translate-x-12';
          if (direction === 'right') transformBase = 'translate-x-12';
          if (direction === 'none') transformBase = 'scale-95';
          const transformActive = direction === 'none' ? 'scale-100' : 'translate-x-0 translate-y-0';

          return (
            <div ref={ref} onClick={onClick} className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${className} ${isVisible ? `opacity-100 ${transformActive}` : `opacity-0 ${transformBase}`}`} style={{ transitionDelay: `${delay}ms` }}>
              {children}
            </div>
          );
        };

export default Reveal;
