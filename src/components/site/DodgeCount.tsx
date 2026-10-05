'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

// The HUD counter: one more meteor dodged every 1.5s, in step with the
// astronaut's jump loop (space.css .fz-jump).
export default function DodgeCount() {
  const [score, setScore] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const start = Date.now();
    const id = setInterval(() => {
      const el = (Date.now() - start) / 1000;
      const next = el < 1.375 ? 0 : Math.floor((el - 1.375) / 1.5) + 1;
      setScore((prev) => (prev === next ? prev : next));
    }, 100);
    return () => clearInterval(id);
  }, [reduced]);

  return <>DODGED {String(score % 1000).padStart(3, '0')}</>;
}
