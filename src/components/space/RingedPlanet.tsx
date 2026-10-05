// Original art: the ringed planet in the hero (the moon is CSS).
export default function RingedPlanet() {
  return (
    <svg
      viewBox="0 0 120 80"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '120px',
        height: '80px',
      }}
    >
      <ellipse
        cx="60"
        cy="40"
        rx="54"
        ry="11"
        fill="none"
        stroke="#bb9af7"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <circle cx="60" cy="40" r="23" fill="#24283b" />
      <path
        d="M40 33 C52 29 68 29 80 33"
        fill="none"
        stroke="#3b4261"
        strokeWidth="5"
      />
      <path
        d="M38 45 C52 49 68 49 82 45"
        fill="none"
        stroke="#3b4261"
        strokeWidth="4"
      />
      <path
        d="M6 40 C22 55 98 55 114 40"
        fill="none"
        stroke="#bb9af7"
        strokeWidth="2"
      />
    </svg>
  );
}
