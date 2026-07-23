"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

type Ribbon = {
  start: { x: number; y: number };
  end: { x: number; y: number };
  amp: number;
  freq: number;
  phase: number;
  thickStart: number;
  thickEnd: number;
  colors: [string, string, string];
};

type RibbonConfig = {
  startPct: { x: number; y: number };
  endPct: { x: number; y: number };
  ampPct: number;
  freq: number;
  phase: number;
  thickStartPct: number;
  thickEndPct: number;
  colors: [string, string, string];
};

const RIBBONS: RibbonConfig[] = [
  {
    startPct: { x: 0.06, y: 0.04 },
    endPct: { x: 1.05, y: 0.5 },
    ampPct: 0.06,
    freq: 2.0,
    phase: 0.3,
    thickStartPct: 0.05,
    thickEndPct: 0.15,
    colors: ["#3a1362", "#7a2fe0", "#d6249b"],
  },
  {
    startPct: { x: 0.18, y: 0.2 },
    endPct: { x: 1.08, y: 0.7 },
    ampPct: 0.05,
    freq: 1.7,
    phase: 1.1,
    thickStartPct: 0.06,
    thickEndPct: 0.19,
    colors: ["#7a2fe0", "#d6249b", "#e31b4d"],
  },
  {
    startPct: { x: 0.3, y: 0.4 },
    endPct: { x: 1.1, y: 0.86 },
    ampPct: 0.045,
    freq: 1.4,
    phase: 2.0,
    thickStartPct: 0.05,
    thickEndPct: 0.165,
    colors: ["#e31b4d", "#ff7a29", "#ffc94d"],
  },
  {
    startPct: { x: 0.42, y: 0.58 },
    endPct: { x: 1.12, y: 1.0 },
    ampPct: 0.04,
    freq: 1.9,
    phase: 0.6,
    thickStartPct: 0.03,
    thickEndPct: 0.11,
    colors: ["#ff7a29", "#ffc94d", "#ffe7a8"],
  },
];

function drawRibbon(ctx: CanvasRenderingContext2D, r: Ribbon, glow: number) {
  const steps = 48;
  const top: { x: number; y: number }[] = [];
  const bottom: { x: number; y: number }[] = [];
  const dx = (r.end.x - r.start.x) / steps;
  const dyBase = (r.end.y - r.start.y) / steps;
  const len = Math.hypot(dx, dyBase) || 1;
  const nx = -dyBase / len;
  const ny = dx / len;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = r.start.x + (r.end.x - r.start.x) * t;
    const yBase = r.start.y + (r.end.y - r.start.y) * t;
    const wave =
      Math.sin(t * Math.PI * r.freq + r.phase) * r.amp * Math.sin(t * Math.PI * 0.9 + 0.1);
    const y = yBase + wave;
    const thickness = r.thickStart + (r.thickEnd - r.thickStart) * t;
    top.push({ x: x + (nx * thickness) / 2, y: y + (ny * thickness) / 2 });
    bottom.push({ x: x - (nx * thickness) / 2, y: y - (ny * thickness) / 2 });
  }

  ctx.beginPath();
  ctx.moveTo(top[0].x, top[0].y);
  for (let i = 1; i < top.length; i++) ctx.lineTo(top[i].x, top[i].y);
  for (let i = bottom.length - 1; i >= 0; i--) ctx.lineTo(bottom[i].x, bottom[i].y);
  ctx.closePath();

  const grad = ctx.createLinearGradient(r.start.x, r.start.y, r.end.x, r.end.y);
  grad.addColorStop(0, r.colors[0]);
  grad.addColorStop(0.55, r.colors[1]);
  grad.addColorStop(1, r.colors[2]);
  ctx.fillStyle = grad;
  ctx.shadowColor = r.colors[1];
  ctx.shadowBlur = glow;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(top[0].x, top[0].y);
  for (let i = 1; i < top.length; i++) ctx.lineTo(top[i].x, top[i].y);
  ctx.strokeStyle = "rgba(255,255,255,0.30)";
  ctx.lineWidth = Math.max(1, glow * 0.06);
  ctx.filter = "blur(2px)";
  ctx.stroke();
  ctx.restore();
}

function GradientWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const draw = () => {
      const rect = parent.getBoundingClientRect();
      const W = Math.max(rect.width, 1);
      const H = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const blobs = [
        { x: W * 0.6, y: H * 0.26, r: W * 0.4, color: "rgba(123,47,224,0.34)" },
        { x: W * 0.88, y: H * 0.58, r: W * 0.36, color: "rgba(224,27,77,0.26)" },
        { x: W * 0.58, y: H * 0.82, r: W * 0.32, color: "rgba(255,167,44,0.2)" },
      ];
      ctx.save();
      ctx.filter = `blur(${W * 0.05}px)`;
      blobs.forEach((b) => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      const glow = H * 0.05;
      RIBBONS.forEach((r) =>
        drawRibbon(
          ctx,
          {
            start: { x: W * r.startPct.x, y: H * r.startPct.y },
            end: { x: W * r.endPct.x, y: H * r.endPct.y },
            amp: H * r.ampPct,
            freq: r.freq,
            phase: r.phase,
            thickStart: H * r.thickStartPct,
            thickEnd: H * r.thickEndPct,
            colors: r.colors,
          },
          glow,
        ),
      );
    };

    ctx.globalCompositeOperation = "screen";
    draw();
    ctx.globalCompositeOperation = "source-over";

    let raf = 0;
    const scheduleDraw = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ctx.globalCompositeOperation = "screen";
        draw();
        ctx.globalCompositeOperation = "source-over";
      });
    };

    const observer = new ResizeObserver(scheduleDraw);
    observer.observe(parent);
    window.addEventListener("resize", scheduleDraw);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", scheduleDraw);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-[70%] lg:block"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0a0a0b 0%, rgba(10,10,11,0.5) 20%, transparent 45%)",
        }}
      />
    </div>
  );
}

export type ErpExpertsHeroProps = {
  badgeText?: string;
  headline?: [string, string];
  subtext?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  clients?: string[];
};

export const Component = ({
  badgeText = "Oracle NetSuite Certified Partner",
  headline = ["We Make", "NetSuite Work."],
  subtext = (
    <>
      Implementation, support and optimisation for
      <br />
      ambitious businesses across the UK and beyond.
    </>
  ),
  primaryCta = { label: "Start a conversation", href: "/contact" },
  secondaryCta = {
    label: "Book a call: 01785 336 253",
    href: "tel:01785336253",
  },
  clients = [
    "Totalkare",
    "Rebellion Brewing Co",
    "Stiltz",
    "Kynetec",
    "Carallon Consulting",
  ],
}: ErpExpertsHeroProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0b] text-white">
      <style>{`
        @keyframes erp-hero-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .erp-hero-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 15%, #12193a 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <GradientWave />

      <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:py-32">
        <div className="max-w-2xl">
          <div
            className="erp-hero-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
            style={{ animation: "erp-hero-rise 0.8s cubic-bezier(.22,1,.36,1) .05s both" }}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#e11d48] animate-pulse" />
            {badgeText}
          </div>

          <h1
            className="erp-hero-reveal mt-7 font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-balance"
            style={{ animation: "erp-hero-rise 0.8s cubic-bezier(.22,1,.36,1) .15s both" }}
          >
            {headline[0]}
            <br />
            {headline[1]}
            <span
              className="ml-2 inline-block h-2.5 w-2.5 rounded-full align-middle md:h-3.5 md:w-3.5"
              style={{ background: "#ff2d6f", boxShadow: "0 0 24px rgba(255,45,111,0.85)" }}
              aria-hidden="true"
            />
          </h1>

          <p
            className="erp-hero-reveal mt-7 max-w-md text-lg md:text-xl text-white/70 leading-relaxed"
            style={{ animation: "erp-hero-rise 0.8s cubic-bezier(.22,1,.36,1) .25s both" }}
          >
            {subtext}
          </p>

          <div
            className="erp-hero-reveal mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            style={{ animation: "erp-hero-rise 0.8s cubic-bezier(.22,1,.36,1) .35s both" }}
          >
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0a0a0b] transition hover:bg-[#fafafa]"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.14]"
            >
              {secondaryCta.label}
            </a>
          </div>

          <div
            className="erp-hero-reveal mt-14"
            style={{ animation: "erp-hero-rise 0.8s cubic-bezier(.22,1,.36,1) .45s both" }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Trusted by
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {clients.map((c) => (
                <span key={c} className="text-lg md:text-xl font-semibold text-white/55">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
