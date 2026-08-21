import React, { useState } from "react";
import { PASSES } from "../data/mockData";
import { Monitor, Cpu, Flame, Zap, ShieldCheck, Check, Sparkles, Clock, Gamepad2, Phone, MessageCircle, Star, Award } from "lucide-react";

interface RigSpecsAndPricingProps {
  onBookClick: () => void;
}

export const RigSpecsAndPricing: React.FC<RigSpecsAndPricingProps> = ({ onBookClick }) => {
  const [specTab, setSpecTab] = useState<"pc" | "ps5" | "sim">("pc");

  return (
    <section id="rigs-rates" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-950/60 border border-orange-500/40 text-xs font-mono text-orange-400 font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            OFFICIAL ARENA PRICING BOARD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
            Rates & <span className="text-orange-400">Pricing Card</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Official rate list for Chakravyuh E-Sports, Canada Corner, Nashik.
          </p>
        </div>

        {/* --- OFFICIAL ARENA DIGITAL MENU BOARD (PHOTOREALISTIC ACCURATE STYLE) --- */}
        <div className="mb-16 bg-gradient-to-b from-black via-slate-950 to-black border-2 border-orange-500/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-orange-950/50 relative overflow-hidden">
          
          {/* Glowing background highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Board Header Title */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-orange-500/60 pb-6 mb-8 text-center sm:text-left gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Official Rate List</span>
              <h3 className="text-2xl sm:text-3xl font-black font-mono text-white tracking-wider uppercase flex items-center justify-center sm:justify-start gap-2">
                <Flame className="w-7 h-7 text-orange-500 animate-pulse" />
                Chakravyuh E-Sports Rates
              </h3>
            </div>
            <div className="flex flex-col items-center sm:items-end font-mono text-xs text-orange-300">
              <span className="font-extrabold text-sm text-white">CANADA CORNER, NASHIK</span>
              <span>Call: +91 91752 28208 / 82080 88327</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* BLOCK 1: PC GAMING */}
            <div className="bg-slate-900/90 border border-orange-500/40 rounded-2xl p-5 sm:p-6 relative">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-orange-500/30">
                <Monitor className="w-5 h-5 text-orange-400" />
                <h4 className="font-mono font-black text-lg text-white uppercase tracking-wider">
                  PC GAMING
                </h4>
              </div>

              <div className="space-y-3 font-mono">
                <div className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-orange-500/20">
                  <span className="text-sm font-bold text-slate-200">240Hz GOLD</span>
                  <span className="text-base font-black text-orange-400">₹80 / HR</span>
                </div>

                <div className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-orange-500/20">
                  <span className="text-sm font-bold text-slate-200">240Hz PLATINUM</span>
                  <span className="text-base font-black text-orange-400">₹90 / HR</span>
                </div>

                <div className="flex justify-between items-center bg-black/60 p-3 rounded-xl border border-orange-500/40 bg-orange-950/20">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold text-white">360Hz PREMIUM</span>
                  </div>
                  <span className="text-base font-black text-orange-400">₹100 / HR</span>
                </div>
              </div>

              {/* Special Bonus Badge */}
              <div className="mt-4 p-3 bg-gradient-to-r from-orange-950/80 to-red-950/80 border border-orange-500/60 rounded-xl text-center">
                <p className="text-xs font-mono font-extrabold text-orange-300 uppercase tracking-wide">
                  🎁 10% EXTRA BONUS ON OR ABOVE RECHARGE OF ₹500
                </p>
              </div>
            </div>

            {/* BLOCK 2: PREMIUM PLAYSTATION */}
            <div className="bg-slate-900/90 border border-orange-500/40 rounded-2xl p-5 sm:p-6 relative">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-orange-500/30">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-mono font-black text-lg text-white uppercase tracking-wider">
                    PREMIUM PLAYSTATION
                  </h4>
                </div>
                <span className="text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/40">
                  1 HOUR
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">1 CONTROLLER</span>
                  <span className="font-black text-orange-400 text-sm">₹200/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">2 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹240/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">3 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹360/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">4 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹480/-</span>
                </div>
              </div>

              {/* Student Discount Badge */}
              <div className="mt-4 p-3 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/60 rounded-xl text-center">
                <p className="text-xs font-mono font-extrabold text-indigo-300 uppercase tracking-wide">
                  🎓 ENJOY 20% OFF FOR STUDENTS
                </p>
              </div>
            </div>

            {/* BLOCK 3: STANDARD PLAYSTATION */}
            <div className="bg-slate-900/90 border border-orange-500/40 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-orange-500/30">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-mono font-black text-lg text-white uppercase tracking-wider">
                    PLAYSTATION
                  </h4>
                </div>
                <span className="text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/40">
                  1 HOUR
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">1 CONTROLLER</span>
                  <span className="font-black text-orange-400 text-sm">₹150/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">2 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹200/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">3 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹300/-</span>
                </div>

                <div className="bg-black/60 p-3 rounded-xl border border-orange-500/20 flex justify-between items-center">
                  <span className="text-slate-300 font-bold">4 CONTROLLERS</span>
                  <span className="font-black text-orange-400 text-sm">₹400/-</span>
                </div>
              </div>
            </div>

            {/* BLOCK 4: RACING SIMULATOR */}
            <div className="bg-slate-900/90 border border-orange-500/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-orange-500/30">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <h4 className="font-mono font-black text-lg text-white uppercase tracking-wider">
                    RACING SIMULATOR
                  </h4>
                </div>

                <div className="bg-black/80 p-5 rounded-2xl border-2 border-amber-500/50 text-center font-mono my-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Cockpit Direct Drive Rig</p>
                  <p className="text-3xl font-black text-amber-400 mt-1">₹250 / HR</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Fanatec Wheel & Pedal Feedback</span>
                <span className="text-emerald-400 font-bold">Available Now</span>
              </div>
            </div>

          </div>

          {/* Quick Booking Bar */}
          <div className="mt-8 pt-6 border-t border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-mono text-slate-300">
                <span className="text-orange-400 font-bold">FOR BOOKING CALL ON:</span> +91 91752 28208 / +91 82080 88327
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919175228208"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button
                onClick={onBookClick}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-mono font-black text-xs rounded-xl uppercase tracking-wider shadow-lg"
              >
                Book Station Slot
              </button>
            </div>
          </div>

        </div>

        {/* Tab 1: Hardware Specs Showcase */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 mb-16 shadow-xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">Chakravyuh Hardware Blueprint</h3>
              <p className="text-xs text-slate-400">Official arena workstation specifications</p>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setSpecTab("pc")}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  specTab === "pc" ? "bg-cyan-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Esports PC Rigs
              </button>
              <button
                onClick={() => setSpecTab("ps5")}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  specTab === "ps5" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                PS5 OLED Lounge
              </button>
              <button
                onClick={() => setSpecTab("sim")}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  specTab === "sim" ? "bg-amber-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Sim & Stream Pod
              </button>
            </div>
          </div>

          {/* Hardware Specs Content */}
          {specTab === "pc" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs">
                  <Cpu className="w-4 h-4" /> PROCESSOR / CPU
                </div>
                <p className="font-mono font-extrabold text-white text-base">Intel i9-14900K & Ryzen 7 7800X3D</p>
                <p className="text-xs text-slate-400">Unthrottled liquid cooled cores for 400+ FPS in Valorant & CS2.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono font-bold text-xs">
                  <Zap className="w-4 h-4" /> GRAPHICS / GPU
                </div>
                <p className="font-mono font-extrabold text-white text-base">NVIDIA RTX 4090 24GB & 4080 Super</p>
                <p className="text-xs text-slate-400">DLSS 3.5, ray tracing & Reflex low-latency technology.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs">
                  <Monitor className="w-4 h-4" /> ESPORTS DISPLAYS
                </div>
                <p className="font-mono font-extrabold text-white text-base">BenQ ZOWIE 360Hz & 240Hz DyAc+</p>
                <p className="text-xs text-slate-400">0.5ms response time for blur-free fast flick tracking.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" /> GEAR & ERGONOMICS
                </div>
                <p className="font-mono font-extrabold text-white text-base">Logitech Superlight 2 & Secretlab</p>
                <p className="text-xs text-slate-400">Optical mechanical keyboards & Herman Miller Embody chairs.</p>
              </div>
            </div>
          )}

          {specTab === "ps5" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold text-xs">
                  <Gamepad2 className="w-4 h-4" /> CONSOLE SYSTEM
                </div>
                <p className="font-mono font-extrabold text-white text-base">PlayStation 5 Disc Edition</p>
                <p className="text-xs text-slate-400">Ultra high-speed SSD with instant game loading & HDR gaming.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs">
                  <Monitor className="w-4 h-4" /> DISPLAY TV
                </div>
                <p className="font-mono font-extrabold text-white text-base">LG C3 55" 4K OLED 120Hz VRR</p>
                <p className="text-xs text-slate-400">Infinite contrast, Dolby Vision & 0.1ms OLED response time.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" /> CONTROLLERS & SEATING
                </div>
                <p className="font-mono font-extrabold text-white text-base">DualSense Edge & Leather Couches</p>
                <p className="text-xs text-slate-400">4x controllers for multi-player FIFA, Tekken & Mortal Kombat.</p>
              </div>
            </div>
          )}

          {specTab === "sim" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <p className="text-xs font-mono text-amber-400 font-bold">FANATEC RACING SIMULATOR</p>
                <p className="font-mono font-extrabold text-white text-lg">Direct Drive Wheel & Motion Rig</p>
                <p className="text-xs text-slate-400">
                  49" Curved Odyssey G9 display, force feedback pedals, and Sparco bucket seat for Assetto Corsa & F1 25.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <p className="text-xs font-mono text-cyan-400 font-bold">STREAMER & CONTENT CREATOR STUDIO</p>
                <p className="font-mono font-extrabold text-white text-lg">Dual Monitor RTX 4090 Stream Pod</p>
                <p className="text-xs text-slate-400">
                  Shure SM7B broadcast mic, Elgato Stream Deck, Cam Link 4K, and high-key RGB lighting for live streamers.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Section 2: Rate Cards & Passes Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-white uppercase font-mono">Select Booking Package</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Lock in your station at Canada Corner, Nashik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PASSES.map((pass) => (
              <div
                key={pass.id}
                className={`relative bg-slate-900 rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  pass.recommended
                    ? "border-orange-500 shadow-xl shadow-orange-500/10 bg-gradient-to-b from-slate-900 via-slate-900 to-orange-950/20"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {pass.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-mono text-[10px] font-extrabold tracking-wider uppercase rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> TOP CHOICE
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-mono font-bold text-lg text-white">{pass.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{pass.subtitle}</p>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold text-orange-300 bg-orange-950 border border-orange-500/30 rounded-full shrink-0 ml-2">
                      {pass.duration}
                    </span>
                  </div>

                  {/* Price display */}
                  <div className="mt-4 mb-6 flex items-baseline gap-2 font-mono">
                    <span className="text-3xl font-extrabold text-white">₹{pass.price}</span>
                    {pass.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">₹{pass.originalPrice}</span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                    {pass.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onBookClick}
                  className={`w-full py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all ${
                    pass.recommended
                      ? "bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/30"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                  }`}
                >
                  Book With This Rate
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
