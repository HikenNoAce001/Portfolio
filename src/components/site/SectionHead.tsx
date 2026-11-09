import { STOPS, altLabel, altShort, type StopId } from '@/lib/hyperjump';

// The numbered header that opens each stop on the journey: a pulsing node on
// the rail, the section number and name, a sweeping line, and the altitude.
// Hyperjump finds it by `data-jump-row` to play the landing pulse.
export default function SectionHead({
  stop,
  filled = false,
}: {
  stop: Exclude<StopId, 'top'>;
  /** The first stop has a solid violet node; the rest are hollow blue. */
  filled?: boolean;
}) {
  return (
    <div
      data-jump-row
      className="relative flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:flex-wrap sm:gap-4 sm:text-[13px]"
    >
      <span
        aria-hidden="true"
        className={`fz-node border-2 ${
          filled
            ? 'border-violet bg-violet text-violet'
            : 'border-blue bg-night text-blue'
        }`}
      />
      <span className="font-bold text-violet">{STOPS[stop].n}</span>
      <span className="text-ink">{STOPS[stop].name}</span>
      <span aria-hidden="true" className="fz-hline" />
      <span className="max-sm:hidden">{altLabel(stop)}</span>
      <span className="sm:hidden">{altShort(stop)}</span>
    </div>
  );
}
