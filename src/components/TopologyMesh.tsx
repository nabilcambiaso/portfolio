"use client";

import { useEffect, useRef, useState } from "react";

type MeshNode = {
  label: string;
  x: number;
  y: number;
  r: number;
  color: string;
  detail: string;
};

const EDGE = "#00f5d4";
const COMPUTE = "#a855f7";
const AI = "#ff007a";
const DATA = "#ffb703";

// A stylised view of the kind of systems Nabil builds: AWS edge → compute → AI + data tiers.
const nodes: MeshNode[] = [
  { label: "API Gateway", x: 0.14, y: 0.5, r: 8, color: EDGE, detail: "Ingress · auth · rate limits" },
  { label: "Lambda", x: 0.38, y: 0.26, r: 6.5, color: COMPUTE, detail: "Serverless Node.js / TypeScript" },
  { label: "ECS / EC2", x: 0.38, y: 0.74, r: 6.5, color: COMPUTE, detail: "Dockerised services · CI/CD" },
  { label: "AI Agent", x: 0.63, y: 0.16, r: 6, color: AI, detail: "LLM APIs · tool calling" },
  { label: "n8n Flows", x: 0.63, y: 0.46, r: 5.5, color: AI, detail: "Workflow automation end-to-end" },
  { label: "RAG Index", x: 0.63, y: 0.78, r: 5.5, color: AI, detail: "Retrieval-augmented generation" },
  { label: "DynamoDB / S3", x: 0.88, y: 0.32, r: 7, color: DATA, detail: "Storage · cost-aware design" },
  { label: "PostgreSQL / RDS", x: 0.88, y: 0.68, r: 7, color: DATA, detail: "Relational data · observability" },
];

const links: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7],
];

export default function TopologyMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState<{ node: MeshNode; x: number; y: number } | null>(null);
  const hoveredRef = useRef<MeshNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const packets = Array.from({ length: 26 }, () => ({
      link: Math.floor(Math.random() * links.length),
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.008,
      size: 1.6 + Math.random() * 1.8,
      color: Math.random() > 0.35 ? EDGE : COMPUTE,
    }));

    const curve = ([a, b]: [number, number]) => {
      const A = nodes[a];
      const B = nodes[b];
      const x1 = A.x * width;
      const y1 = A.y * height;
      const x2 = B.x * width;
      const y2 = B.y * height;
      return { x1, y1, x2, y2, cx: (x1 + x2) / 2, cy: (y1 + y2) / 2 + (a % 2 === 0 ? -12 : 12) };
    };

    let frame = 0;
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible) return;
      frame++;
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(255,255,255,0.035)";
      for (let x = 14; x < width; x += 28) {
        for (let y = 14; y < height; y += 28) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const link of links) {
        const c = curve(link);
        ctx.beginPath();
        ctx.moveTo(c.x1, c.y1);
        ctx.quadraticCurveTo(c.cx, c.cy, c.x2, c.y2);
        ctx.strokeStyle = "rgba(0,245,212,0.15)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      for (const p of packets) {
        if (!reduced) p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.link = Math.floor(Math.random() * links.length);
        }
        const c = curve(links[p.link]);
        const t = p.t;
        const px = (1 - t) ** 2 * c.x1 + 2 * (1 - t) * t * c.cx + t * t * c.x2;
        const py = (1 - t) ** 2 * c.y1 + 2 * (1 - t) * t * c.cy + t * t * c.y2;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const node of nodes) {
        const nx = node.x * width;
        const ny = node.y * height;
        const isHovered = hoveredRef.current === node;
        const pulse = reduced ? 0 : Math.sin(frame * 0.05 + node.x * 10) * 2;

        ctx.beginPath();
        ctx.arc(nx, ny, node.r + 4 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "rgba(0,245,212,0.3)" : "rgba(0,245,212,0.08)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, node.r, 0, Math.PI * 2);
        ctx.fillStyle = "#101319";
        ctx.fill();
        ctx.strokeStyle = isHovered ? "#ffffff" : node.color;
        ctx.lineWidth = isHovered ? 2.5 : 1.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, isHovered ? 3.5 : 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? EDGE : "rgba(255,255,255,0.7)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny + node.r + 12);
      }
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const hit = nodes.find((n) => Math.hypot(mx - n.x * rect.width, my - n.y * rect.height) < n.r + 10);
    hoveredRef.current = hit ?? null;
    setHovered(
      hit
        ? {
            node: hit,
            x: Math.min(rect.width - 190, Math.max(10, mx + 12)),
            y: Math.min(rect.height - 70, Math.max(10, my - 25)),
          }
        : null,
    );
  };

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl border border-electric/30 bg-surface/90 p-4 shadow-2xl sm:p-5">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-electric" />
          <span className="text-[11px] font-bold tracking-wider text-white">LIVE CLOUD ARCHITECTURE MESH</span>
        </div>
        <div className="hidden items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>OPERATIONAL</span>
        </div>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="rounded border border-white/5 bg-void/80 p-2">
          <span className="block text-slate-500">CLOUD</span>
          <span className="text-xs font-bold text-electric">AWS</span>
        </div>
        <div className="rounded border border-white/5 bg-void/80 p-2">
          <span className="block text-slate-500">RUNTIME</span>
          <span className="text-xs font-bold text-emerald-400">Node.js · TS</span>
        </div>
        <div className="rounded border border-white/5 bg-void/80 p-2">
          <span className="block text-slate-500">FOCUS</span>
          <span className="text-xs font-bold text-purple-300">Backend + AI</span>
        </div>
      </div>

      <div className="group relative h-[320px] w-full cursor-crosshair overflow-hidden rounded-xl border border-white/10 bg-void/90" data-cursor>
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          onMouseMove={onMove}
          onMouseLeave={() => {
            hoveredRef.current = null;
            setHovered(null);
          }}
          aria-label="Animated diagram of an AWS, Node.js and AI architecture"
          role="img"
        />
        <div
          className={`glass-panel pointer-events-none absolute z-20 max-w-[200px] rounded-lg border border-electric/60 p-2.5 font-mono text-[10px] shadow-2xl transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: hovered?.x ?? 0, top: hovered?.y ?? 0 }}
        >
          <div className="text-[11px] font-bold text-electric">{hovered?.node.label}</div>
          <div className="mt-0.5 text-slate-300">{hovered?.node.detail}</div>
        </div>
        <div className="pointer-events-none absolute right-2 bottom-2 left-2 flex items-center justify-between rounded border border-white/5 bg-surface/80 px-2 py-1 font-mono text-[9px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#00f5d4]" /> Edge</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" /> Compute</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#ff007a]" /> AI</span>
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#ffb703]" /> Data</span>
          </div>
          <span className="hidden text-slate-500 sm:inline">HOVER NODES</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Serverless + containers
        </span>
        <span className="text-slate-500">Terraform · CloudFormation</span>
      </div>
    </div>
  );
}
