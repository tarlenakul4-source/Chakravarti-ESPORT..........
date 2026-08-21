import React, { useState } from "react";
import confetti from "canvas-confetti";
import { GamingStation, PricingPass, SnackItem } from "../types";
import { STATIONS, PASSES, SNACKS_MENU } from "../data/mockData";
import { CheckCircle2, Clock, Calendar, Coffee, User, Phone, Sparkles, QrCode, Download, MapPin, X, Flame, MessageCircle } from "lucide-react";
import logoImg from "../assets/images/chakravyuh_exact_circular_logo_1786972137458.jpg";

interface StationBookingModalProps {
  initialStation?: GamingStation | null;
  onClose: () => void;
}

export const StationBookingModal: React.FC<StationBookingModalProps> = ({ initialStation, onClose }) => {
  const [selectedStation, setSelectedStation] = useState<GamingStation>(
    initialStation || STATIONS[0]
  );
  const [selectedPass, setSelectedPass] = useState<PricingPass>(PASSES[1]); // 3-Hour Pro Pass default
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [timeSlot, setTimeSlot] = useState<string>("16:00 - 19:00");
  const [selectedSnackIds, setSelectedSnackIds] = useState<string[]>([]);
  
  // Form State
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  // Toggle Snack selection
  const toggleSnack = (snackId: string) => {
    setSelectedSnackIds((prev) =>
      prev.includes(snackId) ? prev.filter((id) => id !== snackId) : [...prev, snackId]
    );
  };

  // Calculate Total
  const snacksTotal = selectedSnackIds.reduce((acc, id) => {
    const item = SNACKS_MENU.find((s) => s.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const grandTotal = selectedPass.price + snacksTotal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedSnackNames = selectedSnackIds.map(
        (id) => SNACKS_MENU.find((s) => s.id === id)?.name || id
      );

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stationId: selectedStation.id,
          stationName: selectedStation.name,
          customerName,
          phone: customerPhone,
          date,
          timeSlot,
          durationHours: selectedPass.type === "night" ? 8 : 3,
          passType: selectedPass.title,
          snacks: selectedSnackNames,
          totalAmount: grandTotal,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConfirmedBooking(data.booking);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        alert("Booking failed: " + (data.message || "Server error"));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to confirm booking. Please try again or call +91 91752 28208.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl text-slate-200">
        
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
              <h3 className="font-mono font-bold text-lg text-white uppercase">
                {confirmedBooking ? "Booking Confirmed Pass" : "Reserve Gaming Station"}
              </h3>
              <p className="text-xs text-slate-400">Chakravyuh E-Sports Arena • Canada Corner, Nashik</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {confirmedBooking ? (
          /* Confirmation Pass Screen */
          <div className="p-6 space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 mb-1">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold rounded-full">
                PASS VERIFIED • {confirmedBooking.id}
              </span>
              <h2 className="text-2xl font-extrabold text-white font-mono mt-2">
                Seat Reserved for {confirmedBooking.customerName}!
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Show this digital pass at the entrance desk at Canada Corner, Nashik.
              </p>
            </div>

            {/* Digital Pass Ticket Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 text-left space-y-4 max-w-md mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 font-mono font-extrabold text-[10px] rounded-bl-xl uppercase">
                Chakravyuh Arena Pass
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <p className="text-slate-500">STATION</p>
                  <p className="font-bold text-cyan-400 text-sm">{confirmedBooking.stationName}</p>
                </div>
                <div>
                  <p className="text-slate-500">PASS TYPE</p>
                  <p className="font-bold text-slate-200 text-sm">{confirmedBooking.passType}</p>
                </div>
                <div>
                  <p className="text-slate-500">DATE & TIME</p>
                  <p className="font-bold text-slate-200">{confirmedBooking.date} • {confirmedBooking.timeSlot}</p>
                </div>
                <div>
                  <p className="text-slate-500">AMOUNT PAID/DUE</p>
                  <p className="font-bold text-emerald-400 text-sm">₹{confirmedBooking.totalAmount}</p>
                </div>
              </div>

              {confirmedBooking.snacks.length > 0 && (
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <p className="text-slate-500 font-mono">ADD-ON POWER SNACKS:</p>
                  <p className="text-slate-300 font-semibold">{confirmedBooking.snacks.join(", ")}</p>
                </div>
              )}

              {/* QR Code Placeholder Graphic */}
              <div className="pt-3 flex items-center justify-center border-t border-slate-800/80">
                <div className="bg-white p-3 rounded-xl flex items-center justify-center">
                  <QrCode className="w-24 h-24 text-slate-950" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919175228208?text=Hi%20Chakravyuh%20Team!%20I%20just%20booked%20Station%20Pass%20${confirmedBooking.id}%20under%20the%20name%20${confirmedBooking.customerName}.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold rounded-xl flex items-center gap-2"
              >
                Send Pass to WhatsApp Desk
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold rounded-xl"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Step 1: Select Gaming Station */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> 1. Select Gaming Station
              </label>
              <select
                value={selectedStation.id}
                onChange={(e) => {
                  const station = STATIONS.find((s) => s.id === e.target.value);
                  if (station) setSelectedStation(station);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 font-mono focus:border-cyan-500 focus:outline-none"
              >
                {STATIONS.map((s) => (
                  <option key={s.id} value={s.id} disabled={s.status !== "available"}>
                    {s.name} ({s.zone}) - ₹{s.hourlyRate}/hr {s.status !== "available" ? `[${s.status.toUpperCase()}]` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Date & Time slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 font-mono focus:border-cyan-500 focus:outline-none"
                >
                  <option value="12:00 - 15:00">12:00 PM - 03:00 PM (Afternoon)</option>
                  <option value="16:00 - 19:00">04:00 PM - 07:00 PM (Prime Evening)</option>
                  <option value="19:00 - 22:00">07:00 PM - 10:00 PM (Night Rush)</option>
                  <option value="22:00 - 06:00">10:00 PM - 06:00 AM (All-Nighter Night Owl)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Pass Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> 2. Choose Gaming Pass & Duration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PASSES.map((pass) => (
                  <div
                    key={pass.id}
                    onClick={() => setSelectedPass(pass)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedPass.id === pass.id
                        ? "bg-purple-950/40 border-purple-500 text-white shadow-md shadow-purple-500/20"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-sm text-cyan-300">{pass.title}</span>
                      <span className="font-mono font-extrabold text-emerald-400 text-sm">₹{pass.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{pass.duration} • {pass.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Add-On Power Snacks */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-emerald-400" /> 3. Add Power-Up Cafe Snacks (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SNACKS_MENU.slice(0, 4).map((snack) => {
                  const isSelected = selectedSnackIds.includes(snack.id);
                  return (
                    <div
                      key={snack.id}
                      onClick={() => toggleSnack(snack.id)}
                      className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        isSelected
                          ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <p className="font-semibold truncate">{snack.name}</p>
                      <p className="font-mono text-slate-200 mt-1">₹{snack.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pranav Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98230 00000"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Direct Call & Booking Action Bar */}
            <div className="pt-2 space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-mono">ESTIMATED RATE</p>
                  <p className="text-xl font-extrabold font-mono text-cyan-400">₹{grandTotal}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Instant Desk Confirmation
                  </span>
                </div>
              </div>

              {/* Direct Dial Call & WhatsApp Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+919175228208"
                  className="px-5 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-white animate-bounce" />
                  Call Arena (+91 91752 28208)
                </a>

                <a
                  href={`https://wa.me/919175228208?text=Hi%20Chakravyuh%20E-Sports!%20I%20want%20to%20book%20station%20${encodeURIComponent(selectedStation.name)}%20(${encodeURIComponent(selectedPass.title)})%20for%20date%20${date}%20at%20${encodeURIComponent(timeSlot)}.${customerName ? `%20My%20name%20is%20${encodeURIComponent(customerName)}.` : ""}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
