import { profile, languages, philosophy } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Who I Am" title="About Me" />

      <div className="mt-10 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-ink-soft">
            {profile.summaryExtra}
          </p>

          <blockquote className="mt-10 space-y-6 border-l-2 border-gold pl-6">
            {philosophy.map((quote) => (
              <p key={quote} className="font-serif-display text-lg italic text-ink">
                &ldquo;{quote}&rdquo;
              </p>
            ))}
          </blockquote>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="section-label mb-5">Languages</h3>
          <ul className="space-y-4">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span className="font-medium text-ink">{lang.name}</span>
                <span className="text-sm text-ink-soft">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
