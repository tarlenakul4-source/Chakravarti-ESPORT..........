import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI client if GEMINI_API_KEY is available
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }

  // In-memory store for station bookings
  const bookings: Array<{
    id: string;
    stationId: string;
    stationName: string;
    customerName: string;
    phone: string;
    date: string;
    timeSlot: string;
    durationHours: number;
    passType: string;
    snacks: string[];
    totalAmount: number;
    status: string;
    createdAt: string;
  }> = [
    {
      id: "CHAKRA-101",
      stationId: "pc-01",
      stationName: "VIP PC 01 (RTX 4090 - 360Hz)",
      customerName: "Rohan Sharma",
      phone: "+91 98230 11223",
      date: new Date().toISOString().split("T")[0],
      timeSlot: "16:00 - 19:00",
      durationHours: 3,
      passType: "3-Hour Pro Pass",
      snacks: ["Red Bull", "Chakravyuh Loaded Fries"],
      totalAmount: 350,
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
    },
    {
      id: "CHAKRA-102",
      stationId: "ps5-01",
      stationName: "PS5 Lounge VIP 1 (4K OLED)",
      customerName: "Aditya Patil",
      phone: "+91 97654 44321",
      date: new Date().toISOString().split("T")[0],
      timeSlot: "18:00 - 20:00",
      durationHours: 2,
      passType: "Console Duo Pass",
      snacks: ["Iced Cold Coffee", "Peri Peri Pizza"],
      totalAmount: 420,
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
    },
  ];

  // In-memory tournament registrations
  const tournamentRegistrations: Array<{
    registrationId: string;
    tournamentId: string;
    tournamentName: string;
    teamName: string;
    captainName: string;
    captainPhone: string;
    players: string[];
    registeredAt: string;
  }> = [];

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", name: "Chakravyuh E-Sports API" });
  });

  // Get active bookings
  app.get("/api/bookings", (_req, res) => {
    res.json({ success: true, bookings });
  });

  // Create new booking
  app.post("/api/bookings", (req, res) => {
    const { stationId, stationName, customerName, phone, date, timeSlot, durationHours, passType, snacks, totalAmount } = req.body;

    if (!stationId || !customerName || !phone) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const bookingId = `CHAKRA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: bookingId,
      stationId,
      stationName: stationName || "Chakravyuh Station",
      customerName,
      phone,
      date: date || new Date().toISOString().split("T")[0],
      timeSlot: timeSlot || "Flexible",
      durationHours: durationHours || 1,
      passType: passType || "Standard Pass",
      snacks: snacks || [],
      totalAmount: totalAmount || 100,
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    res.json({ success: true, booking: newBooking });
  });

  // Tournament registration
  app.post("/api/tournaments/register", (req, res) => {
    const { tournamentId, tournamentName, teamName, captainName, captainPhone, players } = req.body;

    if (!teamName || !captainName || !captainPhone) {
      return res.status(400).json({ success: false, message: "Team name, captain name and phone are required." });
    }

    const regId = `CY-TRN-${Math.floor(100 + Math.random() * 900)}`;
    const record = {
      registrationId: regId,
      tournamentId: tournamentId || "general",
      tournamentName: tournamentName || "Chakravyuh Esports Cup",
      teamName,
      captainName,
      captainPhone,
      players: players || [captainName],
      registeredAt: new Date().toISOString(),
    };

    tournamentRegistrations.push(record);
    res.json({ success: true, registration: record });
  });

  // AI Game Coach & Rig Advisor Endpoint
  app.post("/api/ai/coach", async (req, res) => {
    try {
      const { prompt, game, userType } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      if (!ai) {
        // Fallback intelligent response if GEMINI_API_KEY is not set yet
        return res.json({
          reply: `Welcome to Chakravyuh E-Sports! For ${game || "competitive gaming"}, our High-End PCs equipped with RTX 4080/4090, 240Hz/360Hz displays, and low-latency optical switches deliver solid 300+ FPS in Valorant, CS2, and BGMI. Come visit Canada Corner, Nashik or call +91 91752 28208 to reserve your seat!`,
          recommendations: [
            "Opt for Station PC-01 to PC-06 for 360Hz Esports Monitors",
            "Use 800 DPI + 0.35 In-game sensitivity for Valorant precision",
            "Grab an All-Nighter Pass (10 PM - 6 AM) for best uninterrupted ping & energy snacks",
          ],
        });
      }

      const systemInstruction = `You are "Chakravyuh AI Coach & Rig Advisor" for "Chakravyuh E-Sports | Gaming Cafe", Nashik's premier gaming lounge located in Canada Corner, Nashik.
Tagline: Play. Compete. Conquer.
Location: Canada Corner, Nashik City (+91 91752 28208).
Your tone is energetic, knowledgeable, encouraging, gamer-focused, and friendly.
Provide actionable tips on FPS optimization, mouse DPI/sensitivity recommendations, setup choices (PC vs PS5), tournament preparation, game strategies (Valorant, CS2, BGMI, EA FC 25, Tekken 8, Cyberpunk 2077, COD, GTA V), or cafe food recommendations.
Keep answers concise (around 120-180 words max) and format key takeaways clearly with bullet points.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `User Query: ${prompt}
Context Game: ${game || "General Gaming"}
User Intent: ${userType || "Casual/Pro Gamer"}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text || "Game on! Connect with our Chakravyuh desk crew for instant setup tweaking." });
    } catch (err: any) {
      console.error("AI Coach Error:", err);
      res.status(500).json({ error: "Failed to query Chakravyuh AI Coach. Please try again." });
    }
  });

  // Vite development middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`⚡ Chakravyuh E-Sports Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
