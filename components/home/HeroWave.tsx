"use client";

import { useEffect, useRef } from "react";

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

export default function HeroWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

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
      const ribbons: Ribbon[] = [
        {
          start: { x: W * 0.06, y: H * 0.04 },
          end: { x: W * 1.05, y: H * 0.5 },
          amp: H * 0.06,
          freq: 2.0,
          phase: 0.3,
          thickStart: H * 0.05,
          thickEnd: H * 0.15,
          colors: ["#3a1362", "#7a2fe0", "#d6249b"],
        },
        {
          start: { x: W * 0.18, y: H * 0.2 },
          end: { x: W * 1.08, y: H * 0.7 },
          amp: H * 0.05,
          freq: 1.7,
          phase: 1.1,
          thickStart: H * 0.06,
          thickEnd: H * 0.19,
          colors: ["#7a2fe0", "#d6249b", "#e31b4d"],
        },
        {
          start: { x: W * 0.3, y: H * 0.4 },
          end: { x: W * 1.1, y: H * 0.86 },
          amp: H * 0.045,
          freq: 1.4,
          phase: 2.0,
          thickStart: H * 0.05,
          thickEnd: H * 0.165,
          colors: ["#e31b4d", "#ff7a29", "#ffc94d"],
        },
        {
          start: { x: W * 0.42, y: H * 0.58 },
          end: { x: W * 1.12, y: H * 1.0 },
          amp: H * 0.04,
          freq: 1.9,
          phase: 0.6,
          thickStart: H * 0.03,
          thickEnd: H * 0.11,
          colors: ["#ff7a29", "#ffc94d", "#ffe7a8"],
        },
      ];

      ctx.globalCompositeOperation = "screen";
      ribbons.forEach((r) => drawRibbon(ctx, r, glow));
      ctx.globalCompositeOperation = "source-over";
    };

    draw();

    let raf = 0;
    const scheduleDraw = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
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
            "linear-gradient(90deg, var(--color-ink) 0%, rgba(10,10,11,0.5) 20%, transparent 45%)",
        }}
      />
    </div>
  );
}
