import React from "react";

// Brand mark: a "G" drawn as an open arc with a code-cursor bar, on the pink gradient tile
export const LogoMark = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F2A7C3" />
        <stop offset="1" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="11" fill="url(#logo-grad)" />
    <path
      d="M28.2 14.2A10 10 0 1 0 30 21h-8.5"
      fill="none"
      stroke="#fff"
      strokeWidth="3.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M21.5 25.5v-9" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" opacity=".55" />
  </svg>
);

const Logo = ({ className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark />
    <span className="leading-none">
      <span className="block text-[17px] font-bold tracking-tight text-ink">
        Cut Geubrina
      </span>
      <span className="block text-[11px] font-medium tracking-[0.18em] uppercase text-ink/50 mt-1">
        Flutter · React
      </span>
    </span>
  </span>
);

export default Logo;
