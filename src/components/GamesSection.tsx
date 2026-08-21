import React, { useState, useMemo } from "react";
import { 
  Gamepad2, 
  Monitor, 
  Search, 
  Sparkles, 
  Users, 
  Clock, 
  Tag, 
  Layers, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  Gauge, 
  Zap, 
  GraduationCap, 
  Percent, 
  Gift, 
  Sliders, 
  Disc, 
  CheckCircle2,
  Info
} from "lucide-react";
import { ALL_GAMES, PS5_GAMES, PC_GAMES, SIM_GAMES, GameRecord } from "../data/gamesData";

interface GamesSectionProps {
  onBookStation?: (stationType?: string) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({ onBookStation }) => {
  const [activeTab, setActiveTab] = useState<"ps5" | "pc" | "sim" | "all">("ps5");
  const [searchQuery, setSearchQuery] = useState("");
  const [ps5PricingType, setPs5PricingType] = useState<"standard" | "premium">("standard");

  // Filter games based on search query and current active tab
  const displayedGames = useMemo(() => {
    let list: GameRecord[] = [];
    if (activeTab === "all") list = ALL_GAMES;
    else if (activeTab === "ps5") list = PS5_GAMES;
    else if (activeTab === "pc") list = PC_GAMES;
    else if (activeTab === "sim") list = SIM_GAMES;

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list.filter(
      (game) =>
        game.title.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query) ||
        game.multiplayer.toLowerCase().includes(query) ||
        game.tags.some((t) => t.toLowerCase().includes(query)) ||
        game.description.toLowerCase().includes(query)
    );
  }, [activeTab, searchQuery]);

