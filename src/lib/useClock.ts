'use client';

import { useSyncExternalStore } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

// Minute resolution keeps the snapshot stable between ticks.
const getSnapshot = () => Math.floor(Date.now() / 60_000);
// The server has no idea what time zone the visitor is in.
const getServerSnapshot = () => null;

const two = (n: number) => String(n).padStart(2, '0');

export interface Clock {
  /** "Mon 05 Oct  14:32" */
  long: string;
  /** "14:32" */
  short: string;
}

// Local wall-clock time for the status bar. Null until mounted so server and
// client markup agree.
export function useClock(): Clock | null {
  const minute = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  if (minute === null) return null;
  const d = new Date(minute * 60_000);
  const short = `${two(d.getHours())}:${two(d.getMinutes())}`;
  return {
    short,
    long: `${DAYS[d.getDay()]} ${two(d.getDate())} ${MONTHS[d.getMonth()]}  ${short}`,
  };
}
