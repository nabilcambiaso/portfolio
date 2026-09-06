import { experience, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Career Path" title="Experience" light />

        <div className="mt-14 grid gap-16 lg:grid-cols-3">
          <ol className="relative space-y-10 border-l border-white/15 pl-8 lg:col-span-2">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-navy" />
                <p className="text-xs font-semibold tracking-wide text-gold-soft">
                  {job.period}
                </p>
                <h3 className="font-serif-display mt-1 text-xl text-white">
                  {job.role}
                </h3>
                <p className="text-sm text-white/60">
                  {job.company}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {job.description}
                </p>
              </li>
            ))}
          </ol>

          <div>
            <h3 className="section-label mb-6">Education</h3>
            <ul className="space-y-6">
              {education.map((item) => (
                <li
                  key={item.school}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs font-semibold text-gold-soft">
                    {item.period}
                  </p>
                  <p className="font-serif-display mt-1 text-lg text-white">
                    {item.school}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{item.degree}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
