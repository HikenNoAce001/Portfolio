import type { Metadata, Viewport } from 'next';
import '@/styles/terminal.css';
import PhoneNotice from '@/components/terminal/PhoneNotice';
import Terminal from '@/components/terminal/Terminal';
import { pageMeta } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  path: '/terminal',
  title: 'Terminal · Fahim',
  description:
    'Mohammad Zobair Hosain Fahim, software engineer: the terminal edition. Try whoami.',
});

// The prompt bar sits at the bottom, so let the layout shrink with the phone
// keyboard instead of sliding behind it.
export const viewport: Viewport = {
  themeColor: '#0b0c17',
  interactiveWidget: 'resizes-content',
};

// The terminal is built around a keyboard, so it's for 720px and up. Phones
// get an astronaut's transmission pointing back to the website. Both render
// on the server; CSS picks one, so there's no flash or layout jump.
export default function TerminalPage() {
  return (
    <>
      <div className="max-sm:hidden">
        <Terminal />
      </div>
      <PhoneNotice />
    </>
  );
}
