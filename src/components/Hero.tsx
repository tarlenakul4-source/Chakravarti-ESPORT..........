import React, { useState } from "react";
import { Monitor, Star, Zap, MapPin, ChevronRight, ShieldCheck, Gamepad2, Radio, Phone, MessageCircle, Clock, Sparkles, Camera } from "lucide-react";
import { LiveBackground } from "./LiveBackground";
import logoImg from "../assets/images/chakravyuh_exact_circular_logo_1786972137458.jpg";
import realArenaPhoto from "../assets/images/chakravyuh_blue_zone_1786972704053.jpg";
import benqZowiePhoto from "../assets/images/chakravyuh_benq_zowie_1786972765101.jpg";

interface HeroProps {
  onBookClick: () => void;
  onOpenAICoach: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onOpenAICoach }) => {
  const [bgTheme, setBgTheme] = useState<"arena" | "cyber" | "neon" | "obsidian">("arena");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[85vh] lg:min-h-[90vh] flex items-center pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-900">
      {/* Full-Screen Autoplay Live Background Video & Particle Mesh */}
      <LiveBackground activeTheme={bgTheme} opacityOverlay="bg-black/35" />

      {/* Live Ambient Lighting Selector */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-xl border border-slate-800 rounded-full text-[11px] font-mono text-slate-200 shadow-2xl">
        <span className="flex items-center gap-1 text-slate-300 mr-1 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          LIVE THEME:
        </span>
        <button
          onClick={() => setBgTheme("arena")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            bgTheme === "arena"
              ? "bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 font-bold shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Arena Cyan
        </button>
        <button
          onClick={() => setBgTheme("cyber")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            bgTheme === "cyber"
              ? "bg-purple-500/25 text-purple-300 border border-purple-500/50 font-bold shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Cyber Neon
        </button>
        <button
          onClick={() => setBgTheme("neon")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            bgTheme === "neon"
              ? "bg-orange-500/25 text-orange-300 border border-orange-500/50 font-bold shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Pro Orange
        </button>
        <button
          onClick={() => setBgTheme("obsidian")}
          className={`px-2.5 py-0.5 rounded-full transition-all ${
            bgTheme === "obsidian"
              ? "bg-slate-800 text-slate-100 border border-slate-600 font-bold shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Obsidian
        </button>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          
          {/* Location & Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-slate-300 shadow-xl mx-auto">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold">4.8</span>
            </div>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 font-mono flex items-center gap-1">
              <MapPin className="w-3 h-3 text-rose-400" />
              Canada Corner, Nashik
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 flex items-center gap-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              OPEN NOW
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black border-2 border-red-500/70 p-1 shadow-2xl shadow-red-950/80 flex items-center justify-center shrink-0">
                <img
                  src={logoImg}
                  alt="Chakravyuh Emblem"
                  className="w-full h-full object-contain rounded-xl filter contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-mono leading-none drop-shadow-2xl">
                  Chakravyuh
                </h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-amber-300 font-mono font-extrabold text-xl sm:text-3xl tracking-wider uppercase">
                  E-Sports & Gaming Cafe
                </span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold tracking-widest text-cyan-400 uppercase font-mono drop-shadow pt-2">
              Play. Compete. Conquer.
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow">
            Nashik’s premier gaming arena with high-end RTX 4090 & 240Hz/360Hz BenQ ZOWIE PC rigs, PlayStation 5 4K OLED VIP Lounges, and ultra-low latency fiber internet.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("games")}
              className="px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 hover:from-orange-300 hover:to-amber-300 rounded-xl shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              View Games & Rate Card
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBookClick}
              className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              Book Slot
            </button>

            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 text-sm font-bold text-emerald-300 bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-emerald-950/50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Desk
            </a>

            <a
              href="tel:+919175228208"
              className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-950/90 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              Call 9175228208
            </a>
          </div>

          {/* Quick Specs Overview Pills */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-center">
            <div className="bg-black/60 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-800/80">
              <p className="text-xl font-extrabold text-white font-mono">360Hz & 240Hz</p>
              <p className="text-xs text-slate-400">DyAc+ BenQ ZOWIE</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-800/80">
              <p className="text-xl font-extrabold text-cyan-400 font-mono">8ms Ping</p>
              <p className="text-xs text-slate-400">Direct Gigabit Fiber</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-black/60 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-800/80">
              <p className="text-xl font-extrabold text-purple-400 font-mono">PS5 4K OLED</p>
              <p className="text-xs text-slate-400">DualSense 4-Player</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
