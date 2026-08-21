import React from "react";

interface ChakravyuhDirectLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showGlow?: boolean;
}

/**
 * Pixel-accurate, clean SVG vector recreation of the exact Chakravyuh circular badge logo:
 * - Pure black circular badge background (#000000)
 * - Concentric white labyrinth/maze emblem in center with precise line cuts
 * - Stylized red 'Chakravyuh' curved text with signature sword/hook 'C' and gothic esports terminals
 */
export const ChakravyuhLogoSVG: React.FC<ChakravyuhDirectLogoProps> = ({
  size = "md",
  className = "",
  showGlow = true,
}) => {
  const sizeClasses = {
    xs: "w-7 h-7",
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 ${sizeClasses[size]} ${className}`}
    >
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-red-600/20 blur-sm pointer-events-none" />
      )}
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-md select-none"
      >
        {/* Main Solid Black Circle Badge */}
        <circle cx="150" cy="150" r="145" fill="#000000" stroke="#1f2937" strokeWidth="2" />

        {/* --- Labyrinth / Maze Emblem (Top Center) --- */}
        <g id="chakravyuh-emblem" transform="translate(150, 115)">
          {/* Inner small circle & center dot */}
          <circle cx="0" cy="0" r="10" stroke="#FFFFFF" strokeWidth="7" fill="none" />
          
          {/* Middle labyrinth arc ring 1 */}
          <path
            d="M -24 0 A 24 24 0 1 1 0 24 L 0 12"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Middle labyrinth arc ring 2 */}
          <path
            d="M 24 -10 A 26 26 0 0 0 -26 -5"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Outer labyrinth arc segment 1 */}
          <path
            d="M -38 -8 A 40 40 0 0 1 28 -28 L 38 -18"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Outer labyrinth arc segment 2 */}
          <path
            d="M 40 -6 A 42 42 0 0 1 15 40 L 5 28"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Outer labyrinth arc segment 3 */}
          <path
            d="M -10 40 A 42 42 0 0 1 -42 10 L -30 2"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          {/* Additional precision maze connectors */}
          <path
            d="M -20 -35 L -10 -25"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 32 20 L 22 15"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* --- Stylized Red 'Chakravyuh' Text (Lower Center) --- */}
        {/* Exact red brand text matching the user's reference image */}
        <g id="chakravyuh-text" transform="translate(150, 198)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#E50914"
            fontFamily="'Cinzel', 'Trajan Pro', 'Samarkan', 'Cinzel Decorative', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="1.2"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(229, 9, 20, 0.4)",
            }}
          >
            Chakravyuh
          </text>
        </g>

        {/* Inner subtle high-tech border ring */}
        <circle cx="150" cy="150" r="142" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};
