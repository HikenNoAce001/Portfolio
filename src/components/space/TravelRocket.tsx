'use client';

import { useEffect, useRef } from 'react';
import MiniRocket from './MiniRocket';

const PUFFS = Array.from({ length: 7 });
/** Scroll this far the other way before the rocket turns around. */
const NUDGE = 8;

// The rocket that keeps you company on the way: a see-through rocket with a
// smoke trail, fixed mid-screen. CSS moves it with the page's scroll position
// (space.css, .fz-trv); this component only tells it which way the page is
// going, so it flies nose-down on the way down and nose-up on the way back.
// Decorative.
export default function TravelRocket() {
  const turn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = turn.current;
    if (!el) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > last + NUDGE) el.dataset.dir = 'down';
      else if (y < last - NUDGE) el.dataset.dir = 'up';
      else return; // too small to count as a direction; keep measuring
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="fz-trv">
      <div ref={turn} className="fz-trv-turn">
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
