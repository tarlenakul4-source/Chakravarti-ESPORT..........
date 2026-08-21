export type StationType = "pc" | "ps5" | "sim" | "vip";

export interface GamingStation {
  id: string;
  name: string;
  type: StationType;
  zone: string;
  specs: {
    gpu: string;
    cpu: string;
    ram: string;
    monitor: string;
    peripherals: string;
    chair: string;
  };
  status: "available" | "occupied" | "reserved";
  hourlyRate: number;
  image: string;
  badge?: string;
}

export interface PricingPass {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  recommended?: boolean;
  type: "hourly" | "bundle" | "night" | "membership";
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  gameIcon: string;
  date: string;
  time: string;
  prizePool: string;
  entryFee: string;
  format: string; // 5v5 LAN, Solos, Duos, 1v1
  maxTeams: number;
  registeredTeams: number;
  status: "upcoming" | "live" | "completed";
  banner: string;
  rules: string[];
}

export interface GameItem {
  id: string;
  title: string;
  category: "FPS" | "Battle Royale" | "Sports" | "Fighting" | "RPG/Open World" | "Strategy";
  installedOn: "PC" | "PS5" | "Both";
  popular?: boolean;
  image: string;
  avgPingMs?: number;
}

export interface SnackItem {
  id: string;
  name: string;
  category: "Drinks" | "Snacks" | "Mains" | "Combos";
  price: number;
  description: string;
  popular?: boolean;
  image: string;
}

export interface PingStatus {
  server: string;
  game: string;
  pingMs: number;
  status: "EXCELLENT" | "GOOD" | "FAIR";
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  favoriteGame: string;
  avatar: string;
}
