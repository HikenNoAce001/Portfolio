'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const socials = [
  {
    name: 'GitHub',
    src: '/github.svg',
    link: 'https://github.com/HikenNoAce001',
  },
  {
    name: 'LinkedIn',
    src: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/fahim77108/',
  },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

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
    <>
      <ThemeToggle />
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-0 hover:gap-2.5 px-3.5 py-3.5 hover:px-5 rounded-full bg-slate-800/90 dark:bg-cyan-900/50 backdrop-blur-sm border-2 border-slate-700 dark:border-cyan-600/60 hover:border-slate-500 dark:hover:border-cyan-400 hover:bg-slate-700 dark:hover:bg-cyan-800/60 transition-all duration-300 overflow-hidden shadow-lg shadow-slate-500/30 dark:shadow-cyan-900/30"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={22}
              height={22}
              className="opacity-100 shrink-0 brightness-150"
            />
            <span className="max-w-0 group-hover:max-w-[80px] overflow-hidden whitespace-nowrap text-sm text-slate-100 dark:text-cyan-200 font-semibold transition-all duration-300">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
      <div
        suppressHydrationWarning
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, ${
            theme === 'dark'
              ? 'rgba(176, 196, 222, 0.10)'
              : 'rgba(255, 255, 255, 0.85)'
          }, transparent 50%)`,
        }}
      />
      <div className="relative z-40">{children}</div>
    </>
  );
}
