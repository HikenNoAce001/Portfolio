// The rocket mark used in the site header and the terminal bar.
export default function LogoMark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19c1-3 2.5-5 5-6.5" />
      <path d="M14.5 4.5c3-1 5-.5 5-.5s.5 2-.5 5l-6 6-4.5-4.5 6-6z" />
      <circle cx="15.5" cy="8.5" r="1.4" />
      <path d="M9 11l-3 .5-2 2 3.5 1" />
      <path d="M13 15l-.5 3-2 2-1-3.5" />
    </svg>
  );
}
