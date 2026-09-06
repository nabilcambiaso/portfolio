import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const socials = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Facebook", href: profile.links.facebook },
  { label: "Twitter", href: profile.links.twitter },
  { label: "Instagram", href: profile.links.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" light align="center" />

        <p className="mx-auto mt-6 max-w-xl text-white/70">
          Open to new opportunities in backend, cloud and AI engineering. Reach
          out directly, or find me on any of the platforms below.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-transform hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-gold hover:text-gold-soft"
          >
            {profile.phone}
          </a>
        </div>

        <p className="mt-4 text-sm text-white/50">{profile.location}</p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-white/70 transition-colors hover:text-gold-soft"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
