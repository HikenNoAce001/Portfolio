// Original art: the EVA-suit astronaut at a laptop. The visor shows a code
// prompt; the jetpack thrusters, typing lines and wave are animated from
// space.css.
export default function Astronaut() {
  return (
    <svg
      viewBox="0 0 120 150"
      style={{ width: '100px', height: '125px', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="fzVisor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2f6b" />
          <stop offset="1" stopColor="#11121d" />
        </linearGradient>
      </defs>
      <rect x="24" y="66" width="72" height="50" rx="12" fill="#a9b1d6" />
      <rect x="25" y="112" width="14" height="9" rx="3" fill="#565f89" />
      <rect x="81" y="112" width="14" height="9" rx="3" fill="#565f89" />
      <g className="fz-thrust">
        <path d="M26 121 Q32 144 38 121 Z" fill="#7dcfff" />
        <path d="M29 121 Q32 134 35 121 Z" fill="#f0f6ff" />
        <path d="M82 121 Q88 144 94 121 Z" fill="#7dcfff" />
        <path d="M85 121 Q88 134 91 121 Z" fill="#f0f6ff" />
      </g>
      <rect x="42" y="110" width="15" height="24" rx="6" fill="#dfe3ff" />
      <rect x="63" y="110" width="15" height="24" rx="6" fill="#dfe3ff" />
      <path d="M44 122 H55 M65 122 H76" stroke="#a9b1d6" strokeWidth="2" />
      <rect x="38" y="130" width="22" height="13" rx="6" fill="#c0caf5" />
      <rect x="60" y="130" width="22" height="13" rx="6" fill="#c0caf5" />
      <rect x="38" y="140" width="22" height="5" rx="2.5" fill="#bb9af7" />
      <rect x="60" y="140" width="22" height="5" rx="2.5" fill="#bb9af7" />
      <rect x="32" y="72" width="56" height="46" rx="18" fill="#dfe3ff" />
      <path
        d="M74 76 C84 80 88 92 86 110 C84 116 78 118 72 118 C80 108 80 88 74 76 Z"
        fill="#c0caf5"
      />
      <circle
        cx="60"
        cy="80"
        r="4.5"
        fill="#bb9af7"
        stroke="#dfe3ff"
        strokeWidth="1.2"
      />
      <path
        d="M60 77.6 L60.8 79.4 L62.6 79.6 L61.2 80.8 L61.7 82.6 L60 81.6 L58.3 82.6 L58.8 80.8 L57.4 79.6 L59.2 79.4 Z"
        fill="#16161e"
      />
      <path
        d="M47 99 C38 103 34 96 32 90"
        fill="none"
        stroke="#7aa2f7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="46" y="86" width="28" height="19" rx="4" fill="#16161e" />
      <rect x="49" y="89" width="15" height="10" rx="2" fill="#1f2335" />
      <text
        x="56.5"
        y="96.5"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fontWeight="700"
        fill="#7dcfff"
      >
        {'<'}/{'>'}
      </text>
      <circle className="fz-blink" cx="69" cy="91" r="2" fill="#f7768e" />
      <circle className="fz-blink2" cx="69" cy="98" r="2" fill="#9ece6a" />
      <rect x="49" y="101" width="15" height="2" rx="1" fill="#3b4261" />
      <path
        d="M38 86 C28 92 25 100 29 107"
        fill="none"
        stroke="#dfe3ff"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="93"
        width="28"
        height="18"
        rx="2.5"
        fill="#16161e"
        stroke="#565f89"
        strokeWidth="1.5"
      />
      <rect x="13" y="96" width="22" height="12" rx="1" fill="#1f2335" />
      <path
        className="fz-type"
        d="M15 99 H27"
        stroke="#bb9af7"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        className="fz-type"
        d="M15 102 H32"
        stroke="#7dcfff"
        strokeWidth="1.4"
        strokeLinecap="round"
        style={{ animationDelay: '.8s' }}
      />
      <path
        className="fz-type"
        d="M15 105 H24"
        stroke="#9ece6a"
        strokeWidth="1.4"
        strokeLinecap="round"
        style={{ animationDelay: '1.6s' }}
      />
      <path d="M8 111 H40 L37 115 H11 Z" fill="#565f89" />
      <circle cx="31" cy="109" r="6.5" fill="#c0caf5" />
      <g className="fz-wave">
        <path
          d="M84 86 C94 80 98 72 98 63"
          fill="none"
          stroke="#dfe3ff"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <circle cx="98" cy="61" r="7" fill="#c0caf5" />
      </g>
      <rect x="38" y="64" width="44" height="11" rx="5.5" fill="#a9b1d6" />
      <circle
        cx="26"
        cy="40"
        r="7"
        fill="#c0caf5"
        stroke="#a9b1d6"
        strokeWidth="2"
      />
      <circle
        cx="94"
        cy="40"
        r="7"
        fill="#c0caf5"
        stroke="#a9b1d6"
        strokeWidth="2"
      />
      <path
        d="M96 34 L104 14"
        stroke="#a9b1d6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle className="fz-ant" cx="104.5" cy="13" r="3.2" fill="#7dcfff" />
      <circle cx="60" cy="38" r="34" fill="#dfe3ff" />
      <path
        d="M86 18 C96 30 96 50 86 62"
        fill="none"
        stroke="#c0caf5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect x="52" y="3" width="16" height="7" rx="3" fill="#c0caf5" />
      <circle cx="60" cy="6.5" r="2.2" fill="#e6f4ff" />
      <ellipse cx="60" cy="42" rx="19" ry="16" fill="#C68A5E" />
      <path
        d="M41 38 C41 27 50 22 60 23 C70 22 79 28 79 37 C74 33 68 34 63 31 C59 35 50 34 45 34 C43 35 42 36 41 38 Z"
        fill="#15121f"
      />
      <path
        d="M42 42 C42 54 50 61 60 61 C70 61 78 54 78 42 C76 49 72 52 67 52 C64 50 56 50 53 52 C48 52 44 49 42 42 Z"
        fill="#15121f"
      />
      <path
        d="M56 54.5 Q60 56.5 64 54.5"
        fill="none"
        stroke="#d9967a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="46"
        y="39"
        width="11"
        height="8"
        rx="2"
        fill="#e6ebff"
        fillOpacity="0.25"
        stroke="#15121f"
        strokeWidth="2"
      />
      <rect
        x="63"
        y="39"
        width="11"
        height="8"
        rx="2"
        fill="#e6ebff"
        fillOpacity="0.25"
        stroke="#15121f"
        strokeWidth="2"
      />
      <path d="M57 42 H63" stroke="#15121f" strokeWidth="2" />
      <circle cx="51.5" cy="43.5" r="1.5" fill="#15121f" />
      <circle cx="68.5" cy="43.5" r="1.5" fill="#15121f" />
      <rect
        x="32"
        y="20"
        width="56"
        height="40"
        rx="20"
        fill="url(#fzVisor)"
        fillOpacity="0.5"
        stroke="#414868"
        strokeWidth="2.5"
      />
      <path
        d="M38 33 C41 26 49 23 57 23"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M80 27 L81 30 L84 31 L81 32 L80 35 L79 32 L76 31 L79 30 Z"
        fill="#ffffff"
        fillOpacity="0.85"
      />
      <text
        x="42"
        y="55"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fontWeight="700"
        fill="#7dcfff"
      >
        {'>'}
      </text>
      <rect
        className="fz-blink"
        x="47"
        y="52"
        width="4"
        height="1.6"
        fill="#7dcfff"
      />
      <path
        d="M85 44 A 22 22 0 0 1 80 54"
        fill="none"
        stroke="#bb9af7"
        strokeOpacity="0.75"
        strokeWidth="1.5"
      />
    </svg>
  );
}
