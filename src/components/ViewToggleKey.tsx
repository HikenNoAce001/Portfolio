'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Backtick flips between the website and the terminal. Ignored while typing
// in a field (the terminal handles its own input) or with a modifier held.
export default function ViewToggleKey({ to }: { to: '/' | '/terminal' }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '`' || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
      )
        return;
      e.preventDefault();
      router.push(to);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router, to]);

  return null;
}
