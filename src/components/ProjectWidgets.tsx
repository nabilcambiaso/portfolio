"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { title: "Trigger & Research", sub: "n8n webhook · web research agent" },
  { title: "Retrieve Context (RAG)", sub: "Vector search over knowledge base" },
  { title: "Generate & Publish", sub: "LLM content + images · delivery" },
];

const now = () => new Date().toLocaleTimeString("en-GB", { hour12: false });

// Illustrative step-through of an AI agent workflow.
export function AgentPipeline() {
  const [step, setStep] = useState(1);
  const [logs, setLogs] = useState<{ text: string; tone: string }[]>([
    { text: "Workflow armed — waiting for trigger", tone: "text-slate-400" },
  ]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [logs]);

  const advance = () => {
    const next = (step % 3) + 1;
    setStep(next);
    const line =
      next === 1
        ? { text: "New run — research agent collecting sources", tone: "text-slate-300" }
        : next === 2
          ? { text: "Retrieved relevant chunks from knowledge base", tone: "text-electric" }
          : { text: "Content + images generated, process completed", tone: "text-emerald-400" };
    setLogs((l) => [...l, { ...line, text: `[${now()}] ${line.text}` }]);
  };

  return (
    <div className="relative rounded-xl border border-white/10 bg-surface-bright/80 p-6">
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4 font-mono text-xs">
        <span className="flex items-center gap-2 text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neonpink" /> AGENT WORKFLOW
        </span>
        <span className="font-bold text-purple-400">STEP {step}/3</span>
      </div>
      <div className="space-y-3 font-mono text-xs">
        {STEPS.map((s, i) => {
          const n = i + 1;
          const done = n < step;
          const current = n === step;
          return (
            <div
              key={s.title}
              className={`flex items-center justify-between rounded-lg border bg-surface p-3 transition-all duration-500 ${
                current ? "border-electric/60" : done ? "border-emerald-500/40" : "border-white/10 opacity-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    done ? "bg-emerald-500/20 text-emerald-400" : current ? "bg-electric/20 text-electric" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {done ? "✓" : current ? "➜" : n}
                </span>
                <div>
                  <div className="font-bold text-white">{`0${n}. ${s.title}`}</div>
                  <div className="text-[10px] text-slate-400">{s.sub}</div>
                </div>
              </div>
              <span
                className={`rounded px-2 py-0.5 text-[10px] ${
                  done ? "bg-emerald-500/10 text-emerald-400" : current ? "bg-electric/10 text-electric" : "bg-white/5 text-slate-500"
                }`}
              >
                {done ? "DONE" : current ? "RUNNING" : "PENDING"}
              </span>
            </div>
          );
        })}
      </div>
      <div ref={logRef} className="mt-4 h-20 overflow-y-auto rounded border border-white/5 bg-void p-3 font-mono text-[11px]">
        {logs.map((l, i) => (
          <div key={i} className={l.tone}>
            {l.text}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={advance}
        className="mt-4 flex items-center gap-2 rounded-lg border border-cyber/50 bg-surface px-4 py-2.5 font-mono text-xs text-purple-300 transition-colors hover:bg-cyber hover:text-white"
      >
        STEP WORKFLOW ➔
      </button>
    </div>
  );
}

const SCAN_LINES = [
  { text: "$ a11y-cli crawl https://example.com --depth 3", tone: "text-white" },
  { text: "› crawling site map…", tone: "text-slate-400" },
  { text: "› running automated accessibility checks per page", tone: "text-slate-400" },
  { text: "  ✓ landmarks & headings", tone: "text-emerald-400" },
  { text: "  ✓ form labels", tone: "text-emerald-400" },
  { text: "  ! colour contrast — issues flagged", tone: "text-ambercode" },
  { text: "  ! missing alt text — issues flagged", tone: "text-ambercode" },
  { text: "› report written → ./a11y-report.json", tone: "text-electric" },
];

// Illustrative CLI run that types itself out once scrolled into view.
export function A11yScan() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setCount(0);
      timer = setInterval(() => {
        setCount((c) => {
          if (c >= SCAN_LINES.length) {
            clearInterval(timer);
            return c;
          }
          return c + 1;
        });
      }, 420);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [run]);

  return (
    <div ref={ref} className="relative rounded-xl border border-white/10 bg-surface-bright/80 p-6">
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4 font-mono text-xs">
        <span className="flex items-center gap-2 text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-electric" /> ACCESSIBILITY CRAWLER
        </span>
        <span className="font-semibold text-electric">{count >= SCAN_LINES.length ? "COMPLETE" : "SCANNING"}</span>
      </div>
      <div className="h-52 space-y-1 overflow-hidden rounded border border-white/5 bg-void p-4 font-mono text-[11px] sm:text-xs">
        {SCAN_LINES.slice(0, count).map((l, i) => (
          <div key={i} className={l.tone}>
            {l.text}
          </div>
        ))}
        {count < SCAN_LINES.length && <span className="cursor-block" />}
      </div>
      <button
        type="button"
        onClick={() => setRun((r) => r + 1)}
        className="mt-4 flex items-center gap-2 rounded-lg border border-electric/40 bg-surface px-4 py-2.5 font-mono text-xs text-electric transition-colors hover:bg-electric hover:text-void"
      >
        ↻ RE-RUN SCAN
      </button>
    </div>
  );
}
