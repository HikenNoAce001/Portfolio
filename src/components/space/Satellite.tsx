// Original art: the satellite that flies across the hero.
export default function Satellite({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`fz-sat ${className ?? ''}`}
      viewBox="0 0 60 28"
      style={{ width: '60px', height: '28px' }}
    >
      <rect
        x="0"
        y="9"
        width="20"
        height="10"
        fill="#1f2a55"
        stroke="#7aa2f7"
        strokeWidth="1"
      />
      <rect
        x="40"
        y="9"
        width="20"
        height="10"
        fill="#1f2a55"
        stroke="#7aa2f7"
        strokeWidth="1"
      />
      <path
        d="M5 9 V19 M10 9 V19 M15 9 V19 M45 9 V19 M50 9 V19 M55 9 V19"
        stroke="#7aa2f7"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
      <path
        d="M20 14 L23 14 M37 14 L40 14 M30 7 L30 2"
        stroke="#a9b1d6"
        strokeWidth="1.5"
      />
      <rect x="23" y="7" width="14" height="14" rx="3" fill="#a9b1d6" />
      <circle className="fz-blink" cx="30" cy="2" r="1.8" fill="#f7768e" />
    </svg>
  );
}
