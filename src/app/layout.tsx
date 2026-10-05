import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, JetBrains_Mono, Unbounded } from 'next/font/google';
import './globals.css';

const display = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohammad Zobair Hosain Fahim, software engineer',
  description:
    'Fahim is a software engineer with three years of production experience in React, Next.js, FastAPI and PostgreSQL, now moving toward backend systems and AI engineering. Website and terminal views.',
};

export const viewport: Viewport = {
  themeColor: '#0b0c17',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
