'use client';

import { useEffect, useState } from 'react';

const two = (n: number) => String(n).padStart(2, '0');

// "T+hh:mm:ss" since the page loaded. Re-renders once a second, nothing else.
export default function MissionClock() {
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(
      () => setSecs(Math.floor((Date.now() - start) / 1000)),
      1000,
    );
    return () => clearInterval(id);
  }, []);

  const clock = `${two(Math.floor(secs / 3600))}:${two(Math.floor(secs / 60) % 60)}:${two(secs % 60)}`;
  return <span>T+{clock}</span>;
}
