import React from "react";
import logoImg from "../assets/images/chakravyuh_exact_circular_logo_1786972137458.jpg";
import fallbackLogoImg from "../assets/images/chakravyuh_logo_1786971837868.jpg";

interface ChakravyuhLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  variant?: "full" | "icon" | "badge";
}

export const ChakravyuhLogo: React.FC<ChakravyuhLogoProps> = ({
  size = "md",
  showText = true,
  className = "",
  variant = "badge",
}) => {
  const sizeMap = {
    xs: "w-8 h-8",
    sm: "w-10 h-10",
    md: "w-13 h-13",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const imgSizeMap = {
    xs: "w-7 h-7",
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-15 h-15",
    xl: "w-22 h-22",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact Circular Black Badge Logo */}
      <div
        className={`relative flex items-center justify-center ${sizeMap[size]} rounded-full bg-black border border-neutral-800 shadow-xl group overflow-hidden shrink-0`}
      >
        <img
          src={logoImg || fallbackLogoImg}
          alt="Chakravyuh Circular Logo"
          className={`${imgSizeMap[size]} object-contain rounded-full`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if image load has any issue
            (e.target as HTMLImageElement).src = fallbackLogoImg;
          }}
        />
        {/* Subtle Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-red-500/30 pointer-events-none group-hover:border-red-500/60 transition-colors" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-wider text-white uppercase font-mono">
              Chakravyuh
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider text-red-400 bg-red-950/70 border border-red-500/40 rounded-full uppercase">
              E-Sports
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Gaming Cafe • Canada Corner, Nashik
          </p>
        </div>
      )}
    </div>
  );
};

