import { profile } from "@/lib/data";
import CopyEmail from "./fx/CopyEmail";
import LiveClock, { ScrollVelocity } from "./fx/LiveClock";
import SplitText from "./fx/SplitText";

const socials = [
  { label: "GITHUB // NABILCAMBIASO", href: profile.links.github },
  { label: "LINKEDIN // NABIL CAMBIASO", href: profile.links.linkedin },
  { label: "TWITTER / X", href: profile.links.twitter },
  { label: "INSTAGRAM", href: profile.links.instagram },
  { label: "FACEBOOK", href: profile.links.facebook },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 overflow-hidden border-t border-white/10 bg-void px-4 py-28 md:px-8">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-electric/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-electric uppercase">
          <span className="h-2 w-2 animate-ping rounded-full bg-electric" />
          Open to backend, cloud & AI engineering roles
        </div>

        <a href={`mailto:${profile.email}`} className="group my-8 block focus:outline-none">
          <h2 className="split-reveal font-syne text-4xl font-extrabold tracking-tighter text-white uppercase transition-colors duration-300 group-hover:text-electric sm:text-6xl md:text-7xl lg:text-8xl">
            <SplitText text="Let's build" /> <br />
            <SplitText text="scalable systems." offset={10} />
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3 font-mono text-sm tracking-wider text-slate-400 group-hover:text-electric sm:text-base">
            <span className="break-all">{profile.email}</span>
            <svg className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </a>

        <div className="glass-panel my-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs text-slate-300">
          <span className="text-slate-500">DIRECT:</span>
          <span className="font-medium text-electric">{profile.email}</span>
          <CopyEmail email={profile.email} />
        </div>
        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="font-mono text-xs text-slate-400 transition-colors hover:text-electric"
        >
          TEL: {profile.phone}
        </a>

        <div className="my-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs tracking-wider text-slate-400 sm:gap-10">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-electric">
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 border-t border-white/5 pt-12 font-mono text-[11px] text-slate-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {profile.name.toUpperCase()} • {profile.location.toUpperCase()} 🇲🇦
          </div>
          <div className="flex items-center space-x-6">
            <span>
              UTC: <LiveClock timeZone="UTC" className="tabular-nums" />
            </span>
            <span>
              SCROLL SPEED: <ScrollVelocity />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
