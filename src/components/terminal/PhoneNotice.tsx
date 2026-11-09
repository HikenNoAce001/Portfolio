import Link from 'next/link';
import Astronaut from '@/components/space/Astronaut';
import { ArrowRightIcon } from '@/components/space/icons';
import LogoMark from '@/components/space/LogoMark';
import { content } from '@/content';
import Wallpaper from './Wallpaper';

// Keycaps drifting around the astronaut: the one thing a phone is missing.
const KEYS = [
  { k: 'esc', cls: 'left-[6%] top-[14%]', d: '0s' },
  { k: '`', cls: 'right-[8%] top-[6%]', d: '-2.4s' },
  { k: 'tab', cls: 'left-[10%] bottom-[8%]', d: '-4.1s' },
  { k: 'ctrl', cls: 'right-[4%] bottom-[16%]', d: '-1.3s' },
];

// The terminal is built around a keyboard, so phones get this instead: an
// astronaut sending a short transmission, with a way back to the website.
// Static markup and CSS only, so it ships no JavaScript of its own.
export default function PhoneNotice() {
  return (
    <main className="tm-root tm-notice relative flex min-h-dvh flex-col overflow-hidden bg-night px-5 pb-8 pt-4 font-body text-ink sm:hidden">
      <Wallpaper />

      <Link
        href="/"
        className="relative flex min-h-11 items-center gap-2 self-start font-mono text-[15px] font-bold text-ink"
      >
        <LogoMark size={20} className="text-violet" />
        <span>{content.profile.callsign}</span>
      </Link>

      <div className="relative mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center gap-5">
        {/* the scene */}
        <div aria-hidden="true" className="relative mx-auto h-[220px] w-full">
          {KEYS.map((key) => (
            <span
              key={key.k}
              className={`tm-np-key absolute ${key.cls}`}
              style={{ animationDelay: key.d }}
            >
              {key.k}
            </span>
          ))}
          <div className="tm-np-float absolute left-1/2 top-3 -ml-[85px] h-[212px] w-[170px]">
            {/* signal rings from the antenna */}
            <span className="tm-np-ring left-[148px] top-[18px]" />
            <span
              className="tm-np-ring left-[148px] top-[18px]"
              style={{ animationDelay: '.8s' }}
            />
            <span
              className="tm-np-ring left-[148px] top-[18px]"
              style={{ animationDelay: '1.6s' }}
            />
            <div className="origin-top-left scale-[1.7]">
              <Astronaut />
            </div>
          </div>
        </div>

        {/* the transmission */}
        <section
          aria-labelledby="np-title"
          className="tm-np-bubble relative rounded-[18px] border border-line-strong bg-panel/90 p-5 shadow-[0_18px_48px_-24px_rgba(187,154,247,0.55)]"
        >
          <span
            aria-hidden="true"
            className="absolute -top-[7px] left-1/2 -ml-[7px] size-3.5 rotate-45 border-l border-t border-line-strong bg-panel"
          />
          <div className="tm-np-line flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            <span
              aria-hidden="true"
              className="tm-np-dot size-1.5 rounded-full bg-cyan"
            />
            Incoming transmission
          </div>
          <h1
            id="np-title"
            className="tm-np-line m-0 mt-2.5 font-display text-[22px] font-semibold leading-[1.2] text-ink"
            style={{ animationDelay: '.85s' }}
          >
            Houston, we need a keyboard.
          </h1>
          <p
            className="tm-np-line m-0 mt-2 text-[15px] leading-[1.55] text-soft"
            style={{ animationDelay: '1s' }}
          >
            This terminal runs on typed commands and shortcuts, so it’s built
            for a laptop or desktop. On your phone, the website is the smoother
            ride.
          </p>
        </section>

        <Link
          href="/"
          className="tm-np-line flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-blue text-base font-semibold text-night"
          style={{ animationDelay: '1.15s' }}
        >
          Back to the website
          <ArrowRightIcon />
        </Link>

        <p
          className="tm-np-line m-0 text-center font-mono text-xs text-faint"
          style={{ animationDelay: '1.3s' }}
        >
          on a desktop, press{' '}
          <kbd className="rounded-[5px] border border-line-bright px-1.5 py-px font-mono text-soft">
            `
          </kbd>{' '}
          to switch views
        </p>
      </div>
    </main>
  );
}
