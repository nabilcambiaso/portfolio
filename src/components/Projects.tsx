import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I Did" title="Selected Projects" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif-display text-xl text-ink">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
