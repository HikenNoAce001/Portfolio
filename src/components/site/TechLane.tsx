import type { Lane } from '@/content';

// A full-bleed row of technologies between sections. Decorative: the same
// information is in the About stack sentence. Drift animation comes later.

// Repeat short lanes so every row is long enough to span wide screens (and,
// later, to loop seamlessly while drifting).
const MIN_WORDS = 28;
export default function TechLane({ lane }: { lane: Lane }) {
  const copies = Math.max(2, Math.ceil(MIN_WORDS / lane.items.length));
  const words = Array.from({ length: copies }, () => lane.items).flat();
  return (
    <div
      data-lane={lane.id}
      aria-hidden="true"
      className="overflow-hidden border-y border-dust/15 py-3"
    >
      <p className="whitespace-nowrap px-5 font-display text-sm tracking-wide text-dust md:px-6">
        {words.map((item, i) => (
          <span key={i}>
            {item}
            <span className="px-3 text-dust/50">*</span>
          </span>
        ))}
      </p>
    </div>
  );
}
