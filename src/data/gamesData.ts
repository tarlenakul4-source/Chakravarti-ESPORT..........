export interface PricingBreakdown {
  duration: string; // e.g. "1 HOUR"
  rates: {
    label: string; // e.g. "1 Controller", "2 Controllers", "360Hz Premium"
    price: number; // e.g. 150, 200, 240, 100
    discountNote?: string;
  }[];
  standardPriceNote?: string;
  studentDiscount?: string;
}

export interface GameRecord {
  id: string;
  orderNumber: number;
  title: string;
  platform: "PS5" | "PC" | "Simulator";
  category: string;
  multiplayer: string;
  supportedControllers: string;
  badge: string;
  description: string;
  tags: string[];
  pricing: PricingBreakdown;
  simSpecs?: {
    steeringWheel?: string;
    display?: string;
    seat?: string;
    physicsRating?: string;
  };
}

// ==========================================
// 🎮 12 PS5 GAMES (IN EXACT ORDER WITH HOURLY RATES & CONTROLLER PRICING)
// ==========================================
export const PS5_GAMES: GameRecord[] = [
  {
    id: "ps5-01",
    orderNumber: 1,
    title: "WWE 2K26",
    platform: "PS5",
    category: "Sports / Wrestling / Royal Rumble",
    multiplayer: "1 to 4 Players Local Couch Multiplayer",
    supportedControllers: "Up to 4 DualSense Controllers",
    badge: "1-4 PLAYERS",
    description: "Royal rumble, cage matches, ladder showdowns and intense 4-way multiplayer wrestling.",
    tags: ["4-Player Local", "DualSense Haptics", "Royal Rumble"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller", price: 150 },
        { label: "2 Controllers", price: 200 },
        { label: "3 Controllers", price: 300 },
        { label: "4 Controllers", price: 400 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-02",
    orderNumber: 2,
    title: "EA Sports FC 26",
    platform: "PS5",
    category: "Football / Sports Simulator",
    multiplayer: "1 to 4 Players Local & Online Rivals",
    supportedControllers: "Up to 4 DualSense Controllers",
    badge: "TOP PLAYED 1V1 & 2V2",
    description: "The ultimate 1v1 el clásico and 2v2 tournament couch competition with HyperMotion V feel.",
    tags: ["1v1 / 2v2 Rivalry", "DualSense Haptics", "4K 60FPS"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller", price: 150 },
        { label: "2 Controllers (1v1)", price: 200 },
        { label: "3 Controllers", price: 300 },
        { label: "4 Controllers (2v2)", price: 400 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-03",
    orderNumber: 3,
    title: "Mortal Kombat 1",
    platform: "PS5",
    category: "Fighting / Action",
    multiplayer: "1 to 2 Players Local Head-to-Head",
    supportedControllers: "1 or 2 DualSense Controllers",
    badge: "1V1 FIGHT",
    description: "Cinematic fatalities, Kameo fighter assists, and lightning-fast 1v1 arcade combat.",
    tags: ["1v1 Head-to-Head", "Fatalities", "Zero Input Lag"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Solo)", price: 150 },
        { label: "2 Controllers (1v1 Fight)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-04",
    orderNumber: 4,
    title: "Tekken 8",
    platform: "PS5",
    category: "Fighting / 3D Martial Arts",
    multiplayer: "1 to 2 Players Local Head-to-Head",
    supportedControllers: "1 or 2 DualSense Controllers",
    badge: "1V1 FIGHT",
    description: "Heat System mechanics, destructible stages, and instant rematch competitive action.",
    tags: ["Heat System", "1v1 Versus", "Unreal Engine 5"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Solo)", price: 150 },
        { label: "2 Controllers (1v1 Fight)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-05",
    orderNumber: 5,
    title: "Street Fighter 6",
    platform: "PS5",
    category: "Fighting / Arcade",
    multiplayer: "1 to 2 Players Local Head-to-Head",
    supportedControllers: "1 or 2 DualSense Controllers",
    badge: "1V1 FIGHT",
    description: "Drive Impact combos, modern & classic control layouts, and high-energy fighting arena.",
    tags: ["Drive Impact", "Local Versus", "Instant Rematch"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Solo)", price: 150 },
        { label: "2 Controllers (1v1 Fight)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-06",
    orderNumber: 6,
    title: "Grand Theft Auto V",
    platform: "PS5",
    category: "Action / Open World Crime",
    multiplayer: "Solo & GTA Online Multiplayer",
    supportedControllers: "1 DualSense Controller per Station",
    badge: "4K 60FPS",
    description: "Los Santos enhanced for PS5 with ray-traced reflections, fast loading, and adaptive triggers.",
    tags: ["GTA Online", "Ray Traced 60FPS", "Heists"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Standard)", price: 150 },
        { label: "1 Controller (VIP PS5)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-07",
    orderNumber: 7,
    title: "Call of Duty: Black Ops 6",
    platform: "PS5",
    category: "FPS / Action Tactical",
    multiplayer: "1 to 2 Players Splitscreen & Online",
    supportedControllers: "1 or 2 DualSense Controllers",
    badge: "SPLITSCREEN CO-OP",
    description: "Omnimovement system (sprint/slide/dive any direction) + Round-Based Zombies & Multiplayer.",
    tags: ["Omnimovement", "Zombies Co-Op", "Splitscreen"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Online/Solo)", price: 150 },
        { label: "2 Controllers (Splitscreen Co-Op)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-08",
    orderNumber: 8,
    title: "Call of Duty: Black Ops 7",
    platform: "PS5",
    category: "FPS / Next-Gen Warfare",
    multiplayer: "Solo & Online Multiplayer",
    supportedControllers: "1 DualSense Controller per Station",
    badge: "4K 120HZ FPS",
    description: "Ultra high-frame-rate next-gen multiplayer lobbies, tactical combat, and crossplay squads.",
    tags: ["Next-Gen FPS", "120Hz Mode", "Squad Play"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Standard)", price: 150 },
        { label: "1 Controller (VIP PS5)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-09",
    orderNumber: 9,
    title: "Fortnite",
    platform: "PS5",
    category: "Battle Royale / Zero Build",
    multiplayer: "1 to 2 Players Splitscreen & Online Squads",
    supportedControllers: "1 or 2 DualSense Controllers",
    badge: "120 FPS PS5",
    description: "Buttery-smooth 120 FPS Battle Royale, Zero Build, and local 2-player split-screen drops.",
    tags: ["120 FPS Mode", "Splitscreen Duo", "Zero Build"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller (Solo Drop)", price: 150 },
        { label: "2 Controllers (Splitscreen Duo)", price: 200 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-10",
    orderNumber: 10,
    title: "Rocket League",
    platform: "PS5",
    category: "Vehicular Sports / Action",
    multiplayer: "1 to 4 Players Local Splitscreen",
    supportedControllers: "Up to 4 DualSense Controllers",
    badge: "1-4 PLAYERS",
    description: "High-octane rocket-powered soccer. Hop onto split-screen with up to 4 friends on one screen.",
    tags: ["4-Player Splitscreen", "Fast Aerials", "Instant Fun"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller", price: 150 },
        { label: "2 Controllers", price: 200 },
        { label: "3 Controllers", price: 300 },
        { label: "4 Controllers (Full Squad)", price: 400 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-11",
    orderNumber: 11,
    title: "Minecraft",
    platform: "PS5",
    category: "Sandbox / Survival Adventure",
    multiplayer: "1 to 4 Players Local Splitscreen",
    supportedControllers: "Up to 4 DualSense Controllers",
    badge: "1-4 PLAYERS",
    description: "Build, mine, and explore together on 4-way split-screen on our large 4K OLED display.",
    tags: ["4-Player Splitscreen", "Co-Op Survival", "Creative Mode"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "1 Controller", price: 150 },
        { label: "2 Controllers", price: 200 },
        { label: "3 Controllers", price: 300 },
        { label: "4 Controllers", price: 400 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
  {
    id: "ps5-12",
    orderNumber: 12,
    title: "It Takes Two",
    platform: "PS5",
    category: "Co-Op Adventure (GOTY Winner)",
    multiplayer: "2 Players Mandatory Local Co-Op",
    supportedControllers: "2 DualSense Controllers",
    badge: "2-PLAYER CO-OP",
    description: "The critically acclaimed purely collaborative two-player adventure. Perfect duo game.",
    tags: ["Mandatory 2-Player", "Award Winner", "Pure Co-Op"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "2 Controllers (Standard)", price: 200 },
        { label: "2 Controllers (Premium VIP)", price: 240 },
      ],
      studentDiscount: "20% OFF with Student ID",
    },
  },
];

// ==========================================
// 🖥️ 13 PC GAMES (IN EXACT ORDER WITH HOURLY RIG RATES)
// ==========================================
export const PC_GAMES: GameRecord[] = [
  {
    id: "pc-01",
    orderNumber: 1,
    title: "Counter-Strike 2",
    platform: "PC",
    category: "Tactical FPS",
    multiplayer: "5v5 LAN & Online Competitive",
    supportedControllers: "Esports Keyboard + Optical Mouse",
    badge: "360Hz ZERO LAG",
    description: "Sub-tick precision, 12ms ping, and DyAc+ dynamic clarity on BenQ ZOWIE 360Hz displays.",
    tags: ["5v5 LAN", "Sub-tick Precision", "12ms Ping"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-02",
    orderNumber: 2,
    title: "Valorant",
    platform: "PC",
    category: "Tactical Hero FPS",
    multiplayer: "5v5 LAN & Ranked Grind",
    supportedControllers: "Esports Keyboard + Optical Mouse",
    badge: "500+ FPS",
    description: "Nashik's #1 competitive esports title. Sub-10ms ping, Intel i9-14900K & RTX 4090 power.",
    tags: ["Sub-10ms Ping", "500+ FPS", "Ranked Ready"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-03",
    orderNumber: 3,
    title: "Grand Theft Auto V / FiveM",
    platform: "PC",
    category: "Open World / Roleplay",
    multiplayer: "GTA Online & FiveM RP Servers",
    supportedControllers: "Keyboard/Mouse or Controller",
    badge: "FIVEM READY",
    description: "Pre-installed GTA V with FiveM launcher for Indian roleplay servers, custom drift and heists.",
    tags: ["FiveM RP", "Ultra Graphics", "Online Heists"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-04",
    orderNumber: 4,
    title: "PUBG: Battlegrounds",
    platform: "PC",
    category: "Tactical Battle Royale",
    multiplayer: "4-Player Squads & Ranked",
    supportedControllers: "Esports Keyboard + Optical Mouse",
    badge: "144+ FPS ULTRA",
    description: "Original tactical PC battle royale on Erangel & Miramar. Squad up with arena teammates.",
    tags: ["4-Man Squads", "Zero Stutter", "Ranked"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-05",
    orderNumber: 5,
    title: "Fortnite",
    platform: "PC",
    category: "Battle Royale / Performance Mode",
    multiplayer: "Solo / Duo / Squad Online",
    supportedControllers: "Keyboard/Mouse or Controller",
    badge: "240FPS+",
    description: "Performance mode tuned for competitive fast building and instant edits with zero delay.",
    tags: ["Zero Input Delay", "Performance Mode", "Ranked Reload"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-06",
    orderNumber: 6,
    title: "Call of Duty: Warzone",
    platform: "PC",
    category: "FPS / Battle Royale",
    multiplayer: "Quads & Resurgence Online",
    supportedControllers: "Keyboard/Mouse or Controller",
    badge: "RTX 4090",
    description: "Urzkistan & Rebirth Island high-speed battle royale powered by DLSS 3.5 Frame Generation.",
    tags: ["Rebirth Island", "DLSS 3.5", "Squad Comms"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-07",
    orderNumber: 7,
    title: "Apex Legends",
    platform: "PC",
    category: "Hero Battle Royale",
    multiplayer: "Trio Squads & Ranked",
    supportedControllers: "Keyboard/Mouse or Controller",
    badge: "240FPS LOCKED",
    description: "Tap-strafing, fast movement mechanics, and hero abilities locked at high refresh rate.",
    tags: ["Fast Movement", "Trio Ranked", "Sub-30ms Ping"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-08",
    orderNumber: 8,
    title: "Rocket League",
    platform: "PC",
    category: "Vehicular Sports",
    multiplayer: "2v2 & 3v3 Competitive",
    supportedControllers: "Controller Plug-and-Play",
    badge: "360 FPS",
    description: "Plug in Xbox or DualSense controllers for instant aerial control and high-rank play.",
    tags: ["Controller Ready", "Zero Latency", "Ranked 2v2"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-09",
    orderNumber: 9,
    title: "EA Sports FC 26",
    platform: "PC",
    category: "Sports / Football",
    multiplayer: "Online Ultimate Team & 1v1",
    supportedControllers: "DualSense / Xbox Controllers",
    badge: "ULTRA 144HZ",
    description: "Smooth pitch rendering with native controller plug-and-play and fast online matchmaking.",
    tags: ["Native Controller", "Ultimate Team", "Fast Ping"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-10",
    orderNumber: 10,
    title: "Minecraft",
    platform: "PC",
    category: "Sandbox / Survival & Hypixel",
    multiplayer: "Hypixel & Custom Servers",
    supportedControllers: "Keyboard & Optical Mouse",
    badge: "RTX SHADERS",
    description: "Play Hypixel Bedwars, PvP servers, or custom worlds with stunning ray-traced shaders.",
    tags: ["Hypixel Ready", "RTX Shaders", "Java & Bedrock"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-11",
    orderNumber: 11,
    title: "Red Dead Redemption 2",
    platform: "PC",
    category: "Open World / Cinematic Western",
    multiplayer: "Story Mode & RDR Online",
    supportedControllers: "Keyboard/Mouse or Controller",
    badge: "ULTRA 4K",
    description: "Arthur Morgan's journey maxed out at Ultra PC graphic settings with HDR color depth.",
    tags: ["Ultra Graphics", "Cinematic Story", "Red Dead Online"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-12",
    orderNumber: 12,
    title: "Forza Horizon 5",
    platform: "PC",
    category: "Open World Racing",
    multiplayer: "Online Convoy & Free Roam",
    supportedControllers: "Wheel / Controller / Keyboard",
    badge: "144HZ RACING",
    description: "Cruise 500+ hypercars across Mexican landscapes with ultra graphics and controller support.",
    tags: ["500+ Cars", "Mexico Open World", "Online Convoy"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
  {
    id: "pc-13",
    orderNumber: 13,
    title: "Rainbow Six Siege",
    platform: "PC",
    category: "Tactical CQB Shooter",
    multiplayer: "5v5 Attack vs Defense",
    supportedControllers: "Esports Keyboard + Optical Mouse",
    badge: "TACTICAL ESPORTS",
    description: "Destructible environment 5v5 shooter. Clear callouts on noise-cancelling HyperX headsets.",
    tags: ["5v5 Tactical", "Destructible Rooms", "Ranked Siege"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "240Hz Gold PC", price: 80 },
        { label: "240Hz Platinum PC", price: 90 },
        { label: "360Hz Premium PC", price: 100 },
      ],
      standardPriceNote: "10% Extra Bonus on ₹500+ Recharge",
    },
  },
];

// ==========================================
// 🏎️ 2 CAR SIMULATOR GAMES (EXACT HOURLY COCKPIT RATE)
// ==========================================
export const SIM_GAMES: GameRecord[] = [
  {
    id: "sim-01",
    orderNumber: 1,
    title: "Forza Horizon 5",
    platform: "Simulator",
    category: "Open-World Racing / Hypercars",
    multiplayer: "Local Time Attack & Online Free Roam",
    supportedControllers: "Force-Feedback Steering Wheel + Hydraulic Pedals",
    badge: "COCKPIT RIG",
    description: "Blast through Mexico's volcanoes and desert highways with active force-feedback steering wheel and pedals.",
    tags: ["500+ Hypercars", "Mexico Open World", "Force Feedback Wheel"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "Racing Simulator Cockpit", price: 250 },
      ],
      standardPriceNote: "Direct Drive Wheel + 49\" Curved 144Hz Cockpit",
    },
    simSpecs: {
      steeringWheel: "Direct Drive Force Feedback Steering Wheel",
      display: "49\" Ultrawide 144Hz Cockpit Curved Display",
      seat: "Sparco Ergonomic Racing Bucket Seat",
      physicsRating: "Dynamic Arcade-Sim Hybrid with Real Force Feedback",
    },
  },
  {
    id: "sim-02",
    orderNumber: 2,
    title: "Assetto Corsa Competizione",
    platform: "Simulator",
    category: "Realistic GT3/GT4 Motorsport Sim",
    multiplayer: "Laser-Scanned Track Time Attack & Grid",
    supportedControllers: "Direct Drive Wheel + Load-Cell Pedals + Paddle Shift",
    badge: "PRO FIA GT3",
    description: "The gold standard in realistic GT3 sim-racing with laser-scanned tracks (Spa, Monza, Silverstone) and true tyre physics.",
    tags: ["Laser-Scanned Tracks", "Official GT3 Series", "True Tyre Physics"],
    pricing: {
      duration: "1 HOUR",
      rates: [
        { label: "Racing Simulator Cockpit", price: 250 },
      ],
      standardPriceNote: "Direct Drive Wheel + 49\" Curved 144Hz Cockpit",
    },
    simSpecs: {
      steeringWheel: "Fanatec GT Wheel with 8Nm Direct Drive Torque",
      display: "49\" 1000R Immersion Cockpit Display",
      seat: "Reinforced Steel Cockpit Chassis + Sparco Seat",
      physicsRating: "100% Ultra-Realistic FIA GT3 Telemetry & Aerodynamics",
    },
  },
];

export const ALL_GAMES: GameRecord[] = [
  ...PS5_GAMES,
  ...PC_GAMES,
  ...SIM_GAMES,
];
