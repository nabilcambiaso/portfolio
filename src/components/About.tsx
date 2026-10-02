import { philosophy, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 py-28 md:px-8">
      <SectionHeading
        eyebrow="Who I Am // whoami"
        title="Cloud, Backend & AI"
        description="From web apps to backend systems, AWS infrastructure, accessibility and AI — idea to working, scalable solution."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="reveal space-y-6 lg:col-span-7">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{profile.summaryExtra}</p>
          <div className="flex flex-wrap gap-2 font-mono text-[11px]">
            {["Permissions & Security", "Latency", "Observability", "Storage", "Infrastructure Cost"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-surface px-3 py-1 text-slate-300 transition-colors hover:border-electric hover:text-electric">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal lg:col-span-5" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
          <div className="glass-panel glass-panel-hover overflow-hidden rounded-2xl border border-white/10 bg-[#090c10]">
            <div className="flex items-center justify-between border-b border-white/10 bg-surface px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="h-2 w-2 rounded-full bg-electric" />
                <span className="h-2 w-2 rounded-full bg-neonpink" />
              </div>
              <span className="font-mono text-[10px] text-slate-500">philosophy.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap">
              <code>
                <span className="text-slate-500">{"// how I work"}</span>
                {"\n"}
                <span className="text-electric">const</span> <span className="text-white">principles</span> = [
                {philosophy.map((q, i) => (
                  <span key={i}>
                    {"\n  "}
                    <span className="text-purple-300">&quot;{q}&quot;</span>,
                  </span>
                ))}
                {"\n"}];
                {"\n\n"}
                <span className="text-electric">export default</span> <span className="text-purple-300">keepMoving</span>(principles);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
