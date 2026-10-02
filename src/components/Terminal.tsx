"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  careerStartYear,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

const PROMPT = "nabil@marrakesh-edge:~$";
const HOT = ["help", "whoami", "cat about.txt", "stack", "experience", "projects", "curl contact", "clear"];

const hi = (s: string) => <span className="text-electric">{s}</span>;

const COMMANDS: Record<string, () => ReactNode> = {
  help: () => (
    <>
      Available commands:
      {"\n"}  {hi("whoami")}          - Name, role and location
      {"\n"}  {hi("cat about.txt")}   - Background and focus
      {"\n"}  {hi("stack")}           - Full technical stack
      {"\n"}  {hi("experience")}      - Career track record
      {"\n"}  {hi("projects")}        - Selected projects
      {"\n"}  {hi("education")}       - Degrees and training
      {"\n"}  {hi("certs")}           - Certifications
      {"\n"}  {hi("languages")}       - Spoken languages
      {"\n"}  {hi("curl contact")}    - Contact details
      {"\n"}  {hi("clear")}           - Clear the screen
    </>
  ),
  whoami: () => (
    <>
      {`${profile.name.toUpperCase()} // ${profile.title}`}
      {"\n"}  • Company:  {profile.company}
      {"\n"}  • Location: {profile.location} (UTC+1)
      {"\n"}  • Shipping since {careerStartYear}
    </>
  ),
  "cat about.txt": () => (
    <>
      {profile.summary}
      {"\n\n"}
      {profile.summaryExtra}
    </>
  ),
  stack: () => (
    <>
      CORE STACK:
      {skillGroups.map((g) => (
        <span key={g.title}>
          {"\n"}  {hi(`[${g.title.toUpperCase()}]`)} {g.items.join(", ")}
        </span>
      ))}
    </>
  ),
  experience: () => (
    <>
      ENGINEERING TRACK RECORD:
      {experience.map((e) => (
        <span key={e.company + e.period}>
          {"\n"}  • {hi(e.role)} @ {e.company} [{e.period}]
          {"\n"}    {e.description}
        </span>
      ))}
    </>
  ),
  projects: () => (
    <>
      SELECTED PROJECTS:
      {projects.map((p, i) => (
        <span key={p.title}>
          {"\n"}  {String(i + 1).padStart(2, "0")}. {hi(p.title)} — {p.tags.join(" · ")}
        </span>
      ))}
    </>
  ),
  education: () => (
    <>
      EDUCATION:
      {education.map((e) => (
        <span key={e.school}>
          {"\n"}  • {hi(e.degree)} — {e.school} [{e.period}]
        </span>
      ))}
    </>
  ),
  certs: () => (
    <>
      CERTIFICATIONS:
      {certifications.map((c) => (
        <span key={c.title}>
          {"\n"}  ✓ {c.title}
        </span>
      ))}
    </>
  ),
  languages: () => (
    <>
      {languages.map((l) => (
        <span key={l.name}>
          {"\n"}  {hi(l.name.padEnd(10))} {l.level}
        </span>
      ))}
    </>
  ),
  "curl contact": () => (
    <>
      GET /api/v1/contact/nabil-cambiaso
      {"\n"}  Status:   200 OK
      {"\n"}  Email:    <a className="text-electric underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
      {"\n"}  Phone:    {profile.phone}
      {"\n"}  Location: {profile.location} [UTC+1]
      {"\n"}  GitHub:   <a className="text-electric underline-offset-4 hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">{profile.links.github.replace("https://", "")}</a>
      {"\n"}  LinkedIn: <a className="text-electric underline-offset-4 hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/nabilcambiaso</a>
    </>
  ),
};

type Entry = { cmd: string; out: ReactNode; error?: boolean };

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const screen = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    screen.current?.scrollTo({ top: screen.current.scrollHeight, behavior: "smooth" });
  }, [entries]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    setHistory((h) => [cmd, ...h]);
    setCursor(-1);
    const key = cmd.toLowerCase();
    if (key === "clear") {
      setEntries([]);
      return;
    }
    const handler = COMMANDS[key];
    setEntries((e) => [
      ...e,
      handler
        ? { cmd, out: handler() }
        : { cmd, out: <>command not found: &quot;{cmd}&quot;. Type {hi("help")} for available commands.</>, error: true },
    ]);
  };

  return (
    <div className="glass-panel overflow-hidden rounded-2xl border border-white/15 bg-void/95 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-surface px-4 py-3">
        <div className="flex min-w-0 items-center space-x-2">
          <div className="h-3 w-3 shrink-0 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 shrink-0 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 shrink-0 rounded-full bg-emerald-500/80" />
          <span className="ml-2 truncate font-mono text-xs font-medium text-slate-400">bash — nabil@marrakesh-edge:~/portfolio</span>
        </div>
        <div className="hidden items-center gap-1.5 font-mono text-[11px] text-slate-500 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>MOROCCO_EDGE // TTY1</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-white/5 bg-surface-bright/50 px-5 py-2.5 font-mono text-xs">
        <span className="text-[11px] text-slate-500">HOT COMMANDS:</span>
        {HOT.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className={`rounded border border-white/10 bg-surface px-2.5 py-1 text-slate-300 transition-colors hover:text-void ${
              c === "clear" ? "hover:bg-red-400" : "hover:bg-electric"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        ref={screen}
        onClick={() => input.current?.focus({ preventScroll: true })}
        className="h-96 space-y-3 overflow-y-auto p-6 font-mono text-xs leading-relaxed text-slate-200 sm:text-sm"
        aria-live="polite"
      >
        <div className="text-slate-500">{`// Welcome to ${profile.name}'s portfolio shell`}</div>
        <div className="text-slate-500">{`// Host: marrakesh-edge (Morocco 🇲🇦) • ${profile.title}`}</div>
        <div className="text-electric">Type &apos;help&apos; or click a hot command above.</div>
        {entries.map((e, i) => (
          <div key={i}>
            <div className="mt-2 font-semibold text-white">
              <span className="text-electric">{PROMPT}</span> {e.cmd}
            </div>
            <div
              className={`whitespace-pre-wrap ${
                e.error ? "text-rose-400" : "border-l border-electric/30 pl-2 text-slate-300"
              }`}
            >
              {e.out}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
        className="flex items-center gap-3 border-t border-white/10 bg-surface/90 px-6 py-4"
      >
        <label htmlFor="cli-input" className="flex shrink-0 items-center font-mono text-xs font-semibold text-electric select-none sm:text-sm">
          <span className="hidden sm:inline">{PROMPT}</span>
          <span className="sm:hidden">$</span>
        </label>
        <input
          id="cli-input"
          ref={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" && history.length) {
              e.preventDefault();
              const next = Math.min(cursor + 1, history.length - 1);
              setCursor(next);
              setValue(history[next]);
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              const next = cursor - 1;
              setCursor(Math.max(next, -1));
              setValue(next >= 0 ? history[next] : "");
            }
          }}
          autoComplete="off"
          spellCheck={false}
          placeholder="try 'whoami', 'stack', 'experience'..."
          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-xs text-white placeholder-slate-600 focus:outline-none sm:text-sm"
        />
        <span className="hidden font-mono text-[10px] text-slate-500 sm:inline">[ENTER] TO EXECUTE</span>
      </form>
    </div>
  );
}
