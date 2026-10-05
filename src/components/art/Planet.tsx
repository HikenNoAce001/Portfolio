// Original art: the destination planet with a tilted ring and a landing pad
// on top. The pad's centre is at x=160, y=62 in the viewBox.
export default function Planet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="planet-shade" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="rgb(var(--orbit))" />
          <stop offset="55%" stopColor="rgb(var(--nebula) / .55)" />
          <stop offset="100%" stopColor="rgb(var(--abyss))" />
        </radialGradient>
        <clipPath id="planet-front">
          <rect x="0" y="176" width="320" height="124" />
        </clipPath>
      </defs>
      <ellipse
        cx="160"
        cy="182"
        rx="150"
        ry="30"
        transform="rotate(-12 160 182)"
        fill="none"
        stroke="rgb(var(--dust) / .35)"
        strokeWidth="3"
      />
      <circle cx="160" cy="182" r="118" fill="url(#planet-shade)" />
      <g fill="rgb(var(--abyss) / .35)">
        <circle cx="118" cy="150" r="14" />
        <circle cx="200" cy="220" r="20" />
        <circle cx="150" cy="248" r="8" />
      </g>
      <ellipse
        cx="160"
        cy="182"
        rx="150"
        ry="30"
        transform="rotate(-12 160 182)"
        fill="none"
        stroke="rgb(var(--dust) / .6)"
        strokeWidth="3"
        clipPath="url(#planet-front)"
      />
      <rect
        x="120"
        y="58"
        width="80"
        height="10"
        rx="5"
        fill="rgb(var(--orbit))"
        stroke="rgb(var(--dust) / .5)"
      />
      <circle cx="130" cy="63" r="2" fill="rgb(var(--flame))" />
      <circle cx="190" cy="63" r="2" fill="rgb(var(--flame))" />
    </svg>
  );
}