  return (
    <section id="games" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 font-semibold mb-3 shadow-inner">
            <Gamepad2 className="w-4 h-4 text-cyan-400" />
            <span>OFFICIAL ARENA GAMES & HOURLY RATES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase font-mono">
            Games List & <span className="bg-gradient-to-r from-red-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">Rate Card</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-mono">
            सर्व गेम्स अचूक क्रमाने आणि प्रत्येक गेमचे १ तासाचे अधिकृत दर (Hourly Pricing & Controller Rates).
          </p>
        </div>

        {/* ========================================================= */}
        {/* OFFICIAL ARENA TARIFF BOARD BANNER (from Board Image) */}
        {/* ========================================================= */}
        <div className="mb-10 bg-gradient-to-r from-red-950/70 via-slate-900 to-slate-900 border-2 border-red-600/50 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-600 text-white font-mono font-extrabold text-[11px] uppercase tracking-wider rounded-lg">
                  CHAKRAVYUH E-SPORTS
                </span>
                <span className="text-xs font-mono text-slate-300">Canada Corner, Nashik</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase">
                Official Hourly Pricing Overview
              </h3>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold">
                  <GraduationCap className="w-3.5 h-3.5" /> 🎓 Enjoy 20% OFF for Students on PlayStation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-bold">
                  <Gift className="w-3.5 h-3.5" /> 🎁 10% Extra Bonus on ₹500+ Recharge
                </span>
              </div>
            </div>

            {/* Quick Pricing Pill Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full lg:w-auto font-mono text-xs">
              <div className="bg-slate-950/90 border border-slate-800 p-3 rounded-2xl">
                <p className="text-slate-400 text-[10px] uppercase">🖥️ PC Gaming</p>
                <p className="text-white font-extrabold text-sm sm:text-base text-cyan-400">₹80 - ₹100 <span className="text-[10px] text-slate-400 font-normal">/HR</span></p>
                <p className="text-[10px] text-slate-500">240Hz / 360Hz</p>
              </div>

              <div className="bg-slate-950/90 border border-slate-800 p-3 rounded-2xl">
                <p className="text-slate-400 text-[10px] uppercase">🎮 PlayStation 5</p>
                <p className="text-white font-extrabold text-sm sm:text-base text-blue-400">₹150 - ₹480 <span className="text-[10px] text-slate-400 font-normal">/HR</span></p>
                <p className="text-[10px] text-slate-500">1 to 4 Controllers</p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-950/90 border border-red-500/40 p-3 rounded-2xl">
                <p className="text-red-400 text-[10px] uppercase">🏎️ Racing Simulator</p>
                <p className="text-white font-extrabold text-sm sm:text-base text-red-400">₹250 <span className="text-[10px] text-slate-400 font-normal">/HR</span></p>
                <p className="text-[10px] text-slate-500">Force Feedback Wheel</p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* PLATFORM TABS & LIVE SEARCH */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl w-full md:w-auto">
            <button
              onClick={() => setActiveTab("ps5")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === "ps5"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40"
                  : "text-slate-400 hover:text-blue-300 hover:bg-slate-800/50"
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-blue-400" />
              🎮 PS5 Games ({PS5_GAMES.length})
            </button>

            <button
              onClick={() => setActiveTab("pc")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === "pc"
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30 border border-cyan-300/40"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50"
              }`}
            >
              <Monitor className="w-4 h-4 text-cyan-400" />
              🖥️ PC Games ({PC_GAMES.length})
            </button>

            <button
              onClick={() => setActiveTab("sim")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === "sim"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/30 border border-red-400/40"
                  : "text-slate-400 hover:text-red-300 hover:bg-slate-800/50"
              }`}
            >
              <Gauge className="w-4 h-4 text-red-400" />
              🏎️ Car Simulator ({SIM_GAMES.length})
            </button>

            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === "all"
                  ? "bg-slate-800 text-white border border-slate-700"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-4 h-4" />
              All ({ALL_GAMES.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search game title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-mono text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* PS5 SUB-TOGGLE: STANDARD vs PREMIUM PLAYSTATION */}
        {/* ========================================================= */}
        {activeTab === "ps5" && (
          <div className="mb-8 p-4 bg-slate-900/80 border border-blue-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-mono font-bold text-white">PlayStation 5 Price Chart</p>
                <p className="text-xs font-mono text-slate-400">Choose viewing mode for exact hourly controller pricing:</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setPs5PricingType("standard")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  ps5PricingType === "standard"
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Standard PS5 (₹150-₹400/hr)
              </button>
              <button
                onClick={() => setPs5PricingType("premium")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  ps5PricingType === "premium"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow border border-indigo-400/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Premium VIP PS5 (₹200-₹480/hr)
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* LIST OF GAMES IN ORDER (CLEAN ESPORTS CARDS WITH EXACT PRICE & TIME) */}
        {/* ========================================================= */}
        <div className="space-y-4">
          {displayedGames.map((game) => {
            const isPS5 = game.platform === "PS5";
            const isPC = game.platform === "PC";
            const isSim = game.platform === "Simulator";

            // Determine custom price display for PS5 based on toggle
            const ps5Rates = ps5PricingType === "premium"
              ? [
                  { label: "1 Controller", price: 200 },
                  { label: "2 Controllers", price: 240 },
                  { label: "3 Controllers", price: 360 },
                  { label: "4 Controllers", price: 480 },
                ]
              : [
                  { label: "1 Controller", price: 150 },
                  { label: "2 Controllers", price: 200 },
                  { label: "3 Controllers", price: 300 },
                  { label: "4 Controllers", price: 400 },
                ];

            return (
              <div
                key={game.id}
                className={`bg-slate-900/90 rounded-2xl border transition-all duration-200 p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 shadow-lg ${
                  isSim 
                    ? "border-red-500/40 hover:border-red-500 bg-gradient-to-r from-red-950/30 via-slate-900 to-slate-900" 
                    : isPS5 
                    ? "border-blue-500/30 hover:border-blue-500/70" 
                    : "border-slate-800 hover:border-cyan-500/60"
                }`}
              >
                
                {/* Left: Order Number & Game Details */}
                <div className="flex items-start gap-4 flex-1">
                  
                  {/* Order Number Badge (01, 02, 03...) */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-extrabold text-base shrink-0 border ${
                    isSim 
                      ? "bg-red-950 text-red-400 border-red-500/40" 
                      : isPS5 
                      ? "bg-blue-950 text-blue-400 border-blue-500/40" 
                      : "bg-cyan-950 text-cyan-400 border-cyan-500/40"
                  }`}>
                    {String(game.orderNumber).padStart(2, "0")}
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-mono font-bold text-white">
                        {game.title}
                      </h3>

                      {/* Platform Tag */}
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSim 
                          ? "bg-red-600 text-white" 
                          : isPS5 
                          ? "bg-blue-600 text-white" 
                          : "bg-cyan-500 text-slate-950"
                      }`}>
                        {game.platform}
                      </span>

                      {/* Multiplayer / Mode Badge */}
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                        👥 {game.multiplayer}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans max-w-2xl leading-relaxed">
                      {game.description}
                    </p>

                    {/* Controller info & tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-slate-400">
                      <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                        🎮 {game.supportedControllers}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400">{game.category}</span>
                    </div>
                  </div>

                </div>

                {/* Right: EXACT PRICE & TIME BOX (As per user board) */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                  
                  {/* Pricing Display Box */}
                  <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-3 min-w-[220px]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1.5 border-b border-slate-800/80 mb-2">
                      <span className="flex items-center gap-1 text-slate-300 font-bold">
                        <Clock className="w-3.5 h-3.5 text-orange-400" /> TIME: 1 HOUR
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">RATE</span>
                    </div>

                    {/* Price Breakdown per platform */}
                    {isPS5 && (
                      <div className="space-y-1 font-mono text-xs">
                        {ps5Rates.map((rate, rIdx) => (
                          <div key={rIdx} className="flex items-center justify-between text-slate-300">
                            <span className="text-slate-400 text-[11px]">{rate.label}:</span>
                            <span className="font-bold text-white text-sm text-blue-400">₹{rate.price}/-</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {isPC && (
                      <div className="space-y-1 font-mono text-xs">
                        {game.pricing.rates.map((rate, rIdx) => (
                          <div key={rIdx} className="flex items-center justify-between text-slate-300">
                            <span className="text-slate-400 text-[11px]">{rate.label}:</span>
                            <span className="font-bold text-white text-sm text-cyan-400">₹{rate.price}/-</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {isSim && (
                      <div className="space-y-1 font-mono text-xs">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="text-slate-400 text-[11px]">Pro Cockpit Rig:</span>
                          <span className="font-extrabold text-white text-base text-red-400">₹250/HR</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5">Direct Drive + 49" Screen</p>
                      </div>
                    )}

                    {/* Student Discount / Recharge Note */}
                    <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                      {isPS5 ? (
                        <span>🎓 20% OFF Students</span>
                      ) : isPC ? (
                        <span>🎁 10% Recharge Bonus</span>
                      ) : (
                        <span>🏁 Laser Scanned Tracks</span>
                      )}
                      <span className="text-slate-500">Hourly Slot</span>
                    </div>
                  </div>

                  {/* Actions (Book & WhatsApp) */}
                  <div className="flex flex-row sm:flex-col gap-2">
                    <button
                      onClick={() => {
                        if (onBookStation) onBookStation(game.platform.toLowerCase());
                      }}
                      className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow ${
                        isSim 
                          ? "bg-red-600 hover:bg-red-500 text-white" 
                          : isPS5 
                          ? "bg-blue-600 hover:bg-blue-500 text-white" 
                          : "bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold"
                      }`}
                    >
                      Book Slot <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/919175228208?text=Hi%20Chakravyuh!%20I%20want%20to%20book%20a%201-hour%20session%20for%20${encodeURIComponent(game.title)}%20(${game.platform}).`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      title="Direct WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {displayedGames.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800 my-6">
            <p className="text-slate-400 font-mono text-sm">No games found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 px-4 py-2 bg-slate-800 text-cyan-400 text-xs font-mono rounded-lg hover:bg-slate-700"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Bottom Booking Call Numbers as per Board */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
              FOR BOOKINGS & SLOTS
            </span>
            <h4 className="text-lg sm:text-xl font-mono font-bold text-white mt-1">
              Call On: 9175228202 / 8208088327 / 9175228208
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Chakravyuh E-Sports, Canada Corner, Nashik. Drop in anytime from 10:00 AM onwards!
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:9175228202"
              className="flex-1 md:flex-none px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call 9175228202
            </a>
            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
