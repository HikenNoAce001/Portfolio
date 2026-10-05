import type { PatchGlyph as Glyph } from '@/content';

// Small original glyphs for the mission patches: 2px strokes in a 48x48 box.
const paths: Record<Glyph, React.ReactNode> = {
  bowl: (
    <>
      <path d="M8 24h32a16 16 0 0 1-32 0Z" />
      <path d="M18 38h12" />
      <path d="M18 18c0-3 3-3 3-6M26 18c0-3 3-3 3-6" />
    </>
  ),
  kanban: (
    <>
      <rect x="7" y="9" width="34" height="30" rx="3" />
      <path d="M18.5 9v30M29.5 9v30" />
      <path d="M10 15h5M10 20h5M21.5 15h5M32.5 15h5M32.5 20h5M32.5 25h5" />
    </>
  ),
  crate: (
    <>
      <path d="M24 7l16 8v18l-16 8-16-8V15Z" />
      <path d="M8 15l16 8 16-8M24 23v18" />
    </>
  ),
  capsule: (
    <>
      <rect
        x="6"
        y="17"
        width="36"
        height="14"
        rx="7"
        transform="rotate(-35 24 24)"
      />
      <path d="M20 18l8 12" />
    </>
  ),
  rocket: (
    <>
      <path d="M24 6c7 6 9 15 6 26H18C15 21 17 12 24 6Z" />
      <circle cx="24" cy="18" r="3" />
      <path d="M18 26l-6 8h7M30 26l6 8h-7M21 36l3 6 3-6" />
    </>
  ),
  leaf: (
    <>
      <path d="M10 38C10 20 22 10 40 9c0 18-10 29-28 29Z" />
      <path d="M10 38L30 18" />
    </>
  ),
};

export default function PatchGlyph({ glyph }: { glyph: Glyph }) {
  return (
    <g
      fill="none"
      stroke="rgb(var(--starlight))"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[glyph]}
    </g>
  );
}
