import type { Emphasis } from '@/content';

// Renders `text` with each `strong` substring wrapped in a styled <span>.
export default function Emphasized({
  value,
  strongClassName,
}: {
  value: Emphasis;
  strongClassName?: string;
}) {
  const parts: React.ReactNode[] = [];
  let remaining = value.text;

  (value.strong ?? []).forEach((phrase, i) => {
    const at = remaining.indexOf(phrase);
    if (at === -1) return;
    if (at > 0) parts.push(remaining.slice(0, at));
    parts.push(
      <span key={i} className={strongClassName}>
        {phrase}
      </span>,
    );
    remaining = remaining.slice(at + phrase.length);
  });

  if (remaining) parts.push(remaining);
  return <>{parts}</>;
}
