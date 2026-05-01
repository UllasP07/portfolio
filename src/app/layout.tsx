import type { Metadata } from 'next';
import { Syne, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ullas Puttaiah | AI + Cloud Engineer',
  description: 'Production-grade developer portfolio — AI engineering, full-stack systems, cloud infrastructure, and DevOps delivery.',
  openGraph: {
    title: 'Ullas Puttaiah | AI + Cloud Engineer',
    description: 'Cool Coastal portfolio with glassmorphism cards, skill icons, RAG chatbot, and live GitHub telemetry.',
    url: 'https://ullas.dev',
    siteName: 'Ullas Portfolio',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <div className="app-shell">
          <div className="content-layer" style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
