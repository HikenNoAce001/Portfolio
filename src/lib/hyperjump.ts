// Hyperjump: the nav-click transition between journey stops. Everything here
// is pure (no DOM, no imports) so it can be unit-tested with `node --test`.

export type StopId = 'top' | 'about' | 'log' | 'missions' | 'contact';

export interface Stop {
  n: string; // "02"
  name: string; // "Flight log"
  km: number; // altitude shown in the HUD and the section header
  note: string; // "Low Earth orbit"
  /** Prefix the header's altitude with "Alt". Contact reads "384,400 km · …". */
  alt: boolean;
}

export const STOPS: Record<StopId, Stop> = {
  top: { n: '00', name: 'Launch pad', km: 0, note: 'Launch pad', alt: false },
  about: { n: '01', name: 'About', km: 100, note: 'Kármán line', alt: true },
  log: {
    n: '02',
    name: 'Flight log',
    km: 408,
    note: 'Low Earth orbit',
    alt: true,
  },
  missions: {
    n: '03',
    name: 'Missions',
    km: 35786,
    note: 'Geostationary',
    alt: true,
  },
  contact: {
    n: '04',
    name: 'Contact',
    km: 384400,
    note: 'Next destination',
    alt: false,
  },
};

export const STOP_ORDER: StopId[] = [
  'top',
  'about',
  'log',
  'missions',
  'contact',
];

export function isStopId(id: string): id is StopId {
  return Object.prototype.hasOwnProperty.call(STOPS, id);
}

/** Fixed jump length in ms, whatever the distance. */
export const JUMP_MS = 900;
/** The label row lands this far below the top of the viewport. */
export const LAND_OFFSET = 24;
/** Shorter jumps skip the overlay and only pulse the label row. */
export const MIN_JUMP_PX = 40;

export function formatKm(km: number): string {
  return Math.round(km).toLocaleString('en-US');
}

/** "Alt 408 km · Low Earth orbit" */
export function altLabel(id: StopId): string {
  const s = STOPS[id];
  return `${s.alt ? 'Alt ' : ''}${formatKm(s.km)} km · ${s.note}`;
}

/** "408 km" */
export function altShort(id: StopId): string {
  return `${formatKm(STOPS[id].km)} km`;
}

/** "02 Flight log" */
export function stopLabel(id: StopId): string {
  return `${STOPS[id].n} ${STOPS[id].name}`;
}

export function easeInOutCubic(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function jumpDirection(fromY: number, toY: number): 'down' | 'up' {
  return toY >= fromY ? 'down' : 'up';
}

/** The HUD altitude at eased progress `p` (counts down when jumping up). */
export function kmAt(fromKm: number, toKm: number, p: number): number {
  return fromKm + (toKm - fromKm) * p;
}

/** Scroll position that puts an element `top` px from the viewport top at
 * `LAND_OFFSET`, clamped to what the page can actually scroll to. */
export function targetY(
  scrollY: number,
  rectTop: number,
  maxScroll: number,
): number {
  return Math.min(Math.max(0, scrollY + rectTop - LAND_OFFSET), maxScroll);
}

/** Which stop the reader is at: the last one whose label row has reached
 * the upper third of the viewport. `rowTops` is in STOP_ORDER, viewport px. */
export function currentStop(
  rowTops: (number | null)[],
  viewportH: number,
): StopId {
  let at: StopId = 'top';
  rowTops.forEach((top, i) => {
    if (top !== null && top <= viewportH / 3) at = STOP_ORDER[i];
  });
  return at;
}

export interface Trail {
  left: string;
  height: number;
  width: number;
  color: string;
  delay: string;
}

/** The star-trails, laid out deterministically (phones show the first 18). */
export function trails(count = 28): Trail[] {
  return Array.from({ length: count }, (_, j) => ({
    left: `${((j * 29 + 7) % 97) + 1}%`,
    height: 90 + ((j * 53) % 170),
    width: j % 4 === 0 ? 2.5 : 1.5,
    color: j % 5 === 0 ? '#7dcfff' : j % 7 === 0 ? '#bb9af7' : '#c0caf5',
    delay: `${(((j * 7) % 10) * 0.018).toFixed(3)}s`,
  }));
}
