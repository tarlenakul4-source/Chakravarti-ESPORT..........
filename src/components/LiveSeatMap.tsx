import React, { useState } from "react";
import { STATIONS } from "../data/mockData";
import { GamingStation } from "../types";
import { Monitor, Gamepad2, Radio, CheckCircle, Lock, Info, Sparkles, Filter, Zap } from "lucide-react";

interface LiveSeatMapProps {
  onSelectStation: (station: GamingStation) => void;
}

export const LiveSeatMap: React.FC<LiveSeatMapProps> = ({ onSelectStation }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [inspectStation, setInspectStation] = useState<GamingStation | null>(null);

  const filteredStations = STATIONS.filter((station) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pc") return station.type === "pc";
    if (activeFilter === "360hz") return station.specs.monitor.includes("360Hz");
    if (activeFilter === "ps5") return station.type === "ps5";
    if (activeFilter === "special") return station.type === "sim" || station.type === "vip";
    return true;
  });

  const availableCount = STATIONS.filter((s) => s.status === "available").length;
  const occupiedCount = STATIONS.filter((s) => s.status === "occupied").length;

  return (
    <section id="seat-map" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              LIVE FLOOR PLAN
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              Gaming Station <span className="text-cyan-400">Seat Selector</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Choose your preferred gaming rig or PS5 VIP couch. View real-time hardware specs, current status, and lock in your seat instantly.
            </p>
          </div>

          {/* Status Summary Pill */}
          <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-3 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200 font-bold">{availableCount} Available</span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-slate-400">{occupiedCount} In Use</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all shrink-0 ${
              activeFilter === "all"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Stations ({STATIONS.length})
          </button>

          <button
            onClick={() => setActiveFilter("360hz")}
            className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all shrink-0 ${
              activeFilter === "360hz"
                ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            🔥 360Hz Pro Zone
          </button>

          <button
            onClick={() => setActiveFilter("pc")}
            className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all shrink-0 ${
              activeFilter === "pc"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            PC Rigs Zone
          </button>

          <button
            onClick={() => setActiveFilter("ps5")}
            className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all shrink-0 ${
              activeFilter === "ps5"
                ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            PS5 4K OLED Lounge
          </button>

          <button
            onClick={() => setActiveFilter("special")}
            className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all shrink-0 ${
              activeFilter === "special"
                ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            Stream Studio & Motion Sim
          </button>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStations.map((station) => {
            const isAvailable = station.status === "available";

            return (
              <div
                key={station.id}
                className={`relative group bg-slate-900 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isAvailable
                    ? "border-slate-800 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10"
                    : "border-slate-800/60 opacity-80"
                }`}
              >
                <div>
                  {/* Station Banner Image & Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={station.image}
                      alt={station.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    {/* Top Status & Special Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wide border shadow-md ${
                          isAvailable
                            ? "bg-emerald-950/90 text-emerald-400 border-emerald-500/40"
                            : station.status === "occupied"
                            ? "bg-rose-950/90 text-rose-400 border-rose-500/40"
                            : "bg-amber-950/90 text-amber-400 border-amber-500/40"
                        }`}
                      >
                        {isAvailable ? (
                          <>
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            AVAILABLE
                          </>
                        ) : station.status === "occupied" ? (
                          <>
                            <Lock className="w-3 h-3 text-rose-400" />
                            IN USE
                          </>
                        ) : (
                          "RESERVED"
                        )}
                      </span>

                      {station.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-amber-300 bg-amber-950/90 border border-amber-500/40 shadow-md">
                          {station.badge}
                        </span>
                      )}
                    </div>

                    {/* Price tag */}
                    <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-xs font-mono font-extrabold text-cyan-400">
                      ₹{station.hourlyRate} <span className="text-[10px] text-slate-400 font-sans">/ hr</span>
                    </div>
                  </div>

                  {/* Station Details */}
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-mono font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                          {station.name}
                        </h3>
                        <button
                          onClick={() => setInspectStation(station)}
                          className="p-1 text-slate-400 hover:text-cyan-400"
                          title="View Specs Inspector"
                        >
                          <Info className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">{station.zone}</p>
                    </div>

                    {/* Quick Specs Snippet */}
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80 space-y-1.5 text-xs font-mono">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500">GPU:</span>
                        <span className="text-cyan-300 font-bold truncate max-w-[170px]">{station.specs.gpu}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-slate-500">Display:</span>
                        <span className="text-purple-300 truncate max-w-[170px]">{station.specs.monitor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onSelectStation(station)}
                    disabled={!isAvailable}
                    className={`w-full py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 ${
                      isAvailable
                        ? "bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-md shadow-cyan-500/20"
                        : "bg-slate-800/80 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    {isAvailable ? (
                      <>
                        <Zap className="w-4 h-4" />
                        Reserve Station
                      </>
                    ) : (
                      "Station Busy"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Hardware Inspector Modal */}
      {inspectStation && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 border border-cyan-500/30 rounded-full uppercase">
                  {inspectStation.zone}
                </span>
                <h3 className="text-xl font-bold font-mono text-white mt-1">{inspectStation.name}</h3>
              </div>
              <button
                onClick={() => setInspectStation(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Processor (CPU):</span>
                  <span className="text-white font-bold">{inspectStation.specs.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Graphics (GPU):</span>
                  <span className="text-cyan-400 font-bold">{inspectStation.specs.gpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">System Memory:</span>
                  <span className="text-slate-200">{inspectStation.specs.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gaming Display:</span>
                  <span className="text-purple-300 font-bold">{inspectStation.specs.monitor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Peripherals:</span>
                  <span className="text-slate-200">{inspectStation.specs.peripherals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Gaming Chair:</span>
                  <span className="text-amber-300">{inspectStation.specs.chair}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-sm font-mono text-slate-300">
                Rate: <span className="text-cyan-400 font-extrabold">₹{inspectStation.hourlyRate}/hr</span>
              </div>
              <button
                onClick={() => {
                  const target = inspectStation;
                  setInspectStation(null);
                  onSelectStation(target);
                }}
                className="px-5 py-2.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl"
              >
                Book This Station
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
