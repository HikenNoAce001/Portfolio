// Original art: a chibi rider astride a retro rocket. Everything is inline SVG
// so colours come from CSS variables (see :root in globals.css). Named groups
// (rider-head, rider-eyes, rider-arm-wave, rocket-flame) are animation hooks.

const INK = '#1b1e4b';

export default function RocketRider({
  className,
  waving = false,
}: {
  className?: string;
  /** Raise the free arm (used for the landed pose on the planet). */
  waving?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 240 160"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Flame, scaled from the nozzle at (50,104) */}
      <g className="rocket-flame" style={{ transformOrigin: '50px 104px' }}>
        <path
          d="M50 104C34 92 14 94 2 104C14 114 34 116 50 104Z"
          fill="rgb(var(--flame))"
          opacity=".4"
        />
        <path
          d="M50 104C38 96 24 97 12 104C24 111 38 112 50 104Z"
          fill="rgb(var(--flame))"
        />
        <path
          d="M50 104C42 99 33 100 26 104C33 108 42 109 50 104Z"
          fill="rgb(var(--ember))"
        />
      </g>

      {/* Back fins */}
      <path d="M64 88L48 66L90 84Z" fill="rgb(var(--flame))" />
      <path d="M64 120L46 144L96 126Z" fill="rgb(var(--flame))" />

      {/* Body, nose cone, porthole, 0x decal */}
      <path
        d="M48 104C48 88 76 82 112 82L168 84C196 88 212 98 220 104C212 110 196 120 168 124L112 126C76 126 48 120 48 104Z"
        fill="rgb(var(--starlight))"
      />
      <path
        d="M174 85C196 89 212 98 220 104C212 110 196 119 174 123C182 112 182 96 174 85Z"
        fill="rgb(var(--flame))"
      />
      <circle
        cx="160"
        cy="104"
        r="10"
        fill="rgb(var(--orbit))"
        stroke="rgb(var(--dust))"
        strokeWidth="3"
      />
      <path
        d="M155 100A6 6 0 0 1 161 97"
        fill="none"
        stroke="rgb(var(--comet))"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".8"
      >
        <ellipse cx="86" cy="108" rx="5" ry="7" />
        <path d="M98 103l10 10M108 103l-10 10" />
      </g>

      {/* Handlebar */}
      <path
        d="M170 88L172 72M164 72H184"
        stroke="rgb(var(--dust))"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rider: leg and sneaker */}
      <g strokeLinecap="round" fill="none">
        <path d="M106 86L130 92" stroke="#2b3070" strokeWidth="12" />
        <path d="M130 92L133 110" stroke="#2b3070" strokeWidth="11" />
      </g>
      <ellipse cx="136" cy="113" rx="10" ry="5.5" fill="rgb(var(--dust))" />
      <path
        d="M126 116H146"
        stroke="rgb(var(--flame))"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Torso with >_ print */}
      <path
        d="M95 88C93 68 98 54 110 52C123 54 127 68 125 88Z"
        fill="var(--rider-hoodie)"
      />
      <g
        fill="none"
        stroke={INK}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".75"
      >
        <path d="M104 72l5 4-5 4" />
        <path d="M112 81h7" />
      </g>

      {/* Free arm: rests on the knee, or waves when `waving` */}
      <g
        className="rider-arm-wave"
        style={{
          transformOrigin: '104px 60px',
          transform: waving ? 'rotate(172deg)' : undefined,
        }}
      >
        <path
          d="M104 61Q99 76 118 88"
          stroke="var(--rider-hoodie)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="118" cy="88" r="4.6" fill="var(--rider-skin)" />
      </g>

      {/* Arm on the handlebar */}
      <path
        d="M116 60Q146 60 171 72"
        stroke="var(--rider-hoodie)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="172" cy="72" r="4.8" fill="var(--rider-skin)" />

      {/* Head */}
      <g className="rider-head">
        <circle cx="94" cy="34" r="3.6" fill="var(--rider-skin)" />
        <circle cx="113" cy="32" r="20" fill="var(--rider-skin)" />
        <path
          d="M92 30C90 12 106 5 121 8C133 11 136 23 134 32C129 23 120 19 109 20C100 21 95 25 92 30Z"
          fill="var(--rider-hair)"
        />
        <path
          d="M111 10C108 1 117 -1 120 5C116 4 114 8 117 12Z"
          fill="var(--rider-hair)"
        />
        <ellipse
          cx="105"
          cy="42"
          rx="3"
          ry="2.2"
          fill="rgb(var(--flame))"
          opacity=".45"
        />
        <ellipse
          cx="128"
          cy="42"
          rx="3"
          ry="2.2"
          fill="rgb(var(--flame))"
          opacity=".45"
        />
        <path
          d="M113 42Q117 46 122 42"
          stroke={INK}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <g className="rider-eyes" style={{ transformOrigin: '118px 34px' }}>
          <circle cx="107" cy="34" r="2.1" fill={INK} />
          <circle cx="126" cy="34" r="2.1" fill={INK} />
        </g>
        {/* Big round glasses */}
        <g
          fill="rgb(var(--starlight))"
          fillOpacity=".18"
          stroke="var(--rider-glasses)"
          strokeWidth="2.4"
        >
          <circle cx="107" cy="34" r="7.2" />
          <circle cx="126" cy="34" r="7.2" />
        </g>
        <path
          d="M114 33.5H119"
          stroke="var(--rider-glasses)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
