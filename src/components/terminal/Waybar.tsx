'use client';

import Link from 'next/link';
import LogoMark from '@/components/space/LogoMark';
import { ClockIcon, PowerIcon } from '@/components/space/icons';
import { useClock } from '@/lib/useClock';
import Duo from './Duo';

const dot = 'size-[9px] rounded-full bg-[#414868] max-sm:size-2';

// Waybar: workspace dots, the focused window's title, a clock, availability and
// the way back to the website.
export default function Waybar({ title }: { title: string }) {
  const clock = useClock();

  return (
    <header className="relative z-[3] flex h-11 flex-none items-stretch gap-2.5 max-sm:gap-1.5">
      <div className="flex min-w-0 flex-1 basis-0 items-stretch gap-2 max-sm:flex-none">
        <div
          className="tm-mod !px-3 text-violet max-sm:!hidden"
          aria-hidden="true"
        >
          <LogoMark size={18} />
        </div>
        <div className="tm-mod !gap-[7px] max-sm:!gap-1.5" aria-hidden="true">
          <span className="tm-dot-on h-[9px] w-7 rounded-[5px] bg-gradient-to-r from-blue to-violet max-sm:h-2 max-sm:w-[22px]" />
          <span className={dot} />
          <span className={dot} />
          <span className={`${dot} sm:hidden`} />
        </div>
        <div className="tm-mod min-w-0 overflow-hidden text-ellipsis text-muted max-sm:!hidden">
          {title}
        </div>
      </div>

      <div className="tm-mod flex-none !gap-2.5 font-bold text-ink max-sm:min-w-0 max-sm:flex-1 max-sm:justify-center">
        <ClockIcon size={15} className="text-blue max-sm:hidden" />
        <span>
          {clock ? (
            <Duo d={clock.long} m={clock.short} />
          ) : (
            // reserves the width until the client knows the time
            <span aria-hidden="true" className="invisible">
              <Duo d="Mon 00 Mar  00:00" m="00:00" />
            </span>
          )}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 basis-0 items-stretch justify-end gap-2 max-sm:flex-none max-sm:gap-1.5">
        <div className="tm-mod text-green max-sm:!px-2.5">
          <span className="size-[7px] rounded-full bg-green shadow-[0_0_8px_#9ece6a]" />
          <span>
            <span className="max-sm:hidden">open to </span>remote
          </span>
        </div>
        <Link
          href="/"
          aria-label="Exit to website view"
          aria-keyshortcuts="`"
          className="tm-mod tm-power !gap-2 text-soft max-sm:!px-3"
        >
          <PowerIcon size={15} className="max-sm:size-4" />
          <Duo d="website" m="web" />
        </Link>
      </div>
    </header>
  );
}
