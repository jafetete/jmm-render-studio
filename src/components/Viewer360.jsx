import React from 'react';

export default function Viewer360() {
            return (
                <div className="relative w-full h-80 md:h-[500px] rounded-sm border border-neutral-800 overflow-hidden bg-neutral-950">
                    <iframe width="100%" height="100%" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src="https://kuula.co/share/LGkH6?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1" className="w-full h-full"></iframe>
                </div>
            );
        }
