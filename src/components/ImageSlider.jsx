import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider({ beforeSrc, afterSrc, beforeLabel, afterLabel }) {
            const [position, setPosition] = useState(50);
            const [isDragging, setIsDragging] = useState(false);
            const containerRef = useRef(null);

            const handleMove = (clientX) => {
                if (!isDragging || !containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const percent = (x / rect.width) * 100;
                setPosition(percent);
            };

            const onMouseMove = (e) => handleMove(e.clientX);
            const onTouchMove = (e) => handleMove(e.touches[0].clientX);

            useEffect(() => {
                const handleMouseUp = () => setIsDragging(false);
                if (isDragging) {
                    window.addEventListener('mouseup', handleMouseUp);
                    window.addEventListener('touchend', handleMouseUp);
                }
                return () => {
                    window.removeEventListener('mouseup', handleMouseUp);
                    window.removeEventListener('touchend', handleMouseUp);
                };
            }, [isDragging]);

            return (
                <div 
                    ref={containerRef}
                    className="relative w-full h-80 md:h-[500px] rounded-sm overflow-hidden select-none cursor-ew-resize border border-neutral-800 bg-neutral-950 group"
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
                    onMouseMove={onMouseMove}
                    onTouchMove={onTouchMove}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={afterSrc} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" draggable="false" onError={(e) => { e.target.style.display='none'; }} />
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 text-xs text-white rounded-sm z-10 font-medium pointer-events-none text-shadow-strong">{afterLabel}</div>
                    <img src={beforeSrc} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} draggable="false" onError={(e) => { e.target.style.display='none'; }} />
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 text-xs text-white rounded-sm z-10 font-medium pointer-events-none text-shadow-strong" style={{ opacity: position > 20 ? 1 : 0, transition: 'opacity 0.2s' }}>{beforeLabel}</div>
                    <div className="absolute top-0 bottom-0 w-1 bg-teal-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center pointer-events-none" style={{ left: `calc(${position}% - 2px)` }}>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-teal-600"><ChevronLeft size={16} /><ChevronRight size={16} className="-ml-1" /></div>
                    </div>
                </div>
            );
        }
