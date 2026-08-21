import React, { useState } from "react";
import { GAMES_CATALOG, PING_STATUSES } from "../data/mockData";
import { Gamepad2, Search, Radio, Wifi, Zap, CheckCircle2 } from "lucide-react";

export const GameLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");

  const filteredGames = GAMES_CATALOG.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    const matchesPlatform =
      selectedPlatform === "All" ||
      game.installedOn === selectedPlatform ||
      game.installedOn === "Both";

    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <section id="games" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 font-semibold mb-3">
              <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
              PRE-INSTALLED 100+ TITLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              Pre-Loaded <span className="text-indigo-400">Game Library</span> & Live Ping
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              All PCs & PS5 consoles come equipped with top AAA & Competitive games, updated daily over our high-speed gigabit fiber line.
            </p>
          </div>

          {/* Live Ping Dashboard Widget */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 min-w-[260px]">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-emerald-400" /> LIVE PING MONITOR
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-bold text-[10px]">
                1 Gbps FIBER
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-mono pt-1">
              {PING_STATUSES.slice(0, 3).map((st, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800/80">
                  <span className="text-slate-300">{st.server} ({st.game})</span>
                  <span className="text-emerald-400 font-bold">{st.pingMs} ms</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search games (e.g. Valorant, CS2, GTA V)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-slate-200 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Platform Toggle */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setSelectedPlatform("All")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedPlatform === "All" ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setSelectedPlatform("PC")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedPlatform === "PC" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              PC Rigs
            </button>
            <button
              onClick={() => setSelectedPlatform("PS5")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedPlatform === "PS5" ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              PS5
            </button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/60 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-950">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-300 rounded border border-slate-800">
                    {game.installedOn}
                  </span>
                </div>

                {game.avgPingMs && (
                  <div className="absolute bottom-2 right-2 bg-emerald-950/90 border border-emerald-500/40 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                    <Wifi className="w-2.5 h-2.5" /> {game.avgPingMs}ms
                  </div>
                )}
              </div>

              <div className="p-3">
                <h4 className="font-mono font-bold text-xs text-white group-hover:text-indigo-300 truncate">
                  {game.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">{game.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
