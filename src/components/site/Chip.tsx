import type { Tone } from '@/content';

// A pill. `scan` chips (the About loadout) also sweep a faint highlight.
export default function Chip({
  children,
  tone = 'plain',
  bright = false,
  delay,
  small = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  /** Plain chips use the body text colour instead of the muted one. */
  bright?: boolean;
  /** Seconds. When set the chip joins the scan sweep. */
  delay?: number;
  small?: boolean;
}) {
  const colour =
    tone === 'violet'
      ? 'border-violet-dim text-violet-soft'
      : `border-line-strong ${bright ? 'text-soft' : 'text-muted'}`;
  return (
    <span
      className={`rounded-full border font-mono ${colour} ${
        small
          ? 'px-[9px] py-1 text-[11px] sm:px-2.5 sm:py-[5px] sm:text-xs'
          : 'px-2.5 py-[5px] text-xs'
      } ${delay === undefined ? '' : 'fz-scan'}`}
      style={delay === undefined ? undefined : { animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}
