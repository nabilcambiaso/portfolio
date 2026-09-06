import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-serif-display text-lg text-ink">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
