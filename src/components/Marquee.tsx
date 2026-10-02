import { skillGroups } from "@/lib/data";

const DOTS = ["bg-electric", "bg-cyber", "bg-emerald-400", "bg-neonpink", "bg-ambercode"];

export default function Marquee() {
  const items = skillGroups.flatMap((g) => g.items);
  const row = items.map((item, i) => (
    <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${DOTS[i % DOTS.length]}`} /> {item}
    </span>
  ));

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-surface/90 py-3.5 select-none" aria-hidden>
      <div className="marquee-track flex w-max animate-marquee items-center gap-12 font-mono text-xs tracking-widest whitespace-nowrap text-slate-400 uppercase">
        <div className="flex items-center gap-12">{row}</div>
        <div className="flex items-center gap-12">{row}</div>
      </div>
    </div>
  );
}
