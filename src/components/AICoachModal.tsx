import React, { useState } from "react";
import { Sparkles, Send, Bot, User, Flame, Gamepad2, Zap, X } from "lucide-react";
import logoImg from "../assets/images/chakravyuh_exact_circular_logo_1786972137458.jpg";

interface AICoachModalProps {
  onClose: () => void;
}

export const AICoachModal: React.FC<AICoachModalProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [gameContext, setGameContext] = useState("Valorant");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "coach"; text: string }>>([
    {
      role: "coach",
      text: "⚡ Welcome to Chakravyuh AI Coach! Ask me anything about Valorant/CS2 mouse DPI sensitivity, FPS graphics optimization, station selection, tournament prep, or desk snack picks!",
    },
  ]);

  const samplePrompts = [
    "What mouse DPI & sensitivity is best for Valorant precision?",
    "Which station should I pick for 360Hz DyAc+ in CS2?",
    "How can I get 240+ FPS in Warzone & BGMI Emulator?",
    "Should I book PC or PS5 for 4-player EA FC 25 local clash?",
    "What is the best power snack combo for an All-Nighter session?",
  ];

  const handleSend = async (customText?: string) => {
    const textToSend = customText || prompt;
    if (!textToSend.trim()) return;

    const userMsg = { role: "user" as const, text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: textToSend,
          game: gameContext,
          userType: "Gamer",
        }),
      });

      const data = await response.json();
      const replyText = data.reply || "Game on! Connect with our Chakravyuh desk crew for instant hardware setup tweaking.";

      setMessages((prev) => [...prev, { role: "coach", text: replyText }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "coach",
          text: "Chakravyuh Coach is recalibrating! Feel free to ask our desk gaming staff at Canada Corner, Nashik (+91 91752 28208).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black border border-red-500/50 p-1 flex items-center justify-center shrink-0">
              <img
                src={logoImg}
                alt="Chakravyuh Logo"
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-mono font-bold text-base text-white uppercase flex items-center gap-2">
                Chakravyuh AI Coach <span className="px-2 py-0.5 text-[10px] bg-purple-950 text-purple-300 border border-purple-500/30 rounded-full">ONLINE</span>
              </h3>
              <p className="text-xs text-slate-400">FPS Optimization, DPI Helper & Station Recommender</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Selector Bar */}
        <div className="px-6 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center gap-2 text-xs font-mono overflow-x-auto">
          <span className="text-slate-500 shrink-0">GAME CONTEXT:</span>
          {["Valorant", "CS2", "BGMI", "EA FC 25", "Cyberpunk 2077"].map((g) => (
            <button
              key={g}
              onClick={() => setGameContext(g)}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                gameContext === g ? "bg-purple-600 text-white font-bold" : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  m.role === "user"
                    ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30"
                    : "bg-purple-950 text-purple-400 border border-purple-500/30"
                }`}
              >
                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 rounded-2xl leading-relaxed font-sans whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-cyan-950/80 text-cyan-100 border border-cyan-500/30 rounded-tr-none"
                    : "bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none font-sans"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-950/40 p-3 rounded-2xl w-fit">
              <Sparkles className="w-4 h-4 animate-spin" />
              Chakravyuh AI Coach is analyzing game telemetry...
            </div>
          )}
        </div>

        {/* Sample Quick Questions */}
        <div className="px-6 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto flex gap-2 scrollbar-none">
          {samplePrompts.map((sp, i) => (
            <button
              key={i}
              onClick={() => handleSend(sp)}
              className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 rounded-lg whitespace-nowrap border border-slate-800 shrink-0"
            >
              {sp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask AI Coach (e.g. Best sensitivity for Valorant, PC vs PS5)..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:border-purple-500 focus:outline-none font-sans"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading}
            className="p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
