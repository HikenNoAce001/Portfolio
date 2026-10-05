import Link from 'next/link';
import type { LineTone, OutLine } from '@/lib/terminal/commands';

const TONE: Record<LineTone, string> = {
  star: 'text-ink',
  soft: 'text-soft',
  dim: 'text-muted',
  faint: 'text-faint',
  violet: 'text-violet',
  blue: 'text-blue',
  cyan: 'text-cyan',
  green: 'text-green',
  red: 'text-red',
};

const line = 'min-h-[1.55em] whitespace-pre-wrap';

// One line of command output. Lines with an href become links.
export function OutputLine({ l }: { l: OutLine }) {
  const cls = `${line} ${TONE[l.tone]} ${l.wide ? 'max-sm:hidden' : ''}`;
  if (!l.href) return <div className={cls}>{l.t}</div>;

  const linkCls = `tm-link ${TONE[l.tone]}`;
  let link;
  if (l.route) {
    link = (
      <Link href={l.href} className={linkCls}>
        {l.t}
      </Link>
    );
  } else if (l.href.startsWith('mailto:')) {
    link = (
      <a href={l.href} className={linkCls}>
        {l.t}
      </a>
    );
  } else {
    const download = l.href.endsWith('.pdf');
    link = (
      <a
        href={l.href}
        className={linkCls}
        {...(download
          ? { download: true }
          : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {l.t}
      </a>
    );
  }
  return (
    <div className={`${line} ${l.wide ? 'max-sm:hidden' : ''}`}>{link}</div>
  );
}
