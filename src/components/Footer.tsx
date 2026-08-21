import React from "react";
import { Gamepad2, Phone, MessageCircle, Heart, Star } from "lucide-react";
import { ChakravyuhLogo } from "./ChakravyuhLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand info */}
          <div className="space-y-3 md:col-span-1">
            <ChakravyuhLogo size="sm" showText={true} />
            <p className="text-xs text-slate-400 font-mono">Play. Compete. Conquer.</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Nashik's premier gaming lounge with 360Hz BenQ displays, RTX 4090 PC rigs, and PS5 4K OLED lounges.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-xs uppercase text-white tracking-wider">Quick Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Core Values</a></li>
              <li><a href="#games" className="hover:text-cyan-400 transition-colors text-cyan-300 font-semibold">Games & Simulator Zone</a></li>
              <li><a href="#location" className="hover:text-cyan-400 transition-colors">Location & Contact</a></li>
              <li><a href="https://wa.me/919175228208" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline transition-colors">Book via WhatsApp</a></li>
            </ul>
          </div>

          {/* Col 3: Location & Phone / WhatsApp */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-xs uppercase text-white tracking-wider">Contact & Support</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chakravyuh E-sports | Gaming Cafe <br />
              Canada Corner, Nashik City <br />
              Maharashtra 422002
            </p>
            <div className="pt-1 space-y-1 text-xs font-mono font-bold">
              <a href="tel:+919175228208" className="text-cyan-400 hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Call: +91 91752 28208
              </a>
              <a href="https://wa.me/919175228208" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp: +91 91752 28208
              </a>
            </div>
          </div>

          {/* Col 4: Verified Rating badge */}
          <div className="space-y-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-1 text-amber-400 font-bold font-mono text-sm">
              <Star className="w-4 h-4 fill-amber-400" /> 4.8 / 5.0 Rating
            </div>
            <p className="text-xs text-slate-400">
              Verified Video Game Store & Gaming Lounge in Canada Corner, Nashik.
            </p>
            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="block text-center py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs rounded-xl transition-all"
            >
              Contact on WhatsApp
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Chakravyuh E-Sports | Gaming Cafe. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Nashik Gamers
          </p>
        </div>
      </div>
    </footer>
  );
};
