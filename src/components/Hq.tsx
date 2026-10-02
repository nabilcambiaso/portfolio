import { languages, profile } from "@/lib/data";
import LiveClock from "./fx/LiveClock";
import SectionHeading from "./SectionHeading";

const LEVEL: Record<string, { width: string; bar: string; text: string }> = {
  Native: { width: "w-full", bar: "from-emerald-400 to-electric", text: "text-emerald-400" },
  "Full Professional": { width: "w-[85%]", bar: "from-electric to-cyber", text: "text-electric" },
};

const zones = [
  { city: "London", tz: "Europe/London" },
  { city: "Paris / Berlin", tz: "Europe/Paris" },
  { city: "New York", tz: "America/New_York" },
];

export default function Hq() {
  return (
    <section id="hq" className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-24 md:px-8">
      <SectionHeading
        eyebrow="Remote Reliability & Location"
        title="Morocco HQ 🇲🇦 → Global Overlap"
        description={`Based in ${profile.location} (UTC+1) — working hours that overlap fully with Europe and well into the US East Coast.`}
      />

      <div className="grid grid-cols-1 gap-6 font-mono md:grid-cols-3">
        <div className="reveal glass-panel relative overflow-hidden rounded-2xl border border-electric/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-electric uppercase">Marrakesh Base</span>
            <span className="text-xs">🇲🇦</span>
          </div>
          <div className="font-syne text-4xl font-extrabold text-white tabular-nums md:text-3xl lg:text-4xl">
            <LiveClock />
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            LOCAL TIME · AFRICA/CASABLANCA
          </div>
          <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4 text-[11px] text-slate-400">
            {zones.map((z) => (
              <div key={z.tz} className="flex justify-between">
                <span>{z.city}</span>
                <LiveClock timeZone={z.tz} className="text-slate-200 tabular-nums" />
              </div>
            ))}
          </div>
        </div>

        <div className="reveal glass-panel col-span-1 rounded-2xl border border-white/10 p-6 md:col-span-2" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <div className="mb-5 text-xs font-bold tracking-wider text-slate-400 uppercase">Communication Channels // Languages</div>
          <div className="space-y-5 text-xs">
            {languages.map((l) => {
              const s = LEVEL[l.level] ?? LEVEL["Full Professional"];
              return (
                <div key={l.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="font-semibold text-white">{l.name}</span>
                    <span className={`font-bold ${s.text}`}>{l.level}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-high">
                    <div className={`h-full ${s.width} bg-gradient-to-r ${s.bar}`} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/5 pt-5 text-[11px] sm:grid-cols-3">
            <div className="rounded-lg border border-white/5 bg-void/70 p-3">
              <span className="block text-slate-500">EMEA OVERLAP</span>
              <span className="font-bold text-emerald-400">Full working day</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-void/70 p-3">
              <span className="block text-slate-500">US EAST OVERLAP</span>
              <span className="font-bold text-electric">Afternoon sync</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-void/70 p-3">
              <span className="block text-slate-500">ALSO WORKED WITH</span>
              <span className="font-bold text-purple-300">London, UK team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
