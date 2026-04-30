import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Ullas Puttaiah | AI + Cloud Engineer',
  description:
    'Production-grade developer portfolio showcasing AI engineering, full-stack systems, cloud infrastructure, and DevOps delivery.',
  openGraph: {
    title: 'Ullas Puttaiah | AI + Cloud Engineer',
    description:
      'Dark glassmorphism portfolio with modular sections, DevOps storytelling, and interactive telemetry.',
    url: 'https://ullas.dev',
    siteName: 'Ullas Portfolio'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(230,57,70,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,218,220,0.1),transparent_28%)]" />
          <div className="content-layer flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
