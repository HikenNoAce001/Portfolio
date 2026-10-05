// Original art: the small rocket on approach in the contact section.
export default function MiniRocket() {
  return (
    <svg
      viewBox="-30 0 350 140"
      style={{
        width: '170px',
        height: '68px',
        transform: 'rotate(28deg)',
        overflow: 'visible',
      }}
    >
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
      <path
        d="M72 46 L230 46 C266 46 294 58 312 70 C294 82 266 94 230 94 L72 94 C65 94 60 89 60 82 L60 58 C60 51 65 46 72 46 Z"
        fill="#dfe3ff"
      />
      <path
        d="M252 47.6 C280 51 299 61 312 70 C299 79 280 89 252 92.4 Z"
        fill="#bb9af7"
      />
      <circle
        cx="210"
        cy="70"
        r="13"
        fill="#16161e"
        stroke="#9099c4"
        strokeWidth="4"
      />
    </svg>
  );
}
