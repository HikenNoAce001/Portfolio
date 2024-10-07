'use client';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth transition duration-300 delay-300">
      <body
        className={`${inter.className} bg-slate-950 text-white min-h-screen relative overflow-x-hidden`}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(176, 196, 222, 0.10), transparent 50%)`,
          }}
        />
        <div className="relative z-40">{children}</div>
      </body>
    </html>
  );
}
