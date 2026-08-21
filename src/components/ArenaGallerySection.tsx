import React, { useState } from "react";
import { Camera, Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye, Flame, Monitor, Gamepad2, Trophy, Cpu, Phone, MessageCircle } from "lucide-react";

// Official Real Photo Assets of Chakravyuh Gaming Cafe
import arenaPanorama from "../assets/images/chakravyuh_arena_panorama_1786972676462.jpg";
import rigCustom from "../assets/images/chakravyuh_rig_custom_1786972689090.jpg";
import blueZone from "../assets/images/chakravyuh_blue_zone_1786972704053.jpg";
import redCorridor from "../assets/images/chakravyuh_red_corridor_1786972718368.jpg";
import steeringSim from "../assets/images/chakravyuh_steering_sim_1786972740872.jpg";
import ps5Lounge from "../assets/images/chakravyuh_ps5_lounge_1786972752464.jpg";
import benqZowie from "../assets/images/chakravyuh_benq_zowie_1786972765101.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rigs" | "arena" | "sim" | "ps5";
  categoryLabel: string;
  image: string;
  description: string;
  badge?: string;
  specs?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Chakravyuh Main Esports Arena",
    category: "arena",
    categoryLabel: "Arena Setup",
    image: arenaPanorama,
    description: "Wide dual-row tournament setup with neon magenta LED ambiance and Green Soul gaming thrones.",
    badge: "Tournament Stage",
    specs: "Full Arena • Dual Row LAN",
  },
  {
    id: "gal-2",
    title: "Pro 360Hz BenQ ZOWIE Battle Stations",
    category: "rigs",
    categoryLabel: "Pro Battlestations",
    image: benqZowie,
    description: "BenQ ZOWIE high-refresh esports tournament displays with HyperX Cloud Core headsets & mechanical keys.",
    badge: "360Hz Fast-IPS",
    specs: "BenQ ZOWIE 360Hz • HyperX Pro Audio",
  },
  {
    id: "gal-3",
    title: "Custom Ant Esports Liquid-Cooled Rigs",
    category: "rigs",
    categoryLabel: "Custom Rigs",
    image: rigCustom,
    description: "Custom built gaming beasts featuring triple ARGB liquid coolers and GeForce RTX graphics.",
    badge: "RTX Series",
    specs: "Ant Esports Chassis • ARGB AIO Cooler",
  },
  {
    id: "gal-4",
    title: "Chakravyuh Battle Corridor",
    category: "arena",
    categoryLabel: "Arena Setup",
    image: redCorridor,
    description: "High-adrenaline team battle row with low-latency dedicated gigabit fiber line and Green Soul chairs.",
    badge: "Squad Battle Row",
    specs: "5v5 LAN Setup • Dedicated Gigabit",
  },
  {
    id: "gal-5",
    title: "GeForce RTX Blue Zone",
    category: "arena",
    categoryLabel: "Arena Setup",
    image: blueZone,
    description: "Futuristic ceiling LED lines with overhead showcased liquid-cooled gaming towers.",
    badge: "Esports Blue Room",
    specs: "Overhead Showcased PC Mounts",
  },
  {
    id: "gal-6",
    title: "Pro Racing Simulator Rig",
    category: "sim",
    categoryLabel: "Racing Cockpit",
    image: steeringSim,
    description: "Force-feedback racing steering wheel, pedal cockpit & curved ultra-wide simulator monitor for F1 & Forza.",
    badge: "Motion Steering",
    specs: "Logitech/Thrustmaster Force Feedback",
  },
  {
    id: "gal-7",
    title: "PlayStation 5 4K OLED Lounge",
    category: "ps5",
    categoryLabel: "PS5 VIP Zone",
    image: ps5Lounge,
    description: "DualSense wireless controllers, plush recliners & 4K HDR displays for FIFA, God of War and Mortal Kombat.",
    badge: "PS5 4K 120FPS",
    specs: "PlayStation 5 • 4K OLED HDR TV",
  },
  {
    id: "gal-8",
    title: "Cyber Red Walkway & Booths",
    category: "arena",
    categoryLabel: "VIP Arena",
    image: redCorridor,
    description: "Neon corridor leading to private VIP squad booths, soundproof streaming chambers and cafe area.",
    badge: "VIP Corridor",
    specs: "Acoustic Dampened VIP Chambers",
  },
];

export const ArenaGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-xs font-mono text-red-400 font-semibold mb-3">
              <Camera className="w-3.5 h-3.5 text-red-400" />
              100% REAL ARENA PHOTOS • OFFICIAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-white uppercase tracking-tight">
              Real Arena <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Photo Gallery</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              १००% अस्सल आणि थेट कॅफेमधील फोटो! Take a real inside tour of Chakravyuh E-Sports at Canada Corner, Nashik — our Ant Esports custom liquid cooled rigs, BenQ ZOWIE 360Hz monitors, simulator cockpit, and PS5 lounge.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            {[
              { id: "all", label: "All Photos / Our Work" },
              { id: "arena", label: "Arena & LAN Rooms" },
              { id: "rigs", label: "PC Rigs & 360Hz" },
              { id: "sim", label: "Racing Sim & PS5" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-red-600 text-white shadow-md shadow-red-950"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveModalIdx(idx)}
              className="group relative bg-slate-900 rounded-2xl border border-slate-800 hover:border-red-500/50 overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/40 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-black/80 backdrop-blur-md text-red-400 border border-red-500/40">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* View Tag at bottom of image */}
                <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cyan-400" /> Click to expand
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-slate-900/90">
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-mono font-bold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.specs && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Cpu className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">{item.specs}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Strong CTA */}
        <div className="mt-12 bg-gradient-to-r from-red-950/50 via-slate-900 to-cyan-950/50 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <Flame className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h4 className="font-mono font-bold text-white text-lg sm:text-xl uppercase">
                Like Our Work? Contact Us Today
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                Experience high-performance esports rigs & VIP gaming lounges in Nashik at Canada Corner. Walk-in or book in advance!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Now
            </a>
            <a
              href="tel:+919175228208"
              className="flex-1 md:flex-none px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-950 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModalIdx !== null && filteredItems[activeModalIdx] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalIdx(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-red-950 text-red-400 border border-red-500/40">
                  {filteredItems[activeModalIdx].categoryLabel}
                </span>
                <h3 className="font-mono font-bold text-white text-base">
                  {filteredItems[activeModalIdx].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">
                  {activeModalIdx + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setActiveModalIdx(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeModalIdx].image}
                alt={filteredItems[activeModalIdx].title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-red-600 text-white border border-slate-700 hover:border-red-500 flex items-center justify-center transition-all shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-red-600 text-white border border-slate-700 hover:border-red-500 flex items-center justify-center transition-all shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-slate-200 font-mono font-medium">
                  {filteredItems[activeModalIdx].description}
                </p>
                {filteredItems[activeModalIdx].specs && (
                  <p className="text-xs text-red-400 font-mono">
                    Hardware: {filteredItems[activeModalIdx].specs}
                  </p>
                )}
              </div>

              <a
                href="https://wa.me/919175228208"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-red-950 transition-all text-center shrink-0"
              >
                Book This Rig (+91 91752 28208)
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
