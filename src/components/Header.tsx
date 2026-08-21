import React, { useState } from "react";
import { Phone, MapPin, Menu, X, MessageCircle, Info, Gamepad2, Camera } from "lucide-react";
import { ChakravyuhLogo } from "./ChakravyuhLogo";

interface HeaderProps {
  onBookClick: () => void;
  onOpenAICoach: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onOpenAICoach }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ChakravyuhLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection("games")}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-1 font-semibold text-cyan-300"
            >
              <Gamepad2 className="w-4 h-4 text-cyan-400" />
              Games & Rates
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-1"
            >
              <MapPin className="w-4 h-4 text-rose-400" />
              Location & Contact
            </button>
            <button
              onClick={onBookClick}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 py-1 font-semibold text-amber-400"
            >
              <Gamepad2 className="w-4 h-4 text-amber-400" />
              Book Station
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 rounded-lg transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp: +91 91752 28208
            </a>

            <a
              href="tel:+919175228208"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              Call Desk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/919175228208"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 rounded-lg"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-200">
            <button
              onClick={() => scrollToSection("games")}
              className="flex flex-col items-center justify-center gap-1.5 p-2.5 bg-slate-900 rounded-lg text-center hover:bg-slate-800 text-cyan-400 font-bold"
            >
              <Gamepad2 className="w-4 h-4 text-cyan-400" />
              Games & Rates
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="flex flex-col items-center justify-center gap-1.5 p-2.5 bg-slate-900 rounded-lg text-center hover:bg-slate-800"
            >
              <MapPin className="w-4 h-4 text-rose-400" />
              Location & Contact
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 text-center text-sm font-bold font-mono text-slate-950 uppercase tracking-wider bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              Book Gaming Station
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919175228208"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 text-center text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
              </a>
              <a
                href="tel:+919175228208"
                className="py-2.5 text-center text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-cyan-400" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
