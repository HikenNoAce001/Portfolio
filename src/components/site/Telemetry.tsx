'use client';

import { useEffect, useState } from 'react';
import type { Telemetry as TelemetryItem } from '@/content';
import { useReducedMotion } from '@/lib/useReducedMotion';

const DURATION = 1600;

// Four Lentho.com numbers that count up on load. The server renders the final
// values, so the page reads correctly without JavaScript or with reduced
// motion.
export default function Telemetry({ items }: { items: TelemetryItem[] }) {
  const reduced = useReducedMotion();
  const [p, setP] = useState(1);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setP(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const eased = 1 - Math.pow(1 - p, 3);

  return (
    <>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-0.5 sm:gap-1">
          <span
            className={`font-display text-[22px] font-semibold sm:text-[26px] ${
              item.accent ? 'text-cyan' : 'text-ink'
            }`}
          >
            {item.prefix}
            {Math.round(item.value * eased).toLocaleString('en-US')}
            {item.suffix}
          </span>
          <span className="text-[13px] leading-[1.35] text-muted sm:text-sm">
            {item.labelShort ? (
              <>
                <span className="max-sm:hidden">{item.label}</span>
                <span className="sm:hidden">{item.labelShort}</span>
              </>
            ) : (
              item.label
            )}
          </span>
        </div>
      ))}
    </>
  );
}
