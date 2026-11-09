'use client';

import { useEffect, useRef } from 'react';
import MiniRocket from './MiniRocket';

const PUFFS = Array.from({ length: 11 });
/** Scroll this far the other way before the rocket turns around. */
const NUDGE = 8;
/** The rocket fades out this long after the page stops moving. */
const STOP_MS = 450;
/** Once it has faded, its smoke stops animating until the next scroll. */
const REST_MS = 900;

// The rocket that keeps you company on the way: a see-through rocket with a
// smoke trail, fixed mid-screen. It shows only while the page is moving, so
// nothing sits over the text once you stop to read. CSS places it from the
// page's scroll position (space.css, .fz-trv); this component only reports
// that the page is scrolling and which way, so the rocket flies nose-down on
// the way down and nose-up on the way back. Decorative.
export default function TravelRocket() {
  const turn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = turn.current;
    if (!el) return;
    let last = window.scrollY;
    let stop = 0;
    let rest = 0;
    const onScroll = () => {
      if (el.dataset.moving !== 'true') {
        el.dataset.moving = 'true';
        delete el.dataset.rest;
      }
      window.clearTimeout(stop);
      window.clearTimeout(rest);
      stop = window.setTimeout(() => {
        el.dataset.moving = 'false';
        rest = window.setTimeout(() => {
          el.dataset.rest = 'true';
        }, REST_MS);
      }, STOP_MS);

      const y = window.scrollY;
      if (y > last + NUDGE) el.dataset.dir = 'down';
      else if (y < last - NUDGE) el.dataset.dir = 'up';
      else return; // too small to count as a direction; keep measuring
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(stop);
      window.clearTimeout(rest);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fz-trv">
      <div ref={turn} className="fz-trv-turn" data-rest="true">
        <div className="fz-trv-sway">
          <div className="fz-smoke">
            {PUFFS.map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <MiniRocket width="100%" rotate={0} />
        </div>
      </div>
    </div>
  );
}
