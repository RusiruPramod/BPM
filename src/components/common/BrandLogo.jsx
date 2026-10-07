import React from 'react';

/**
 * BrandLogo - Vector Brand Identity for BP Tours and Travels
 * Premium Sri Lanka travel emblem featuring:
 * - Geometric monogram BP
 * - Tropical Ceylon Sunrise & North Star
 * - Scenic Route & Palm Frond motif
 * - Emerald Green & Amber Gold gradients
 */
export default function BrandLogo({ 
  size = "md", 
  showText = false, 
  variant = "dark", // 'dark' for white navbars, 'light' for dark footers/headers
  className = "" 
}) {
  const sizeMap = {
    xs: "w-8 h-8",
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-13 h-13",
    xl: "w-16 h-16"
  };

  const currentSizeClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Crisp Vector Logo Emblem */}
      <div className={`relative ${currentSizeClass} shrink-0 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
        <svg 
          viewBox="0 0 120 120" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brandBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#022c22" />
              <stop offset="50%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#042f2e" />
            </linearGradient>

            <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>

            <linearGradient id="brandEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <filter id="brandGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Outer Squircle Container */}
          <rect 
            x="4" 
            y="4" 
            width="112" 
            height="112" 
            rx="28" 
            fill="url(#brandBg)" 
            stroke="url(#brandGold)" 
            strokeWidth="2.8" 
            filter="url(#brandGlow)"
          />

          {/* Compass / Astrolabe ring */}
          <circle 
            cx="60" 
            cy="60" 
            r="48" 
            fill="none" 
            stroke="#ffffff" 
            strokeOpacity="0.12" 
            strokeWidth="1.2" 
            strokeDasharray="4 3" 
          />

          {/* Golden Sunrise (Ceylon Dawn) */}
          <g transform="translate(60, 25)">
            <circle cx="0" cy="0" r="9" fill="url(#brandGold)" />
            <path d="M 0 -13 L 0 -10 M -10 -10 L -7 -7 M 10 -10 L 7 -7 M -13 0 L -10 0 M 13 0 L 10 0" 
                  stroke="url(#brandGold)" strokeWidth="1.8" strokeLinecap="round" />
            {/* Compass Star */}
            <path d="M 0 -15 L 1.5 -11 L 5 -11 L 2 -8.5 L 3.5 -4.5 L 0 -7 L -3.5 -4.5 L -2 -8.5 L -5 -11 L -1.5 -11 Z" 
                  fill="#fef08a" transform="scale(0.7) translate(0, -14)" />
          </g>

          {/* Scenic Travel Horizon / Emerald Coast */}
          <path 
            d="M 16 88 C 36 74, 52 86, 75 78 C 88 74, 98 79, 104 84 C 98 94, 76 96, 60 96 C 40 96, 24 94, 16 88 Z" 
            fill="url(#brandEmerald)" 
            opacity="0.9"
          />

          {/* Highway Ribbon (Airport Drops & Island Hires) */}
          <path 
            d="M 45 96 L 56 81 L 62 81 L 70 96 Z" 
            fill="#022c22" 
            opacity="0.75"
          />
          <path 
            d="M 58 95 L 59 83" 
            stroke="#fde047" 
            strokeWidth="1.5" 
            strokeDasharray="2.5 2" 
            strokeLinecap="round"
          />

          {/* Stylized Monogram "B" */}
          <g transform="translate(26, 38)">
            <rect x="0" y="0" width="7" height="34" rx="2" fill="#ffffff" />
            <path d="M 6 0 L 17 0 C 23 0, 27 4, 27 9 C 27 14, 23 18, 17 18 L 6 18 Z" fill="#ffffff" />
            <path d="M 7 4 L 16 4 C 19.5 4, 22 6, 22 9 C 22 12, 19.5 14, 16 14 L 7 14 Z" fill="url(#brandBg)" />
            <path d="M 6 16 L 19 16 C 25.5 16, 29.5 20, 29.5 25 C 29.5 30, 25.5 34, 19 34 L 6 34 Z" fill="#ffffff" />
            <path d="M 7 20 L 18 20 C 21.5 20, 24.5 22, 24.5 25 C 24.5 28, 21.5 30, 18 30 L 7 30 Z" fill="url(#brandBg)" />
          </g>

          {/* Stylized Monogram "P" in Golden Glow */}
          <g transform="translate(61, 38)">
            <rect x="0" y="0" width="7" height="34" rx="2" fill="url(#brandGold)" />
            <path d="M 6 0 L 19 0 C 26 0, 30.5 4.5, 30.5 10 C 30.5 15.5, 26 20, 19 20 L 6 20 Z" fill="url(#brandGold)" />
            <path d="M 7 4 L 18 4 C 22 4, 25 6.5, 25 10 C 25 13.5, 22 16, 18 16 L 7 16 Z" fill="url(#brandBg)" />
          </g>

          {/* Tropical Palm Accent */}
          <g transform="translate(86, 68) scale(0.65)" strokeLinecap="round">
            <path d="M 0 20 Q 3 8, -4 -3" fill="none" stroke="#f59e0b" strokeWidth="2.2" />
            <path d="M -4 -3 Q -14 -12, -18 -6" fill="none" stroke="#6ee7b7" strokeWidth="1.8" />
            <path d="M -4 -3 Q -8 -16, 2 -14" fill="none" stroke="#34d399" strokeWidth="1.8" />
            <path d="M -4 -3 Q 6 -16, 12 -7" fill="none" stroke="#6ee7b7" strokeWidth="1.8" />
            <path d="M -4 -3 Q 8 -5, 14 3" fill="none" stroke="#34d399" strokeWidth="1.8" />
          </g>

          {/* SRI LANKA Text */}
          <text 
            x="60" 
            y="108" 
            textAnchor="middle" 
            fill="url(#brandGold)" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontSize="7.5" 
            fontWeight="800" 
            letterSpacing="2.8"
          >
            SRI LANKA
          </text>
        </svg>
      </div>

      {/* Optional Typography Next to Emblem */}
      {showText && (
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold text-base sm:text-lg tracking-tight ${
              variant === 'light' ? 'text-white' : 'text-slate-900 group-hover:text-emerald-700 transition-colors'
            }`}>
              BP Tours & Travels
            </span>
          </div>
          <p className={`text-[11px] font-semibold tracking-wide flex items-center gap-1 mt-0.5 ${
            variant === 'light' ? 'text-amber-400' : 'text-amber-600'
          }`}>
            <span>Bandara Premathilaka</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-600 font-bold">Sri Lanka</span>
          </p>
        </div>
      )}
    </div>
  );
}
