import { contactLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/5 text-sm text-brand-light/70">
      <div className="section-inner flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ullas Puttaiah · Built like production software.</p>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-brand-light">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
