'use client';

import { useEffect, useRef } from 'react';
import {
  JUMP_MS,
  MIN_JUMP_PX,
  STOPS,
  STOP_ORDER,
  currentStop,
  easeInOutCubic,
  formatKm,
  isStopId,
  jumpDirection,
  kmAt,
  stopLabel,
  targetY,
  trails,
  type StopId,
} from '@/lib/hyperjump';

const TRAILS = trails();
const SCROLL_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);
// After arrival (t = 900ms): overlay and HUD off at 2000ms, pulse off at 2600ms.
const TAIL_MS = 1100;
const LAND_MS = 1700;

const rowOf = (id: StopId) =>
  id === 'top'
    ? null
    : (document
        .getElementById(id)
        ?.querySelector<HTMLElement>('[data-jump-row]') ?? null);

// Where the page should sit for `id`, measured fresh each call so late images
// or a resize can't make the jump land short.
function destY(id: StopId): number {
  if (id === 'top') return 0;
  const el = rowOf(id) ?? document.getElementById(id);
  if (!el) return window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return targetY(window.scrollY, el.getBoundingClientRect().top, max);
}

function stopNow(): StopId {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= max - 2) return 'contact';
  return currentStop(
    STOP_ORDER.map((s) => rowOf(s)?.getBoundingClientRect().top ?? null),
    window.innerHeight,
  );
}

const scrollToY = (y: number) =>
  window.scrollTo({ top: y, behavior: 'instant' });

// Focus the heading and record the hash once, without adding a history entry.
function arrive(id: StopId) {
  const h = document.getElementById(id)?.querySelector<HTMLElement>('h1, h2');
  if (h) {
    if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
    h.setAttribute('data-jump-target', '');
    h.focus({ preventScroll: true });
  }
  history.replaceState(history.state, '', `#${id}`);
}

// The nav-click transition: star-trails, an altitude HUD and a landing pulse
// on the section's label row. Anchors stay real `href="#id"` links; this only
// takes over unmodified left clicks on links to a journey stop.
export default function Hyperjump() {
  const jovRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const kmRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const jov = jovRef.current;
    const hud = hudRef.current;
    const text = textRef.current;
    const km = kmRef.current;
    if (!jov || !hud || !text || !km) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let phase: 'idle' | 'go' | 'tail' = 'idle';
    let raf = 0;
    let timers: number[] = [];
    let landed: HTMLElement | null = null;

    const later = (ms: number, fn: () => void) =>
      timers.push(window.setTimeout(fn, ms));
    const clearTimers = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };
    const hideOverlay = () => {
      jov.className = 'fz-jov';
      hud.className = 'fz-hud';
    };
    const unland = () => {
      landed?.classList.remove('fz-land');
      landed = null;
    };
    const land = (id: StopId) => {
      const row = rowOf(id);
      if (!row) return;
      row.classList.add('fz-land');
      landed = row;
      later(LAND_MS, unland);
    };

    // Any user scroll input takes the wheel back at once.
    const cancel = () => {
      if (phase !== 'go') return;
      phase = 'idle';
      cancelAnimationFrame(raf);
      clearTimers();
      unwatch();
      jov.classList.add('fz-jov-cancel');
      hud.classList.add('fz-hud-cancel');
      later(150, hideOverlay);
    };
    const onKey = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) cancel();
    };
    // Pressing another jump link mid-flight is a (to be ignored) click, not a
    // cancel.
    const onPointer = (e: PointerEvent) => {
      if ((e.target as Element | null)?.closest?.('a[href^="#"]')) return;
      cancel();
    };
    const watch = () => {
      window.addEventListener('wheel', cancel, { passive: true });
      window.addEventListener('touchstart', cancel, { passive: true });
      window.addEventListener('pointerdown', onPointer, { passive: true });
      window.addEventListener('keydown', onKey);
    };
    const unwatch = () => {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('keydown', onKey);
    };

    const jump = (id: StopId) => {
      if (phase === 'go') return;
      const showing = jov.className !== 'fz-jov' || hud.className !== 'fz-hud';
      clearTimers();
      unland();
      hideOverlay();
      // If the last jump's tail (or a cancel fade) was still on screen, flush
      // styles so the overlay's CSS animations start over.
      if (showing) void jov.offsetWidth;
      phase = 'idle';

      const startY = window.scrollY;
      const firstY = destY(id);
      if (reduced.matches || Math.abs(firstY - startY) < MIN_JUMP_PX) {
        scrollToY(firstY);
        arrive(id);
        if (!reduced.matches) land(id);
        return;
      }

      const fromKm = STOPS[stopNow()].km;
      const toKm = STOPS[id].km;
      text.textContent = `Jump → ${stopLabel(id)}`;
      km.textContent = `${formatKm(fromKm)} km`;
      jov.className = `fz-jov fz-jdir-${jumpDirection(startY, firstY)} fz-jov-on`;
      hud.className = 'fz-hud fz-hud-go';
      phase = 'go';
      watch();

      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, Math.max(0, (now - t0) / JUMP_MS));
        const e = easeInOutCubic(p);
        // Read layout first, then write: one measurement per frame.
        const y = destY(id);
        scrollToY(startY + (y - startY) * e);
        km.textContent = `${formatKm(kmAt(fromKm, toKm, e))} km`;
        if (p < 1) {
          raf = requestAnimationFrame(tick);
          return;
        }
        phase = 'tail';
        unwatch();
        text.textContent = `Arrived · ${stopLabel(id)}`;
        km.textContent = `${formatKm(toKm)} km`;
        hud.className = 'fz-hud fz-hud-arr';
        arrive(id);
        land(id);
        later(TAIL_MS, () => {
          hideOverlay();
          phase = 'idle';
        });
      };
      raf = requestAnimationFrame(tick);
    };

    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = a?.getAttribute('href')?.slice(1) ?? '';
      if (!isStopId(id) || !document.getElementById(id)) return;
      e.preventDefault();
      jump(id);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
      clearTimers();
      unwatch();
      unland();
      hideOverlay();
    };
  }, []);

  return (
    <>
      <div ref={jovRef} aria-hidden="true" className="fz-jov">
        <div className="fz-jscrim" />
        {TRAILS.map((t, i) => (
          <div
            key={i}
            className="fz-jt"
            style={
              {
                left: t.left,
                height: t.height,
                width: t.width,
                animationDelay: t.delay,
                '--jc': t.color,
              } as React.CSSProperties
            }
          />
        ))}
        <div className="fz-jflash" />
      </div>
      <div ref={hudRef} aria-hidden="true" className="fz-hud">
        <div className="fz-hud-pill">
          <div className="fz-hud-row">
            <span className="fz-hud-lbl">
              <span className="fz-hud-dot" />
              <span ref={textRef} />
            </span>
            <span ref={kmRef} className="fz-hud-km" />
          </div>
          <div className="fz-hud-bar">
            <i />
          </div>
        </div>
      </div>
    </>
  );
}
