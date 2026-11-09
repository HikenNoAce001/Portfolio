// Original art: the ion-drive rocket. The plume, flame and nav lights are
// animated from space.css.
export default function HeroRocket() {
  return (
    <svg
      className="fz-wobble"
      viewBox="-30 0 350 140"
      style={{
        position: 'absolute',
        left: '49px',
        top: '190px',
        width: '481px',
        height: '193px',
        overflow: 'visible',
      }}
    >
      <defs>
        <filter id="fzGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g className="fz-plume-glow">
        <path
          d="M58 70 C36 44 6 50 -26 70 C6 90 36 96 58 70 Z"
          fill="#bb9af7"
          filter="url(#fzGlow)"
        />
      </g>
      <g className="fz-flame">
        <path
          d="M58 70 C38 50 10 54 -18 70 C10 86 38 90 58 70 Z"
          fill="#bb9af7"
          fillOpacity="0.85"
        />
        <path
          d="M58 70 C42 57 22 59 0 70 C22 81 42 83 58 70 Z"
          fill="#7dcfff"
        />
        <path
          d="M58 70 C48 64 36 65 24 70 C36 75 48 76 58 70 Z"
          fill="#f0f6ff"
        />
      </g>
      <path d="M86 46 L60 12 C58 9 61 7 64 8 L128 46 Z" fill="#7aa2f7" />
      <path d="M86 94 L60 128 C58 131 61 133 64 132 L128 94 Z" fill="#3d59a1" />
      <circle className="fz-blink" cx="62" cy="11" r="2.6" fill="#f7768e" />
      <circle className="fz-blink2" cx="62" cy="129" r="2.6" fill="#9ece6a" />
      <rect x="50" y="56" width="14" height="28" rx="3" fill="#565f89" />
      <path
        d="M72 46 L230 46 C266 46 294 58 312 70 C294 82 266 94 230 94 L72 94 C65 94 60 89 60 82 L60 58 C60 51 65 46 72 46 Z"
        fill="#dfe3ff"
      />
      <path d="M72 88 L236 88" stroke="#a9b1d6" strokeWidth="2" />
      <path
        d="M252 47.6 C280 51 299 61 312 70 C299 79 280 89 252 92.4 Z"
        fill="#bb9af7"
      />
      <rect x="100" y="46" width="12" height="48" fill="#7aa2f7" />
      <path d="M170 47 L170 93" stroke="#a9b1d6" strokeWidth="1.5" />
      <circle
        cx="210"
        cy="70"
        r="13"
        fill="#16161e"
        stroke="#9099c4"
        strokeWidth="4"
      />
      <circle cx="205" cy="65" r="3" fill="#e6ebff" fillOpacity="0.85" />
      <text
        x="124"
        y="74"
        fontFamily="JetBrains Mono, monospace"
        fontSize="11"
        fontWeight="700"
        fill="#16161e"
      >
        FZ-01
      </text>
    </svg>
  );
}
