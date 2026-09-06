const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif-display text-lg tracking-wide text-ink"
        >
          Nabil Cambiaso
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-gold px-4 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-gold hover:text-white md:inline-block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
