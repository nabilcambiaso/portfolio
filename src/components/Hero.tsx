import Image from "next/image";
import { careerStartYear, certifications, experience, profile, projects } from "@/lib/data";
import SplitText from "./fx/SplitText";
import TopologyMesh from "./TopologyMesh";

export default function Hero() {
  const years = new Date().getFullYear() - careerStartYear;
  const [first, ...rest] = profile.name.split(" ");

  const kpis = [
    { label: "Experience", value: `${years}+`, unit: "Years", sub: `Shipping since ${careerStartYear}`, bar: "from-electric" },
    { label: "Roles", value: String(experience.length), unit: "Teams", sub: "Morocco → UK", bar: "from-electric" },
    { label: "Projects", value: String(projects.length), unit: "Shipped", sub: "Cloud · AI · Web", bar: "from-purple-400" },
    { label: "Certified", value: String(certifications.length), unit: "Certs", sub: "Always learning", bar: "from-emerald-400" },
  ];

  return (
    <section id="top" className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:px-8">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyber/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-electric/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start space-y-6 text-left lg:col-span-7">
            <div className="reveal is-visible glass-panel inline-flex flex-wrap items-center gap-2 rounded-full border border-electric/40 px-3.5 py-1.5 shadow-lg">
              <span className="text-sm">🇲🇦</span>
              <span className="font-mono text-[11px] font-medium tracking-widest text-white uppercase">{profile.location}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-[11px] font-semibold text-electric">UTC+1</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />@ {profile.company}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative hidden shrink-0 sm:block">
                <span className="absolute inset-0 animate-radar rounded-full border border-electric/30" />
                <Image
                  src="/me.png"
                  alt={profile.name}
                  width={96}
                  height={96}
                  priority
                  className="relative h-20 w-20 rounded-full border-2 border-electric/60 object-cover shadow-[0_0_40px_-10px_rgba(0,245,212,0.5)] md:h-24 md:w-24"
                />
              </div>
              <div>
                <h1
                  className="split-now font-syne leading-[0.98] font-extrabold tracking-tight text-white uppercase"
                  style={{ fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)" }}
                >
                  <SplitText text={first} />{" "}
                  <span className="text-slate-300">
                    <SplitText text={rest.join(" ")} offset={first.length} />
                  </span>
                </h1>
              </div>
            </div>

            <div className="reveal is-visible bg-gradient-to-r from-electric via-teal-300 to-cyber bg-clip-text font-mono text-xs font-semibold tracking-wider text-transparent uppercase sm:text-sm">
              {profile.title} — Cloud, Backend & AI Automation
            </div>

            <p className="max-w-2xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">{profile.summary}</p>

            <div className="grid w-full grid-cols-2 gap-2.5 text-left font-mono sm:grid-cols-4">
              {kpis.map((k, i) => (
                <div
                  key={k.label}
                  style={{ "--reveal-delay": `${300 + i * 90}ms` } as React.CSSProperties}
                  className="reveal glass-panel glass-panel-hover relative overflow-hidden rounded-xl border border-white/10 p-3"
                >
                  <div className="mb-0.5 text-[9px] tracking-widest text-slate-400 uppercase">{k.label}</div>
                  <div className="flex items-baseline gap-1 font-syne text-lg font-bold text-white">
                    <span>{k.value}</span>
                    <span className="font-mono text-[10px] font-normal text-electric">{k.unit}</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400">{k.sub}</div>
                  <div className={`absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r ${k.bar} to-transparent opacity-60`} />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-electric px-5 py-2.5 font-bold text-void shadow-lg shadow-electric/20 transition-all hover:bg-teal-300 hover:shadow-[0_0_60px_-12px_rgba(0,245,212,0.7)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                EXPLORE PROJECTS
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-surface-bright px-4 py-2.5 text-slate-200 transition-colors hover:border-electric hover:text-white"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-electric" />
                EXPERIENCE
              </a>
              <a
                href="#terminal"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-surface-bright px-4 py-2.5 text-slate-400 transition-colors hover:text-electric"
              >
                <span>$</span> CLI_SHELL
              </a>
            </div>
          </div>

          <div className="reveal relative w-full lg:col-span-5" style={{ "--reveal-delay": "250ms" } as React.CSSProperties}>
            <TopologyMesh />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-electric md:flex"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">Scroll to discover</span>
        <div className="flex h-6 w-3.5 justify-center rounded-full border border-slate-600 p-0.5">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-electric" />
        </div>
      </a>
    </section>
  );
}
