import type { Metadata, Viewport } from 'next';
import {
  Atkinson_Hyperlegible_Next,
  Martian_Mono,
  Unbounded,
} from 'next/font/google';
import './globals.css';

const display = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Only used on /terminal (Phase 5) and inline code, so it isn't preloaded.
const mono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Mohammad Zobair Hosain Fahim, software engineer',
  description:
    'Fahim builds full-stack web products with React, Next.js, FastAPI, and PostgreSQL. See his projects, experience, and a terminal version of the site.',
};

export const viewport: Viewport = {
  themeColor: '#0F1238',
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
