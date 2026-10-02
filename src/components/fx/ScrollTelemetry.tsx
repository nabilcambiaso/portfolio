"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/lib/data";

const PATH = "M 20 10 Q 32 100, 16 200 T 24 390";

// Fixed scroll-progress bar plus the right-edge "telemetry spine" that draws itself as you scroll.
export default function ScrollTelemetry() {
  const bar = useRef<HTMLDivElement>(null);
  const livePath = useRef<SVGPathElement>(null);
  const beacon = useRef<SVGGElement>(null);
  const waveform = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  const [active, setActive] = useState(sections[0].spine);
  const [speed, setSpeed] = useState(0);
  const [waypoints, setWaypoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const path = livePath.current;
    const total = path ? path.getTotalLength() : 420;
    if (path) {
      path.style.strokeDasharray = `${total}`;
      path.style.strokeDashoffset = `${total}`;
      setWaypoints(
        sections.map((_, i) => {
          const pt = path.getPointAtLength((total * (i + 0.15)) / sections.length);
          return { x: pt.x, y: pt.y };
        }),
      );
    }

    let lastY = window.scrollY;
    let lastT = performance.now();
    let ticking = false;

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const f = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

      if (bar.current) bar.current.style.width = `${f * 100}%`;
      setPct(Math.round(f * 100));

      if (path) {
        path.style.strokeDashoffset = `${total * (1 - f)}`;
        const pt = path.getPointAtLength(total * f);
        beacon.current?.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
      }

      const probe = y + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= probe) {
          setActive(sections[i].spine);
          break;
        }
      }

      const now = performance.now();
      const dt = (now - lastT) / 1000;
      if (dt > 0.04) {
        const v = Math.round(Math.abs(y - lastY) / dt);
        setSpeed(v);
        window.dispatchEvent(new CustomEvent("portfolio:velocity", { detail: v }));
        const bars = waveform.current?.children;
        if (bars) {
          const s = Math.min(14, Math.max(2, Math.round(v / 120)));
          const factors = [0.6, 1, 0.8, 1.1];
          for (let i = 0; i < bars.length; i++) {
            (bars[i] as HTMLElement).style.height = `${Math.min(14, s * factors[i] + 2)}px`;
          }
        }
        lastY = y;
        lastT = now;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div
        ref={bar}
        className="fixed top-0 left-0 z-[100] h-[2.5px] w-0 bg-gradient-to-r from-electric via-cyber to-neonpink"
        aria-hidden
      />

      <aside
        aria-label="Scroll telemetry"
        className="glass-panel fixed top-24 right-3 bottom-6 z-40 hidden w-[74px] flex-col items-center justify-between rounded-2xl border border-white/10 px-2.5 py-4 shadow-[-8px_0_24px_rgba(0,0,0,0.6)] select-none xl:flex"
      >
        <div className="flex w-full flex-col items-center gap-1 border-b border-white/10 pb-2 text-center">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-electric" />
          <span className="font-mono text-[8px] tracking-widest text-slate-400">TELEMETRY</span>
          <span className="font-mono text-[10px] font-bold text-electric">{pct}%</span>
        </div>

        <div className="relative my-3 flex w-full flex-1 items-center justify-center">
          <svg className="h-full w-12 overflow-visible" viewBox="0 0 40 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spineGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00f5d4" stopOpacity="0.9" />
              </linearGradient>
              <filter id="spineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path d={PATH} fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="2" />
            <path ref={livePath} d={PATH} fill="none" filter="url(#spineGlow)" stroke="url(#spineGradient)" strokeLinecap="round" strokeWidth="2.5" />
            {waypoints.map((pt, i) => (
              <circle
                key={sections[i].id}
                cx={pt.x}
                cy={pt.y}
                r="3"
                fill="#121316"
                stroke={sections[i].spine === active ? "#00f5d4" : "rgba(255,255,255,0.4)"}
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => go(sections[i].id)}
              >
                <title>{sections[i].spine}</title>
              </circle>
            ))}
            <g ref={beacon} transform="translate(20, 10)">
              <circle className="animate-ping opacity-75" fill="none" r="6" stroke="#00f5d4" strokeWidth="1.5" />
              <circle fill="#00f5d4" r="4" />
              <circle fill="#090a0c" r="1.5" />
            </g>
          </svg>
        </div>

        <div className="flex w-full flex-col items-center gap-1 border-t border-white/10 pt-2 text-center">
          <span className="font-mono text-[8px] tracking-tighter text-slate-500 uppercase">{active}</span>
          <div ref={waveform} className="flex h-3.5 w-full items-end justify-center gap-0.5 px-1">
            <span className="h-1 w-1 rounded-full bg-electric/60 transition-all duration-100" />
            <span className="h-2.5 w-1 rounded-full bg-electric transition-all duration-100" />
            <span className="h-1.5 w-1 rounded-full bg-electric/80 transition-all duration-100" />
            <span className="h-3 w-1 rounded-full bg-electric transition-all duration-100" />
          </div>
          <span className="font-mono text-[7.5px] font-semibold text-emerald-400">{speed} px/s</span>
        </div>
      </aside>
    </>
  );
}
