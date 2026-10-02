import Image from "next/image";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-28 md:px-8">
      <SectionHeading
        eyebrow="Always Learning"
        title="Certifications"
        description="Credentials collected along the way — from office tooling to React Native."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {certifications.map((cert, i) => (
          <figure
            key={cert.title}
            style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            className="reveal glass-panel glass-panel-hover group flex flex-col gap-3 rounded-xl border border-white/10 p-3"
          >
            <div className="relative h-28 w-full overflow-hidden rounded-lg bg-white/95">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(min-width: 1024px) 200px, 45vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-300 transition-colors group-hover:text-electric">{cert.title}</span>
              <span className="text-slate-600">{String(i + 1).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
