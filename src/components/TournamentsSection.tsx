import React, { useState } from "react";
import confetti from "canvas-confetti";
import { TOURNAMENTS } from "../data/mockData";
import { Tournament } from "../types";
import { Trophy, Calendar, Users, Award, ShieldAlert, Sparkles, CheckCircle2, User, Phone, X, Flame } from "lucide-react";

export const TournamentsSection: React.FC = () => {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [rulesModal, setRulesModal] = useState<Tournament | null>(null);

  // Registration Form State
  const [teamName, setTeamName] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [captainPhone, setCaptainPhone] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [confirmedReg, setConfirmedReg] = useState<any>(null);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainName || !captainPhone) {
      alert("Please fill in Team Name, Captain Name, and Contact Number.");
      return;
    }

    setIsRegistering(true);

    try {
      const playersList = [captainName, player2, player3, player4, player5].filter(Boolean);

      const response = await fetch("/api/tournaments/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tournamentId: selectedTournament?.id,
          tournamentName: selectedTournament?.title,
          teamName,
          captainName,
          captainPhone,
          players: playersList,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConfirmedReg(data.registration);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        alert("Registration error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to complete registration. Please call +91 91752 28208.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <section id="tournaments" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300 font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              NASHIK ESPORTS ARENA EVENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              Esports <span className="text-amber-400">Tournaments</span> & LAN Cups
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Compete for cash prize pools, trophies, and glory. Regular LAN tournaments for Valorant, BGMI, EA FC 25, and Tekken 8 at Canada Corner, Nashik.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-2xl text-xs font-mono text-slate-300">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <p className="font-bold text-white">₹50,000+ Monthly Prize Pool</p>
              <p className="text-[11px] text-slate-400">Official Tournament Realm & Casted Streams</p>
            </div>
          </div>
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOURNAMENTS.map((trn) => {
            const fillPercentage = Math.round((trn.registeredTeams / trn.maxTeams) * 100);

            return (
              <div
                key={trn.id}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Banner Header */}
                  <div className="relative aspect-[16/7] overflow-hidden bg-slate-950">
                    <img
                      src={trn.banner}
                      alt={trn.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-amber-500 text-slate-950 font-mono font-extrabold text-xs uppercase rounded-full shadow-lg">
                        {trn.game}
                      </span>
                      <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 font-mono text-xs font-bold rounded-full">
                        Prize: {trn.prizePool}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-mono text-white leading-tight">{trn.title}</h3>
                      <p className="text-xs text-slate-400 font-mono mt-1">{trn.format}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                      <div>
                        <span className="text-slate-500 block">DATE & TIME</span>
                        <span className="text-slate-200 font-bold flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {trn.date}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">ENTRY FEE</span>
                        <span className="text-emerald-400 font-bold mt-0.5 block">{trn.entryFee}</span>
                      </div>
                    </div>

                    {/* Team Capacity Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-500" /> Slot Availability
                        </span>
                        <span className="text-amber-400 font-bold">
                          {trn.registeredTeams} / {trn.maxTeams} Teams
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                          style={{ width: `${fillPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => setRulesModal(trn)}
                    className="py-3 px-4 text-xs font-mono font-bold text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
                  >
                    Rulebook
                  </button>

                  <button
                    onClick={() => setSelectedTournament(trn)}
                    className="flex-1 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    Register Squad
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Team Registration Modal */}
      {selectedTournament && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full my-8 overflow-hidden shadow-2xl text-slate-200">
            
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-mono font-bold text-base text-white uppercase">Tournament Registration</h3>
                  <p className="text-xs text-slate-400">{selectedTournament.title}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedTournament(null);
                  setConfirmedReg(null);
                }}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            {confirmedReg ? (
              <div className="p-6 space-y-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="px-3 py-1 bg-amber-950 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold rounded-full">
                    REGISTRATION ID: {confirmedReg.registrationId}
                  </span>
                  <h3 className="text-2xl font-bold font-mono text-white mt-2">Team {confirmedReg.teamName} Registered!</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Your spot is reserved for {selectedTournament.date} at Canada Corner, Nashik.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs font-mono space-y-2">
                  <p className="text-slate-500">CAPTAIN: <span className="text-slate-200 font-bold">{confirmedReg.captainName} ({confirmedReg.captainPhone})</span></p>
                  <p className="text-slate-500">PLAYERS: <span className="text-amber-300">{confirmedReg.players.join(", ")}</span></p>
                  <p className="text-slate-500">VENUE: <span className="text-slate-200">Chakravyuh E-Sports Arena, Canada Corner, Nashik</span></p>
                </div>

                <button
                  onClick={() => {
                    setSelectedTournament(null);
                    setConfirmedReg(null);
                  }}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="p-6 space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Team / Clan Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vipers Esports"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Captain Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan S."
                      value={captainName}
                      onChange={(e) => setCaptainName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Captain Mobile</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 91752 00000"
                      value={captainPhone}
                      onChange={(e) => setCaptainPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Additional Players */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <p className="text-xs font-mono text-slate-400">Team Roster Players (Optional)</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Player 2 IGN / Name"
                      value={player2}
                      onChange={(e) => setPlayer2(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200"
                    />
                    <input
                      type="text"
                      placeholder="Player 3 IGN / Name"
                      value={player3}
                      onChange={(e) => setPlayer3(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200"
                    />
                    <input
                      type="text"
                      placeholder="Player 4 IGN / Name"
                      value={player4}
                      onChange={(e) => setPlayer4(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200"
                    />
                    <input
                      type="text"
                      placeholder="Player 5 IGN / Substitute"
                      value={player5}
                      onChange={(e) => setPlayer5(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Entry Fee: <span className="text-emerald-400 font-bold">{selectedTournament.entryFee}</span>
                  </span>

                  <button
                    type="submit"
                    disabled={isRegistering}
                    className="px-6 py-2.5 text-xs font-mono font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
                  >
                    {isRegistering ? "Registering..." : "Confirm Team Registration"}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* Rules Modal */}
      {rulesModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-mono font-bold text-white text-lg">{rulesModal.title} Rules</h3>
              <button onClick={() => setRulesModal(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
              {rulesModal.rules.map((rule, idx) => (
                <li key={idx} className="leading-relaxed">{rule}</li>
              ))}
            </ul>

            <button
              onClick={() => setRulesModal(null)}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 font-mono text-xs text-slate-200 rounded-xl"
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
