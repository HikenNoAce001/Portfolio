import type { Metadata, Viewport } from 'next';
import '@/styles/terminal.css';
import Terminal from '@/components/terminal/Terminal';

export const metadata: Metadata = {
  title: 'Terminal · Fahim',
  description:
    'Mohammad Zobair Hosain Fahim, software engineer — the terminal edition. Try whoami.',
};

// The prompt bar sits at the bottom, so let the layout shrink with the phone
// keyboard instead of sliding behind it.
export const viewport: Viewport = {
  themeColor: '#0b0c17',
  interactiveWidget: 'resizes-content',
};

export default function TerminalPage() {
  return <Terminal />;
}
