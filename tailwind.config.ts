import type { Config } from 'tailwindcss';

// Tokens are space-separated RGB channels in globals.css so Tailwind opacity
// modifiers work: bg-panel/80, border-line/50.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Tokyo Night surfaces
        night: token('night'), // page background
        deep: token('deep'), // card interiors
        panel: token('panel'), // raised surfaces
        raised: token('raised'), // asteroid chips, inputs
        // hairlines
        line: token('line'),
        'line-strong': token('line-strong'),
        'line-bright': token('line-bright'),
        // text
        ink: token('ink'), // primary
        soft: token('soft'), // body
        muted: token('muted'), // secondary
        faint: token('faint'), // labels
        // accents
        blue: token('blue'), // actions
        violet: token('violet'), // display + highlights
        cyan: token('cyan'), // telemetry
        green: token('green'), // status only
        red: token('red'),
        teal: token('teal'),
        amber: token('amber'),
        // violet pill borders and text (backend chips)
        'violet-dim': '#44386b',
        'violet-soft': '#cdb5fa',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
        body: ['var(--font-body)', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SF Mono',
          'Menlo',
          'monospace',
        ],
      },
      screens: {
        // The design switches layout at 720px (scene scales to 0.56 below).
        sm: '720px',
      },
    },
  },
  plugins: [],
};
export default config;
