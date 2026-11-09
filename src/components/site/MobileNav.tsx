'use client';

import { useEffect, useRef } from 'react';
import { CloseIcon, DownloadIcon, MenuIcon } from '@/components/space/icons';
import { content } from '@/content';
import { STOPS, STOP_ORDER, altShort } from '@/lib/hyperjump';

/** The button always shows this close to the top of the page. */
const TOP_ZONE = 80;
/** Scroll this far in one direction before the button hides or returns. */
const NUDGE = 8;

// Phone navigation: a menu button in the top corner and a drawer listing the
// journey's stops. The button sits beside the logo at the top of the page,
// slides away while you scroll down (so it never covers what you're reading)
// and comes back as soon as you scroll up. The links are plain
// #anchors, so Hyperjump picks them up like the desktop nav's. A modal
// <dialog> gives the focus trap, Esc and focus return for free.
export default function MobileNav() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const close = () => dialog.current?.close();

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClose = () =>
      trigger.current?.setAttribute('aria-expanded', 'false');
    el.addEventListener('close', onClose);
    return () => el.removeEventListener('close', onClose);
  }, []);

  useEffect(() => {
    const btn = trigger.current;
    if (!btn) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < TOP_ZONE) btn.dataset.hidden = 'false';
      else if (y > last + NUDGE) btn.dataset.hidden = 'true';
      else if (y < last - NUDGE) btn.dataset.hidden = 'false';
      else return; // too small to count as a direction; keep measuring
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sm:hidden">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-label="Open menu"
        onClick={() => {
          dialog.current?.showModal();
          trigger.current?.setAttribute('aria-expanded', 'true');
        }}
        className="fixed right-4 top-3.5 z-30 flex size-11 items-center justify-center rounded-full border border-line-strong bg-panel/95 text-ink transition-[transform,opacity] duration-300 focus-visible:!translate-y-0 focus-visible:!opacity-100 data-[hidden=true]:pointer-events-none data-[hidden=true]:-translate-y-20 data-[hidden=true]:opacity-0 motion-reduce:transition-none"
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialog}
        aria-label="Menu"
        onClick={(e) => e.target === dialog.current && close()}
        className="fz-drawer m-0 ml-auto h-dvh max-h-none w-[min(86vw,340px)] max-w-none border-l border-line-strong bg-deep p-0 text-ink backdrop:bg-night/80"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line py-3.5 pl-5 pr-4">
            <span className="font-mono text-xs tracking-[0.14em] text-faint">
              FLIGHT PLAN
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink"
            >
              <CloseIcon size={14} />
            </button>
          </div>

          <nav aria-label="Sections" className="flex-1 overflow-y-auto p-3">
            <ul className="m-0 flex list-none flex-col p-0">
              {STOP_ORDER.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={close}
                    className="flex min-h-[52px] items-center gap-3.5 rounded-xl px-3 text-[17px] font-medium text-ink active:bg-panel"
                  >
                    <span className="font-mono text-xs text-violet">
                      {STOPS[id].n}
                    </span>
                    <span className="min-w-0 flex-1">{STOPS[id].name}</span>
                    <span className="font-mono text-[11px] text-faint">
                      {altShort(id)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line p-4">
            <a
              href={content.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-line-bright text-[15px] font-medium text-soft"
            >
              <DownloadIcon />
              Résumé (PDF)
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
