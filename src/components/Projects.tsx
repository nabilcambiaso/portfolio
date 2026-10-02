import { projects, type Project } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { A11yScan, AgentPipeline } from "./ProjectWidgets";

const BADGES = [
  "bg-electric/10 text-electric border-electric/30",
  "bg-cyber/20 text-purple-300 border-cyber/30",
  "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "bg-neonpink/10 text-pink-300 border-neonpink/30",
  "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  "bg-sky-500/10 text-sky-300 border-sky-500/30",
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded border border-white/10 bg-surface px-2 py-0.5 font-mono text-[11px] text-slate-300">
          {t}
        </span>
      ))}
    </div>
  );
}

function Featured({ project, index, widget, flip }: { project: Project; index: number; widget: React.ReactNode; flip?: boolean }) {
  return (
    <article className="reveal glass-panel glass-panel-hover relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className={`space-y-6 lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded border px-2.5 py-1 font-mono text-xs ${BADGES[index]}`}>
              {String(index + 1).padStart(2, "0")}{" // "}FEATURED
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> SHIPPED
            </span>
          </div>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl">{project.title}</h3>
          <Tags tags={project.tags} />
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>
        </div>
        <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>{widget}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [agent, a11y, ...rest] = projects;

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-4 py-28 md:px-8">
      <SectionHeading
        eyebrow={`Selected Work [${projects.length} Projects]`}
        title="Engineering Systems & Labs"
        description="AI automation, developer tooling and full-stack applications — built end-to-end, from data model to delivery."
      />

      <div className="space-y-12">
        <Featured project={agent} index={0} widget={<AgentPipeline />} />
        <Featured project={a11y} index={1} widget={<A11yScan />} flip />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <article
              key={p.title}
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties}
              className="reveal glass-panel glass-panel-hover group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-electric/0 blur-3xl transition-colors duration-500 group-hover:bg-electric/10" />
              <div className="flex items-center justify-between">
                <span className={`rounded border px-2.5 py-1 font-mono text-xs ${BADGES[i + 2]}`}>
                  {String(i + 3).padStart(2, "0")}{" // "}BUILD
                </span>
                <span className="font-mono text-[10px] text-slate-500 transition-colors group-hover:text-electric">{p.tags[0]}</span>
              </div>
              <h3 className="font-syne text-2xl font-bold tracking-tight text-white uppercase">{p.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <Tags tags={p.tags} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
