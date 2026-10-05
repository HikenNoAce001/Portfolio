'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GitHubIcon, LinkedInIcon } from '@/components/art/icons';

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const linkClass =
  'inline-flex min-h-11 items-center rounded-full px-3 text-starlight/90 transition-colors hover:text-comet';

export default function Nav({
  github,
  linkedin,
}: {
  github: string;
  linkedin: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // Toggle the solid background once the page has scrolled 24px. State only
  // changes when the sentinel crosses the edge, never per scroll event.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-6 h-px w-full"
      />
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          scrolled || open ? 'bg-abyss/85 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-5 py-2 md:px-6">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center rounded-full font-display text-lg font-semibold tracking-tight text-starlight"
          >
            fahim
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 nav:flex">
            {sections.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/terminal"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-comet px-4 text-sm font-semibold text-comet transition-colors hover:bg-comet/10"
            >
              Terminal
              <kbd
                aria-hidden="true"
                className="rounded border border-comet/60 px-1.5 text-[0.8125rem] leading-5"
              >
                `
              </kbd>
            </Link>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden size-11 items-center justify-center rounded-full text-starlight/90 transition-colors hover:text-comet nav:inline-flex"
            >
              <GitHubIcon className="size-6" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden size-11 items-center justify-center rounded-full text-starlight/90 transition-colors hover:text-comet nav:inline-flex"
            >
              <LinkedInIcon className="size-6" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-starlight nav:hidden"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-dust/25 px-5 pb-4 pt-2 md:px-6 nav:hidden"
          >
            <ul className="flex flex-col">
              {sections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center text-starlight"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 flex gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 pr-4 text-starlight"
                >
                  <GitHubIcon className="size-5" />
                  GitHub
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-starlight"
                >
                  <LinkedInIcon className="size-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
