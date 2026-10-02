import { education, experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-28 md:px-8">
      <SectionHeading
        eyebrow="Career Track Record"
        title="Experience Log"
        description={`${experience.length} roles across backend, cloud, DevOps, AI, accessibility and full-stack development — Morocco to London.`}
      />

      <div className="reveal glass-panel overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[760px] text-left font-mono text-xs text-slate-300">
          <thead className="border-b border-white/10 bg-surface text-[10px] tracking-wider text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4">Role / Company</th>
              <th className="px-6 py-4">Period</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Scope</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {experience.map((e) => {
              const current = e.period.includes("Present");
              return (
                <tr key={e.company + e.period} className={`align-top transition-colors hover:bg-white/[0.03] ${current ? "bg-electric/[0.04]" : ""}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-bold text-white">
                      {current && <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-electric" />}
                      {e.role}
                    </div>
                    <div className={`mt-1 ${current ? "text-electric" : "text-slate-400"}`}>{e.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {current ? (
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">{e.period}</span>
                    ) : (
                      <span className="text-slate-300">{e.period}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-400">{e.location ?? "—"}</td>
                  <td className="max-w-md px-6 py-4 font-sans text-[13px] leading-relaxed text-slate-300">{e.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {education.map((ed, i) => (
          <div
            key={ed.school}
            style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            className="reveal glass-panel glass-panel-hover rounded-xl border border-white/10 p-5 font-mono"
          >
            <div className="text-[10px] tracking-widest text-purple-300 uppercase">Education{" // "}{ed.period}</div>
            <div className="mt-2 font-syne text-lg leading-snug font-bold text-white">{ed.degree}</div>
            <div className="mt-1 text-xs text-slate-400">{ed.school}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
