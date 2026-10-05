import Link from 'next/link';
import LogoMark from '@/components/space/LogoMark';
import { PromptIcon, WindowIcon } from '@/components/space/icons';
import { content } from '@/content';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Flight log', href: '#log' },
  { label: 'Missions', href: '#missions' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  return (
    <header className="relative z-[5] flex items-center justify-between gap-3 border-b border-[#1f2335] px-4 py-3.5 sm:flex-wrap sm:gap-4 sm:px-12 sm:py-5">
      <a
        href="#top"
        className="flex min-h-11 items-center gap-2 font-mono text-[15px] font-bold tracking-[0.02em] text-ink sm:gap-2.5 sm:text-base"
      >
        <LogoMark size={22} className="text-violet" />
        <span>{content.profile.callsign}</span>
      </a>

      <nav
        aria-label="Sections"
        className="flex items-center gap-8 text-[15px] font-medium max-sm:hidden"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-violet"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div
        role="group"
        aria-label="View"
        className="flex items-center gap-0.5 rounded-full border border-line-strong bg-panel/80 p-[3px] font-mono text-xs sm:gap-1 sm:p-1 sm:text-[13px]"
      >
        <span
          aria-current="page"
          className="flex min-h-10 items-center gap-2 rounded-full bg-ink px-3.5 font-bold text-night sm:min-h-9 sm:px-4"
        >
          <WindowIcon className="max-sm:hidden" />
          <span className="max-sm:hidden">Website</span>
          <span className="sm:hidden">Web</span>
        </span>
        <Link
          href="/terminal"
          className="flex min-h-10 items-center gap-1.5 rounded-full px-3.5 font-medium text-muted transition-colors hover:text-ink sm:min-h-9 sm:gap-2 sm:px-4"
        >
          <PromptIcon size={14} />
          <span className="max-sm:hidden">Terminal</span>
          <span className="sm:hidden">Term</span>
        </Link>
      </div>
    </header>
  );
}
