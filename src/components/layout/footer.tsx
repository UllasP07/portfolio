import { contactLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/5 text-sm text-brand-light/70">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ullas Puttaiah. Built with Next.js, Tailwind, and infra-as-code.</p>
        <div className="flex gap-4">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-brand-light">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
