// Original art: the station drifting past the flight log.
export default function SpaceStation({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`fz-station ${className ?? ''}`}
      viewBox="0 0 170 70"
      style={{ width: '170px', height: '70px' }}
    >
      <rect
        x="0"
        y="22"
        width="44"
        height="26"
        fill="#1f2a55"
        stroke="#7aa2f7"
        strokeWidth="1"
      />
      <rect
        x="126"
        y="22"
        width="44"
        height="26"
        fill="#1f2a55"
        stroke="#7aa2f7"
        strokeWidth="1"
      />
      <path
        d="M11 22 V48 M22 22 V48 M33 22 V48 M137 22 V48 M148 22 V48 M159 22 V48"
        stroke="#7aa2f7"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path d="M44 35 H126" stroke="#a9b1d6" strokeWidth="2" />
      <rect x="62" y="26" width="46" height="18" rx="6" fill="#a9b1d6" />
      <rect x="74" y="14" width="22" height="42" rx="5" fill="#c0caf5" />
      <circle cx="85" cy="35" r="4" fill="#16161e" />
      <circle className="fz-blink" cx="85" cy="12" r="2" fill="#9ece6a" />
    </svg>
  );
}
