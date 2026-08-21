import React, { useEffect, useRef, useState } from "react";

interface LiveBackgroundProps {
  opacityOverlay?: string;
  activeTheme?: "arena" | "cyber" | "neon" | "obsidian";
}

const VIDEO_THEMES = {
  arena: {
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-gamers-playing-a-video-game-in-a-room-41385-large.mp4",
    backupSrc: "https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-video-games-in-a-dark-room-41384-large.mp4",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    accentColor: "rgba(6, 182, 212, 0.25)", // vibrant cyan glow
    vignetteColor: "rgba(2, 6, 23, 0.55)",
  },
  cyber: {
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-neon-lights-at-night-42289-large.mp4",
    backupSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-animation-32508-large.mp4",
    poster: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    accentColor: "rgba(168, 85, 247, 0.25)", // vibrant purple glow
    vignetteColor: "rgba(2, 6, 23, 0.55)",
  },
  neon: {
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-video-games-in-a-dark-room-41384-large.mp4",
    backupSrc: "https://assets.mixkit.co/videos/preview/mixkit-gamers-playing-a-video-game-in-a-room-41385-large.mp4",
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    accentColor: "rgba(249, 115, 22, 0.25)", // vibrant orange glow
    vignetteColor: "rgba(2, 6, 23, 0.55)",
  },
  obsidian: {
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-gamers-playing-a-video-game-in-a-room-41385-large.mp4",
    backupSrc: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-neon-lights-at-night-42289-large.mp4",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    accentColor: "rgba(56, 189, 248, 0.2)",
    vignetteColor: "rgba(2, 6, 23, 0.65)",
  },
};

export const LiveBackground: React.FC<LiveBackgroundProps> = ({
  opacityOverlay = "bg-black/40",
  activeTheme = "arena",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const theme = VIDEO_THEMES[activeTheme] || VIDEO_THEMES.arena;

  // Real-time canvas particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      alphaChange: number;
    }

    const colors = ["#06b6d4", "#a855f7", "#f97316", "#38bdf8"];
    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.15,
      size: Math.random() * 2.2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
      alphaChange: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective cyber mesh lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle glowing dots
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaChange;

        if (p.alpha <= 0.1 || p.alpha >= 0.8) {
          p.alphaChange = -p.alphaChange;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Background HTML5 Live Video Stream - clear, bright & vivid */}
      <video
        ref={videoRef}
        key={theme.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover scale-105 filter brightness-[0.88] contrast-[1.12] saturate-[1.3] transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-75"
        }`}
        poster={theme.poster}
      >
        <source src={theme.videoSrc} type="video/mp4" />
        <source src={theme.backupSrc} type="video/mp4" />
      </video>

      {/* Real-time Interactive Particle Mesh Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />

      {/* Balanced translucent gradient overlay so background video & theme stay crisp & visible */}
      <div className={`absolute inset-0 ${opacityOverlay} bg-gradient-to-b from-black/45 via-slate-950/30 to-black/60`} />

      {/* Radial Dynamic Glow Vignette */}
      <div
        className="absolute inset-0 transition-colors duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 85% 70% at 50% 15%, ${theme.accentColor}, ${theme.vignetteColor})`,
        }}
      />

      {/* Cyber Ambient Scanlines Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
    </div>
  );
};
