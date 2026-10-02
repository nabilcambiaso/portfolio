"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/data";

const ACCENTS = [
  { ring: "border-electric bg-electric/10", text: "text-electric", chip: "hover:border-electric hover:text-electric" },
  { ring: "border-purple-400 bg-purple-500/10", text: "text-purple-300", chip: "hover:border-purple-400 hover:text-purple-300" },
  { ring: "border-neonpink bg-neonpink/10", text: "text-pink-300", chip: "hover:border-neonpink hover:text-pink-300" },
  { ring: "border-ambercode bg-amber-500/10", text: "text-amber-300", chip: "hover:border-ambercode hover:text-amber-300" },
  { ring: "border-emerald-400 bg-emerald-500/10", text: "text-emerald-300", chip: "hover:border-emerald-400 hover:text-emerald-300" },
  { ring: "border-sky-400 bg-sky-500/10", text: "text-sky-300", chip: "hover:border-sky-400 hover:text-sky-300" },
];

export default function SkillsMatrix() {
  const [active, setActive] = useState<number | null>(null);
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`rounded-lg border px-4 py-2 transition-colors ${
            active === null ? "border-electric bg-electric text-void" : "border-white/15 bg-surface text-slate-300 hover:border-electric/60"
          }`}
        >
          ALL LAYERS ({total})
        </button>
        {skillGroups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            onClick={() => setActive(active === i ? null : i)}
            className={`rounded-lg border px-4 py-2 transition-colors ${
              active === i ? `${ACCENTS[i].ring} ${ACCENTS[i].text}` : "border-white/15 bg-surface text-slate-400 hover:text-white"
            }`}
          >
            {g.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 font-mono text-xs sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const dim = active !== null && active !== i;
          const on = active === i;
          return (
            <div
              key={g.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className={`reveal glass-panel rounded-xl border p-5 transition-all duration-300 ${
                on ? `${ACCENTS[i].ring} -translate-y-1` : "border-white/10"
              } ${dim ? "opacity-40" : ""}`}
            >
              <div className="mb-1 text-[10px] text-slate-500">LAYER {String(i + 1).padStart(2, "0")}</div>
              <div className="flex items-baseline justify-between">
                <div className="text-sm font-bold text-white uppercase">{g.title}</div>
                <div className={`text-[10px] font-semibold ${ACCENTS[i].text}`}>{g.items.length} modules</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className={`rounded border border-white/10 bg-void/70 px-2 py-0.5 text-[11px] text-slate-300 transition-colors ${ACCENTS[i].chip}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
