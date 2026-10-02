import { profile, sections } from "@/lib/data";

const links = sections.filter((s) => ["about", "projects", "skills", "experience", "terminal", "contact"].includes(s.id));

export default function NavBar() {
  return (
    <header className="fixed top-4 right-0 left-0 z-50 mx-auto max-w-7xl px-4 md:top-6 md:px-8">
      <div className="glass-panel flex items-center justify-between rounded-full border border-white/10 px-5 py-3 shadow-2xl">
        <a href="#top" aria-label={`${profile.name} — home`} className="group flex items-center gap-3 focus:outline-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-electric/40 bg-surface-bright font-mono text-xs font-bold tracking-tighter text-electric transition-colors duration-300 group-hover:bg-electric group-hover:text-void">
            NC
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-syne text-xs font-bold tracking-wider text-white uppercase">{profile.name}</span>
            <span className="font-mono text-[10px] text-slate-400">SR. BACKEND · AWS / NODE.JS</span>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden items-center space-x-5 font-mono text-[11px] tracking-wider text-slate-400 xl:flex">
          {links.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} className="flex items-center gap-1 transition-colors hover:text-electric">
              <span className="text-electric/60">{String(i + 1).padStart(2, "0")}</span> {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-surface px-3 py-1.5 font-mono text-[11px] text-emerald-400 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-tight">OPEN TO ROLES</span>
            <span className="hidden text-slate-600 2xl:inline">|</span>
            <span className="hidden text-slate-400 2xl:inline">MOROCCO (UTC+1)</span>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-electric/40 bg-surface-bright px-3 py-1.5 font-mono text-[11px] text-electric transition-colors hover:bg-electric hover:text-void xl:hidden"
          >
            CONNECT
          </a>
        </div>
      </div>
    </header>
  );
}
