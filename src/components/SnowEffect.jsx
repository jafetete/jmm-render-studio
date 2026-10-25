import React from 'react';

const SNOWFLAKES = [
  { left: '3%', size: 11, duration: 10.8, delay: -7.2, sway: 18, opacity: 0.42 },
  { left: '8%', size: 18, duration: 13.6, delay: -3.8, sway: -24, opacity: 0.76 },
  { left: '14%', size: 9, duration: 8.9, delay: -6.4, sway: 15, opacity: 0.34 },
  { left: '19%', size: 15, duration: 11.7, delay: -1.5, sway: -18, opacity: 0.62 },
  { left: '25%', size: 21, duration: 14.4, delay: -10.1, sway: 22, opacity: 0.82 },
  { left: '31%', size: 10, duration: 9.7, delay: -4.9, sway: -14, opacity: 0.4 },
  { left: '37%', size: 17, duration: 12.8, delay: -8.6, sway: 25, opacity: 0.7 },
  { left: '43%', size: 12, duration: 10.2, delay: -2.4, sway: -20, opacity: 0.48 },
  { left: '49%', size: 22, duration: 15.1, delay: -12.3, sway: 17, opacity: 0.86 },
  { left: '55%', size: 9, duration: 8.6, delay: -5.7, sway: -16, opacity: 0.35 },
  { left: '61%', size: 16, duration: 12.1, delay: -9.4, sway: 23, opacity: 0.68 },
  { left: '67%', size: 12, duration: 10.9, delay: -1.1, sway: -25, opacity: 0.44 },
  { left: '73%', size: 20, duration: 14.2, delay: -7.9, sway: 19, opacity: 0.8 },
  { left: '79%', size: 10, duration: 9.4, delay: -3.1, sway: -15, opacity: 0.38 },
  { left: '85%', size: 18, duration: 13.1, delay: -11.2, sway: 24, opacity: 0.72 },
  { left: '91%', size: 13, duration: 10.4, delay: -6.8, sway: -21, opacity: 0.5 },
  { left: '97%', size: 23, duration: 15.8, delay: -14.6, sway: 16, opacity: 0.84 },
  { left: '11%', size: 14, duration: 12.5, delay: -9.1, sway: -19, opacity: 0.56 },
  { left: '28%', size: 8, duration: 8.2, delay: -2.9, sway: 13, opacity: 0.32 },
  { left: '46%', size: 19, duration: 13.9, delay: -4.3, sway: -23, opacity: 0.74 },
  { left: '64%', size: 11, duration: 9.1, delay: -7.6, sway: 20, opacity: 0.4 },
  { left: '82%', size: 16, duration: 12.9, delay: -12.8, sway: -17, opacity: 0.66 },
];

export default function SnowEffect() {
  return (
    <div className="snow-effect" aria-hidden="true">
      {SNOWFLAKES.map((flake, index) => (
        <span
          key={index}
          className="snowflake"
          style={{
            '--snow-left': flake.left,
            '--snow-size': `${flake.size}px`,
            '--snow-duration': `${flake.duration}s`,
            '--snow-delay': `${flake.delay}s`,
            '--snow-sway': `${flake.sway}px`,
            '--snow-opacity': flake.opacity,
          }}
        >
          {index % 4 === 0 ? '❅' : '❄'}
        </span>
      ))}
    </div>
  );
}
