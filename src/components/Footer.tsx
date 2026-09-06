export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-deep py-6 text-center text-xs text-white/40">
      &copy; {year} Nabil Cambiaso. All rights reserved.
    </footer>
  );
}
