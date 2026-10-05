import PatchGlyph from '@/components/art/PatchGlyph';
import type { Project } from '@/content';

// Approximate advance width of Unbounded per character, in em, including the
// letter spacing used below. Used to shrink long names so they fit their arc.
const EM_PER_CHAR = 0.79;
const NAME_ARC = 160; // usable length of the 240° name arc (r = 41)
const LABEL_ARC = 80; // usable length of the 100° label arc (r = 49)

const fit = (text: string, arc: number, max: number) =>
  Math.min(max, arc / (text.length * EM_PER_CHAR));

// A patch generated from project content: the name on a circular text path
// over the top, a short ring label along the bottom, a small star, and a glyph
// in the centre. Decorative only; the project name is also in the heading.
export default function MissionPatch({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const ring = index % 2 === 0 ? 'rgb(var(--flame))' : 'rgb(var(--comet))';
  const name = project.name.toLowerCase();
  const label = project.patch.ring;
  const top = `patch-top-${project.slug}`;
  const bottom = `patch-bottom-${project.slug}`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* 240° arc over the top, from 30° below horizontal on each side */}
        <path id={top} d="M24.49 80.5A41 41 0 1 1 95.51 80.5" />
        {/* 100° arc under the bottom, read left to right */}
        <path id={bottom} d="M22.46 91.5A49 49 0 0 0 97.54 91.5" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="rgb(var(--abyss))" />
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke={ring}
        strokeWidth="3"
      />
      <circle cx="60" cy="60" r="31" fill="rgb(var(--orbit))" />
      <circle
        cx="60"
        cy="60"
        r="31"
        fill="none"
        stroke={ring}
        strokeOpacity=".6"
      />
      <text
        fill="rgb(var(--starlight))"
        fontFamily="var(--font-display)"
        fontSize={fit(name, NAME_ARC, 9)}
        fontWeight="600"
        letterSpacing=".04em"
      >
        <textPath href={`#${top}`} startOffset="50%" textAnchor="middle">
          {name}
        </textPath>
      </text>
      <text
        fill="rgb(var(--dust))"
        fontFamily="var(--font-display)"
        fontSize={fit(label, LABEL_ARC, 7)}
        letterSpacing=".06em"
      >
        <textPath href={`#${bottom}`} startOffset="50%" textAnchor="middle">
          {label}
        </textPath>
      </text>
      {/* A small star cut into the top of the ring */}
      <circle cx="60" cy="6" r="4.5" fill="rgb(var(--abyss))" />
      <path
        d="M60 1.5l1.2 3.3 3.3 1.2-3.3 1.2L60 10.5l-1.2-3.3-3.3-1.2 3.3-1.2Z"
        fill="rgb(var(--ember))"
      />
      <g transform="translate(42 42) scale(.75)">
        <PatchGlyph glyph={project.patch.glyph} />
      </g>
    </svg>
  );
}
