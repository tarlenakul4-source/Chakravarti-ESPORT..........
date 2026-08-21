import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StationBookingModal } from "./components/StationBookingModal";
import { AICoachModal } from "./components/AICoachModal";
import { GamesSection } from "./components/GamesSection";
import { ContactAndLocation } from "./components/ContactAndLocation";
import { Footer } from "./components/Footer";
import { GamingStation } from "./types";

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState<GamingStation | null>(null);
  const [aiCoachOpen, setAiCoachOpen] = useState(false);

  const handleOpenBooking = (station?: GamingStation) => {
    if (station) {
      setSelectedStation(station);
    } else {
      setSelectedStation(null);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Header
        onBookClick={() => handleOpenBooking()}
        onOpenAICoach={() => setAiCoachOpen(true)}
      />

      {/* Hero Banner (1st Slide) */}
      <Hero
        onBookClick={() => handleOpenBooking()}
        onOpenAICoach={() => setAiCoachOpen(true)}
      />

      {/* Direct 2nd Section: Official Games List & Hourly Rate Card */}
      <GamesSection onBookStation={(type) => handleOpenBooking(type ? { id: type, name: type.toUpperCase() + " Station", type: type as any, zone: "Gaming Zone", specs: {} as any, status: "available", hourlyRate: 100, image: "" } : undefined)} />

      {/* Contact, Google Map & FAQs */}
      <ContactAndLocation />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {bookingModalOpen && (
        <StationBookingModal
          initialStation={selectedStation}
          onClose={() => {
            setBookingModalOpen(false);
            setSelectedStation(null);
          }}
        />
      )}

      {aiCoachOpen && (
        <AICoachModal onClose={() => setAiCoachOpen(false)} />
      )}

    </div>
  );
}
