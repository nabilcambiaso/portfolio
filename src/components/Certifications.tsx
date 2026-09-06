import Image from "next/image";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Always Learning" title="Certifications" />

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-4 text-center transition-shadow hover:shadow-md"
          >
            <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="200px"
                className="object-contain p-2"
              />
            </div>
            <p className="text-xs font-medium text-ink-soft">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
