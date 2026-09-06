import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold-soft/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:py-32">
        <div className="flex-1 text-center md:text-left">
          <p className="section-label mb-4">{profile.location}</p>
          <h1 className="font-serif-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-gold-soft sm:text-xl">
            {profile.title} · {profile.company}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 md:mx-0">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-gold hover:text-gold-soft"
            >
              View experience
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-full border border-gold/40" />
          <Image
            src="/me.png"
            alt={profile.name}
            width={220}
            height={220}
            priority
            className="h-44 w-44 rounded-full border-4 border-gold/70 object-cover shadow-xl sm:h-56 sm:w-56"
          />
        </div>
      </div>
    </section>
  );
}
