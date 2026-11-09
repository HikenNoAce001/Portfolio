'use client';

import { useEffect } from 'react';

// Marks each section that is off screen with .fz-off, which pauses its CSS
// loops (space.css). The hero alone runs dozens of them, and a phone has
// better uses for its frames while you read the rest of the page.
export default function OffscreenPause() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fz main section[id]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle('fz-off', !e.isIntersecting);
        }
      },
      // resume a little early, so nothing is seen starting up
      { rootMargin: '200px 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      io.disconnect();
      sections.forEach((s) => s.classList.remove('fz-off'));
    };
  }, []);
  return null;
}
