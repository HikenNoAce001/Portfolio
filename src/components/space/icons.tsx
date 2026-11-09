// Small stroke icons used across the site and terminal. All decorative.
type IconProps = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  viewBox: '0 0 24 24',
  width: size,
  height: size,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true as const,
  focusable: false as const,
});

export function ArrowRightIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M12 4v11" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MailIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

// GitHub and LinkedIn marks in the same stroke style, from Lucide 0.468
// (ISC licence), before Lucide dropped its brand icons.
export function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WindowIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  );
}

export function PromptIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M5 8l4 4-4 4" />
      <path d="M12 17h7" />
    </svg>
  );
}

export function RelaunchIcon({ size = 13, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2.2">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

export function PowerIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2.2">
      <path d="M12 3v8" />
      <path d="M6.4 6.4a8 8 0 1 0 11.2 0" />
    </svg>
  );
}

export function ClockIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CloseIcon({ size = 12, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2.6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function FolderIcon({ size = 15, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth="2">
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
    </svg>
  );
}
