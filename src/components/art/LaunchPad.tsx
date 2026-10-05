// Original art: a small launch pad the rocket idles above in the hero.
export default function LaunchPad({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 56"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M70 20L58 52M250 20L262 52"
        stroke="rgb(var(--dust) / .5)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x="14"
        y="8"
        width="292"
        height="14"
        rx="7"
        fill="rgb(var(--orbit))"
        stroke="rgb(var(--dust) / .4)"
      />
      <g fill="rgb(var(--flame))">
        <circle cx="46" cy="15" r="2.6" />
        <circle cx="274" cy="15" r="2.6" />
      </g>
      <g fill="rgb(var(--dust) / .5)">
        <circle cx="90" cy="15" r="1.6" />
        <circle cx="130" cy="15" r="1.6" />
        <circle cx="190" cy="15" r="1.6" />
        <circle cx="230" cy="15" r="1.6" />
      </g>
    </svg>
  );
}
