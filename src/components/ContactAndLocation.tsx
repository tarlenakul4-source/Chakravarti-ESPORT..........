import React, { useState } from "react";
import { FAQS } from "../data/mockData";
import { MapPin, Phone, Star, Clock, MessageCircle, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

export const ContactAndLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="location" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Location & Contact Top Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Location & Contact Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-xs font-mono text-rose-300 font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                NASHIK CITY GAMING CAFE
              </div>

              <h2 className="text-3xl font-extrabold font-mono text-white">
                Chakravyuh E-Sports | <span className="text-rose-400">Canada Corner</span>
              </h2>

              <div className="mt-3 flex items-center gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1 text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold">4.8 Rating</span>
                </div>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Video Game Store & Esports Lounge</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-bold">Open Daily</span>
              </div>

              <div className="mt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white font-mono">Arena Address</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Chakravyuh E-sports | Gaming Cafe, Canada Corner, Nashik City, Maharashtra 422002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white font-mono">Phone Contact Number</p>
                    <a href="tel:+919175228208" className="text-sm font-extrabold text-cyan-400 hover:underline mt-0.5 block font-mono">
                      +91 91752 28208
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white font-mono">WhatsApp Support & Booking</p>
                    <a
                      href="https://wa.me/919175228208"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-extrabold text-emerald-400 hover:underline mt-0.5 block font-mono"
                    >
                      +91 91752 28208 (Chat on WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white font-mono">Operating Hours</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Regular Hours: 10:00 AM - 10:00 PM <br />
                      All-Nighter Pass: 10:00 PM - 06:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919175228208"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>

              <a
                href="tel:+919175228208"
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4" /> Call Desk
              </a>

              <a
                href="https://maps.google.com/?q=Chakravyuh+E-sports+Gaming+Cafe+Canada+Corner+Nashik"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MapPin className="w-4 h-4" /> Directions
              </a>
            </div>
          </div>

          {/* Right Column: Google Map Visual Preview Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono font-bold text-white text-sm">CANADA CORNER, NASHIK</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Google Rating: 4.8 / 5.0</span>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"
                alt="Chakravyuh Canada Corner Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 space-y-1">
                <p className="font-mono font-bold text-cyan-400 text-sm">Chakravyuh E-Sports Arena</p>
                <p className="text-xs text-slate-300">Canada Corner, Opposite College Road Junction, Nashik</p>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free High-Speed Wi-Fi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Air Conditioned
              </span>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-xl font-mono font-bold text-white uppercase text-center mb-6">Frequently Asked Questions</h3>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-950">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-mono font-bold text-xs sm:text-sm text-slate-200 hover:text-cyan-400 flex justify-between items-center transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>

                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
